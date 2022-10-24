/*
* It's possible to override the following defaults for
* the below themes:
*  - blur
*  - border
*  - breakpoints
*  - colors
*  - radius
*  - sizes
*  - spacing
*  - transition
*  - trypography
*  - z-index
* 
* Here is a link to the code files for above: https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations
* Link to theming Chakra: https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens
*/

import { extendTheme } from '@chakra-ui/react';
import chakra_config from './theme-config';

// would like to separate color palette into another module for easier maintainability for colors.
// Running into an issue when trying to export the JSON object and import it into the extendTheme
import color_palette from './color-palette'; 

const CustomChakraTheme = extendTheme({
    chakra_config,
    colors: {
        brand: {
            darkmode: {
                primary: {
                  base: "#2a364d",
                },
                secondary: {
                    50: "#e5e6ff",
                    100: "#b5b5fc",
                    200: "#8584f8",

                    // Shouldn't need 300-900 weights
                    300: "#5554f5",
                    400: "#2924f3",
                    500: "#160cd9",
                    600: "#0f09a9",
                    700: "#090679",
                    800: "#03034a",
                    900: "#00001c",
                    base: "#b1b1fc"
                },
                accent: {
                    50: "#ffe6ff",
                    100: "#fcb6fc",
                    200: "#f886f8",

                    // Shouldn't need 300-900 weights
                    300: "#f557f5",
                    400: "#f32cf2",
                    500: "#da1ad9",
                    600: "#a912a9",
                    700: "#790b79",
                    800: "#490349",
                    900: "#1a001a",
                    base: "#fcbdfc",
                },
                warning: {
                    50: "#fff5f7",
                    100: "#fed7e2",
                    200: "#fbb6ce",
                    300: "#f687b3",
                    400: "#ed64a6",
                    500: "#d53f8c",
                    600: "#b83280",
                    700: "#97266d",
                    800: "#702459",
                    900: "#521b41",
                },
                success: {
                    50: "#e1ffec",
                    100: "#b5fccd",
                    200: "#87f9ad",
                    300: "#5af78c",

                    // Shouldn't need 300-900 weights
                    400: "#34f66d",
                    500: "#23dc53",
                    600: "#19ab41",
                    700: "#0f7b2e",
                    800: "#034a1a",
                    900: "#001a06",
                    base: "#b1fcca",
                },
                gray: {
                    50: "#edf1ff",
                    100: "#cfd6e6",
                    200: "#b1bbd0",
                    300: "#929fba",
                    400: "#7484a5",
                    500: "#5a6b8b",
                    600: "#45536d",
                    700: "#313b4f",
                    800: "#1b2432",
                    900: "#030d18",
                    base: "#637599",
                    base-alt: "#3E4D6B",
                },
            },
            lightmode: {
                primary: {
                  base: "#fcfcfc",
                },
                secondary: {
                    50: "#e9e9ff",
                    100: "#bebff6",
                    200: "#9595eb",
                    300: "#6a6ae1",
                    400: "#4140d8",
                    500: "#2726be",
                    600: "#1e1e95",
                    700: "#14156b",
                    800: "#0b0c43",
                    900: "#03031b",
                    base: "#7e7ee5"
                },
                accent: {
                    50: "#ffe6ff",
                    100: "#f9b9fa",
                    200: "#f38cf3",
                    300: "#ed5fed",
                    400: "#e833e8",
                    500: "#ce1cce",
                    600: "#a013a0",
                    700: "#730c73",
                    800: "#460546",
                    900: "#1a001a",
                    base: "#f285f2",
                },
                warning: {
                    50: "#fff5f7",
                    100: "#fed7e2",
                    200: "#fbb6ce",
                    300: "#f687b3",
                    400: "#ed64a6",
                    500: "#d53f8c",
                    600: "#b83280",
                    700: "#97266d",
                    800: "#702459",
                    900: "#521b41",
                },
                success: {
                    50: "#e1fdeb",
                    100: "#baf4ce",
                    200: "#92ebb0",
                    300: "#68e391",
                    400: "#40db73",
                    500: "#28c259",
                    600: "#1c9745",
                    700: "#116c30",
                    800: "#05411b",
                    900: "#001804",
                    base: "#73e599",
                },
                gray: {
                    50: "#f2f2f2",
                    100: "#d9d9d9",
                    200: "#bfbfbf",
                    300: "#a6a6a6",
                    400: "#8c8c8c",
                    500: "#737373",
                    600: "#595959",
                    700: "#404040",
                    800: "#262626",
                    900: "#0d0d0d",
                    base: "#f5f5f5",
                }
            },
            white: {
                base: "#FBFBFB",
            }
        },
    }
});

export default CustomChakraTheme;
