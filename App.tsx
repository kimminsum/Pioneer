import React from 'react'
import {Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()

function HomeScreen() {
  return <Text>Home</Text>
}

function SearchScreen() {
  return <Text>Search</Text>
}

function NotificationScreen() {
  return <Text>Notification</Text>
}

function MessageScreen() {
  return <Text>Message</Text>
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fb8c00'
        }} >
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: () => (
              <Icon 
                name='home' 
                size={30}
              />
            )
          }} />
        <Tab.Screen 
          name='Search' 
          component={SearchScreen} 
          options={{
            title: '홈',
            tabBarIcon: () => (
              <Icon 
                name='planet'
                size={30}  
              />
            )
          }} />
        <Tab.Screen 
          name='Notification'
          component={NotificationScreen}
          options={{
            title: '홈',
            tabBarIcon: () => (
              <Icon
                name='ios-person'
                size={30}  
              />
            )
          }} />
        <Tab.Screen 
          name='Message' 
          component={MessageScreen}
          options={{
            title: '홈',
            tabBarIcon: () => (
              <Icon
                name='planet'
                size={30}
              />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}