import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions, Animated, TouchableOpacity } from "react-native";
import { colorSet, opacityColor } from '../../styles/colors';
import LinearGradient from 'react-native-linear-gradient';
import { changeAppStatus } from "../../store/reducers/AppActivityReducer";
import { TokenContext } from '../../constents/context';


const colors = [colorSet.primaryGradient, opacityColor(colorSet.primary, 54), colorSet.primaryGradient];
export const buttonColor = ['#01A509', opacityColor('#5BF463', 55), '#01A509']
const { width, height } = Dimensions.get('screen');

export default function index() {
       let auth = React.useContext(TokenContext);
    console.log('authss',auth)
console.log('sasasas')
    const progress = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {

        Animated.timing(progress, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true
        }).start();

    }, []);


    const onPressButton = () => {
        changeAppStatus(1);
        
        
        auth.dispatch({
            type: 'SAVE_home',
            home:1
          });

          
        // setInterval(() => {
        //     alert(store.getState().AppActivityReducer.app_status)
        // }, 1000);
        // setTimeout(()))
    }

    const outputRange = [0, .3];

    const TextStyle = {
        transform: [
            {
                translateX: progress.interpolate({
                    inputRange: outputRange,
                    outputRange: [170, 0],
                    extrapolate: 'clamp'
                })
            },

            {
                rotate: progress.interpolate({
                    inputRange: outputRange,
                    outputRange: ['30deg', '0deg'],
                    extrapolate: 'clamp'
                })
            },
        ],
        opacity: progress.interpolate({
            inputRange: outputRange,
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
    }

    const TextStyle2 = {
        transform: [
            {
                translateX: progress.interpolate({
                    inputRange: outputRange,
                    outputRange: [-70, 0],
                    extrapolate: 'clamp'
                })
            },

            {
                rotate: progress.interpolate({
                    inputRange: outputRange,
                    outputRange: ['-30deg', '0deg'],
                    extrapolate: 'clamp'
                })
            },
        ],
        opacity: progress.interpolate({
            inputRange: outputRange,
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
    }



    return (
        <LinearGradient colors={colors} style={{ flex: 1, paddingVertical: '10%', paddingTop: '30%' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Animated.Image style={[Styles.ImageLogoStyle, TextStyle2]} source={require('../../assets/images/c.png')} />
                <Animated.View
                    style={TextStyle}>
                    <Text style={[Styles.TextStyle]}>Bob</Text>
                </Animated.View>

            </View>

            <Animated.View
                style={{
                    opacity: progress.interpolate({
                        inputRange: [0.6, .8],
                        outputRange: [0, 1],
                        extrapolate: 'clamp'
                    }),
                    transform: [
                        {
                            translateY: progress.interpolate({
                                inputRange: [0.6, .8],
                                outputRange: [20, 0],
                                extrapolate: 'clamp'
                            })
                        }
                    ]
                }}
            >
                <Text style={[Styles.TextStyle, { fontSize: 25, textTransform: 'none', top: -4 }]}>Powered by</Text>
            </Animated.View>

            <Animated.View style={{
                flex: 1,
                opacity: progress.interpolate({
                    inputRange: [0.7, 1],
                    outputRange: [0, 1],
                    extrapolate: 'clamp'
                }),
                transform: [
                    {
                        translateY: progress.interpolate({
                            inputRange: [0.7, .9],
                            outputRange: [60, 0],
                            extrapolate: 'clamp'
                        })
                    },
                    {
                        scale: progress.interpolate({
                            inputRange: [0.7, .9],
                            outputRange: [2, 1],
                            extrapolate: 'clamp'
                        })
                    },
                    {
                        translateX: progress.interpolate({
                            inputRange: [0.7, .9],
                            outputRange: [60, 0],
                            extrapolate: 'clamp'
                        })
                    }
                ]
            }}>
                <Image style={Styles.ImageStyle} source={require('../../assets/images/logo.png')} resizeMode='contain' />
            </Animated.View>
            <TouchableOpacity activeOpacity={.6} onPress={onPressButton}>
                <LinearGradient colors={buttonColor} style={Styles.ButtonStyle}>
                    <Animated.View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={{ height: 25, width: 25, transform: [{ scaleX: -1 }] }} source={require('../../assets/images/arrow.png')} resizeMode='contain' />
                    </Animated.View>
                </LinearGradient>
            </TouchableOpacity>
        </LinearGradient >
    )
}

const Styles = StyleSheet.create({
    TextStyle: {
        fontSize: 44,
        textAlign: 'center',
        color: '#ffff',
        fontWeight: 'bold',
        transform: [{ rotateX: '20deg' }]
    },
    ImageLogoStyle: {
        width: 24,
        marginTop: 12,
        height: 24
    },
    ImageStyle: {
        width: width / 1.7,
        height: width / 1.7,
        alignSelf: 'center',

    },

    ButtonStyle: {
        height: 85,
        backgroundColor: '#01a509',
        marginHorizontal: 20,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
    }
})