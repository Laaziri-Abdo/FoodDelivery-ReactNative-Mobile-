import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native-animatable';

import Home from './home'

function OnboardingScreen() {
  return (
    <Onboarding
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/login.svg')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    }
   
  ]}
/>
  )
}

export default OnboardingScreen