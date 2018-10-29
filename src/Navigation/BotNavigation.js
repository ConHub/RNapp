import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {PageStack} from './DocNavigation'
import {HomeStack} from './MainNavigation'

export const BotNavgation = createBottomTabNavigator({
    
    HomeStack: {
        screen: HomeStack, 
        navigationOptions:({
            title: 'Comparison',
            tabBarOptions: {
                activeTintColor: 'black',
                inactiveTintColor: 'red',
                labelStyle: {
                    fontFamily: 'space-mono',
                    fontSize: 20
                    },
                style: {
                    backgroundColor: 'green',
                    },
            },
            headerTitleStyle: {
                color: 'green',
                fontFamily: 'space-mono'
                },
        }),
    },


      

    
},)



