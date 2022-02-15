import React from "react";
import { Center, Text, useTheme, VStack } from "native-base";

const IconWrapper = ({ icon, text }) => {
    const { colors } = useTheme();
    return (
        <VStack alignItems={"center"} space="2">
            <Center size={50} bg={colors.primary[50]} rounded="full">
                {icon}
            </Center>
            <Text color="white" fontSize={12}>
                {text}
            </Text>
        </VStack>
    );
};

export default IconWrapper;
