import React, { useState } from 'react';
import {View, Image, Text} from 'react-native';
import axios from 'axios';

export default function BannerSlider({data}) {

  const [Annonce , setAnnonce] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.137.1:8000/api/annonce')
    .then(res => {
        console.log(res.data);
        setData(res.data);
    }).catch (err => {
        console.log(err);
        console.log('makin walo');
    }) 
},[])



  return (
    <View>
      <Image
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 10}}
        
      />
      <Text>{data.title}</Text>
    </View>
  );
}