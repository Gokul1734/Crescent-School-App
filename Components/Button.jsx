import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
const {width,height} = Dimensions.get('window');

const NavButton = (props) => {

 return (
  <TouchableOpacity style={styles.container}>
   <Text style={{
    fontSize: 40,
   }}>{props.icon}</Text>
   <Text style={styles.Topic}>{props.name}</Text>
   <Text style={styles.content}>{props.content}</Text>
  </TouchableOpacity>
 ) 
}

const styles = StyleSheet.create({
  container: {
   width : width / 1.17,
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
});

export default NavButton