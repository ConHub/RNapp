import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Icon } from './Icon.js';
import { Layout } from './Layout.js';

export const BoxButton = ({onPress, iconName, iconSize, iconColor, title}) => {
        return (

            <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
                <Layout 
                    iconName={iconName}
                    iconSize={iconSize}
                    iconColor={iconColor}
                    title={title}
                    onPress={onPress}
                />  
            </View>
  
        )
    }

{/* <TouchableOpacity style={{backgroundColor: 'black', width: '100%', height: '100%', borderWidth: 5, borderColor: 'red'}}>
<View style={{backgroundColor: 'white', height: '100%', width: '30%', alignItems: 'center'}}>
    <Icon name="md-filing" size={83} color="red"/>
</View>
<Title title="File Mangement"/>
</TouchableOpacity> */}