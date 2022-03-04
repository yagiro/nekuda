import { Routes, Route } from 'react-router-dom'

import Klidi from '../klidi/Klidi'
import Home from './home/Home'

export default function Nekuda() {
    return (
        <Routes>
            <Route path="/single" element={ <Klidi /> } />
            <Route path="/" element={ <Home /> } />
        </Routes>
    )
}
