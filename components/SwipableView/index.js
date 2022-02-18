import { Dimensions } from "react-native";
import React from "react";
import Animated, {
    Easing,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Box } from "native-base";

const SwipableView = ({ children, back, swipeExe = () => {}, simGesture }) => {
    const swipeX = useSharedValue(0);
    const SWIPE_LIMIT = 200;
    const SwipeDescider = 128;
    const WindowWidth = Dimensions.get("window").width;
    const gesture = useAnimatedGestureHandler({
        onActive: (e) => {
            swipeX.value = Math.max(-SWIPE_LIMIT, Math.min(0, e.translationX));
        },
        onFinish: (e) => {
            if (e.translationX > -SwipeDescider) {
                swipeX.value = withSpring(0);
            } else {
                swipeX.value = withTiming(
                    -WindowWidth,
                    {
                        easing: Easing.out(Easing.exp),
                        duration: 400,
                    },
                    () => {
                        runOnJS(swipeExe)();
                    }
                );
            }
        },
    });
    const SwipeAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: swipeX.value }],
    }));
    return (
        <PanGestureHandler onGestureEvent={gesture} simultaneousHandlers={simGesture}>
            <Animated.View style={SwipeAnimatedStyle}>
                {children}
                <Box position={"absolute"} height="100%" left="100%" width="100%" bg="red.700">
                    {back}
                </Box>
            </Animated.View>
        </PanGestureHandler>
    );
};

export default SwipableView;
