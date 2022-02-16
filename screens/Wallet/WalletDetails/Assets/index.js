import React from "react";
import { Box, Center, HStack, Image, Text, VStack } from "native-base";
import shortid from "shortid";
import img from "../../../../assets/coin_logos/bitcoin-btc-logo.png";
const ASSET_LIST = [
    {
        id: shortid.generate(),
        img: img,
        name: "Botcoin",
        shortName: "BTC",
        price: 44578.27,
        change: 4.68,
        owned: 23,
        totalPrice: 123,
    },
];
const Assets = () => {
    return (
        <VStack>
            {ASSET_LIST.map((asset) => (
                <Box>
                    <HStack>
                        <Center rounded="full">
                            <Image source={asset.img} alt={asset.shortName} />
                        </Center>
                        <VStack>
                            <Text>{asset.name}</Text>
                            <HStack>
                                <Text>{asset.price.toLocaleString()}</Text>
                                {asset.change < 0 ? (
                                    <Text>{asset.change}</Text>
                                ) : (
                                    <Text>{asset.change}</Text>
                                )}
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
    );
};

export default Assets;
