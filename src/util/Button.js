import React, { Component } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorSet } from '../styles/colors'
import { shadow } from '../styles/shadow'


export const ButtonColors = {
    red: ['#BD0000', '#FD7B7B', '#BD0000'],
    green: ["#01A509", "#5BF463", "#01A509"],
}


export const RoundButton = ({ onPress, color = ButtonColors.green, text = 'on', textStyle, containerStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.7}>
            <LinearGradient colors={color} style={{ height: 93, width: 93, borderRadius: 100, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 30, ...shadow.s20, ...containerStyle }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: colorSet.white, ...textStyle }}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
