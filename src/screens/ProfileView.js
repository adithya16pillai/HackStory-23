import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileView = () => {
    return (
        <View style={styles.group39}>
        <View style={styles.frame}>
        <View style={styles.rectangle77}/>
        <Text style={styles.welcome}>Welcome!</Text>
        <View style={styles.rectangle78}/>
        <View style={styles.rectangle80}/>
        <Text style={styles.leaderboards}>Leaderboards</Text>
        <View style={styles.rectangle79}/>
        <Text style={styles.rewards}>Rewards</Text>
        <Text style={styles.progress}>Progress</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rectangle77: {
    width: 206,
    height: 186,
    backgroundColor: '#ddc3a5',
    borderRadius: 10,
    position: 'absolute', 
    left: '84', 
    top: '81'
    }, 
    welcome: {
    fontSize: 24,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'left',
    textAlignVertical: 'top',
    position: 'absolute', 
    left: '138', 
    top: '290'
    }, 
    rectangle78: {
    width: 221,
    height: 57,
    backgroundColor: '#ddc3a5',
    borderRadius: 10,
    position: 'absolute', 
    left: '77', 
    top: '406'
    }, 
    rectangle80: {
    width: 221,
    height: 57,
    backgroundColor: '#ddc3a5',
    borderRadius: 10,
    position: 'absolute', 
    left: '77', 
    top: '642'
    }, 
    leaderboards: {
    fontSize: 24,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'left',
    textAlignVertical: 'top',
    position: 'absolute', 
    left: '117', 
    top: '657'
    }, 
    rectangle79: {
    width: 221,
    height: 57,
    backgroundColor: '#ddc3a5',
    borderRadius: 10,
    position: 'absolute', 
    left: '77', 
    top: '524'
    }, 
    rewards: {
    fontSize: 24,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'left',
    textAlignVertical: 'top',
    position: 'absolute', 
    left: '145', 
    top: '539'
    }, 
    progress: {
    fontSize: 24,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'left',
    textAlignVertical: 'top',
    position: 'absolute', 
    left: '142', 
    top: '421'
    }, 
    frame: {
    width: 375,
    height: 812,
    backgroundColor: '#172e88',
    borderRadius: 40
    }, 
    group39: {
    width: 375,
    height: 812
    }, 
});

export default ProfileView;