import React from 'react';
import {View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const Icon = ({iconName, iconSize, iconColor}) => {
    return ( 
    <Ionicons name={iconName} size={iconSize} color={iconColor} />
    )
}