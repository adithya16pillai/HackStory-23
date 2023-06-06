import { React, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CoverPage from './src/screens/CoverPage';
import SignInPage from './src/screens/SignInPage';
import ProfileView from './src/screens/ProfileView';
import SignIn from './src/navigation/SignIn';
import ProfileIcon from './src/navigation/ProfileIcon';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapView from "react-native-maps";

const Stack = createStackNavigator();

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}  

const MyStack() {
  return(
    <Stack.Navigator></Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cover">
        <Stack.Screen name="Cover" component={CoverPage} options={{ headerShown: false }} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileView} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ProfileIcon" component={ProfileIcon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, 
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default App;