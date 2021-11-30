import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../../screens/auth/Login'
import { colorSet } from '../../styles/colors'
import { Container } from './photos';

const i = 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29pbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'



const Link = ({
    showIcon = false,
    text = 'sass',
    onAssetPress
}) => {

    return (
        <Container>
                    <TouchableOpacity onPress={()=>onAssetPress()}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colorSet.black }}>Bober 2</Text>
              
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: -3, flexDirection: 'row', paddingVertical: 10 }}>
               
                <Text numberOfLines={1} style={{ fontSize: 16, color: colorSet.black, textAlign: 'center' }}>https://www.example.com/abcde.pdf</Text>
            </View>
            </TouchableOpacity >

        </Container>
    )
}

export default Link;

