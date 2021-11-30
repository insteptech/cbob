
import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../screens/auth/Login'
import { colorSet } from '../styles/colors'
const InfoView = ({contactDetail,boldTitle,text}) => {

    // console.log('contactDetailsss',contactDetail)
    return (
        <LinearGradient
            colors={colorsPrimaryView}
            style={{ height: 80, borderRadius: 10, marginHorizontal: 15, padding: 10, marginTop: 20, alignItems: 'center' }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: colorSet.black,
            }}>{contactDetail.name}</Text>

            <Text style={{
                fontSize: 14,
                marginTop: 5,

                textAlign: 'center',
                color: colorSet.black,
            }}>
                <Text style={{ fontWeight: 'bold', }}>
                    {boldTitle}
                </Text>
                05-24-2011 11:37
            </Text>
        </LinearGradient>
    )
}

export default InfoView
