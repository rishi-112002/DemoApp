import React from "react";
import {
    View, Text , StyleSheet
} from 'react-native'

function SettingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.tabTextColor}>
                Settiing Screen
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black'
    },
})
export default SettingScreen;


