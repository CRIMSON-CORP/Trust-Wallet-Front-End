import React from "react";
import { HStack, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export default function TopBar() {
    const ICON_STYLE = {
        color: "white",
        size: 26,
    };
    return (
        <HStack justifyContent={"space-between"} alignItems="center">
            <Ionicons name="notifications-outline" {...ICON_STYLE} />
            <Text color={"white"} fontSize={30}>
                $23,343,356.34
            </Text>
            <Ionicons name="options-outline" {...ICON_STYLE} />
        </HStack>
    );
}
