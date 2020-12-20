// styled.d.ts
import 'styled-components';

interface IPalette {
    main: string;
    contrastText: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            textOnPrimary: string;
            text: string;
            textSecondary: string;
            backgroundPrimary: string;
            backgroundSecondary: string;
        };
        shadows: {
            primary: string;
        };
        borderRadius: {
            lg: string;
            md: string;
            sm: string;
        };
        fonts: string[];
        fontSize: {
            xl: string;
            xxl: string;
            lg: string;
            md: string;
            sm: string;
            xs: string;
        };
    }
}
