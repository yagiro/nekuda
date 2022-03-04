import { useState } from 'react'
import LabeledTextInput from '../../../common/components/textInput/LabeldTextInput'
import Textarea from '../../../common/components/textarea/Textarea'

import './CreateRace.scss'
import Button from '../../../common/components/button/Button'

export default function CreateRace() {

    const [ name, setName ] = useState('conan')
    const [ text, setText ] = useState('conan selling products by the sea shore')

    const createRace = () => {
        const race = {
            name,
            text,
        }
        // todo: nekudaApi.createRace(race)
    }

    return (
        <div className="create-race flex-col spaced-col">
            <LabeledTextInput
                label="Name"
                value={ name }
                onChange={ e => setName(e.target.value) }
            />
            <div>
                <div>Text</div>
                <Textarea
                    value={ text }
                    onChange={ e => setText(e.target.value) }
                />
            </div>
            <Button onClick={ createRace }>Create a Race</Button>
        </div>
    )
}
