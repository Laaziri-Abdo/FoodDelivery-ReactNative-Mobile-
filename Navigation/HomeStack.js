import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text  } from "react-native";

//screens
import HomeScreen from "../screens/Home";
import Profile from "../screens/Profile";
import Orders from "../screens/Orders";
import MealsScreen from "../screens/Meals"

// Icons
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={{ 
        tabBarShowLabel: false,
        tabBarStyle :{
        position: 'absolute',
        bottom:14,
        left:20,
        right:20,
        elevation:0,
        backgroundColor:'#FFFF',
        borderRadius:15,
        height: 60,
        ...styeles.shadow
      }
     }}
  >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
          <Entypo name="home" size={24} color="#F2C978" />
          <Text style={{ color: focused ?  "#F2C978" : "#ffff", fontSize:10,}}> 
            Home
          </Text>
        </View>
      ) }} />
      <Tab.Screen name="Meals" component={MealsScreen} options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
          <MaterialIcons name="food-bank" size={24} color="#F2C978"/>
          <Text style={{ color: focused ?  "#F2C978" : "#ffff", fontSize:10,}}> 
            Meals
          </Text>
        </View>
      ) }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false,
        tabBarIcon:({focused}) =>(
          <View>
            <MaterialCommunityIcons name="face-man-profile" size={24} color="#F2C978"  />
            <Text style={{ color: focused ?  "#F2C978" : "#ffff", fontSize:10}}> 
              Profile
            </Text>
          </View>
        ) }}/>
      <Tab.Screen name="Orders" component={Orders } options={{ headerShown: false,
      tabBarIcon:({focused}) =>(
        <View>
          <Fontisto name="shopping-bag" size={18} color="#F2C978" style={{ padding:5 }} />
          <Text style={{ color: focused ?  "#F2C978" : "#ffff", fontSize:10, }}> 
            Orders
          </Text>
        </View>
      ) }} />
    </Tab.Navigator>
  );
}

const styeles = StyleSheet.create({
  shadow:{
    shadowColor: '#F2C978',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation:10
  }
})

export default HomeTabs;