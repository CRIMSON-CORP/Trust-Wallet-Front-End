import React from "react";
import { Box, useTheme, VStack } from "native-base";
import TopBar from "./TopBAr";
import WalletName from "./WalletName";
import ActionButtons from "./ActionButtons";
import WalletDetails from "./WalletDetails";
const Wallet = () => {
    const { colors } = useTheme();

    return (
        <VStack bg={colors.primary[100]} flex={1} space="3" justifyContent={"space-between"}>
            <VStack space={"8"} p={"3"}>
                <TopBar />
                <WalletName />
                <ActionButtons />
            </VStack>
            <Box bg="white" flex={1} borderTopRadius={15}>
                <WalletDetails />
            </Box>
        </VStack>
    );
};

export default Wallet;
