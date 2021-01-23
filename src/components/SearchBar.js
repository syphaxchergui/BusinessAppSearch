import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native'; 
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onChangeTerm}) => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onChangeTerm(newTerm)}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal:15
    }
});

export default SearchBar;