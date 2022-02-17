import { Box, ScrollView, useTheme, VStack } from "native-base";
import TopBar from "./TopBAr";
import WalletName from "./WalletName";
import ActionButtons from "./ActionButtons";
import WalletDetails from "./WalletDetails";
import { WalletAsset } from "../../context/contexts";

const Wallet = () => {
    const { colors } = useTheme();

    return (
        <WalletAsset>
            <VStack bg={colors.primary[100]} flex={1} space="3" justifyContent={"space-between"}>
                <Box p={"3"}>
                    <TopBar />
                </Box>
                <VStack flex={1} space={"2"}>
                    <VStack space={"8"} p={"3"}>
                        <WalletName />
                        <ActionButtons />
                    </VStack>
                    <Box bg="white" flex={1} borderTopRadius={15}>
                        <WalletDetails />
                    </Box>
                </VStack>
            </VStack>
        </WalletAsset>
    );
};

export default Wallet;
