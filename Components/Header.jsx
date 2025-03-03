import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import CustomSidebar from './Sidebar';

const { width, height } = Dimensions.get('window');


const Header = (props) => {
  return (
    <SafeAreaView style={style.container}>
     <View style={{flexDirection : 'row',justifyContent : 'center',alignItems : 'center',padding : 20,gap : 20}}>
     <Image source={require("../assets/logo.png")} style={{height : 50,width : 50,borderRadius : 50}} resizeMode='contain' />
     <Text style={style.text}>Crescent</Text>
     </View>
     <TouchableOpacity onPress={() => {props.func(!props.var)}} style={{padding : 10}}>
      <Icon name="menu" size={40} color="#4361EE" />
     </TouchableOpacity>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
 container: {
  backgroundColor: '#ffff',
  minWidth : width,
  height : height / 7.5,
  flexDirection : 'row',
  justifyContent : 'space-between',
  alignItems : 'center',
  },
  header: {
   fontSize: 20,
   color: '#333',
   
   },
  text: {
   fontSize: 30,
   color: '#4361EE',
   
  }
})

export default Header