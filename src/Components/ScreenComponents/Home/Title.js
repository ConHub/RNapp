import React from 'react';
import {Text} from 'react-native';
import { MonoText } from '../../Styles/MonoText';

export const Title = ({title}) => {
    return (
        <MonoText style={{
            position: 'absolute', 
            marginLeft: 120, 
            textAlign: 'center', 
            color: 'green', 
            fontSize: 16,
            
        }}>
            {title}
        </MonoText>
    )
}


