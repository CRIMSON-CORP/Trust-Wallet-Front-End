import { extendTheme } from "native-base";

const colors = {
    primary: {
        50: "#5b88b8",
        100: "#3070b8",
    },
};

const config = {
    initialThemeMode: "light",
};

const theme = extendTheme({ colors, config });

export default theme;
