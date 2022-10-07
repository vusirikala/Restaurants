import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

function SearchBar({term, onTermChange, onTermSubmit}) {
    return <View style={styles.background}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput placeholder="Search" 
            autoCapitalize = "none"
            style={styles.inputStyle} 
            value={term}
            onChangeText={newValue => onTermChange(newValue)}
            onEndEditing={() => onTermSubmit()}
        />
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10
    },
    inputStyle : {
        fontSize: 18,
        flex: 1                 //So that the input occupies as much as possible on the screen 
    }, 
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;