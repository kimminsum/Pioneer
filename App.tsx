import React from 'react'
import {Text, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import GoogleLogin from "react-google-login"

import HomeScreen from './assets/screens/HomeScreen'
import WordQuiz from './assets/screens/WordQuiz'
import SearchEtymology from './assets/screens/SearchEtymology'
import SearchPublisher from './assets/screens/SearchPublisher'


const Tab = createBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#ff5f52'
        }} >
        {/* HomeScreen */}
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIcon: () => (
              <Icon 
                name='logo-buffer' 
                size={30} />
              )}} />
        {/* WordQuiz */}
        <Tab.Screen 
          name='Word Quiz' 
          component={WordQuiz} 
          options={{
            title: '어원 퀴즈',
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIcon: () => (
              <Icon
                name='school'
                size={30} />
              )}} />
        {/* SearchEtymology */}
        <Tab.Screen 
          name='어원 찾기'
          component={SearchEtymology}
          options={{
            title: '어원 찾기',
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIcon: () => (
              <Icon
                name='compass'
                size={30} />
              )}} />
        {/* SearchPublisher */}
        <Tab.Screen 
          name='출판사 찾기' 
          component={SearchPublisher}
          options={{
            title: '출판사 찾기',
            tabBarLabelStyle: styles.tabBarLabelStyle,
            tabBarIcon: () => (
              <Icon
                name='download'
                size={30} />
            )}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  tabBarLabelStyle:{
    fontSize: 14,
  },
})


const responseGoogle = (res) => {
    console.log(res);
  };