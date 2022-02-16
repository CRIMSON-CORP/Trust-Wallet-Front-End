import React from "react";
import { VStack } from "native-base";
import TabSwitcher from "./TabSwitcher";

import Assets from "./Assets";

const TABS = ["Tokens", "NFTs"];
const WalletDetails = () => {
    return (
        <VStack>
            <TabSwitcher tabs={TABS} />
            <Assets />
        </VStack>
    );
};

export default WalletDetails;
