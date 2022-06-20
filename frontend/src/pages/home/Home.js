import React, { useEffect, useState } from 'react'
import PokemonBox from '../../components/PokemonBox'

import { searchQueryString } from '../../helpers/helperApp'
import { PokemonConsumer } from '../../context/PokemonProvider'

function Home(props)
{
    const URI_API = 'http://localhost:4000/api/v1'
    const [pokemons, setPokemons]       = useState([])
    const [loadPokemon, setLoadPokemon] = useState(`${URI_API}/pokemon?limit=21`)

    const getPokemons = async () => {
        const resPokemons = await fetch(loadPokemon)
        const dataPokemon = await resPokemons.json()
        
        const limit  = await searchQueryString('limit', dataPokemon.data.next)
        const offset = await searchQueryString('offset', dataPokemon.data.next)

        setLoadPokemon(`${URI_API}/pokemon?limit=${limit}&offset=${offset || 21}`)
        createPokemonObject(dataPokemon.data.results)
    }

    const createPokemonObject = results => {
        results.forEach( async pokemon => {
            const resPokemons = await fetch(`${URI_API}/pokemon/${pokemon.name}`)
            const dataPokemon = await resPokemons.json()
            setPokemons(currentPokemons => [...currentPokemons, dataPokemon.data])
            pokemons.sort((a, b) => a.id - b.id)
        })
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-gray-900">Pokemon</h2>
                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    {pokemons.map((pokemon, i) => (
                        <div key={i}>
                            <PokemonBox
                                id={pokemon.id}
                                image={pokemon.sprites.other.dream_world.front_default}
                                name={pokemon.name}
                                contextProps={props}
                                pokemon={pokemon}
                            />
                        </div>
                    ))}
                </div>
                <div className="mt-5">
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => getPokemons()}
                    >
                        Load More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PokemonConsumer(Home)