import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react'
import { ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native';
import { Dimensions, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
const Login = () => {
  const [studentId,setStudentId] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showPassword,setShowPassword] = useState(false);
  const navigation = useNavigation();

  const loginUser = async () => {
   if (password != confirmPassword) {
    Alert.alert("Passwords didnt Match");
   }
   else {
    setLoading(true);
    try {
     const response = await axios.post('http://192.168.29.165:3500/register',{
     "studentId": studentId,
     "password": password
    });
    if (response.status == 201) {
     setLoading(false);
     console.log(response.data);
     Alert.alert("Registration Successful");
     navigation.navigate('Login');
     
    }
    } catch (e) {
     console.log("Error Logging In",e);
    }
   }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0} style={styles.container}>
     <Image source={require("../assets/logo.png")} style={styles.image} />
     <Text style={styles.title}>Create New Account</Text>
     <View>
     <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Student ID"
        placeholderTextColor="#666"
        value={studentId}
        onChangeText={setStudentId}
      />
     </View>
     <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#666"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
       <Icon
         name={showPassword ? "eye-off-outline" : "eye-outline"}
         size={20}
         color="#666"
       />
     </TouchableOpacity>
     </View>
     <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#666"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
       <Icon
         name={showPassword ? "eye-off-outline" : "eye-outline"}
         size={20}
         color="#666"
       />
     </TouchableOpacity>
     </View>
     </View>
     <View style={styles.buttonsContainer}>
     <TouchableOpacity onPress={() => {
      navigation.navigate('Login');
     }}>
      <Text style={styles.navButton}>Already have an Account ?  <Text style={{paddingHorizontal : 10, textDecorationLine : 'underline'}}>Login</Text></Text>
     </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={loginUser}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.loginButtonText}>REGISTER</Text>
        )}
      </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
   backgroundColor: '#f2f2f2',
   alignItems: 'center',
   justifyContent: 'center',
   padding : 5,
   gap : 20
 },
 title: {
  fontSize: 25,
  flexWrap : 'nowrap',
  color: '#4361EE',
  fontWeight : 800
 },
 image: {
  width: 100,
  height: 100,
  borderRadius : 50
  },
 input: {
   marginLeft: 10,
   fontSize: 16,
   textAlignVertical: "center",
   paddingVertical: Platform.OS === "android" ? 0 : 5,
 },
 inputContainer: {
  justifyContent : 'space-between',
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: height * 0.010,
  width : width /1.2,
  height: Platform.OS === "ios" ? 55 : 45,
  backgroundColor: "white",
  ...Platform.select({
    ios: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 5,
    },
  }),
 },

 buttonsContainer: {
  gap: 15,
 },
 loginButton: {
  backgroundColor: "#4361EE",
  padding: Platform.OS === "ios" ? 15 : 12,
  width : width / 1.2,
  borderRadius: 8,
  alignItems: "center",
  ...Platform.select({
    ios: {
      shadowColor: "#4361EE",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    android: {
      elevation: 3,
    },
  }),
 },
 loginButtonText: {
  color: "white",
  fontSize: 16,
  fontWeight: "600",
  includeFontPadding: false,
 },
 navButton : {
  width : width / 1.2,
  color : '#4361EE',
  fontSize : 16
 }

});


export default Login