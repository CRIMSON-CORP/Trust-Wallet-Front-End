import { Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Box, Center, HStack, useTheme, Text } from "native-base";
import Ripple from "../../../../components/Ripple";
import Animated, {
    Easing,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { useTabs } from "../../../../context/contexts";
const WINDOW_WIDTH = Dimensions.get("window").width;
const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedText = Animated.createAnimatedComponent(Text);

const TabSwitcher = ({ tabs = [] }) => {
    const { colors } = useTheme();
    const { TABS, Index, setIndex } = useTabs();
    const indicatorPos = useSharedValue(0);
    function setTabAnimation(i) {
        indicatorPos.value = withTiming(
            i * (WINDOW_WIDTH / TABS.length),
            { easing: Easing.inOut(Easing.quad), duration: 400 },
            () => runOnJS(setIndex)(i)
        );
    }

    const AnimatedBoxStyle = useAnimatedStyle(() => ({
        left: indicatorPos.value,
    }));
    return (
        <Box>
            <HStack>
                {TABS.map((t, i) => (
                    <Ripple
                        key={i}
                        overflow={true}
                        style={{ flex: 1 }}
                        centered={false}
                        onPress={() => setTabAnimation(i)}
                    >
                        <Center p={"3.5"}>
                            <TabText index={i} tabIndex={Index} text={t} />
                        </Center>
                    </Ripple>
                ))}
            </HStack>
            <AnimatedBox
                h={"0.5"}
                w={TABS.length === 0 ? "100%" : WINDOW_WIDTH / TABS.length}
                bg={colors.primary[100]}
                rounded="sm"
                style={AnimatedBoxStyle}
            />
        </Box>
    );
};

export default TabSwitcher;

function TabText({ index, tabIndex, text }) {
    const textOpacityShared = useSharedValue(1);

    useEffect(() => {
        if (index !== tabIndex) {
            textOpacityShared.value = withTiming(0.5);
        } else {
            textOpacityShared.value = withTiming(1);
        }
    }, [tabIndex]);
    const TextOpacityAnimatedStyle = useAnimatedStyle(() => ({ opacity: textOpacityShared.value }));

    return <AnimatedText style={TextOpacityAnimatedStyle}>{text}</AnimatedText>;
}
