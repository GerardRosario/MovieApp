import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet, FlatList, SafeAreaView, ScrollView, AppRegistry, Image, navigation } from 'react-native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

// http://www.omdbapi.com/?i=tt3896198&apikey=d4fafbd0 Index search
// http://img.omdbapi.com/?i=tt3896198&h=600&apikey=d4fafbd0 Poster Api
// http://www.omdbapi.com/?i=tt3896198&apikey=39f7f4f5

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 3,
        width: '100%',
        backgroundColor: '#260571',
      }}
    />
  );
};

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      movieInfo: []
    };
    const p1 = ''
  }

  firstCall(p1) {
    const uri1='http://www.omdbapi.com/?i='
    const thisWord= p1
    const apikey1='&apikey=39f7f4f5&plot=full'
    fetch(uri1+thisWord+apikey1)
    .then(response => response.json())
    .then(results => this.setState({movieInfo: results}))
    .catch(error => console.log(error));
    console.log(thisWord)
  };

  componentDidMount() {
    this.getInfo();
    
  }

  getInfo() {
    p1  = this.props.route.params.id;
    this.firstCall(p1);
  }

  render() {
    const { movieInfo } = this.state;
    return(
        <View style={styles.detailView}>
          <ScrollView style={styles.detailView3}>
          <View style={styles.detailView2}>
          <Image source={{uri: movieInfo.Poster}} style={styles.detailImg}/>
          <Text style={styles.detailTitle}>{movieInfo.Title}</Text>
          <View style={styles.casing}>
          <Text style={styles.detailRate}>{movieInfo.Rated}</Text>
          <Text style={styles.detailSep}> | </Text>
          <Text style={styles.detailRun}>{movieInfo.Runtime}</Text>
          </View>
          <Text style={styles.detailPlot}>{movieInfo.Plot}</Text>
          </View>

          <View style={styles.detailView4}>
          <Text style={styles.detailTitle2}>Genre</Text>
          <Text style={styles.detailGenre}>{movieInfo.Genre}</Text>
          </View>

          <View style={styles.detailView4}>
          <Text style={styles.detailTitle2}>Actors</Text>
          <Text style={styles.detailGenre}>{movieInfo.Actors}</Text>
          </View>

          <View style={styles.detailView4}>
          <Text style={styles.detailTitle2}>Ratings</Text>
          <View style={styles.casing}>
          <Text style={styles.detailGenre}>Metascore {'\n'}{movieInfo.Metascore}</Text>
          <Text style={styles.detailSep}> | </Text>
          <Text style={styles.detailGenre}>imdbRating {'\n'}{movieInfo.imdbRating}</Text>
          </View>
          </View>
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  // #0d73dd blue
  // #8c8e8b grey
  //  #555353 darker grey
  detailView: {
    flex: 1,  
    backgroundColor: '#8c8e8b',
    height: '100%',
    
  },
  detailView2: { 
    flexGrow: 1,
    backgroundColor: '#555353',
    width: '100%',
    alignItems: 'center',
  },
  detailView3: {
    flex: 1
  },
  detailView4: { 
    flexGrow: 1,
    backgroundColor: '#0d73dd',
    width: '100%',
    alignItems: 'center',
    marginTop: '2%'
  },
  detailImg: {
    width: 350,
    height: 550,
    marginTop: '3%',
    marginBottom: '4%'
  },
  detailTitle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: '#0d73dd',
    borderBottomColor: '#0d73dd',
    color: 'ivory',
    fontWeight: "bold"

  },
  detailTitle2: {
    color: 'ivory',
    fontWeight: "bold"
  },
  detailPlot: {
    width: '90%',
    marginTop: '1%',
    marginBottom: '5%',
    color: 'ivory'
  },
  detailDiv: {
    color: '#0d73dd',
  },
  detailRate: {
    marginTop: '5%',
    marginBottom: '5%',
    color: 'ivory',
    fontWeight: "bold"

  },
  detailSep: {
    marginTop: '5%',
    marginBottom: '5%',
    marginLeft: '10%',
    marginRight: '10%',
    color: 'ivory',
    fontWeight: "bold"
  },
  detailRun: {
    marginTop: '5%',
    marginBottom: '5%',
    color: 'ivory',
    fontWeight: "bold"

  },
  detailGenre: {
    width: '30%',
    marginTop: '5%',
    marginBottom: '5%',
    color: 'ivory',
    textAlign: 'center'

  },
  homeInput: {
    textAlign: 'center',
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#9CF110',
    color: '#260571',
    backgroundColor: "#9CF110",
    bottom: '2%',
    width: '98%'
  },
  listComp: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#9CF110',
    marginTop:'3%',
    borderWidth: 2,
    borderRadius: 15,
    textAlign:'center'
  },
  casing: {
    flexDirection: 'row',
    paddingBottom: 5,
    borderBottomColor: '#0d73dd',
  }

})