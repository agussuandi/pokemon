import { useState, useEffect } from 'react'
import { FilterIcon } from '@heroicons/react/solid'
import { useParams, useNavigate } from 'react-router-dom'

import MobileMenu from '../../layouts/MobileMenu'
import DesktopMenu from '../../layouts/DesktopMenu'

import { PokemonConsumer } from '../../context/PokemonProvider'

function PokemonDetail(props)
{
    const URI_API = 'http://localhost:4000/api/v1'
    const { name } = useParams()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [pokemon, setPokemon] = useState({})

    const handleClick = async () => {
        const resPokemon = await fetch(`${URI_API}/pokemon/${name}`)
        const dataPokemon =  await resPokemon.json()
        setPokemon(dataPokemon.data)
        setLoading(false)
    }

    const changeCollapsed = () => setMobileFiltersOpen(!mobileFiltersOpen)

    const catchPokemon = () => {
        fetch(`${URI_API}/pokemon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {},
        })
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                props.dispatch({type: 'addPokemon', pokemon: pokemon})
                alert('Success catch Pokemon')
            }
            else {
                alert('Failed catch Pokemon')
            }
        })
        .catch((error) => {
            console.error('Error:', error.message);
        })
    }

    useEffect(() => {
        handleClick()
    }, [])

    return (
        <div className="bg-white">
            <div>
                <MobileMenu 
                    pokemon={pokemon}
                    loading={loading}
                    mobileFiltersOpen={mobileFiltersOpen}
                    setMobileFiltersOpen={changeCollapsed}
                />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                            {pokemon.name ? pokemon.name : 'Fetching Pokemon..'}
                        </h1>

                        <div className="flex items-center">
                            <button
                                type="button"
                                className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FilterIcon className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pt-6 pb-24">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                            <DesktopMenu
                                pokemon={pokemon}
                                loading={loading}
                            />
                            <div className="lg:col-span-3">
                                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                                    {pokemon.sprites 
                                        ? 
                                            <img 
                                                src={pokemon.sprites.other.dream_world.front_default}
                                                className="w-full h-full object-center"
                                            /> 
                                        : 
                                            ""
                                    }
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => navigate('/')}
                                    >
                                        Back to Home
                                    </button>
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 md:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                                        onClick={() => catchPokemon()}
                                    >
                                        Add to Favorite
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default PokemonConsumer(PokemonDetail)