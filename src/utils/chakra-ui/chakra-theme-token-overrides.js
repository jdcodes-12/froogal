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
const CustomChakraTheme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true,
    },
    colors: {
        brand: {
            dark_mode: {
                primary: {
                    // Chakra Blues
                    50: "#ebf8ff",
                    100: "#bee3f8",
                    200: "#90cdf4",
                    300: "#63b3ed",
                    400: "#4299e1",
                    500: "#3182ce",
                    600: "#2b6cb0",
                    700: "#2c5282",
                    800: "#2a4265",
                    900: "#1a365d",
                },
                secondary: {
                    // Chakra Purples
                    50: "#FAF5FF",
                    100: "#E9D8FD",
                    200: "#D6BCFA",
                    300: "#B794F4",
                    400: "#9F7AEA",
                    500: "#805AD5",
                    600: "#6B46C1",
                    700: "#553C9A",
                    800: "#44337A",
                    900: "#322659",
                },
                accent: {
                    // Chakra Cyans
                    50: "#EDFDFD",
                    100: "#C4F1F9",
                    200: "#9DECF9",
                    300: "#76E4F7",
                    400: "#0BC5EA",
                    500: "#00B5D8",
                    600: "#00A3C4",
                    700: "#0987A0",
                    800: "#086F83",
                    900: "#065666",
                },
                warning: {
                    // Chakra Pinks
                    50: "#FFF5F7",
                    100: "#FED7E2",
                    200: "#FBB6CE",
                    300: "#F687B3",
                    400: "#ED64A6",
                    500: "#D53F8C",
                    600: "#B83280",
                    700: "#97266D",
                    800: "#702459",
                    900: "#521B41",
                },
                success: {
                    // Chakra Teals
                    50: "#E6FFFA",
                    100: "#B2F5EA",
                    200: "#9DECF9",
                    300: "#4FD1C5",
                    400: "#38B2AC",
                    500: "#319795",
                    600: "#2C7A7B",
                    700: "#285E61",
                    800: "#234E52",
                    900: "#1D4044",
                },
                info: {
                    // Chakra Yellows
                    50: "#FFFFF0",
                    100: "#FEFCBF",
                    200: "#FAF089",
                    300: "#F6E05E",
                    400: "#ECC94B",
                    500: "#D69E2E",
                    600: "#B7791F",
                    700: "#975A16",
                    800: "#744210",
                    900: "#5F370E",
                }
            },
            // need to do light_mode
        }
    }
});

export default CustomChakraTheme;

// 1E3163 - dark-primary
// 6F38C5 - secondary

// Nuetrals
// F9F9F9- grayish