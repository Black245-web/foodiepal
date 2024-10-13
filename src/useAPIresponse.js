// CustomHooks/useAPIresponse.js

import { useState } from 'react';
import axios from 'axios';

const useAPIresponse = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchAPI = (searchTerm) => {
        setLoading(true);
        setError(null);

        // Your API endpoint URL and API key
        const apiUrl = `YOUR_API_ENDPOINT_URL`;
        const apiKey = `YOUR_API_KEY`;

        axios.get(apiUrl, {
            params: {
                q: searchTerm,
                appid: apiKey
            }
        })
            .then(response => {
                setLoading(false);
                setResponseData(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    };

    return { responseData, error, loading, fetchAPI };
};

export default useAPIresponse;
