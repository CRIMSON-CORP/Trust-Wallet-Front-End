import { View, Text, Dimensions } from "react-native";
import React from "react";
import { Box, HStack, useTheme } from "native-base";
const WINDOW_WIDTH = Dimensions.get("window").width;
const TabSwitcher = ({ tabs = [] }) => {
    const { colors } = useTheme();
    return (
        <Box>
            <HStack>
                {tabs.map((t) => (
                    <Center>{t}</Center>
                ))}
            </HStack>
            <Box h={5} w={WINDOW_WIDTH / tabs.length} bg={colors.primary[100]} />
        </Box>
    );
};

export default TabSwitcher;
