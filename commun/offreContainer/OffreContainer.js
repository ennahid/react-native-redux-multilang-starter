import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import OffreStyles from './OffreContainerCss';
// import Slideshow from 'react-native-image-slider-show';
import {SliderBox} from 'react-native-image-slider-box';
import MCaroussel from '../mCaroussel';

const DEVICE_WIDTH = Dimensions.get('window').width;
const OFFRE_WIDTH = DEVICE_WIDTH - 20;
const OffreContainer = props => {
  useEffect(() => {
    console.log(props);
  });
  return (
    <View style={[styles.container, {width: OFFRE_WIDTH}]}>
      <View style={styles.carousselContainer}>
        <MCaroussel
          width={DEVICE_WIDTH - 20}
          images={[
            'https://source.unsplash.com/collection/190727/1600x900',
            'https://source.unsplash.com/collection/190727/1600x900',
            'https://source.unsplash.com/collection/190727/1600x900',
            'https://source.unsplash.com/collection/190727/1600x900',
            'https://source.unsplash.com/collection/190727/1600x900',
            'https://source.unsplash.com/collection/190727/1600x900',
          ]}
        />
      </View>
      <View style={[styles.offreText, styles.city]}>
        <Icon name="location" size={20} color={'#969696'} />
        <Text style={[styles.cityName]}>Casablanca</Text>
      </View>
      <TouchableOpacity onPress={() => props.onOffrePress()}>
        <Text style={[styles.offreText, styles.title]}>
          Luxurious & Elegant Flat very...
        </Text>
      </TouchableOpacity>
      <View style={[styles.offreText, styles.priceContainer]}>
        <Text style={[styles.price]}>3000 Dhs</Text>
        <Text style={[styles.priceLabel]}> / Month</Text>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    height: 375,
    // flexDirection: 'column',
    // alignItems: 'center',
    flex: 1,
    marginVertical: 5,
  },
  carousselContainer: {
    height: 250,
  },
  image: {
    height: '100%',
    width: DEVICE_WIDTH - 20,
  },
  offreText: {
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'ProductSans-Light',
  },
  city: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: -4,
    marginVertical: 10,
    marginBottom: 0,
    // marginVertical: 10,
  },
  cityName: {
    marginLeft: 5,
    fontFamily: 'ProductSans-Thin',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontFamily: 'ProductSans-Bold',
  },
  priceLabel: {
    fontSize: 15,
    fontFamily: 'ProductSans-Light',
  },
});
export default OffreContainer;
