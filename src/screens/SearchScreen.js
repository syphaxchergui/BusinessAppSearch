import React, { useState, useEffect } from 'react';
import { Text, StyleSheet,ScrollView, View , TouchableOpacity, Image} from 'react-native'; 
import SearchBar from '../components/SearchBar';
import LocationSearchBar from '../components/LocationSearchBar';
import yelp from '../api/yelp';
import Resultslist from '../components/ResultsList';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [location, setLocation] = useState('');
    const [loaded, setLoaded] = useState(false);


  
  
    const searchApi = async (searchTerm, searchLocation) => {
        try {
            const response = await yelp.get('./search', {
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: searchLocation
                }
            });
            setResults(response.data.businesses); 
            setLoaded(true);
            setErrorMessage('');
        } catch (err) {
           setErrorMessage('Something went wrong !');
        }
    };

    useEffect(() => {
        searchApi('steak', 'new york');
    }, []);

    const filterResultByPrice = (price) => {
        return results.filter (result => {
            return result.price === price;
        })
    }

    return <>
        <SearchBar 
            term={term} 
            onChangeTerm={(newTerm) => setTerm(newTerm)}
        />
        <View style={styles.viewStyle}> 
            <LocationSearchBar 
                term={location}
                onChangeTerm={(newTerm) => setLocation(newTerm)}
            />
            <TouchableOpacity onPress={() => { 
                setLoaded(false);
                searchApi(term, location);
            }}>
                <View style={styles.buttonStyle}>
                    <Feather name="search" style={styles.iconStyle} /> 
                </View>
            </TouchableOpacity>
        </View>
        

        {errorMessage ? <Text style={{alignSelf:'center', fontSize: 18}}>{errorMessage}</Text> : null}
        {loaded ? <ScrollView>
            <Resultslist results={filterResultByPrice('$')} header="Cost Effective" />
            <Resultslist results={filterResultByPrice('$$')} header="Bit Pricer" />
            <Resultslist results={filterResultByPrice('$$$')} header="Big Spender !" />
            <Resultslist results={filterResultByPrice('$$$$')} header="Big Spender++ !" />
            </ScrollView> 
        :   <Image
                style={styles.image}
                source={require('../../assets/loading.gif')}
            />
        } 
        {results.length >0 ? null : <Text style={{fontSize:18, alignSelf: 'center'}}> Oops! No result!</Text>}
    </>
};

const styles = StyleSheet.create({
    image:{
        height: 70,
        width: 70,
        alignSelf: 'center',
        marginTop: 200
    },
    textStyle:{
        margin: 15
    },
    inputStyle: {
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 5,
        fontSize: 18
    },
    buttonStyle: {
        backgroundColor: 'black',
        paddingVertical: 9.5,
        borderRadius: 5
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal:15,
        color: '#FFF'
    },
    viewStyle: {
        flexDirection: 'row'    
    }
});

export default SearchScreen;

