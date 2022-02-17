import React from "react";
import { VStack, ScrollView } from "native-base";
import TabSwitcher from "./TabSwitcher";

import Assets from "./Assets";
import { Dimensions } from "react-native";

const TABS = ["Tokens", "NFTs"];
const WalletDetails = () => {
    return (
        <VStack>
            <TabSwitcher tabs={TABS} />
            <ScrollView>
                <Assets />
            </ScrollView>
        </VStack>
    );
};

export default WalletDetails;
