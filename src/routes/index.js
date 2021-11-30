import React, { Component, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import Splash from '../screens/splash';
import Login from '../screens/auth/Login';
import AppInfo from '../screens/auth/AppInfo';


import QuickC from './QuickC';
import Safes from './Safes';
import { TokenContext } from '../constents/context';
import { changeAppStatus } from "../store/reducers/AppActivityReducer";


const Stack = createStackNavigator();


const Navigator = () => {

    const initialState = {
        safe: null,
        bober: null,
        boberId: null,
        password: null,
        auth: false,
        initMobile: [],
        uid: null,
        safeList: [],
        home: 0


        // isLoading: true,
        // userToken: null,

        // profileData: [],
        // cartData: [],
    };

    const initialReducer = (prevState, action) => {
        switch (action.type) {
            case 'SAVE_AUTH':
                return {
                    ...prevState,
                    // userToken: action.token,
                    // isLoading: false,
                    // defaultScreen: action.defaultScreen,
                    // profileData: action.profileData,

                    safe: action.safe,
                    bober: action.bober,
                    password: action.password,
                    auth: action.auth,
                    boberId: action.boberId,
                    initMobile: action.initMobile,
                    uid: action.uid

                };
            case 'SAVE_safelist':
                return {
                    ...prevState,


                    safeList: action.safeList

                };
            case 'SAVE_home':
                return {
                    ...prevState,


                    home: action.home

                };

        }
    };


    const [state, dispatch] = React.useReducer(initialReducer, initialState);
    console.log('home',state.home)

    const app_status = useSelector((state) => state.AppActivityReducer.app_status);


    const _renderNavigator = () => {

        // if(initialState.auth){
        //     changeAppStatus(2)
        // }
        // else{
        //     null
        // }


        switch (app_status) {

            case -1:
                return (
                    <Stack.Screen name="AppInfo" component={AppInfo} options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} />
                );
            case 0:
                return (
                    <Stack.Screen name="Splash" component={Splash} />
                );

            case 1:
                return (
                    <Stack.Screen name="Login" component={Login} options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }} />
                );

            case 2:
                return (
                    <Stack.Screen
                        name='Dashboard'
                        component={QuickC}
                        options={{
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                        }}
                    />
                )

            case 3:
                return (
                    <Stack.Screen
                        name='Dashboard2'
                        component={Safes}
                        options={{
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                        }}
                    />
                )
        }
    }


    useEffect(() => {
        if (initialState.auth) {
            changeAppStatus(2)
        }
        else {
            null
        }
    }, [])


    return (
        <>
            <TokenContext.Provider value={{ token: state, dispatch: dispatch }}>

                <NavigationContainer>
                    <Stack.Navigator headerMode='none' options={{
                        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    }}
                    >

                        {_renderNavigator()}
                    </Stack.Navigator>

                </NavigationContainer>
            </TokenContext.Provider>

        </>
    );
}

export default Navigator
