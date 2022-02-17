import React, { useEffect } from "react";
import { VStack, ScrollView, View } from "native-base";
import TabSwitcher from "./TabSwitcher";

import Assets from "./Assets";

const TABS = ["Tokens", "NFTs"];
const WalletDetails = () => {
    return (
        <VStack>
            <TabSwitcher tabs={TABS} />
            <View h={590}>
                <ScrollView nestedScrollEnabled={true}>
                    <Assets />
                </ScrollView>
            </View>
        </VStack>
    );
};

export default WalletDetails;
