import {React, useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
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

    {/* flex=1 is applied so that the SearchScreen only occupies whatever the content needs*/}
    return <View style={{flex: 1}}> 
        <SearchBar 
                term={searchTerm} 
                onTermChange={newTerm => {setSearchTerm(newTerm); console.log(newTerm)}}
                onTermSubmit={() => searchApi(searchTerm)}
                />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {/*A scrollview is similar to View, except that ScrollView automatically detects if there is a lot of content on the page and enables scroll. */}
        <ScrollView>   
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
            <ResultsList title="Bit Pricier"  results={filterResultsByPrice('$$')} />
            <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
            <ResultsList title="Biggest Spender" results={filterResultsByPrice('$$$$')} />        
        </ScrollView>
    </View>
}

export default SearchScreen;