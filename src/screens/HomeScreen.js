import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.group42}>
        <View style={styles.frame}>
        <View style={styles.ellipse19}/>
        <View style={styles.group33}>
        <View style={styles.rectangle70}/>
        <View style={styles.rectangle72}/>
        <View style={styles.rectangle71}/>
        </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
ellipse19: {
    width: 53,
    height: 52,
    backgroundColor: '#172e88',
    borderRadius: 99999,
    position: 'absolute', 
    left: '303', 
    top: '18'
    }, 
    rectangle70: {
    width: 47,
    height: 6,
    backgroundColor: '#172e88',
    position: 'absolute', 
    left: '28', 
    top: '31'
    }, 
    rectangle72: {
    width: 47,
    height: 6,
    backgroundColor: '#172e88',
    position: 'absolute', 
    left: '27.99999999999909', 
    top: '51.00002861022949'
    }, 
    rectangle71: {
    width: 28.54,
    height: 6,
    backgroundColor: '#172e88',
    position: 'absolute', left: '27.99999999999909', top: '40.999977111816406'
    }, 
    group33: {
    width: 47,
    height: 26
    }, 
    frame: {
    width: 375,
    height: 812,
    backgroundColor: '#ddc3a5',
    borderRadius: 40
    }, 
    group42: {
    width: 375,
    height: 812
    }, 
});

export default HomeScreen;