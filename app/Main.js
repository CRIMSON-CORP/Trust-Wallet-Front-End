import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Wallet from "../screens/Wallet";
import Discover from "../screens/Discover";
import DApps from "../screens/Discover";
import Settings from "../screens/Settings";
import BottomTabs from "../components/BottomTabs";

const BottomTab = createBottomTabNavigator();
export default function Main() {
    return (
        <BottomTab.Navigator
            initialRouteName="Wallet"
            backBehavior="initialRoute"
            tabBar={(props) => <BottomTabs {...props} />}
        >
            <BottomTab.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
            <BottomTab.Screen name="Discover" component={Discover} />
            <BottomTab.Screen name="DApps" component={DApps} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({});
