import { extendTheme } from "native-base";

const colors = {
    primary: {
        50: "#5b88b8",
        100: "#3070b8",
        grey: "#666666",
    },
};

const config = {
    initialThemeMode: "light",
};

const theme = extendTheme({ colors, config });

export default theme;
