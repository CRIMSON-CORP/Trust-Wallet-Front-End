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
import NumberFormat from "react-number-format";
const WINDOW_WIDTH = Dimensions.get("window").width;

function useTabs() {
    const [SelectedTab, setSelectedTab] = useState(0);

    return [SelectedTab, setSelectedTab];
}

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedText = Animated.createAnimatedComponent(Text);

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
                            <TabText index={i} tabIndex={tab} text={t} />
                        </Center>
                    </Ripple>
                ))}
            </HStack>
            <AnimatedBox
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
