import React from "react";
import { HStack, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useWalletAssets } from "../../../context/contexts";
import NumberFormat from "react-number-format";
export default function TopBar() {
    const ICON_STYLE = {
        color: "white",
        size: 26,
    };
    const { ASSET: ASSET_LIST } = useWalletAssets();
    let sum = 0;
    for (let index = 0; index < ASSET_LIST.length; index++) {
        sum = sum + ASSET_LIST[index].totalPrice;
    }
    return (
        <HStack justifyContent={"space-between"} alignItems="center">
            <Ionicons name="notifications-outline" {...ICON_STYLE} />
            <NumberFormat
                value={sum}
                displayType="text"
                thousandSeparator=","
                prefix="$"
                decimalScale={2}
                renderText={(value) => (
                    <Text color={"white"} fontSize={30}>
                        {value}
                    </Text>
                )}
            />
            <Ionicons name="options-outline" {...ICON_STYLE} />
        </HStack>
    );
}
