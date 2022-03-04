import CreateRace from './createRace/CreateRace'
import JoinRace from './joinRace/JoinRace'

import './MultiPlayer.scss'

export default function MultiPlayer() {

    return (
        <div className="multi-player">
            <div className="flex-col spaced-col">
                <CreateRace />
                <JoinRace />
            </div>
        </div>
    )
}
