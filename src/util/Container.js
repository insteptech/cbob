import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorSet, opacityColor } from '../styles/colors';

const colors = [colorSet.primaryGradient, opacityColor(colorSet.bgColor, 80), colorSet.primaryGradient]

export default function Container({ style, children }) {
    return (
        <LinearGradient colors={colors} style={[{ flex: 1 }, style]}>
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </LinearGradient>
    )
}
