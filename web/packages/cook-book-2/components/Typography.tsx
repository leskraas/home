import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.6rem;
    max-width: 700px;
    line-height: 1.42;
    margin-bottom: 0.6em;
    a {
        color: inherit;
        :hover {
            font-style: italic;
        }
    }
    strong {
        font-weight: 500;
    }
`;

const HeadingXXL = css`
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;
const HeadingXL = css`
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;
const HeadingLG = css`
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;
const HeadingMD = css`
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;
const HeadingSM = css`
    font-size: ${(props) => props.theme.fontSize.sm};
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;
const HeadingXS = css`
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: bold;
    color: ${(props) => props.theme.colors.text};
`;

type Props = {
    size: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
};

const handleSizeStyle = (props: Props) => {
    switch (props.size) {
        case 'xxl':
            return HeadingXXL;
        case 'xl':
            return HeadingXL;
        case 'lg':
            return HeadingLG;
        case 'md':
            return HeadingMD;
        case 'sm':
            return HeadingSM;
        case 'xs':
            return HeadingXS;
    }
};

export const H1 = styled.h1<Props>`
    ${(props) => handleSizeStyle(props)}
`;

export const H2 = styled.h2<Props>`
    ${(props) => handleSizeStyle(props)}
`;

export const H3 = styled.h3<Props>`
    ${(props) => handleSizeStyle(props)}
`;

export const H4 = styled.h4<Props>`
    ${(props) => handleSizeStyle(props)}
`;
