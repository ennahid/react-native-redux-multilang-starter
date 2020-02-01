/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';

const MCaroussel = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX_DOTS_NUMBER = 7;
  const DOTS_NUMBER =
    props.images.length < MAX_DOTS_NUMBER
      ? props.images.length
      : MAX_DOTS_NUMBER;

  const setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.round(contentOffset / viewSize, 1.0);
    setCurrentIndex(selectedIndex);
  };

  const isCloseToStart = (length, current, index) => {
    return MAX_DOTS_NUMBER - DOTS_NUMBER === 0
      ? index === 0 && current > DOTS_NUMBER / 2
        ? false
        : true
      : true;
  };
  const isCloseToEnd = (length, current, index) => {
    // alert(MAX_DOTS_NUMBER - DOTS_NUMBER === 0);
    return MAX_DOTS_NUMBER - DOTS_NUMBER === 0
      ? index === DOTS_NUMBER - 1
        ? current < length - 3
          ? false
          : true
        : true
      : true;
  };
  const isActive = (length, current, index) => {
    let theLength = length - 1;
    let THE_DOTS_NUMBER = DOTS_NUMBER - 1;
    if (current === index && current <= THE_DOTS_NUMBER / 2) {
      return true;
    } else {
      if (current > THE_DOTS_NUMBER / 2) {
        switch (true) {
          case theLength - current > 2:
            return index === THE_DOTS_NUMBER - 3;
          case theLength - current > 1:
            return index === THE_DOTS_NUMBER - 2;
          case theLength - current > 0:
            return index === THE_DOTS_NUMBER - 1;
          case theLength - current < 1:
            return index === THE_DOTS_NUMBER;
          default:
            return false;
        }
      }
    }
  };
  return (
    <View style={{height: '100%', width: '100%'}}>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={setSelectedIndex}
        showsHorizontalScrollIndicator={false}>
        {props.images.map(image => (
          <Image
            key={image}
            style={{width: props.width, height: '100%'}}
            source={{uri: image}}
          />
        ))}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {props.images.slice(0, DOTS_NUMBER).map((image, index) => (
          <View
            key={image}
            style={[
              styles.dot,
              !isCloseToStart(props.images.length, currentIndex, index) &&
                styles.smallDot,
              !isCloseToEnd(props.images.length, currentIndex, index) &&
                styles.smallDot,
              isActive(props.images.length, currentIndex, index) &&
                styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};
var styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  dotsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: 15,
  },
  dot: {
    backgroundColor: '#fff',
    height: 7,
    width: 7,
    margin: 5,
    borderRadius: 100,
    opacity: 0.4,
  },
  smallDot: {
    height: 5,
    width: 5,
    margin: 6,
  },
  activeDot: {
    height: 8,
    width: 8,
    margin: 5,
    opacity: 1,
  },
});

export default MCaroussel;
