import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from '.';

export const Navbar = styled(Grid)<{ count: number }>`
    color: white;
    background-color: ${(p) => p.theme.primary};
    padding: 1rem 4rem;
    place-items: center end;
    position: relative;
    @media ${e.device.mobileL} {
        padding: 1.2rem;
        /* display: none; */
    }
    /* only deskR̥top */
    ${g.GridA} {
        gap: 2rem;
        width: auto;
        grid-template-columns: ${(p) => `repeat(${p.count},auto)`};
        /* border: 2px solid blue; */
        padding: 0.5rem 0;
        @media ${e.device.mobileL} {
            display: none;
        }
        /* nav option texts */
        ${g.Grid1} {
            width: auto;
            cursor: pointer;
            font-size: 1.2rem;
        }
    }
    /* only mobile */

    ${g.GridB} {
        display: none;
        @media ${e.device.mobileL} {
            display: grid;
            grid-template-columns: auto 1fr auto;
            /* border: 2px solid blue; */
        }
        ${g.Grid1} {
            width: auto;
            /* border: 2px solid blue; */
            @media ${e.device.mobileL} {
                height: 1.1rem;
                width: 4rem;
            }
        }
        ${g.Grid2} {
            @media ${e.device.mobileL} {
                height: 1.3rem;
                width: 4rem;
            }
            width: auto;
        }
    }
    /* Logo */
    ${g.GridC} {
        position: absolute;
        width: auto;
        height: 100%;
        top: 1rem;
        left: 4rem;
        /* transform: translateX(-50%); */
        @media ${e.device.mobileL} {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        /* end child */
        ${g.Grid1} {
            border-radius: 60%;
            overflow: hidden;
            padding: 1rem;
            background-color: ${(p) => p.theme.primary};
            margin: -0.7rem 0 0;
            ${g.Grid1a} {
                @media ${e.device.mobileL} {
                    margin: 2rem 0 0;
                    width: 5rem;
                    height: 4rem;
                }
                width: 6rem;
                height: 5rem;
                color: white;
            }
        }
    } ;
`;

export const NavPopup1 = styled(Grid)`
    border: 2px solid blue;
    height: 20rem;
`;

// section
// only mobile
export const NavPopupWrapper = styled(Grid)<{ isOn: boolean }>`
    /* position: absolute; */
    display: none;
    z-index: 10;
    @media ${e.device.mobileL} {
        /* max-height: ${(p) => (p.isOn ? '29rem' : '0')}; */
        overflow: hidden;
        /* border: 2px solid blue; */
        display: grid;
        /* height: 4rem; */
        position: fixed;
        top: 3.6rem;
        /* bottom: 9rem; */
        right: ${(p) => (p.isOn ? `0` : `-12rem`)};
        /* left: 2rem; */
        width: auto;
        /* min-width: 9rem;
        min-height: 9rem; */
        transition: all 0.4s ease-in-out;
        background-color: white;
        /* box-shadow: ${(p) => (p.isOn ? `0 0 50px 15px rgba(0, 0, 0, 0.6)` : `none`)}; */
        /* border: 2px solid blue; */
        border-radius: 0 0 0 20px;
        color: black;
    }
`;

export const NavPopup = styled(Grid)`
    /* gap: 1rem; */
    color: white;
    padding: 1rem 0;
    /* background-color: rgba(166, 211, 247, 0.4); */
    background: linear-gradient(45deg, rgba(0, 0, 0, 1) 0%, rgba(8, 52, 85, 1) 100%);
    grid-template-columns: 1fr;
    gap: 0.6rem;
`;

export const NavPopup_element = styled(Grid)`
    font-size: 1rem;
    /* border: 2px solid cyan; */
    /* min-width: 6rem; */
    text-align: end;
    /* height: 20rem; */
    /*
    text-shadow: 1px 1px rgba(62, 116, 126, 0.5); */
    /* padding: 1rem 0; */
    ${g.Box1} {
        color: rgba(255, 255, 255, 0.8);
        font-size: var(--medium);
        padding: 0 1rem;
    }
`;
