import './Klidi.scss'

import { useState } from 'react'
import useWindowEventListener from '../../lib/useEventListener'

const text = 'hi from app. start kliding bitchface. this is a long text man.'

function useKlidi() {

    const [ nextCharIdx, setNextCharIdx ] = useState(0)
    const nextChar = text.charAt(nextCharIdx)

    const handleKeyPress = event => {
        if (event.key === nextChar) {
            setNextCharIdx(nextCharIdx => nextCharIdx + 1)
        }
    }

    useWindowEventListener('keydown', handleKeyPress, [ nextChar ])

    const completedText = text.substring(0, nextCharIdx)
    const textAfterNextChar = text.substring(nextCharIdx + 1, text.length)

    return {
        completedText,
        nextChar,
        textAfterNextChar,
    }
}

export default function Klidi() {

    const {
        completedText,
        nextChar,
        textAfterNextChar,
    } = useKlidi()

    return (
        <div className="main-text">
            <span className="completed-text">{ completedText }</span>
            <span className="next-char">{ nextChar }</span>
            <span>{ textAfterNextChar }</span>
        </div>
    )
}
