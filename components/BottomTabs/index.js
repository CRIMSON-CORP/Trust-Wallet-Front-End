import { HStack, VStack, Box, useTheme } from "native-base";
import React, { useEffect } from "react";

import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Animated, {
    useSharedValue,
    interpolateColor,
    withTiming,
    useAnimatedStyle,
} from "react-native-reanimated";
import Ripple from "../Ripple";

function BottomTabs({ state, navigation }) {
    const ScreenIcons = [
        {
            Provider: MaterialCommunityIcons,
            name: "shield",
        },
        {
            Provider: MaterialCommunityIcons,
            name: "compass",
        },
        {
            Provider: AntDesign,
            name: "appstore1",
        },
        {
            Provider: Ionicons,
            name: "md-settings-sharp",
        },
    ];
    return (
        <Box borderTopColor={"gray.100"} borderTopWidth={2}>
            <HStack alignItems={"center"} style={{ overflow: "hidden" }}>
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
                        <Tab
                            key={key}
                            name={name}
                            onPress={onPress}
                            icon={ScreenIcons[index]}
                            focused={isFocused}
                        />
                    );
                })}
            </HStack>
        </Box>
    );
}

export default BottomTabs;

function Tab({ name, onPress, icon: { Provider, name: iconName }, focused }) {
    const { colors } = useTheme();
    const color = useSharedValue(0);
    const AnimatedIcon = Animated.createAnimatedComponent(Provider);
    const AnimatedTextStyle = useAnimatedStyle(() => ({
        color: interpolateColor(
            color.value,
            [0, 1],
            [colors.primary.grey, colors.primary[100]],
            "RGB"
        ),
    }));

    useEffect(() => {
        color.value = focused ? withTiming(1) : withTiming(0);
    }, [focused]);
    return (
        <Ripple
            style={{ padding: 8, flex: 1 }}
            onPress={onPress}
            overflow={false}
            centered={true}
            overlaySize={1.2}
        >
            <VStack alignItems="center">
                <Box mb={"1"}>
                    <AnimatedIcon name={iconName} size={24} style={AnimatedTextStyle} />
                </Box>
                <Animated.Text style={[{ fontSize: 12, letterSpacing: 0.5 }, AnimatedTextStyle]}>
                    {name}
                </Animated.Text>
            </VStack>
        </Ripple>
    );
}
