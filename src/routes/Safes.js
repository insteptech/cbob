import React, { Component } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../screens/safe/home';
import permissions from '../screens/safe/permissions'
import notification from '../screens/safe/notification'
import exit from '../screens/safe/exit'
import safe_position from '../screens/safe/safe_position'
import SafeChange from '../screens/safe/SafeChange'
import Csettings from '../screens/safe/Csettings';
import date_time_format from '../screens/safe/date_time_format';
import safeExit from '../screens/safe/safeExit';
import cAppChange from '../screens/safe/cAppChange';
import cSafeLogo from '../screens/safe/cSafeLogo';


const Stack = createStackNavigator();

const noHeader = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

const QuickC = () => {
    return (
        <Stack.Navigator screenOptions={noHeader}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="permissions" component={permissions} />
            <Stack.Screen name="notification" component={notification} />
            <Stack.Screen name="exit" component={exit} />
            <Stack.Screen name="safe_position" component={safe_position} />
            <Stack.Screen name="SafeChange" component={SafeChange} />
            <Stack.Screen name="cAppChange" component={cAppChange} />

            
            <Stack.Screen name="cSafeLogo" component={cSafeLogo} />

            <Stack.Screen name="safeExit" component={safeExit} />

            <Stack.Screen name="cSETTINGS" component={Csettings} />
            <Stack.Screen name="date_time_format" component={date_time_format} />



        </Stack.Navigator>
    )
}

export default QuickC