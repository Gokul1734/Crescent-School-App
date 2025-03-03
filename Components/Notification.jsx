import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import Ico from 'react-native-vector-icons/FontAwesome6';

const Notification = () => {
  return (
    <View style={styles.container}>
     <Icon name="notifications-off" size={50} color={'#e8962a'} />
     <Text style={styles.Title}>Notification Settings</Text>
     <Text style={styles.para}>Subscribe to receive important notifications about classes, exams, and events directly on your device.</Text>
     <TouchableOpacity style={styles.Button}>
      <Ico name="mobile-screen-button" size={25} color={'#f0f0f0'} />
      <Text style={styles.buttonText}>Enable Notifications</Text>
     </TouchableOpacity>
     <TouchableOpacity style={[styles.Button,{backgroundColor : '#dedede'}]}>
      <Icon name="notifications-sharp" size={25} color={'#e8962a'} />
      <Text style={[styles.buttonText,{color : 'black'}]}>Test Notification</Text>
     </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
 container: {
  justifyContent : 'center',
  alignItems : 'center',
  backgroundColor : 'white',
  margin : 20,
  padding : 20,
  gap: 20,
  borderRadius : 10,
  shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    // Android Shadow
    elevation: 5,
},
Topic:{
 fontSize : 24,
 color : '#4361EE',
 },
 content:{
  fontSize : 15,
  color : '#636161'
  },
  Title:{
   fontSize : 20,
   color : 'black',
   marginBottom : 10
   },
   para:{
    fontSize : 15,
    color : '#636161',
    marginBottom : 10,
    textAlign : 'center'
    },
    Button:{
     backgroundColor : '#4361EE',
     flexDirection : 'row',
     justifyContent : 'center',
     alignItems : 'center',
     gap : 10,
     color : 'white',
     padding : 15,
     borderRadius : 10,
    },
    buttonText : {
     fontSize : 15,
     color : 'white',
    }
}
)

export default Notification