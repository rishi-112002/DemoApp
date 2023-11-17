import React from "react";
import {
    View, Text, TouchableOpacity, StyleSheet, FlatList
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState, store } from "../../reduxIntegration/Store";
import { inputAuth , employersData } from "../../reduxIntegration/Reducer";
import { useSelector , useDispatch } from "react-redux";

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
    const {data} = useSelector((state : RootState) => state.empData);
    const handleLogout = () => {
        const object = {
            userEmail: '',
            userPassword: '',
        }
        store.dispatch(inputAuth(object))

        logoutUser();
    };
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
                <Text style={styles.tabTextColor}>
                    {item}
                </Text>
            )}/>
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
