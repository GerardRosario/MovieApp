import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView, AppRegistry, Image, navigation, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

// http://www.omdbapi.com/?s=star&apikey=d4fafbd0&page=1
// Create space between flat list items
const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#555353',
        }}
      />
    );
  };

// Constructor to setup states
export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={
      movieData: [],
      searchWord: '',
      page: 1,
      isRefreshing: false
    };
  }
    
   // function to load the next 5 results
  LoadNextPage = () =>{
    if (!this.onEndReachedCalledDuringMomentum) {
        this.setState({
        page: this.state.page+1
        },()=> this.swUpdate())
        this.onEndReachedCalledDuringMomentum = true;
      }
  }

  LoadBackPage = () =>{
    if (!this.onEndReachedCalledDuringMomentum) {
        this.setState({movieData: []})
        this.setState({
        page: this.state.page === 1 ? this.state.page : this.state.page-1
        },()=> this.swUpdate())
        this.onEndReachedCalledDuringMomentum = true;
      }
  }

  resetPage = () => {
    this.setState({page: 1})
    this.setState({movieData: []})
  }

  swUpdate() {
    console.log(this.state.searchWord)
    const uri =  'http://www.omdbapi.com/?s='
    const sWord = this.state.searchWord
    const prodKey = '&apikey=39f7f4f5&page='
    const pageCurrent = this.state.page
    fetch(uri+sWord+prodKey+pageCurrent)
    .then(response => response.json())
    .then(results => this.setState({movieData: this.state.page != 1 ? results.Search : [...this.state.movieData, ...results.Search]   }))
    .catch(error => console.log(error));
    console.log(this.state.movieData)
  };

  allChange() {
    this.resetPage();
    this.swUpdate();

  }

  render() {
    const { movieData } = this.state;
    return (
      <View style={styles.homeView}>
          <Text style={styles.subtitle}>Search Movies & TV Series</Text>
          <TextInput
          style={styles.homeInput}
          placeholder="Enter Movie Title"
          onFocus={() => this.resetPage()}
          onSubmitEditing ={() => this.swUpdate()}
          onChangeText={(searchWord) => this.setState({ searchWord })}
          value={this.state.searchWord}
          />
          
          <FlatList 
            style={{ backgroundColor: '#555353' }}
            data={movieData}
            renderItem={({item}) => (
              <View style={styles.casing}>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Details', {id: item.imdbID}); }}>

                  <View style={styles.casing2}>
                  <Image source={{uri: item.Poster}} style={styles.searchImg} onPress={() => { this.props.navigation.navigate('Details', {id: item.imdbID}); }}/>
                  <Text
                  style={styles.listComp}
                  >
                  <Text style={styles.listText}>Title</Text>{'\n'}{'\n'}
                  {item.Title}
                  {'\n'}{'\n'}
                  <Text style={styles.listText}>Year</Text>{'\n'}{'\n'}
                  {item.Year}
                  {'\n'}
                  </Text>
                  </View>

                </TouchableOpacity>
                
              </View>
            )}
            legacyImplementation={true}
            keyExtractor={(item, index) => {return item.imdbID; }}
            ItemSeparatorComponent={ItemSeparatorView}
            onEndReachedThreshold={0.01}
            onEndReached={this.LoadNextPage}
            onRefresh={this.LoadBackPage}
            refreshing={this.state.isRefreshing}
            onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
            >
          </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // #0d73dd blue
  // #8c8e8b grey
  //  #555353 darker grey
  homeView: {
    flex: 1,
    textAlign: 'left',
    backgroundColor: '#555353',
    height: '100%'
  },
  subtitle: {
    marginTop:'10%',
    color: "ivory",
    bottom: '4%',
    textAlign: 'center'
  },
  homeInput: {
    textAlign: 'center',
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
    color: 'ivory',
    backgroundColor: "#0d73dd",
    bottom: '2%',
    width: '100%'
  },
  casing: {
    flex: 1,
    flexDirection: "row",
  },
  casing2: {
    flexDirection: 'row',
    width: '119%',
    height: '100%'

  },
  listText: {
    color: '#8c8e8b',
    fontFamily: 'sans-serif-condensed',
    fontWeight: 'bold',

  },
  listComp: {
    color: 'ivory',
    backgroundColor: '#0d73dd',
    marginRight:'0%',
    textAlign:'center',
    textAlignVertical: 'center',
    width: '70%',
    height: '100%'
  },
  searchImg: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  touchableButton: {
    width: '100%',
    height: 100
  }

})
