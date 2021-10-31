import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './assets/screens/Login';
import Home from './assets/screens/Home';
import ProductDetails from './assets/screens/ProductDetails';
import Cart from './assets/screens/Cart';
import Checkout from './assets/screens/Checkout';
import Password from './assets/screens/Password';

const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {

  const [loaded] = useFonts({
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  })
  if (!loaded) {
      return null;
  }

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
        <stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }}/>
        <stack.Screen name='Cart' component={Cart} options={{ headerShown: false }}/>
        <stack.Screen name='Checkout' component={Checkout} options={{ headerShown: false }}/>
        <stack.Screen name='Password' component={Password} options={{ headerShown: false }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}