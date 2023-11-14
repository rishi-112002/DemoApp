import React from "react";
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function LogoutScreen() {
    const logoutUser = async () => {
        try {
            await AsyncStorage.removeItem('email');
            await AsyncStorage.removeItem('password');
            console.log('user is logout successfully')
            // setuserData(false);
        } catch {
            console.error('user data is not Deleted')
        }

    };
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.button} onPress={logoutUser}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>

    )
};
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black'
    },
    button: {
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 20
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'orange',
        borderRadius: 15,
        fontSize: 18,
        padding: 7,
    },
})
export default LogoutScreen;
