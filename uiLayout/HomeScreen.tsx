import React, { useState } from "react";
import {
    View, Text, TouchableOpacity, StyleSheet, TextInput
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../App';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount , inputNumber } from "../reduxIntegration/Reducer";
import { RootState } from "../reduxIntegration/Store";

function HomeScreen() {

    // const {setuserData} = useContext(Context);
    const [number, setNumber] = useState("0")
    const no = useSelector((state: RootState) => state.counter.value)
    const count = useSelector((state: RootState) => state.insert.number)
    const dispatch = useDispatch()
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
            <View>
                <Text style={{ color: 'black', alignItems: 'center', alignSelf: 'center', fontSize: 25 }}>
                    {count}
                </Text>
                <Text style={{ color: 'black', alignItems: 'center', alignSelf: 'center', fontSize: 25 }}>
                    {number}
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
                <Text style={styles.buttonText}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
                <Text style={styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                value={number}
                inputMode="numeric"
                onChangeText={(text) => setNumber(text)} />
            <TouchableOpacity style={styles.button} onPress={() => dispatch(inputNumber(Number(number) || 0))}>
                <Text style={styles.buttonText}>Insert</Text>
            </TouchableOpacity>
            <Text style={{ color: 'black', alignItems: 'center', alignSelf: 'center', fontSize: 25 }}>
                    {no}
                </Text>
        </View>

    )
};
const styles = StyleSheet.create({
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
    input: {
        width: 300,
        height: 40,
        color: 'black',
        borderColor: 'black',
        borderWidth: 2.0,
        borderRadius: 20,
        alignItems: 'center',
        alignContent: 'center',
        marginStart: 50,
        marginEnd: 20,
        marginTop: 10,
        marginBottom: 10,
        paddingStart: 20,
    },

})
export default HomeScreen;