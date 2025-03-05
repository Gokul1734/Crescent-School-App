import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState,useContext } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Screens/Home';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Login from './Screens/Login';
import Register from './Screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider,AuthContext } from './AuthProvider';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
 const { user, loading } = useContext(AuthContext);

 if (loading) {
   return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <ActivityIndicator size="large" color="#0000ff" />
     </View>
   );
 }

 return (
  <Stack.Navigator initialRouteName={user ? "Home" : "Login"} screenOptions={{headerShown : false}}> 
   <Stack.Screen name="Home" component={Home} />
   <Stack.Screen name="Login" component={Login} />
   <Stack.Screen name="Register" component={Register} />
 </Stack.Navigator>
 );
};


export default function App() {
  // const { user, setUser, loading } = useContext(AuthContext);
  // console.log(user);
  return (
   <AuthProvider>
    <NavigationContainer>
     <AppNavigator />
   </NavigationContainer>
   </AuthProvider>
  )
}


