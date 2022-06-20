import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import PokemonDetail from './pages/pokemon/PokemonDetail'
import FavoritePokemons from './pages/favorite/FavoritePokemons'

import PokemonProvider from './context/PokemonProvider'

function App()
{
    return (
        <>
            <Navbar/>
            <div className="bg-gray-100">
                <Routes>
                    <Route path="/" element={<Home />} exact={true} />
                    <Route path="/:name" element={<PokemonDetail />} exact={true} />
                    <Route path="/favorites" element={<FavoritePokemons />} exact={true} />
                </Routes>
            </div>
        </>
    )
}

export default PokemonProvider(App)