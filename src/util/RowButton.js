import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../screens/auth/Login'
import { colorSet } from '../styles/colors'
import { shadow } from '../styles/shadow'

export function RowButton({ title, onPress, image,item, }) {
    //  console.log('name',item)
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.7}>
            <LinearGradient
                colors={colorsPrimaryView}
                style={{ height: 48, borderRadius: 10, marginHorizontal: 15, padding: 10, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                {image === undefined?null:<Image source={{ uri: 'https://Kevin:456789@safe101.com.au/safe101-test/api/resourceApi/getPhoto?id=75405' }} style={{ height: 30, width:30 }} />}

                {title === undefined ? null : <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: colorSet.white,
                }}>{title}</Text>}

            </LinearGradient>
        </TouchableOpacity>
    )
}
