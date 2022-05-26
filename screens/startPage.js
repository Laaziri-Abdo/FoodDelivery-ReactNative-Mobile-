import React from 'react';
import {  StyleSheet, View, ImageBackground, TouchableOpacity, Text } from 'react-native';



function StartPage ({ navigation }) {
  return (
   <ImageBackground source={require('../assets/home.png')} style={styles.container}>

     <View style={styles.card}>
     <View>
        <Text style={styles.tex}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
     <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginBtn}>
        <Text  style={styles.loginText}>Get Started
        </Text>
      </TouchableOpacity>
      
     </View>
  
   </ImageBackground>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    backgroundColor: "#bc8c4c",
  },

  loginText:{
    color: "#fff",
    fontFamily:'poppins-regular'

  },
  card:{
    width: "80%",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#c1c1c15c"
    
  },
  tex:{
    textAlign: "center",
    letterSpacing: 3,
    paddingBottom:20,
    fontFamily:'poppins-regular'

  }

  

  })

export default StartPage;