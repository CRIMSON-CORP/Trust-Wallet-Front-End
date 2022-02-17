import { Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { Box, Center, HStack, useTheme } from "native-base";
import Ripple from "../../../../components/Ripple";
import Animated, {
    Easing,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
const WINDOW_WIDTH = Dimensions.get("window").width;

function useTabs() {
    const [SelectedTab, setSelectedTab] = useState(0);

    return [SelectedTab, setSelectedTab];
}

const AnimatedoBox = Animated.createAnimatedComponent(Box);

const TabSwitcher = ({ tabs = [] }) => {
    const { colors } = useTheme();
    const [tab, setTab] = useTabs();
    const indicatorPos = useSharedValue(0);
    function setTabAnimation(i) {
        indicatorPos.value = withTiming(
            i * (WINDOW_WIDTH / tabs.length),
            { easing: Easing.inOut(Easing.quad), duration: 400 },
            () => runOnJS(setTab)(i)
        );
    }

    const AnimatedBoxStyle = useAnimatedStyle(() => ({
        left: indicatorPos.value,
    }));
    return (
        <Box>
            <HStack>
                {tabs.map((t, i) => (
                    <Ripple
                        key={i}
                        overflow={true}
                        style={{ flex: 1 }}
                        centered={false}
                        onPress={() => setTabAnimation(i)}
                    >
                        <Center p={"3.5"}>
                            <Text>{t}</Text>
                        </Center>
                    </Ripple>
                ))}
            </HStack>
            <AnimatedoBox
                h={"0.5"}
                w={tabs.length === 0 ? "100%" : WINDOW_WIDTH / tabs.length}
                bg={colors.primary[100]}
                rounded="sm"
                style={AnimatedBoxStyle}
            />
        </Box>
    );
};

export default TabSwitcher;
