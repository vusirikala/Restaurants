import {React, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


function SearchScreen() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();    
    
    function filterResultsByPrice(price) {
        //price === '$' || price === '$$' || price === '$$$'
        return results.filter(result => result.price === price);
    }

    return <View>
     <SearchBar 
            term={searchTerm} 
            onTermChange={newTerm => {setSearchTerm(newTerm); console.log(newTerm)}}
            onTermSubmit={() => searchApi(searchTerm)}
            />
    {errorMessage ? <Text>{errorMessage}</Text> : null}
    <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
    <ResultsList title="Big Pricier"  results={filterResultsByPrice('$$')}/>
    <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')}/>
    </View>
}

export default SearchScreen;