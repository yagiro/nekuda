import { useEffect, useCallback } from 'react'

export default function useWindowEventListener(eventName, handler, dependencies) {

    const handlerCallback = useCallback(handler, dependencies)

    useEffect(() => {
        window.addEventListener(eventName, handlerCallback)

        return () => {
            console.debug('removing event listener for ' + eventName)
            window.removeEventListener(eventName, handlerCallback)
        }
        
    }, dependencies)
}