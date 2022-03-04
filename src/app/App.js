import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import Nekuda from './nekuda/Nekuda'

function App() {
    return (
        <div className="app">
            <Nekuda />
        </div>
    )
}

export default function AppContainer() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}