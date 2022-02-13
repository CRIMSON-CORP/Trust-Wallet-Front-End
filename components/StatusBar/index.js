import { useTheme } from "native-base";
import { StatusBar as CustomStatusBar } from "react-native";
const index = ({ ...props }) => {
    const { colors } = useTheme();
    return <CustomStatusBar backgroundColor={colors.primary[50]} {...props} />;
};
index.currentHeight = CustomStatusBar.currentHeight;

export default index;
