import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id)
    }, []);

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.textStyle}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle}/>
                }}
            />
            <Text style={styles.textStyle}>Addresse: {result.location.address1}, {result.location.city} </Text>
            <Text style={styles.textStyle}>Phone: {result.display_phone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 150,
        width:250,
        margin:15,
    },
    textStyle: {
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold'
    }
})

export default ResultsShowScreen;