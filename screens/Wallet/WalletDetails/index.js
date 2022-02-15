import React from "react";
import { Box, Text, VStack } from "native-base";
import TabSwitcher from "./TabSwitcher";

const TABS = ["Tokens", "NFTs"];
const WalletDetails = () => {
    return (
        <VStack>
            <TabSwitcher tabs={TABS} />
        </VStack>
    );
};

export default WalletDetails;
