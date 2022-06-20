import { useNavigate } from 'react-router-dom';

export default function PokemonBox({ id, key, image, name, contextProps, pokemon })
{
    const URI_API  = 'http://localhost:4000/api/v1'
    const navigate = useNavigate()

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
                contextProps.dispatch({type: 'addPokemon', pokemon: pokemon})
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

    return (
        <>
            <div key={key} className="group relative mb-5">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-center"
                        onClick={() => navigate(`/${name}`)}
                    />
                </div>
                <p className="text-base font-semibold text-gray-900">{name} | <span style={{cursor: 'pointer'}} onClick={() => catchPokemon()}>Add to Favorite</span></p>
            </div>
        </>
    )
}