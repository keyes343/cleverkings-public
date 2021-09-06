import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        radius: {
            small: string;
            medium: string;
            large: string;
        };
        font: {
            smallest: string;
            smaller: string;
            small: string;
            medium: string;
            large: string;
            larger: string;
            largest: string;
        };
        colors: {
            blue: string;
            yellow: string;
            maroon: string;
            orange: string;
            darkpink: string;
        };
        primary: string;
        secondary: string;
        tertiary: string;
    }
}

// import 'styled-components';
// interface IPalette {
//     main: string;
//     contrastText: string;
// }
// declare module 'styled-components' {
//     export interface DefaultTheme {
//         borderRadius: {
//             small: string;
//             medium: string;
//             large: string;
//         };
//         palette: {
//             common: {
//                 black: string;
//                 white: string;
//             };
//             primary: IPalette;
//             secondary: IPalette;
//         };
//         padding: {
//             small: string;
//             medium: string;
//             large: string;
//         };
//         colors: {
//             blue: string;
//             yellow: string;
//             maroon: string;
//             orange: string;
//             yellow: string;
//             darkpink: string;
//         };
//     }
// }
