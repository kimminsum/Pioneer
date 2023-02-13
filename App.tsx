import React from 'react'
import {Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()

function HomeScreen() {
  return <Text>자신의 전적을 볼 수 있는 창입니다. 추후 언어 변경 시스템을 넣을 예정입니다.</Text>
}

function WordQuiz() {
  return <Text>어원 퀴즈를 통해서 단어를 외울 수 있습니다.</Text>
}

function SearchEtymology() {
  return <Text>어원을 찾아서 단어의 이해를 쉽게 합니다.</Text>
}

function SearchPublisher() {
  return <Text>학교 출판사에 따라 단어가 정렬 되게 만듭니다.</Text>
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarShowLabel: true,
          tabBarActiveTintColor: '#fb8c00'
        }} >
        <Tab.Screen 
          name='Home'
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: () => (
              <Icon 
                name='logo-buffer' 
                size={30}
              />
            )
          }} />
        <Tab.Screen 
          name='Word Quiz' 
          component={WordQuiz} 
          options={{
            title: '어원 퀴즈',
            tabBarIcon: () => (
              <Icon 
                name='school'
                size={30}  
              />
            )
          }} />
        <Tab.Screen 
          name='어원 찾기'
          component={SearchEtymology}
          options={{
            title: '어원 찾기',
            tabBarIcon: () => (
              <Icon
                name='compass'
                size={30}
              />
            )
          }} />
        <Tab.Screen 
          name='출판사 찾기' 
          component={SearchPublisher}
          options={{
            title: '출판사 찾기',
            tabBarIcon: () => (
              <Icon
                name='download'
                size={30}
              />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}