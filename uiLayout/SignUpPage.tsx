import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Firstname, setFirstName] = useState('');
    const [LastName, setLastname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const saveInputToAsyncStorage = async () => {
        try {
            await AsyncStorage.setItem('name', Firstname + "" + LastName);
            await AsyncStorage.setItem('firstName', email);
            await AsyncStorage.setItem('firstName', password);
            console.log('successfuly added ')
        } catch {
            console.error('error occur while saving data ')
        }
    };

    const handleSignUp = () => {
        if (email !== '' && password !== '' && Firstname !== '' && LastName !== '') {
            if (password == confirmPassword)
                saveInputToAsyncStorage()
            console.log(`SigUp  with Name:${Firstname} ${LastName}  Email: ${email} and Password: ${password}`);
        }
        else {
            Alert.alert('Please fill  all details correctly ');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>SignUp</Text>
            <Text style={styles.inputText}> FirstName</Text>
            <TextInput
                style={styles.input}
                placeholder="FirstName"
                onChangeText={(text) => setFirstName(text)}
                value={Firstname}
            />
            <Text style={styles.inputText}>LastName</Text>
            <TextInput
                style={styles.input}
                placeholder="LastName"
                onChangeText={(text) => setLastname(text)}
                value={LastName}
            />
            <Text style={styles.inputText}> E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Text style={styles.inputText}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Text style={styles.inputText}>confirmPassword</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
            <Text style={{ color: 'blue', marginTop: 5, fontSize: 12, fontWeight: 'bold', alignSelf: 'center' }}>
                already have a account Login
            </Text>
        </View>

    );

};


const styles = StyleSheet.create({
    container: {
        width: 400,
        flex: 1,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 24,
        color: "black",
        fontWeight: 'bold',
        margin: 20,
        alignSelf: 'center',
        alignItems: 'center',
    },
    input: {
        alignContent: 'center',
        alignSelf: 'center',
        width: 300,
        height: 40,
        color: 'black',
        borderColor: 'black',
        borderWidth: 2.0,
        borderRadius: 50,
        marginEnd: 20,
        paddingStart: 20,
    },
    button: {
        borderRadius: 20,
        margin: 10,
        alignContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        backgroundColor: 'orange',
        borderRadius: 15,
        fontSize: 18,
        padding: 7,
    },
    inputText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        marginStart: 60,
        marginTop: 20,
    },

});

export default SignUpScreen;
