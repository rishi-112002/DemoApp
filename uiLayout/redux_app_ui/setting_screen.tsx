import React, { useState } from "react";
import {
    View, StyleSheet, TextInput, Alert, Button
} from 'react-native'

function SettingScreen() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const [salary, setSalary] = useState("");

    const empoloyeeData = async () => {
        try {
            const response = await fetch("https://dummy.restapiexample.com/api/v1/create", {
                method: 'POST', headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    salary: salary,
                    age: age,
                    id: id
                })
            });
            if (response.ok) {
                console.log("POST request successful");     
            }
            else {
                console.log("POST request failed");
                Alert.alert("Failed", "The POST request is Failed ");
            }

        } catch (error) {
            console.error('Error during POST request:', error);
            Alert.alert('Error', 'Something went wrong');
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                placeholder="Name"
                style={styles.input}
                onChangeText={(text) => setName(text)}
                value={name}
                placeholderTextColor={'grey'} />
            <TextInput
                placeholder="salary"
                style={styles.input}
                onChangeText={(text) => setSalary(text)}
                value={salary}
                placeholderTextColor={'grey'} />
            <TextInput
                placeholder="Age"
                style={styles.input}
                onChangeText={(text) => setAge(text)}
                placeholderTextColor={'grey'}
                value={age} />
            <TextInput
                placeholder="id"
                style={styles.input}
                onChangeText={(text) => setId(text)}
                placeholderTextColor={'grey'}
                value={id}/>

            <Button
                title="Create"
                onPress={empoloyeeData} />
        </View>
    )
}
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black'
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
export default SettingScreen;


