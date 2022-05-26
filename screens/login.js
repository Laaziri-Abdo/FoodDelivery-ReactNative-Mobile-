// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   ImageBackground
// } from "react-native";
 
// export default function Login({navigation}) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
//   return (
//     <ImageBackground source={require('../assets/style-4.png')} style={styles.container}>
//       <Image style={styles.image} source={require("../assets/Login.png")} />
 
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         />
//       </View>
 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password"
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         />
//       </View>

 
//       <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text>
//       </TouchableOpacity>

//       <View >
//         <Text style={styles.Sing_up} >You Don't have An Account?
//         <Text onPress={() => navigation.navigate('Register')}  style={styles.Sing_up_text}>
//           Sing up 
//         </Text>
//         </Text>
//       </View>
//     </ImageBackground>
//   );
// }
 
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     height: "100%",
//     backgroundColor: "#F5F4EF",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   image: {
//     marginBottom: 40,
//     width: "70%",
//     height: "40%"
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
//     borderColor: "#ADACA8",
//     borderWidth: 2,
//     borderStyle: "solid",
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
//     margin: "20%"
//   }
// });


import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from '../assets/google.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg'

import LoginSVG from '../assets/login.svg';


import CustomButton from '../component/CustomButton';
import InputField from '../component/InputField';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG
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
          Login
        </Text>

        <InputField
          label={'Email ID'}
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
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => navigation.navigate('Home')} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
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
            <Google height={30} width={30} />
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
            <Facebook height={30} width={30} />
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
            <Twitter height={30} width={30} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text onPress={() => navigation.navigate('Register')}  style={{color: '#F2C978', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;