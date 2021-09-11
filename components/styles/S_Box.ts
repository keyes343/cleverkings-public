import styled, { createGlobalStyle } from 'styled-components';

import * as t from '../types/index';
// import * as CSS from 'csstype';
// import * as sty from '../types/index';

export const Box = styled.div<t.box.BoxProps>`
    white-space: ${(p) => (p.prewrap ? 'pre-wrap' : p.nowrap ? 'nowrap' : '')};
    cursor: ${(p) => (p.pointer ? 'pointer' : '')};
    grid-area: ${(p) => p.area ?? ''};
    //font styling
    color: ${(p) => p.clr ?? 'inherit'};
    background-color: ${(p) => p.bgcl ?? ''};
    // positioning
    position: ${(p) => {
        if (p.absolute) return 'absolute';
        else if (p.relative) return 'relative';
        else if (p.fixed) return 'fixed';
        else return '';
    }};
    box-shadow: ${(p) => p.shadow ?? ''};
    z-index: ${(p) => p.zIndex ?? ''};
    top: ${(p) => p.top ?? ''};
    bottom: ${(p) => p.bottom ?? ''};
    left: ${(p) => p.left ?? ''};
    right: ${(p) => p.right ?? ''};
    margin: ${(p) => p.mg ?? ''};
    text-align: ${(p) => p.text ?? ''};
    opacity: ${(p) => p.opacity ?? ''};
    // dimensions
    height: ${(p) => p.ht ?? 'auto'};
    width: ${(p) => p.wd ?? '100%'};
    padding: ${(p) => p.pd ?? ''};
    border: ${(p) => (p.bd ? `2px solid ${p.bd}` : '')};
    border-radius: ${(p) => p.radius ?? ''};
    font-family: ${(p) => p.font ?? 'var(--default)'};
    font-weight: ${(p) => (p.bold ? 'bold' : '')};
    font-size: ${(p) => {
        if (p.large) {
            return '1.4rem';
        } else if (p.small) {
            return '0.9rem';
        } else if (p.smallest) {
            return '0.7rem';
        } else if (p.larger) {
            return '1.8rem';
        } else if (p.largest) {
            return '2.2rem';
        } else return '';
    }};
    //flex properties
    flex-direction: ${(p) => (p.row ? 'row' : p.column ? 'column' : null)};
    justify-content: ${(p) => {
        if (p.start) {
            return 'flex-start';
        } else if (p.last) {
            return 'flex-end';
        } else if (p.center) {
            return 'center';
        } else if (p.between) {
            return 'space-between';
        }
    }};
    /* align-items: stretch; */
    align-items: ${(p) => (p.stretch ? 'stretch' : p.align ?? '')};
    flex: ${(p) => (p.fillup ? '1' : '')};
    // grid properties
    gap: ${(p) => p.gap ?? '0'};
    display: ${(p) => {
        if (p.none) {
            return 'none';
        } else if (p.grid) {
            return 'grid';
        } else if (p.flex) {
            return 'flex';
        }
    }};
    grid-template-columns: ${(p) => p.columns ?? ''};
    grid-template-rows: ${(p) => p.rows ?? ''};
    overflow: ${(p) => p.flow ?? ''};
    place-items: ${(p) => {
        switch (p.aim) {
            case 'center':
                return 'center';
            case 'horizontal':
                return 'center start';
            case 'horizontal-end':
                return 'center end';
            case 'vertical':
                return 'start center';
            default:
                break;
        }
    }};
    :hover {
        background-color: ${(p) => p.hoverBackground ?? ''};
        color: ${(p) => p.hoverColor ?? ''};
    }
`;

export const IconBox = styled(Box)<t.box.dev_style_Props>`
    width: auto;
    align-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.6rem;
    font-size: 1.1rem;
    cursor: pointer;
    /* :hover {
        background-color: #fa6f6f;
    } */
`;

interface HeaderProps extends t.box.BoxProps {
    topmost?: boolean;
}
export const Header = styled(Box)<HeaderProps>`
    height: ${(p) => (p.topmost ? '300px' : '')};
    background-color: pink;
    img {
        object-fit: cover;
    }
`;

export const Grid = styled(Box)`
    /* position: static; */
    display: ${(p) => {
        if (p.none) {
            return 'none';
        } else {
            return 'grid';
        }
    }};
    place-items: ${(p) => {
        switch (p.aim) {
            case 'horizontal':
                return 'center start';
            case 'horizontal-end':
                return 'center end';
            case 'vertical':
                return 'start center';
            default:
                return 'center';
        }
    }};
`;

// media
export const Image = styled(Grid)`
    overflow: hidden;
    /* img {
        object-fit: contain;
    } */
`;

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: var(--inter); 
        font-size:1rem;
        box-sizing: border-box; 
    }
`;

// multiple boxes
export const Box1 = styled(Box)``;
export const Box2 = styled(Box)``;
export const Box3 = styled(Box)``;
export const Box4 = styled(Box)``;

// Grid
export const Grid1 = styled(Grid)``;
export const Grid2 = styled(Grid)``;
export const Grid3 = styled(Grid)``;
export const Grid4 = styled(Grid)``;

export const Grid1a = styled(Grid)``;
export const Grid1b = styled(Grid)``;
export const Grid1c = styled(Grid)``;
export const Grid1d = styled(Grid)``;

export const Grid2a = styled(Grid)``;
export const Grid2b = styled(Grid)``;
export const Grid2c = styled(Grid)``;
export const Grid2d = styled(Grid)``;

export const Grid3a = styled(Grid)``;
export const Grid3b = styled(Grid)``;
export const Grid3c = styled(Grid)``;
export const Grid3d = styled(Grid)``;

export const Grid4a = styled(Grid)``;
export const Grid4b = styled(Grid)``;
export const Grid4c = styled(Grid)``;
export const Grid4d = styled(Grid)``;

export const GridA = styled(Grid)``;
export const GridB = styled(Grid)``;
export const GridC = styled(Grid)``;
export const GridD = styled(Grid)``;
