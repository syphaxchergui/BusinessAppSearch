import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return <View style={styles.viewStyle}>
        <Image source={{ uri: result.image_url }} style={styles.imageStyle}/>
        <Text style={styles.titleStyle} >{result.name}</Text>
        <Text style={styles.infoStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        marginLeft: 15,
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    infoStyle: {
        color: 'grey'
    }, 
    imageStyle: {
        width: 250,
        height: 130,
        borderRadius: 4,
        marginVertical: 7
    }


});

export default ResultsDetail;