import { useParams } from 'react-router-dom'

export default function RacePage(props) {
    const routeParams = useParams()
    return (
        <div>
            <div>
                Race: { routeParams.raceName }
            </div>
        </div>
    )
}
