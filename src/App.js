import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'
import PokemonDetail from './pages/pokemon/PokemonDetail'

export default function App()
{
    return (
        <div className="bg-gray-100">
            <Routes>
                <Route path="/" element={<Home />} exact={true} />
                <Route path="/:name" element={<PokemonDetail />} exact={true} />
            </Routes>
        </div>
    )
}