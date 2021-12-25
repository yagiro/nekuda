import { createContext, useContext, useCallback, useEffect, useMemo, useState } from 'react'

const GameContext = createContext()
export const GameContextProvider = GameContext.Provider
export const useGameContext = () => useContext(GameContext)

function useStopper() {
    const [ active, setActive ] = useState(false)

    const toggle = useCallback(() => {
        setActive(stopperActive => !stopperActive)
    }, [ setActive ])

    return useMemo(() => {
        return {
            active,
            toggle,
        }
    }, [ active, toggle ])
}

function useFocusMainTextOnStopperStart(stopperActive) {
    useEffect(() => {
        if (stopperActive) {
            console.debug('Setting focus to main text.')
            document.querySelector('.main-text').focus()
        }
    }, [ stopperActive ])
}

export function useGameContextValue() {

    const stopper = useStopper()
    useFocusMainTextOnStopperStart(stopper.active)

    return useMemo(() => {
        return {
            stopper,
        }
    }, [ stopper ])
}
