import { useState } from 'react'
import { Link } from 'react-router-dom'
import LabeledTextInput from '../../../common/components/textInput/LabeldTextInput'

import './JoinRace.scss'

export default function JoinRace() {

    const [ raceName, setRaceName ] = useState('joinitbitch')

    return (
        <div className="join-race flex-col spaced-col">
            <LabeledTextInput
                label="Name"
                value={ raceName }
                onChange={ e => setRaceName(e.target.value) }
            />
            <Link to={ `/race/${ raceName }` }>Join a Race</Link>
        </div>
    )
}
