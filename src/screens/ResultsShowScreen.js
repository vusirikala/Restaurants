import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";


function ResultsShowScreen({navigation}) {
    //When we expect the hook to be an object, we use default value as null.
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.image} source = {{url: item}} />
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        weight: 300
    }
})

export default ResultsShowScreen;