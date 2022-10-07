import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

function useResults() {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    async function searchApi (term)  {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'San Jose'
                }
            });
            setResults(response.data.businesses);   
            setErrorMessage(''); 
        } catch (err) {
            setErrorMessage(err)
        }
    }
    
    useEffect(() => {
        searchApi('pasta')
    }, [])

    return [searchApi, results, errorMessage];
}

export default useResults;