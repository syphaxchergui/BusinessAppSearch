import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native'; 
import { Feather } from '@expo/vector-icons';

const LocationSearchBar = ({term, onChangeTerm}) => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="map-pin" style={styles.iconStyle} />
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Enter a location..."
            value={term}
            onChangeText={newTerm => onChangeTerm(newTerm)}
        />
    </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginHorizontal: 15,
        marginBottom: 10,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        flexDirection: 'row',
        width: 286
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal:15
    }
});

export default LocationSearchBar;