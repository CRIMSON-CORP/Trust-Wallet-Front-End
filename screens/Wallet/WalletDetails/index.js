import React, { useEffect, useRef, useState } from "react";
import { VStack } from "native-base";
import TabSwitcher from "./TabSwitcher";
import { View as MotiView } from "moti";
import Assets from "./Assets";
import { ScrollView } from "react-native-gesture-handler";
import { AnimatePresence } from "moti";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const TABS = ["Tokens", "NFTs"];
const WalletDetails = ({ AssetScroll }) => {
    const [TabIndex, setTabIndex] = useState(0);
    const ScrollRef = useRef();
    return (
        <VStack>
            <TabSwitcher setTabIndex={setTabIndex} TABS={TABS} TabIndex={TabIndex} />
            <ScrollView ref={ScrollRef} simultaneousHandlers={AssetScroll}>
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
                            <Assets simGesture={ScrollRef} AssetScroll={AssetScroll} />
                        </MotiView>
                    )}
                </AnimatePresence>
            </ScrollView>
        </VStack>
    );
};

export default WalletDetails;
