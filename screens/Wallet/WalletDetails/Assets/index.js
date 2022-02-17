import { AnimatePresence } from "moti";
import { Box, VStack } from "native-base";

import { useWalletAssets } from "../../../../context/contexts";
import Asset from "./Asset";
const Assets = () => {
    const { ASSET: ASSET_LIST } = useWalletAssets();
    return (
        <VStack divider={<Box w="100%" h="0.5" bg="gray.50" />}>
            <AnimatePresence>
                {ASSET_LIST.map((asset) => (
                    <Asset asset={asset} key={asset.id} />
                ))}
            </AnimatePresence>
        </VStack>
    );
};

export default Assets;
