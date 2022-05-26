// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// // import Logo from '../assets/logo.svg'
// import { StyleSheet, View, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';



// function Register ({navigation}) {
//   return (
//     <ImageBackground source={require('../assets/style-4.png')} style={styles.container}>
 
//    {/* <Logo /> */}
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Username"
//           placeholderTextColor="#C1C0BB"
         
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Fullname"
//           placeholderTextColor="#C1C0BB"
          
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//         keyboardType='numeric'
//           style={styles.TextInput}
//           placeholder="Phone"
//           placeholderTextColor="#C1C0BB"
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Adress"
//           placeholderTextColor="#C1C0BB"
          
//         />
//       </View>
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email"
//           placeholderTextColor="#C1C0BB"
          
//         />
//       </View>
 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password"
//           placeholderTextColor="#C1C0BB"
//           secureTextEntry={true}
//           // onChangeText={(password) => setPassword(password)}
//         />
//       </View>

 
//       <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginBtn}>
//         <Text style={styles.loginText}>Register
//         </Text>
//       </TouchableOpacity>

//       <View>
//         <Text style={styles.Sing_up}>You Have An Account?
//         <Text onPress={() => navigation.navigate('Login')}  style={styles.Sing_up_text}>
//           Sing in 
//         </Text>
//         </Text>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: "100%",
//     backgroundColor: "#F5F4EF",
//     alignItems: "center",
//     justifyContent: "center",
//   },
 
//   inputView: {
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     borderColor: "#ADACA8",
//     borderWidth: 2,
//     borderStyle: "solid",
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
 
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//   },
//   Sing_up:{
//     fontWeight: "bold",
//   },
 
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 3,
//     backgroundColor: "#bc8c4c",
//   },

//   loginText:{
//     color:"#ffff"
//   },
//   Sing_up_text:{
//     color: "#bc8c4c",
//     fontWeight: "bold",
    
//   }
// });

// export default Register;

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// import DatePicker from 'react-native-date-picker';

import InputField from '../component/InputField';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';

import RegistrationSVG from '../assets/register.svg';
import GoogleSVG from '../assets/google.svg';
import FacebookSVG from '../assets/facebook.svg';
import TwitterSVG from '../assets/twitter.svg';
import CustomButton from '../component/CustomButton';

const RegisterScreen = ({navigation}) => {
  

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegistrationSVG
            height={300}
            width={300}
            style={{transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'poppins-bold',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, register with email ...
        </Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#F2C978"
              style={{marginRight: 5}}
            />
          }
        />

        <InputField
          label={'Email'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#F2C978"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#F2C978"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#F2C978"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
        />
           <InputField
          label={'Phone'}
          icon={
            <Ionicons
              name="call-outline"
              size={20}
              color="#F2C978"
              style={{marginRight: 5}}
            />
          }
          keyboardType='numeric'
        />

        <InputField
          label={'Address'}
          icon={
            <Entypo name="address" size={20} color="#F2C978" style={{marginRight: 5}} />
          }
          keyboardType="email-address"
        />
        

        

        <CustomButton label={'Register'} onPress={() => navigation.navigate ('Home')} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text onPress={() => navigation.navigate('Login')} style={{color: '#F2C978', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;