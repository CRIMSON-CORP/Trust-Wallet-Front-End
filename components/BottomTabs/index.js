import { HStack } from "native-base";
import React from "react";
import { Text, View, TouchableNativeFeedback } from "react-native";

// Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
function BottomTabs({ state, descriptors, navigation }) {
    const ScreenIcons = [<MaterialCommunityIcons name="shield" size={24} color="black" />];
    return (
        <HStack justifyContent="space-evenly" alignItems={"center"}>
            {state.routes.map(({ key, name, params }, index) => {
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: name, merge: true });
                    }
                };
                return (
                    <TouchableNativeFeedback key={key} onPress={onPress}>
                        <View style={{ padding: 20 }}>
                            <View>{ScreenIcons[index]}</View>
                            <Text>{name}</Text>
                        </View>
                    </TouchableNativeFeedback>
                );
            })}
        </HStack>
    );
}

export default BottomTabs;
