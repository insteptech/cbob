import React, { Component } from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '../screens/quickC/home';
import RecycleBin from '../screens/quickC/RecycleBin'
import AssetsList from '../screens/quickC/AssetList'
import AssetInfo from '../screens/quickC/AssetInfo'
import Contacts from '../screens/quickC/Contacts'
import ContactsDetail from '../screens/quickC/ContactsDetail'
import ChatScreen from '../screens/quickC/ChatScreen'
import ChatUsers from '../screens/quickC/ChatUsers'
import ActionType from '../screens/quickC/ActionType';
import SingleChat from '../screens/quickC/SingleChat';
import MixedChat from '../screens/quickC/MixedChat';
import QUICKcLOGO from '../screens/quickC/QUICKcLOGO';

import cBoBGroups from '../screens/quickC/cBoBGroups';


const Stack = createStackNavigator();

const noHeader = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
}

const QuickC = () => {
    return (
        <Stack.Navigator screenOptions={noHeader}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RecycleBin" component={RecycleBin} />
            <Stack.Screen name="AssetsList" component={AssetsList} />
            <Stack.Screen name="AssetInfo" component={AssetInfo} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="ContactsDetail" component={ContactsDetail} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
            {/* <Stack.Screen name="ProgresswithcPHOTO" component={progressWIthcPhoto} />
            <Stack.Screen name="ProgresswithcAUDIO" component={progressWIthcAudio} />
            <Stack.Screen name="ProgresswithcVIDEO" component={progressWIthcVideo} /> */}


            <Stack.Screen name="ChatUsers" component={ChatUsers} />
            <Stack.Screen name="ActionType" component={ActionType} />
            <Stack.Screen name="SingleChat" component={SingleChat} />
			<Stack.Screen name="MixedChat" component={MixedChat} />
            <Stack.Screen name="QUICKcLOGO" component={QUICKcLOGO} />
            <Stack.Screen name="cBoBGroups" component={cBoBGroups} />
 





        </Stack.Navigator>
    )
}

export default QuickC