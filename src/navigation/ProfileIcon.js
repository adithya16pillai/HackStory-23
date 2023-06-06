import React from "react";
import { View, Text, Button } from "react-native/types";
import { createStackNavigator, createAppContainer } from 'react-navigation';

const ProfileIcon = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
        <View
            style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
        <Text style={{ fontSize: 15, left: 195 }}>View More</Text>
        <Image
            style={{ left: 200, height: 23, width: 23 }}
            source={require('../assets/profile.png')}
        />
        </View>
        </View>
    );
}