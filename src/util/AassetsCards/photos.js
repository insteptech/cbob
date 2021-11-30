import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colorsPrimaryView } from '../../screens/auth/Login'
import { colorSet } from '../../styles/colors'
import { shadow } from '../../styles/shadow'

const i = 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29pbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'



const PhotosVideo = ({ text, onCPress,onAssetPress }) => {

    return (

        <Container style={{ paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, marginHorizontal: 20, marginTop: 25 }}>
        <TouchableOpacity onPress={()=>onAssetPress()}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 20, color: colorSet.white }}>{text}</Text>
                    <TouchableOpacity onPress={onCPress}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../assets/images/c.png')} />
                    </TouchableOpacity>
                </View>

                <Image style={{ height: 145, marginTop: 15, borderWidth: 1, borderRadius: 3, marginBottom: 10 }} source={{ uri: i }} />
                <Text style={{ fontSize: 14, color: colorSet.white, textAlign: 'center' }}>Saved to server</Text>
                </TouchableOpacity>

        </Container>

    )
}

export default PhotosVideo;


export const Container = ({ styles, children }) => {
    return (
        <LinearGradient colors={colorsPrimaryView} style={{ paddingHorizontal: 15, borderRadius: 10, paddingVertical: 10, marginHorizontal: 20, marginTop: 25, ...shadow.s3, ...styles }}>
            {children}
        </LinearGradient>
    )
}