import { useEffect, useCallback } from 'react'

export default function useWindowEventListener(eventName, handler, dependencies) {

    const handlerCallback = useCallback(handler, dependencies)

    useEffect(() => {
        window.addEventListener(eventName, handlerCallback)

        return () => {
            window.removeEventListener(eventName, handlerCallback)
        }
        
    }, dependencies)
}