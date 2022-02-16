import React from "react";
import { Box, ScrollView, useTheme, VStack } from "native-base";
import TopBar from "./TopBAr";
import WalletName from "./WalletName";
import ActionButtons from "./ActionButtons";
import WalletDetails from "./WalletDetails";
const Wallet = () => {
    const { colors } = useTheme();

    return (
        <VStack bg={colors.primary[100]} flex={1} space="3" justifyContent={"space-between"}>
            <Box p={"3"}>
                <TopBar />
            </Box>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <VStack flex={1} space={"2"}>
                    <VStack space={"8"} p={"3"}>
                        <WalletName />
                        <ActionButtons />
                    </VStack>
                    <Box bg="white" flex={1} borderTopRadius={15}>
                        <WalletDetails />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    );
};

export default Wallet;
