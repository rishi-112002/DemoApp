import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootState, store } from '../reduxIntegration/Store'
import { inputAuth } from '../reduxIntegration/Reducer';
import { Context } from '../App';
import { useSelector, useDispatch } from 'react-redux';

function LoginScreen() {

  const userEmail = useSelector((state: RootState) => state.auth.email)
  console.log("rootState", userEmail)

  // const userPassword = useSelector((state: RootState) => state.auth.password)

  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  // const {setuserData} = useContext(Context);
  const [password, setPassword] = useState('');
  const saveInputToAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('email', email)
      await AsyncStorage.setItem('password', password)
      console.log('saved successfully in shared Preference ')
    } catch {
      console.error('not saved in local storage')
    }
  }
  const handleEmailChange = () => {
    // console.log("handleEmailChange", email);

    dispatch(inputAuth(email));
    // dispatch(inputAuth(userEmail(email)))
  };
  const handlepasswordChange = () => {
    dispatch(inputAuth(password))
  };
  const handleLogin = () => {
    if (!email) {
      Alert.alert("warning", "Please enter E-mail");
      return

    }
    if (!password) {
      Alert.alert("warning", "Please enter Password");
      return
    }
    saveInputToAsyncStorage();
    handleEmailChange();
    handlepasswordChange
    // console.log("email :", { userEmail })
    //  console.log("email :", userPassword)

    // setuserData(true);
  };

  return (
    <View style={{ backgroundColor: 'orange' }}>
      {/* <Text style={styles.heading}>Login</Text> */}
      <View style={styles.container}>
        <Text style={styles.inputText}> E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.inputText}>Password</Text>
        <Text style={styles.inputText}>{userEmail}</Text>

        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={{ color: 'blue', marginTop: 15, fontSize: 12, fontWeight: 'bold', alignItems: 'center', marginStart: 120 }}>
          {"dont'nt have account signUp"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    flex: 1,
    verticalAlign: 'middle',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    color: "white",
    fontWeight: 'bold',
    marginBottom: 10,
    marginStart: 40,
    marginTop: 20,
    backgroundColor: 'orange',
    alignItems: 'center',
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
  button: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'white'
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
  }

});

export default LoginScreen;
