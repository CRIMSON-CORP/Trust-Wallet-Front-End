import React from "react";
import { Center, Text, useTheme } from "native-base";

const WalletName = () => {
    const { colors } = useTheme();
    return (
        <Center>
            <Text opacity={0.5} color="white">
                Trust Wallet Main Account
            </Text>
        </Center>
    );
};

export default WalletName;
