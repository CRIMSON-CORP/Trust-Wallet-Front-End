import { HStack } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { TouchableNativeFeedback } from "react-native-web";

function BottomTabs({ state, descriptors, navigation }) {
    return (
        <HStack p={"4"} justifyContent="space-evenly">
            {state.routes.map(({ key, name, params }) => {
                return (
                    <TouchableNativeFeedback key={key}>
                        <View style={{ padding: 20 }}>
                            <Text>{name}</Text>
                        </View>
                    </TouchableNativeFeedback>
                );
            })}
        </HStack>
    );
}

export default BottomTabs;
