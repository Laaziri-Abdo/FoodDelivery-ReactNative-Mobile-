import React, {useState, useEffect} from 'react';
import {  StyleSheet, View, FlatList, Text, TextInput, Pressable } from 'react-native';
import {  Card, Title, Paragraph  } from 'react-native-paper';
import { getAllMeals } from '../service/mealsService'
import axios from 'axios';
const Cards = () => {
  const [ Data, setData ] = useState([])

  useEffect(() => {
    axios.get('http://192.168.137.1:8000/api/repas')
    .then(res => {
        console.log(res.data);
        setData(res.data);
    }).catch (err => {
        console.log(err);
        console.log('makin walo');
    }) 
},[])

  return (
    <View style={styles.container} >
      {Data.map((items, index) =>(
         <Card key={index} style={styles.content}>
         <Card.Content style={styles.card}>
           <Title style={styles.titel}>{items.title}</Title>
           <Paragraph>{items.descreption}</Paragraph>
           <View style={styles.type}>
                <Text style={styles.text} >{items.type}</Text>
           </View>
           <View style={styles.price}>
                <Text style={styles.text} >{items.price}$</Text>
           </View>
         </Card.Content>
     <Card.Cover style={styles.image} source={require('../assets/pizza.jpg')}/>
     
     <Card.Actions style={styles.order_session}>
     <TextInput
         keyboardType='numeric'
           style={styles.TextInput}
           placeholder="Quantity"
           placeholderTextColor="#C1C0BB"
         />
       <Pressable style={styles.order_button}>
          <Text style={styles.order} >Order</Text>
       </Pressable>
 
     </Card.Actions>
   </Card>
      ))}
      
  
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    
  
  },
  content:{
    width: '90%',
    borderRadius: 10,
    marginVertical:10,
    position:'relative',
    
  },
  order:{
    color:"#FFF",
    fontFamily:'poppins-regular'

  },
  titel:{
    color: "#bc8c4c",
    fontFamily:'poppins-regular'
  },

  TextInput: {
    height: 45,
    padding: 10,
    width:"70%",
    marginLeft: 10,
    backgroundColor: "#EBE9E6",
    borderRadius: 5,
    fontFamily:'poppins-regular'

    
  },
  order_session:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    
  },
  order_button:{
    width: "20%",
    borderRadius: 5,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    backgroundColor: "#bc8c4c",
    fontFamily:'poppins-regular'

  },
  type:{
    position: 'absolute',
    backgroundColor: "#bc8c4c",
    top: 0,
    right:0,
    paddingHorizontal:12,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    fontFamily:'poppins-regular'

  },
  price:{
    position: 'absolute',
    backgroundColor: "#bc8c4c",
    top: 25,
    right:0,
    paddingHorizontal:12,
    borderBottomStartRadius: 10,
    fontFamily:'poppins-regular'

  },
  text:{
    color: "#fff",
    fontFamily:'poppins-regular'

  }
 



})

export default Cards;
