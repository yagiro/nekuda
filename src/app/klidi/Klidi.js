import './Klidi.scss'

import { useState } from 'react'
import useWindowEventListener from '../../lib/useEventListener'
import MainText from './mainText/MainText'
import GameControls from './gameControls/GameControls'
import { GameContextProvider, useGameContextValue } from './context/klidiContext'

const text = 'Hi there. Start kliding bitchface.'

function useKlidi() {

    const [ nextCharIdx, setNextCharIdx ] = useState(0)
    const nextChar = text.charAt(nextCharIdx)

    const handleKeyPress = event => {
        if (event.key === nextChar) {
            setNextCharIdx(nextCharIdx => nextCharIdx + 1)
        }
        else if (event.key === 'Backspace') {
            setNextCharIdx(nextCharIdx => nextCharIdx - 1)
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

    const gameCtxValue = useGameContextValue()

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
