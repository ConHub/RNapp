import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Icon } from './Icon.js';
import { Title } from './Title.js';

export const Layout = ({onPress, title, iconName, iconSize, iconColor}) => {
    
        return (
            <TouchableOpacity 
                onPress={onPress}
                style={{backgroundColor: 'black', width: '100%', height: '100%', borderWidth: 0, borderColor: 'green'}}>
                <View style={{backgroundColor: 'black', height: '100%', width: '30%', alignItems: 'center'}}>
                    <Icon iconName={iconName} iconSize={iconSize} iconColor={iconColor}/>
                </View>
                <Title title={title}/>
            </TouchableOpacity>
        )
}

{/* <TouchableOpacity style={{backgroundColor: 'black', width: '100%', height: '100%', borderWidth: 5, borderColor: 'red'}}>
<View style={{backgroundColor: 'white', height: '100%', width: '30%', alignItems: 'center'}}>
    <Icon name="md-filing" size={83} color="red"/>
</View>
<Title title="File Mangement"/>
</TouchableOpacity> */}