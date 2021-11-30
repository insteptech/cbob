import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux'
import store from '../store'
import { toggleHome, togglePages } from '../store/reducers/AppActivityReducer'
import { colorSet } from '../styles/colors'
import { shadow } from '../styles/shadow'

// export function FooterButtonsSingle({ icon = null, onPress }) {
//     console.log('onPress',onPress)
//     return (
//         <TouchableOpacity activeOpacity={.5} onPress={onPress ? onPress : () => togglePages(icon ? true : false)}>
//             <LinearGradient
//                 colors={['#C66800', '#FF9724', '#C66800']}
//                 style={{
//                     height: 60,
//                     marginHorizontal: 10,
//                     ...shadow.s25,
//                     borderRadius: 10,
//                     marginTop: 10,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}>
//                 {icon
//                     ?
//                     icon
//                     :
//                     <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorSet.white }}>{store.getState().UserReducer.safeName}</Text>
//                 }
//             </LinearGradient>
//         </TouchableOpacity>
//     )
// }

export function FooterButtonsSingle({ icon = null, onPress }) {
    console.log('onPress',onPress)
    return (
        <TouchableOpacity activeOpacity={.5} onPress={onPress ? onPress : () => togglePages(icon ? true : false)}>
            <LinearGradient
                colors={['#C66800', '#FF9724', '#C66800']}
                style={{
                    height: 60,
                    marginHorizontal: 10,
                    ...shadow.s25,
                    borderRadius: 10,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {icon
                    ?
                    icon
                    :
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorSet.white }}>{store.getState().UserReducer.safeName}</Text>
                }
            </LinearGradient>
        </TouchableOpacity>
    )
}



export const FooterButtons = ({ navigation, icon, onPressBack }) => {

    const position = useSelector(state => state?.UserReducer?.position);

    return (
        <View style={{ flexDirection: position == 0 ? 'row' : 'row-reverse', marginBottom: 10, }}>
            <View style={{ flex: 1 }}>
                <FooterButtonsSingle icon={icon} />
            </View>
            <View style={{ flex: 1, transform: [{ scaleX: position == 0 ? 1 : -1 }] }}>
                <BackButton onPressBack={onPressBack} navigation={navigation} />
            </View>
        </View>
    )
}

export const BackButton = ({ onPressBack, navigation }) => {
    return (
        <TouchableOpacity onPress={onPressBack ? onPressBack : navigation?.goBack} activeOpacity={.5}>
            <LinearGradient
                colors={['#BD0000', '#FD7B7B', '#BD0000']}
                style={{
                    height: 60,
                    marginHorizontal: 10,
                    ...shadow.s25,
                    borderRadius: 10,
                    marginTop: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Image style={{ width: 30, height: 30, }} source={require('../assets/images/arrow.png')} />
            </LinearGradient>
        </TouchableOpacity>
    )
}