import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="flex-col spaced-col">
            <div>
                Home!
            </div>
            <div className="flex-col spaced-col">
                <Link to="/single">Single Player</Link>
                <Link to="/multi">Multi Player</Link>
            </div>
        </div>
    )
}
