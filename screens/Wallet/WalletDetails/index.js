import React, { useEffect, useState } from "react";
import { VStack, ScrollView, View } from "native-base";
import TabSwitcher from "./TabSwitcher";
import { View as MotiView } from "moti";
import Assets from "./Assets";
import { AnimatePresence } from "moti";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const TABS = ["Tokens", "NFTs"];
const WalletDetails = () => {
    const [TabIndex, setTabIndex] = useState(0);
    return (
        <VStack>
            <TabSwitcher setTabIndex={setTabIndex} TABS={TABS} TabIndex={TabIndex} />
            <View h={590}>
                <ScrollView nestedScrollEnabled={true}>
                    <AnimatePresence>
                        {TabIndex === 0 && (
                            <MotiView
                                exit={{
                                    transform: [{ translateX: -windowWidth }],
                                }}
                                animate={{
                                    transform: [{ translateX: 0 }],
                                }}
                                from={{
                                    transform: [{ translateX: -windowWidth }],
                                }}
                                transition={{
                                    type: "timing",
                                }}
                            >
                                <Assets />
                            </MotiView>
                        )}
                    </AnimatePresence>
                </ScrollView>
            </View>
        </VStack>
    );
};

export default WalletDetails;
