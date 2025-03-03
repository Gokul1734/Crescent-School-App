import React from 'react'
import { Text, View, Dimensions } from 'react-native'

const {width,height} = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={{
     backgroundColor : 'white',
     width : '120%',
     height : '10%',
     alignItems : 'center',
     justifyContent : 'start',
     padding : 20
    }}>
     <Text>© 2025 NotifyEdu - Student Notification System</Text>
    </View>
  )
}

export default Footer