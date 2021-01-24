import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { Feather } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text style={styles.textStyle}>Addresse: {result.location.address1}, {result.location.city} </Text>
            <Text style={styles.textStyle}>Phone: {result.display_phone}</Text>
            <Text style={styles.textStyle}>Rating: {result.rating} starts</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle}/>
                }}
            />
            

        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 230,
        width:350,
        marginVertical:10,
        marginHorizontal: 5,
        borderRadius: 5
    },
    textStyle: {
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical:5,
        fontWeight: 'bold'
    },
    titleStyle: {
        fontSize: 28,
        margin: 10,
        fontWeight: 'bold' 
    },
    viewStyle: {
        borderRadius: 5,
        borderWidth: 1,
        margin: 10,
        padding: 5,
        ...StyleSheet.absoluteFillObject
    }
})

export default ResultsShowScreen;