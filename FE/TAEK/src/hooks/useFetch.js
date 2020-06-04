import { useState, useEffect } from 'react';

function useFetch(callback, url, option = { method: 'GET' }) {
    const [loading, setLoading] = useState(true);
    const fetchInitialData = async () => {
        const response = await fetch(url, option);
        const data = await response.json();
        callback(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    return loading;
}

export default useFetch;