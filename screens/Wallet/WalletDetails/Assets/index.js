import React from "react";
import { Box, Center, HStack, Image, Text, VStack, ScrollView } from "native-base";
import shortid from "shortid";
import img from "../../../../assets/coin_logos/bitcoin-btc-logo.png";
let ASSET_LIST = [
    {
        id: shortid.generate(),
        img: img,
        name: "Bitcoin",
        shortName: "BTC",
        price: 44578.27,
        change: 4.68,
        owned: 23,
    },
];

ASSET_LIST = ASSET_LIST.map((a) => {
    a.totalPrice = a.price * a.owned;
    return a;
});

const Assets = () => {
    return (
        <ScrollView>
            <VStack divider={<Box w="100%" h="0.5" bg="gray.50" />}>
                {ASSET_LIST.map((asset) => (
                    <Box p="4" key={asset.id}>
                        <HStack space="5" alignItems="center">
                            <Center rounded="full" size="12">
                                <Image
                                    source={asset.img}
                                    alt={asset.shortName}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Center>
                            <VStack flex={1} space="3">
                                <Text fontSize="md">{asset.name}</Text>
                                <HStack space="1.5">
                                    <Text fontSize="xs" opacity={0.5}>
                                        <Text>${asset.price.toLocaleString()}</Text>
                                        {asset.change < 0 ? (
                                            <Text>{asset.change}</Text>
                                        ) : (
                                            <Text>{asset.change}</Text>
                                        )}
                                    </Text>
                                </HStack>
                            </VStack>
                            <VStack>
                                <Text>
                                    {asset.owned} {asset.shortName}
                                </Text>
                                <Text>{asset.totalPrice}</Text>
                            </VStack>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </ScrollView>
    );
};

export default Assets;
