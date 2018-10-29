import React from 'react';
import { 
        createStackNavigator, 
        createBottomTabNavigator, 
        createMaterialTopTabNavigator 
        } 
        from 'react-navigation';

import {PageStack} from './DocNavigation';
import {HomeStack} from './MainNavigation';
import { BotNavgation } from './BotNavigation';

export const AppNavigation = createStackNavigator({
    BottomStack: {
        screen: BotNavgation, 
        navigationOptions:({
            title: 'Manual Guide',
            headerStyle: {
                backgroundColor: 'black'
            },
            headerTitleStyle: {
                color: 'green',
                fontFamily: 'space-mono'
            },
        }),

    },

    Home: {
        screen: HomeStack,
        navigationOptions:({
            title: 'Manual Selections',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                color: 'green',
                fontFamily: 'space-mono'
            }
    })
  },
    Page: {
        screen: PageStack
    },



  
});