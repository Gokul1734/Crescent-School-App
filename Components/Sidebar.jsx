import React, { useRef, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const CustomSidebar = (props) => {
  const translateX = useRef(new Animated.Value(-250)).current; // Sidebar hidden initially
  
  // Use useEffect to respond to props.var changes
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: props.var ? 0 : -250, // Move in when true, out when false
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [props.var, translateX]); // Run effect when props.var changes

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
        <TouchableOpacity style={{
         backgroundColor: 'gray',
         borderRadius : 10,
         justifyContent: 'center',
         alignItems: 'center',
         width : 150,
         padding : 10
        }}>
         <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    position: 'absolute',
    left: 240, // Changed from 300 to 0 since translateX is relative to this
    top: 0,
    bottom: 0,
    width: 250, // Match with the animation value
    height: height,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'start',
    zIndex: 2
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
  },
});

export default CustomSidebar;