import * as dict from './E_Dictionary';
// import * as subcat from './E_Subcategories';
import * as allow from './E_Allow';
import * as links from './E_Links';
import * as places from './E_Places';
import * as flds from './E_Fields';
import { AiOutlineClose } from 'react-icons/ai';
export { dict, allow, links, places, flds };

export const icons = {
    Close: AiOutlineClose,
};

export enum clr { // color
    maroon = '#770000',
    blue = '#3696DB',

    orange = '#e17909',
    yellow = '#ffc001',
    darkpink = '#c50d7f',
}
export enum size {
    smallest = '0.7rem',
    small = '0.9rem',
    large = '1.4rem',
    larger = '1.8rem',
    largest = '2.2rem',
    // --- screen sizes
    mobileS = '320px',
    mobileM = '375px',
    mobileL = '425px',
    tablet = '768px',
    laptop = '1024px',
    laptopL = '1440px',
    desktop = '2560px',
}

export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
};

export const DivNames = {
    'right-nav-button': 'right-nav-button',
};
