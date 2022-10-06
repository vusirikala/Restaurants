import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

function ResultsList({title, results}) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={ ({item}) => <Text>{item.name}</Text> }
            />
            <Text>Results: {results.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 10,
        fontWeight: 'bold'
    }
})

export default ResultsList;
