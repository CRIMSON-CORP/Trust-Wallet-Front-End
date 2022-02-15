import React from "react";
import { HStack } from "native-base";
import IconWrapper from "./IconWrapper";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const ActionButtons = () => {
    const ICON_STYLE = {
        color: "white",
        size: 20,
    };
    return (
        <HStack justifyContent={"center"} space="8">
            <IconWrapper text={"Send"} icon={<Feather name="upload" {...ICON_STYLE} />} />
            <IconWrapper text={"Receive"} icon={<Feather name="download" {...ICON_STYLE} />} />
            <IconWrapper
                text={"Buy"}
                icon={<MaterialCommunityIcons name="tag-outline" {...ICON_STYLE} />}
            />
            <IconWrapper
                text={"Swap"}
                icon={<Ionicons name="swap-horizontal-sharp" {...ICON_STYLE} />}
            />
        </HStack>
    );
};

export default ActionButtons;
