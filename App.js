import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


//Screens
import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';

//Stack
import HomeTabs from './Navigation/HomeStack';
import StartPageStack from './Navigation/StartPageStack';


const Stack = createNativeStackNavigator();



export default function App() {
  const [loaded] = useFonts({
    'poppins-regular': require('./assets/font/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/font/Poppins-BoldItalic.ttf'),
    'poppins-simbol': require('./assets/font/Poppins-SemiBold.ttf')
});

if (!loaded) {
    return null;
}
    return (
  
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen name="StartPage" component={StartPageStack} options={{ headerShown: false }}/>  
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Register" component={RegisterScreen}options={{ headerShown: false }} />
        </Stack.Navigator>
        
      </NavigationContainer>
  );
  
}




