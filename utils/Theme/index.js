import { extendTheme } from "native-base";

const colors = {
    primary: {
        50: "#4880c0",
        100: "#3070b8",
        grey: "#666666",
    },
};

const config = {
    initialThemeMode: "light",
};

const theme = extendTheme({ colors, config });

export default theme;
