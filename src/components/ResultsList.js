import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from 'react-navigation'

const Resultslist = ({ header, results, navigation }) => {
    if(!results.length){
        return null;
    }
    return <View>
        <Text style={styles.headerStyle}>{header}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {navigation.navigate('ResultsShow', { id: item.id })}}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    headerStyle: {
        marginHorizontal: 15,
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default withNavigation(Resultslist);