import React, { useState, createContext } from 'react';

const PokemonContext = createContext();

const Provider = PokemonContext.Provider;

const PokemonProvider = (Children, ...props) => {
    return (
        function ParentComp() {
            const [state, setState] = useState({
                pokemon: []
            });
            
            const dispatch = (action) => {
                const _state = {...state}
                if (action.type === 'addPokemon') {
                    _state.pokemon = [...state.pokemon, action.pokemon]
                    return setState(_state)
                }
            }

            return (
                <Provider
                    value={{
                        state: state,
                        dispatch: dispatch
                    }}
                >
                    <Children {...props} />
                </Provider>
            )
        }
    )
}

export default PokemonProvider;

const Consumer = PokemonContext.Consumer;
export const PokemonConsumer = (Children, ...props) => {
    return (
        function ParentConsumer() {
            return (
                <Consumer>
                    {
                        value => {
                            return (
                                <Children {...props} {...value} />
                            )       
                        }
                    }
                </Consumer>
            )
        }
    )
}
