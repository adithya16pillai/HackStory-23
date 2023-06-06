import React, { useEffect } from 'react';

const CoverPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.launchscreen5}>
    <Image style={styles.logo3} resizeMode="cover" source={{ uri: '../assets/logo.png' }} />
    <View style={styles.ellipse14}/>
    <View style={styles.ellipse15}/>
    <View style={styles.ellipse16}/>
    <View style={styles.ellipse17}/>
    <View style={styles.ellipse18}/>
    </View>
  );
};

const styles = StyleSheet.create({
  logo3: {
    width: 283,
    height: 167,
    position: 'absolute', 
    left: '46', 
    top: '263'
    }, 
    ellipse14: {
    width: 197,
    height: 170.2,
    backgroundColor: '#ddc3a5',
    position: 'absolute', 
    left: '192.99996948242188', 
    top: '667'
    }, 
    ellipse15: {
    width: 115.3,
    height: 161.5,
    backgroundColor: '#ddc3a5',
    position: 'absolute', 
    left: '-18.84186553955078', 
    top: '548.5'
    }, 
    ellipse16: {
    width: 118.24,
    height: 161,
    backgroundColor: '#ddc3a5',
    position: 'absolute', 
    left: '273.85919189453125', 
    top: '330'
    }, 
    ellipse17: {
    width: 165,
    height: 98.1,
    backgroundColor: '#ddc3a5',
    position: 'absolute', 
    left: '64', 
    top: '-5.104212760925293'
    }, 
    ellipse18: {
    width: 69.5,
    height: 109.5,
    backgroundColor: '#ddc3a5',
    position: 'absolute', 
    left: '-12.000137329101562', 
    top: '153'
    }, 
    launchscreen5: {
    width: 375,
    height: 821,
    backgroundColor: '#172e88',
    borderRadius: 40
    }, 
});

export default CoverPage;
