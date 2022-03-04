import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div>
                Home!
            </div>
            <div>
                <Link to="/single">Single Player</Link>
            </div>
        </div>
    )
}
