import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import OffreContainer from '../commun/offreContainer/OffreContainer';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
const Explore = props => {
  const {navigate} = props.navigation;
  const [Data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const navigateToInfoPage = () => {
    navigate('offreInfoPage');
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Text>Search here...</Text>
        <Icon name="search" size={25} />
      </View>
      <FlatList
        data={Data}
        ListHeaderComponent={
          <Text style={styles.pageTitle}>300+ Places Found.</Text>
        }
        renderItem={item => (
          <OffreContainer onOffrePress={navigateToInfoPage} />
        )}
      />
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  searchBarContainer: {
    height: 50,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 6,
    marginVertical: 20,
    borderColor: '#cccc',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  pageTitle: {
    marginTop: 10,
    marginBottom: 25,
    fontFamily: 'ProductSans-Black',
    fontSize: 30,
  },
});
export default Explore;
