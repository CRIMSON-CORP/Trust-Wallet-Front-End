import { HStack, VStack, Box, useTheme, Pressable } from "native-base";
import React, { useEffect } from "react";
import { Text, View, TouchableNativeFeedback, Touchable } from "react-native";

import { MaterialCommunityIcons, AntDesign, Ionicons } from "@expo/vector-icons";
import Animated, {
    useSharedValue,
    crea,
    useAnimatedProps,
    interpolateColor,
    withTiming,
    useAnimatedStyle,
} from "react-native-reanimated";
import Ripple from "../Ripple";

function BottomTabs({ state, descriptors, navigation }) {
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
        <Ripple style={{ padding: 8, flex: 1 }} onPress={onPress} overflow={false}>
            <VStack alignItems="center">
                <Box>
                    <AnimatedIcon name={iconName} size={24} style={AnimatedTextStyle} />
                </Box>
                <Animated.Text style={[{ fontSize: 11 }, AnimatedTextStyle]}>{name}</Animated.Text>
            </VStack>
        </Ripple>
    );
}
