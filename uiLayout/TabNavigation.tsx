import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SettingScreen from "./redux_app_ui/setting_screen";
import ProfileScreen from "./redux_app_ui/profile_screen";
import LogoutScreen from "./redux_app_ui/logout_screen";
import Home from "./redux_app_ui/home_screen";
const Tab = createMaterialBottomTabNavigator();

function HomePage() {
    return (
        <Tab.Navigator style={{ flex: 1, backgroundColor: 'black', borderColor: 'black' }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={SettingScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Logout" component={LogoutScreen} />
        </Tab.Navigator>
    )

}

export default HomePage;


