import React from "react";
import {
    View, Text, StyleSheet
} from 'react-native'
import { RootState, store } from '../../reduxIntegration/Store'
import { useSelector } from 'react-redux';
function ProfileScreen() {
    const userEmail = useSelector((state: RootState) => {
        console.log('state', state);

        return state.auth.email

    })
    const userPassword = useSelector((state: RootState) => { return state.auth.password })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.tabTextColor}>
                user email is :- {userEmail}
            </Text>
            <Text style={styles.tabTextColor}>
                user password is :- {userPassword}
            </Text>

        </View>
    )
};
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black'
    },
})
export default ProfileScreen;


