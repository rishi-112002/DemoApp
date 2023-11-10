import React, { useEffect, useState, createContext } from 'react';
import { View, ActivityIndicator, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './uiLayout/HomeScreen';
import LoginScreen from './uiLayout/loginPage';
import SignUpScreen from './uiLayout/SignUpPage';
import { Provider } from 'react-redux';
import store from './reduxIntegration/Store'

const Homestack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
export const Context = createContext(false);
function SplashScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading app</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}
function Login() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LoginScreen />
        </View>
    )
}
function SignUp() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SignUpScreen />
        </View>
    )
}
function Home() {
    return (
        <View>
            <HomeScreen />
        </View>
    )
}
function App() {

    const [loader, setLoader] = useState(true);
    const [userData, setuserData] = useState(false);
    const getuserData = async () => {
        const sleep = (ms: any) => new Promise(
            (r) => setTimeout(r, ms)
        );
        try {
            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            if (email && password) {
                console.log('Email:', email);
                console.log('Password:', password);
                setuserData(true);
            }
            else {
                setuserData(false);
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
        // <Context.Provider value={{ setuserData }}>
        <Provider store={store}>
            <NavigationContainer>
                {userData ? (
                    <Homestack.Navigator>
                        <Homestack.Screen name='Home' component={Home} />
                    </Homestack.Navigator>

                ) : (
                    <AuthStack.Navigator>
                        <AuthStack.Screen name='Login' component={Login} />
                        <AuthStack.Screen name='SignUP' component={SignUp} />
                    </AuthStack.Navigator>
                )}
            </NavigationContainer>
        </Provider>
        // </Context.Provider>
    )

}
export default App;
