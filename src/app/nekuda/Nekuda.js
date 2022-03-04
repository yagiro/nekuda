import { Routes, Route } from 'react-router-dom'

import Home from './home/Home'
import Klidi from '../klidi/Klidi'
import MultiPlayer from './multi/MultiPlayer'
import RacePage from './race/RacePage'

export default function Nekuda() {
    return (
        <Routes>
            <Route path="/single" element={ <Klidi /> } />
            <Route path="/multi" element={ <MultiPlayer /> } />
            <Route path="/race/:raceName" element={ <RacePage /> } />
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
}
