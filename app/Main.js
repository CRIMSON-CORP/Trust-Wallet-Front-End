import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import Wallet from "../screens/Wallet";
import Discover from "../screens/Discover";
import DApps from "../screens/Discover";
import Settings from "../screens/Settings";
import BottomTabs from "../components/BottomTabs";
import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import TabIconWrapper from "../components/TabIconWrapper";

const BottomTab = createBottomTabNavigator();
export default function Main() {
    const { colors } = useTheme();
    const options = {
        tabBarActiveTintColor: colors.primary[100],
        tabBarInactiveTintColor: colors.primary.grey,
        tabBarLabelStyle: {
            fontSize: 11,
        },
        tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
        },
    };
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
                                    <MaterialCommunityIcons name="shield" size={24} color={color} />
                                }
                                focused={focused}
                            />
                        );
                    },
                    tabBarAccessibilityLabel: "Wallet",
                    ...options,
                }}
            />
            <BottomTab.Screen
                name="Discover"
                component={Discover}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <TabIconWrapper
                                Icon={
                                    <MaterialCommunityIcons
                                        name="compass"
                                        size={24}
                                        color={color}
                                    />
                                }
                                focused={focused}
                            />
                        );
                    },
                    tabBarAccessibilityLabel: "Discover",
                    ...options,
                }}
            />
            <BottomTab.Screen
                name="DApps"
                component={DApps}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <TabIconWrapper
                                Icon={<AntDesign name="appstore1" size={24} color={color} />}
                                focused={focused}
                            />
                        );
                    },
                    tabBarAccessibilityLabel: "Wallet",
                    ...options,
                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ color, focused }) => {
                        return (
                            <TabIconWrapper
                                Icon={<Ionicons name="md-settings-sharp" size={24} color={color} />}
                                focused={focused}
                            />
                        );
                    },
                    tabBarAccessibilityLabel: "Wallet",
                    ...options,
                }}
            />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({});
