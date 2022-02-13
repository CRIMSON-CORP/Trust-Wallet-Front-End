import { Platform, SafeAreaView, StyleSheet, Text, View, useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Box, NativeBaseProvider, useColorModeValue } from "native-base";
import theme from "./utils/Theme";
import StatusBar from "./components/StatusBar";
import Main from "./app/Main";
export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <StatusBar
                animated
                hideTransitionAnimation="slide"
                translucent
                networkActivityIndicatorVisible={false}
            />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </GestureHandlerRootView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    safe_area: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
});
