import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'

export default function useNextCharHighlight() {
    const [ highlighted, setHighlighted ] = useState(false)
    const intervalRef = useRef()

    useEffect(() => {
        setInterval(() => {
            setHighlighted(highlighted => !highlighted)
        }, 700)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [ setHighlighted ])

    const nextCharClass = classNames('next-char', { highlighted })

    return nextCharClass
}
