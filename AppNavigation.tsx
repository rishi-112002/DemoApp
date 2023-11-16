import React, { useEffect, useState, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './uiLayout/TabNavigation';
import LoginScreen from './uiLayout/loginPage';
import SignUpScreen from './uiLayout/SignUpPage';
import {  useSelector } from 'react-redux';
import { RootState, store } from './reduxIntegration/Store'
import SplashScreen from './uiLayout/Splash';
import { inputAuth } from './reduxIntegration/Reducer';

const Homestack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
export const Context = createContext(false);

function AppNavigation() {
    const [loader, setLoader] = useState(true);
    const userEmail = useSelector((state: RootState) => {
        console.log('state', state);

        return state.auth.email

    })
    const getuserData = async () => {
        const sleep = (ms: any) => new Promise(
            (r) => setTimeout(r, ms)
        );
        try {
            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            if (email && password) {
                // console.log('Email:', email);
                // console.log('Password:', password);
                const object = {
                    userEmail: email,
                    userPassword: password,
                }
                store.dispatch(inputAuth(object))
                // console.log("object", object);
            }
            await sleep(2000);
        }
        finally {
            setLoader(false)
        }
    };

    useEffect(() => {
        getuserData();
    }, []);



    if (loader) {
        return <SplashScreen />
    };
    return (

        <NavigationContainer>
            {userEmail ? (
                <Homestack.Navigator>
                    <Homestack.Screen name='HomeScreen' component={HomeScreen} />
                </Homestack.Navigator>

            ) : (
                <AuthStack.Navigator>
                    <AuthStack.Screen name='Login' component={LoginScreen} />
                    <AuthStack.Screen name='SignUP' component={SignUpScreen} />
                </AuthStack.Navigator>
            )}
        </NavigationContainer>
    )
}
export default AppNavigation;

