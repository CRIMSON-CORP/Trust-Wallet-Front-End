import React, { useEffect } from "react";
import { VStack, ScrollView, View } from "native-base";
import TabSwitcher from "./TabSwitcher";
import { View as MotiView } from "moti/";
import Assets from "./Assets";
import { AnimatePresence } from "moti";
import { Dimensions } from "react-native";
import { useTabs } from "../../../context/contexts";

const WalletDetails = () => {
    const { Index } = useTabs();
    return (
        <VStack>
            <TabSwitcher />
            <View h={590}>
                <ScrollView nestedScrollEnabled={true}>
                    <AnimatePresence>
                        {Index === 0 && (
                            <MotiView
                                exit={{
                                    transform: [{ translateX: Dimensions.get("window").width }],
                                }}
                            >
                                <Assets />
                            </MotiView>
                        )}
                        {Index === 1 && (
                            <MotiView
                                exit={{
                                    transform: [{ translateX: Dimensions.get("window").width }],
                                }}
                            ></MotiView>
                        )}
                    </AnimatePresence>
                </ScrollView>
            </View>
        </VStack>
    );
};

export default WalletDetails;
