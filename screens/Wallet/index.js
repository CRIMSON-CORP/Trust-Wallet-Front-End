import { Box, useTheme, VStack } from "native-base";
import TopBar from "./TopBAr";
import WalletName from "./WalletName";
import ActionButtons from "./ActionButtons";
import WalletDetails from "./WalletDetails";
import { WalletAsset } from "../../context/contexts";
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { useRef } from "react";
const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedVStack = Animated.createAnimatedComponent(VStack);
const windowHeight = Dimensions.get("window").height;
const Wallet = () => {
    const { colors } = useTheme();
    const scrollPosition = useSharedValue(0);
    const start = useSharedValue(0);
    const AssetScroll = useRef();
    const Descider = -80;
    const gesture = useAnimatedGestureHandler({
        onActive: (e) => {
            scrollPosition.value = Math.min(0, Math.max(-160, e.translationY + start.value));
        },
        onFinish: (e) => {
            if (scrollPosition.value < Descider) {
                scrollPosition.value = withTiming(-160);
            } else {
                scrollPosition.value = withTiming(0);
            }
            start.value = scrollPosition.value;
        },
    });

    const AnimatedBoxStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: scrollPosition.value }],
    }));
    return (
        <WalletAsset>
            <VStack bg={colors.primary[100]} flex={1} space="3" justifyContent={"space-between"}>
                <Box p={"3"} pb={"0"} zIndex={5} bg={colors.primary[100]}>
                    <TopBar />
                </Box>
                <AnimatedVStack flex={1} space={"2"} style={AnimatedBoxStyles}>
                    <VStack space={"8"} p={"3"}>
                        <WalletName />
                        <ActionButtons />
                    </VStack>
                    <PanGestureHandler onGestureEvent={gesture} ref={AssetScroll}>
                        <AnimatedBox bg="white" borderTopRadius={15} h={windowHeight - 120}>
                            <WalletDetails AssetScroll={AssetScroll} />
                        </AnimatedBox>
                    </PanGestureHandler>
                </AnimatedVStack>
            </VStack>
        </WalletAsset>
    );
};

export default Wallet;
