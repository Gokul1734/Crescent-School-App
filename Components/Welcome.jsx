import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Welcome = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.Topic}>Welcome, {'Student'}</Text>
     <Text style={styles.content}>Stay connected with important updates and announcements.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
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
}
)

export default Welcome