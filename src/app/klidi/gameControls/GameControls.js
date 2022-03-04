import { useEffect, useRef, useState } from 'react'
import { useGameContext } from '../context/klidiContext'
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

        return () => {
            console.debug('stopper: clearing interval ' + intervalRef.current)
            clearInterval(intervalRef.current)
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

    const { stopper } = useGameContext()

    return (
        <div className="game-controls">
            <Stopper
                active={ stopper.active }
            />
            <Button
                tabIndex={ -1 }
                onClick={ () => stopper.toggle() }
            >
                { stopper.active ? 'PAUSE' : 'START' }
            </Button>
        </div>
    )
}
