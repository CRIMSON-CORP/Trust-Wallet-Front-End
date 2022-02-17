import { Box, Center, HStack, Image, Text, VStack, ScrollView, FlatList } from "native-base";

import Ripple from "../../../../components/Ripple";
import NumberFormat from "react-number-format";
import { useWalletAssets } from "../../../../context/contexts";
const Assets = () => {
    const ASSET_LIST = useWalletAssets();
    return (
        <VStack divider={<Box w="100%" h="0.5" bg="gray.50" />}>
            <FlatList
                data={ASSET_LIST}
                renderItem={(asset) => (
                    <Ripple centered={false}>
                        <Box p="4">
                            <HStack space="5" alignItems="center">
                                <Center
                                    rounded="full"
                                    size="10"
                                    borderWidth={"1"}
                                    borderColor="gray.300"
                                >
                                    <Image
                                        source={asset.img}
                                        alt={asset.shortName}
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </Center>
                                <VStack flex={1} space="3">
                                    <Text fontSize="md">{asset.name}</Text>
                                    <HStack space="1.5">
                                        <NumberFormat
                                            displayType="text"
                                            value={asset.price}
                                            prefix="$"
                                            thousandSeparator=","
                                            decimalScale={2}
                                            renderText={(value) => (
                                                <Text fontSize="xs" opacity={0.6}>
                                                    {value}
                                                </Text>
                                            )}
                                        />
                                        {asset.change < 0 ? (
                                            <Text fontSize="xs" opacity={0.6} color="red.700">
                                                {asset.change}%
                                            </Text>
                                        ) : (
                                            <Text fontSize="xs" opacity={0.6} color="green.700">
                                                {asset.change}%
                                            </Text>
                                        )}
                                    </HStack>
                                </VStack>
                                <VStack space="3">
                                    <FromatedText
                                        text={asset.owned}
                                        suf={asset.shortName}
                                        align="right"
                                    />
                                    {asset.totalPrice !== 0 && (
                                        <FromatedText
                                            text={asset.totalPrice}
                                            dol
                                            align="right"
                                            dim
                                        />
                                    )}
                                </VStack>
                            </HStack>
                        </Box>
                    </Ripple>
                )}
                keyExtractor={(data) => data.id}
            />
        </VStack>
    );
};

export default Assets;

function FromatedText({ text, dol = false, align, suf, dim }) {
    return (
        <NumberFormat
            displayType="text"
            value={text}
            prefix={dol && "$"}
            thousandSeparator=","
            decimalScale={2}
            suffix={suf && ` ${suf}`}
            renderText={(value) => (
                <Text textAlign={align} opacity={dim && 0.5}>
                    {value}
                </Text>
            )}
        />
    );
}
