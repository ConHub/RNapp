import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';

export const HomeStack = createStackNavigator({
    Home: HomeScreen

})

