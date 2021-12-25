import { useEffect, useRef, useState } from 'react'
import './GameControls.scss'

function Button(props) {
    return <button { ...props } />
}

function Stopper({ active }) {

    const [ elapsedMs, setElapsedMs ] = useState(0)
    const intervalRef = useRef(null)
    const intervalDelay = 100

    useEffect(() => {
        if (active) {
            if (!intervalRef.current) {
                console.debug('starting stopper')
                intervalRef.current = setInterval(() => {
                    setElapsedMs(elapsedMs => elapsedMs + intervalDelay)
                }, intervalDelay)
            }
        }
        else {
            if (intervalRef.current) {
                console.debug('stopping stopper')
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [ active ])

    const elapsedTime = (elapsedMs / 1000).toFixed(2)

    return (
        <div className="stopper">
            { elapsedTime }
        </div>
    )
}


export default function GameControls() {

    const [ stopperActive, setStopperActive ] = useState(false)

    const toggleStopper = () => {
        setStopperActive(!stopperActive)
        if (!stopperActive) {
            console.debug('setting focus to main text')
            document.querySelector('.main-text').focus()
        }
    }

    return (
        <div className="game-controls">
            <Stopper
                active={ stopperActive }
            />
            <Button
                tabIndex={ -1 }
                onClick={ toggleStopper }
            >
                { stopperActive ? 'PAUSE' : 'START' }
            </Button>
        </div>
    )
}
