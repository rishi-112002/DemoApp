import React from "react";
import {
    View, Text,StyleSheet
} from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
function HomePage() {

    //  const {setuserData} = useContext(Context);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.tabTextColor}>
                Home Screen
            </Text>
        </View>
    )


};
const styles = StyleSheet.create({
    tabTextColor: {
        color: 'black'
    },
})
export default HomePage;
