import { useEffect, useRef } from 'react';

function useSetTimeout(timeoutCallback, seconds) {
    const timeoutId = useRef();

    useEffect(() => {
        timeoutId.current = setTimeout(timeoutCallback, seconds);
        return () => clearTimeout(timeoutId.current);
    }, [])
}

export default useSetTimeout;