import React, { useState } from 'react'
import PokemonBox from '../../components/PokemonBox'

import { PokemonConsumer } from '../../context/PokemonProvider'

function FavoritePokemons(props)
{
    const [pokemons] = useState(props.state.pokemon)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                <h2 className="text-2xl font-extrabold text-gray-900">Pokemon</h2>
                <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                    {pokemons.map((pokemon) => (
                        <PokemonBox
                            id={pokemon.id}
                            key={pokemon.id}
                            image={pokemon.sprites.other.dream_world.front_default}
                            name={pokemon.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonConsumer(FavoritePokemons)