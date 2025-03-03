import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Notification from './Components/Notification';
import NavButton from './Components/Button';
import Footer from './Components/Footer';
import CustomSidebar from './Components/Sidebar';
import { useState } from 'react';

export default function App() {
  const [open,isOpen] = useState(false);
  return (
   <View style={styles.container}>
    <Header var={open} func={isOpen}/>
    <CustomSidebar var={open} func={isOpen} />
    <ScrollView contentContainerStyle={[styles.container,{justifyContent:'start',paddingBottom : 120}]}>
      <Welcome/>
      <Notification/>
      <NavButton name="Class Updates" icon="📝" content="Receive timely notifications about class schedule changes, assignments, and instructor announcements." />
      <NavButton name="Exam Alerts" icon="📊" content="Never miss an exam with reminders about upcoming tests, submission deadlines, and result announcements." />
      <NavButton name="Campus Events" icon="🎭" content="Stay informed about campus activities, workshops, seminars, and cultural events happening around you." />
      <StatusBar style="auto" />
      <Footer />
    </ScrollView>
    
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'start',
    padding : 5,
  },
});
