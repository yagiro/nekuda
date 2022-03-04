import './Klidi.scss'

import { useState } from 'react'
import useWindowEventListener from '../../lib/useEventListener'
import MainText from './mainText/MainText'
import GameControls from './gameControls/GameControls'
import { GameContextProvider, useGameContextValue } from './context/klidiContext'

const text = 'Go ahead punk, make my day.'

function isTypedCharacterEvent(event) {
    return event.key.match(/^[a-zA-Z0-9 .,]$/)
        && !event.altKey
        && !event.ctrlKey
        && !event.metaKey
        && event.key !== 'Shift'
}

function useKlidi() {

    const ctx = gameCtxValue = useGameContextValue()

    const [ nextCharIdx, setNextCharIdx ] = useState(0)
    const nextChar = text.charAt(nextCharIdx)

    const handleKeyPress = event => {

        if (!isTypedCharacterEvent(event)) return

        if (event.key === nextChar) {
            setNextCharIdx(nextCharIdx => nextCharIdx + 1)
        }
        else if (event.key === 'Backspace') {
            setNextCharIdx(nextCharIdx => nextCharIdx - 1)
        }

        if (!ctx.stopper.active) {
            // start stopper on any key press
            ctx.stopper.toggle()
        }

        if (nextCharIdx === text.length - 1) {
            // game finished
            ctx.stopper.toggle(false)
        }
    }

    useWindowEventListener('keydown', handleKeyPress, [ text, nextChar, ctx.stopper ])

    const completedText = text.substring(0, nextCharIdx)
    const textAfterNextChar = text.substring(nextCharIdx + 1, text.length)

    return {
        completedText,
        nextChar,
        textAfterNextChar,
        gameCtxValue,
    }
}

export default function Klidi() {

    const {
        completedText,
        nextChar,
        textAfterNextChar,
        gameCtxValue,
    } = useKlidi()

    return (
        <GameContextProvider value={ gameCtxValue }>
            <div className="klidi">
                <MainText
                    completedText={ completedText }
                    nextChar={ nextChar }
                    textAfterNextChar={ textAfterNextChar }
                />
                <GameControls />
            </div>
        </GameContextProvider>
    )
}
