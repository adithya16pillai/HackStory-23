import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SignInPage = () => {
    return (
        <View style={styles.group41}>
        <View style={styles.group40}>
        <View style={styles.group23}>
        <View style={styles.login3}>
        <View style={styles.muilogo}>
        <View style={styles.muiicon}>
        <View style={styles.vector}/>
        <View style={styles.vector}/>
        <View style={styles.vector}/>
        <View style={styles.vector2}/>
        <View style={styles.vector}/>
        <View style={styles.vector2}/>
        </View>
        <Text style={styles.material2ui}></Text>
        </View>
        <View style={styles.buttons}>
        <Text style={styles.title}>Welcome.</Text>
        <View style={styles.ctabutton+icon}>
        <View style={styles.centered}>
        <View style={styles.icon}>
        <View style={styles.vector}/>
        </View>
        <Text style={styles.label}>CONTINUE WITH EMAIL</Text>
        </View>
        </View>
        <View style={styles.signinwithgoogle}>
        <View style={styles.centered}>
        <View style={styles.icon}>
        <View style={styles.yellow}/>
        <View style={styles.blue}/>
        <View style={styles.green}/>
        <View style={styles.red}/>
        </View>
        <Text style={styles.label}>CONTINUE WITH GOOGLE</Text>
        </View>
        </View>
        <View style={styles.signinwithapple}>
        <View style={styles.centered}>
        <View style={styles.icon}>
        <View style={styles.vector}/>
        </View>
        <Text style={styles.label}>CONTINUE WITH APPLE</Text>
        </View>
        </View>
        <Text style={styles.infotext}>By continuing you agree to the Terms of Service.</Text>
        </View>
        </View>
        </View>
        <View style={styles.group29}>
        <View style={styles.group28}>
        <View style={styles.rectangle69}/>
        <Image style={styles.paper-plane-airplane-png-cutout1} resizeMode="cover" source={{ uri: '../assets/Paper-Plane-Airplane-PNG-Cutout.png' }} />
        <Image style={styles.dotted-line-png-transparent-image1} resizeMode="cover" source={{ uri: '../assets/Dotted-Line-PNG-Transparent-Image.png' }} />
        </View>
        <Image style={styles.image2} resizeMode="cover" source={{ uri: '../assets/google.png' }} />
        </View>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    vector: {
    width: 48,
    height: 48,
    backgroundColor: '#b071ff',
    position: 'absolute', left: '47.999996185302734', top: '0'
    }, 
    vector2: {
    width: 15,
    height: 18,
    backgroundColor: '#000000',
    position: 'absolute', left: '11.999988555908203', top: '30.000003814697266'
    }, 
    muiicon: {
    width: 48,
    height: 48
    }, 
    material2ui: {
    fontSize: 17.224557876586914,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    color: '#000000',
    lineHeight: 20.66947027323522,
    letterSpacing: 1.377964630126953,
    textAlign: 'center',
    textAlignVertical: 'top',
    position: 'absolute', left: '75', top: '60'
    }, 
    muilogo: {
    width: 151,
    height: 85,
    backgroundColor: '#ffffff'
    }, 
    title: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#ddc3a5',
    textAlign: 'center'
    }, 
    icon: {
    width: 24,
    height: 24
    }, 
    label: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#ffffff',
    lineHeight: 16,
    letterSpacing: 1,
    textAlign: 'center',
    textAlignVertical: 'top',
    textTransform: 'uppercase'
    }, 
    centered: {
    width: 201,
    height: 24,
    gap: 8,
    flexDirection: 'row', 
    alignItems: 'center',
    }, 
    ctabutton: {
    width: 280,
    height: 48,
    backgroundColor: '#1554f6',
    borderColor: '#000000', borderWidth: 1,
    borderRadius: 4,
    gap: 10
    }, 
    yellow: {
    width: 3.99,
    height: 8.4,
    backgroundColor: '#fbbb00',
    position: 'absolute', left: '3', top: '7.860992431640625'
    }, 
    blue: {
    width: 8.8,
    height: 8.7,
    backgroundColor: '#518ef8',
    position: 'absolute', left: '12.1978759765625', top: '10.318679809570312'
    }, 
    green: {
    width: 13.56,
    height: 7.12,
    backgroundColor: '#28b446',
    position: 'absolute', left: '4.07257080078125', top: '13.877655029296875'
    }, 
    red: {
    width: 13.74,
    height: 7.26,
    backgroundColor: '#f14336',
    position: 'absolute', left: '4.00628662109375', top: '3'
    }, 
    signinwithgoogle: {
    width: 294,
    height: 48,
    backgroundColor: '#ffffff',
    borderColor: '#000000', borderWidth: 2,
    borderRadius: 4,
    gap: 10
    }, 
    signinwithapple: {
    width: 280,
    height: 48,
    backgroundColor: '#ffffff',
    borderColor: '#000000', borderWidth: 2,
    borderRadius: 4,
    gap: 10
    }, 
    infotext: {
    fontSize: 12,
    fontFamily: 'Roboto',
    fontWeight: '400',
    color: '#ddc3a5',
    lineHeight: 16,
    textAlign: 'center'
    }, 
    buttons: {
    width: 294,
    height: 200,
    gap: 12,
    flexDirection: 'column',
    }, 
    login3: {
    width: 374,
    height: 569,
    backgroundColor: '#172e88',
    borderBottomLeftRadius: 40, borderBottomRightRadius: 40, borderTopLeftRadius: 4, borderTopRightRadius: 4,
    gap: 24,
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    }, 
    group23: {
    width: 374,
    height: 569
    }, 
    rectangle69: {
    width: 377,
    height: 513,
    backgroundColor: '#ddc3a5',
    position: 'absolute', left: '-3457', top: '1662'
    }, 
    paperplaneairplanepngcutout1: {
    width: 122,
    height: 122,
    borderTopLeftRadius: 40, borderTopRightRadius: 40,
    position: 'absolute', left: '-3449.5', top: '1664.9970703125'
    }, 
    dottedlinepngtransparentimage1: {
    width: 369.67,
    height: 102.4,
    borderBottomLeftRadius: 2, borderBottomRightRadius: 2, borderTopLeftRadius: 40, borderTopRightRadius: 40,
    position: 'absolute', left: '-3314.46875', top: '1701.06591796875'
    }, 
    group28: {
    width: 393.62,
    height: 513
    }, 
    image2: {
    width: 183,
    height: 138,
    borderTopLeftRadius: 40, borderTopRightRadius: 40,
    position: 'absolute', left: '-3361', top: '1954'
    }, 
    group29: {
    width: 393.62,
    height: 513
    }, 
    group40: {
    width: 393.62,
    height: 812
    }, 
    group41: {
    width: 393.62,
    height: 812
    }
}
);