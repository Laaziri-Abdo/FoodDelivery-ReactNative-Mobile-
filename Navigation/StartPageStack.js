import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartPage from '../screens/startPage'


const Start = createStackNavigator();
function StartPageScreen() {
  return (
    <Start.Navigator>    
        <Start.Screen name="StartPageScreen" component={StartPage} options={{ headerShown: false }} />
    </Start.Navigator>
  );
}

export default StartPageScreen;