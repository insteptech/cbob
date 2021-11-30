import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../../screens/auth/Login'
import { colorSet } from '../../styles/colors'
import { Container } from './photos';

const i = 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29pbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'



const AudioView = ({
    isPlay = false,
    text = 'Doc 2',
    onCPress,onAssetPress
}) => {

    return (
        <Container>
                    <TouchableOpacity onPress={()=>onAssetPress()}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, color: colorSet.white }}>16:20</Text>
                <Text style={{ fontSize: 14, color: colorSet.white }}>Bober 2</Text>
                <TouchableOpacity onPress={onCPress}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/c.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: -3, flexDirection: 'row', paddingVertical: 10 }}>
                <Image style={{ width: 30, height: 30, marginRight: 15, opacity: isPlay ? 1 : .6 }} source={require('../../assets/images/sound.png')} />
                <Text numberOfLines={1} style={{ fontSize: 16, color: colorSet.white, textAlign: 'center' }}>{text}</Text>
            </View>
            <Text style={{ fontSize: 14, color: colorSet.white, textAlign: 'center' }}>Saved to server</Text>
            </TouchableOpacity >

        </Container>
    )
}

export default AudioView;

