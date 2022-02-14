import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import { Box, Center, useTheme } from "native-base";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableWithoutFeedback);
const AnimatedBox = Animated.createAnimatedComponent(Box);
export default function Ripple({
    children,
    overflow = true,
    style,
    onPress,
    overlaySize = 1.3,
    overlayStyle,
}) {
    const [ParentDim, setParentDim] = useState({ width: 0, height: 0 });
    const { colors } = useTheme();
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);
    const gesture = useAnimatedGestureHandler({
        onStart: (e) => {
            scale.value = 0;
            opacity.value = 0.2;
            scale.value = withTiming(overlaySize);
            opacity.value = withTiming(0.6, undefined, () => runOnJS(onPress)());
        },
        onFinish: () => {
            opacity.value = withTiming(0);
        },
    });
    const AnimatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: scale.value }],
    }));
    return (
        <TapGestureHandler onGestureEvent={gesture}>
            <AnimatedTouchable
                onLayout={(e) => {
                    setParentDim(e.nativeEvent.layout);
                }}
            >
                <Box style={{ overflow: overflow ? "hidden" : "visible", ...style }}>
                    <AnimatedBox
                        position="absolute"
                        rounded="full"
                        bg={colors.primary[50]}
                        w={ParentDim.width}
                        h={ParentDim.width}
                        style={[AnimatedStyle, overlayStyle, { top: -10 }]}
                    />
                    {children}
                </Box>
            </AnimatedTouchable>
        </TapGestureHandler>
    );
}
