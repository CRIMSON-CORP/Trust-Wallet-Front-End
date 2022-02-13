import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Wallet from "../screens/Wallet";
import Discover from "../screens/Discover";
import DApps from "../screens/Discover";
import Settings from "../screens/Settings";
import BottomTabs from "../components/BottomTabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import TabIconWrapper from "../components/TabIconWrapper";

const BottomTab = createBottomTabNavigator();
export default function Main() {
    const { colors } = useTheme();
    return (
        <BottomTab.Navigator initialRouteName="Wallet" backBehavior="initialRoute">
            <BottomTab.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <TabIconWrapper
                                Icon={
                                    <MaterialCommunityIcons name="shield" size={30} color={color} />
                                }
                                focused={focused}
                            />
                        );
                    },
                    tabBarAccessibilityLabel: "Wallet",
                    tabBarActiveTintColor: colors.primary[100],
                    tabBarInactiveTintColor: colors.primary.grey,
                    tabBarStyle: {
                        height: 80,
                        paddingBottom: 10,
                        backgroundColor: "red",
                    },
                    tabBarLabelStyle: {
                        fontSize: 18,
                    },
                }}
            />
            <BottomTab.Screen name="Discover" component={Discover} />
            <BottomTab.Screen name="DApps" component={DApps} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({});
