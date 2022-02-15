import { Text, Dimensions } from "react-native";
import React from "react";
import { Box, Center, HStack, useTheme } from "native-base";
import Ripple from "../../../../components/Ripple";
const WINDOW_WIDTH = Dimensions.get("window").width;

function useTabs({ tabs }) {}

const TabSwitcher = ({ tabs = [] }) => {
    const { colors } = useTheme();
    return (
        <Box>
            <HStack>
                {tabs.map((t, i) => (
                    <Ripple key={i} overflow={true} style={{ flex: 1 }} centered={true}>
                        <Center p={"3.5"}>
                            <Text>{t}</Text>
                        </Center>
                    </Ripple>
                ))}
            </HStack>
            <Box
                h={"0.5"}
                w={tabs.length === 0 ? "100%" : WINDOW_WIDTH / tabs.length}
                bg={colors.primary[100]}
                rounded="sm"
            />
        </Box>
    );
};

export default TabSwitcher;
