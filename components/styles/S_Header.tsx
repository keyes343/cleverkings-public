import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from '.';
import { HiMenu } from 'react-icons/hi';

export const Timings = styled(Grid)``;
export const Column1 = styled(Grid)``;
export const Column2 = styled(Grid)``;
export const Icons = styled(Grid)``;
export const Pic = styled(Box)`
    position: relative;
`;

// section
export const PageHeader = styled(Grid)<{ icon_count: number }>`
    /* min-height: 10rem; */
    --height: 25rem;
    --mobile_height: 15rem;
    padding: 2rem;
    height: var(--height);
    grid-template-rows: auto auto 1fr;
    gap: 1rem;
    @media ${e.device.mobileL} {
        padding: 0;
        height: var(--mobile_height);
        /* border: 2px solid red; */
    }
    /* absolute - background image for header */
    ${Column1} {
        z-index: -10;
        top: 0;
        ${Pic} {
            height: var(--height);
            @media ${e.device.mobileL} {
                height: var(--mobile_height);
            }
        }
    }
    /* opening timings for cleverkings */
    ${Column2} {
        /* border: 1px solid red; */
        /* background-color: red; */
        color: white;
        /* width: auto; */
        grid-template-columns: auto 1fr auto;
        @media ${e.device.mobileL} {
            display: none;
        }
        ${Timings} {
            /* border: 2px solid blue; */
            transition: all 0.3s ease-out;
            padding: 0.3rem 0.7rem;
            border-radius: 7px;
            :hover {
                background-color: rgba(255, 255, 255, 0.4);
                font-weight: bold;
                color: black;
                font-size: 1.3rem;
                /* color: darkred; */
            }
        }
        ${Icons} {
            grid-template-columns: repeat(${(p) => p.icon_count}, 3rem);
            gap: 0.6rem;
            padding: 0.5rem;
            transition: all 0.3s ease-in-out;
            border-radius: 7px;
            :hover {
                background-color: rgba(255, 255, 255, 0.4);
            }
            ${Pic} {
                cursor: pointer;
                min-height: 1.6rem;
                min-width: 1rem;
                /* border: 2px solid blue; */
            }
        }
    }
`;

// section
export const Navbar = styled(Grid)`
    /* min-height: 7rem; */
    color: white;
    padding: 0.5rem 1rem;
    grid-template-columns: auto 1fr auto;
    /* background-color: rgba(255, 255, 255, 0.3); */
    transition: all 0.3s ease-in-out;
    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
    @media ${e.device.mobileL} {
        /* background-color: rgba(255, 255, 255, 0.5); */
        /* width: 5rem; */
        :hover {
            background-color: rgba(255, 255, 255, 0.4);
        }
    }
    /* middle nav links - off in mobile */
    /* right most button on desktop, hamburger menu on mobile */
    ${g.Grid3} {
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            place-items: center end;
        }
        /* only desktop */
        ${g.Grid3a} {
            /* border: 2px solid blue; */
            width: auto;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 0.5rem 1rem;
            cursor: pointer;
            :hover {
                background-color: rgb(5, 53, 85);
            }
            @media ${e.device.mobileL} {
                display: none;
            }
        }
        /* only mobile */
        ${g.Grid3b} {
            display: none;
            @media ${e.device.mobileL} {
                display: grid;
                /* height: 4rem; */
                /* border: 2px solid red; */
                color: black;
                width: auto;
                font-size: 2.2rem;
            }
        }
    }
`;

export const NavOption_wrapper = styled(Grid)`
    grid-template-columns: repeat(9, auto);
    width: auto;
    gap: 1.5rem;
    /* border: 2px solid blue; */
    @media ${e.device.mobileL} {
        display: none;
    }
    ${g.Grid2a} {
        /* border: 2px solid red; */
    }
`;

export const LogoWrapper = styled(Grid)`
    height: 5rem;
    width: 5rem;
    margin: -1rem auto 0;
    cursor: pointer;
    /* border: 2px solid blue; */
    @media ${e.device.mobileL} {
        margin: -0.7rem auto 0;
        display: grid;
        /* border: 2px solid blue; */
        height: 3.3rem;
    }
`;

export const NavBtn_title = styled(Grid)``;
export const NavOption = styled(Grid)<{ isDropdown: boolean }>`
    /* font-size: 0.7rem; */
    /* padding: 0 0.3rem; */
    /* border: 2px solid blue; */
    cursor: pointer;
    /* min-width:4rem; */
    /* font-weight: bold; */
    border-bottom: 2px solid transparent;
    grid-template-columns: ${(p) => (p.isDropdown ? `1fr auto` : `1fr`)};

    :hover {
        /* padding: 0; */
        /* color: black; */
        border-bottom: 2px solid white;
    }
    ${NavBtn_title} {
        /* color: white; */
        padding: ${(p) => (p.isDropdown ? '0' : '0.3rem 0')};
        /* border: 2px solid red; */
        height: 100%;
    }
    ${g.GridB} {
        display: ${(p) => (p.isDropdown ? 'grid' : 'none')};
        font-size: 1.5rem;
        /* border: 2px solid blue; */
        width: auto;
        /* :hover {
            color: black;
        } */
    } ;
`;

export const LargeTextArea = styled(Grid)`
    gap: 1rem;
    /* border: 2px solid blue; */
    color: white;
    @media ${e.device.mobileL} {
        padding: 2rem 0 0;
    }
    ${g.Box1} {
        font-size: var(--larger);
        width: auto;
    }
    ${g.Box2} {
        font-size: 1.2rem;
        width: auto;
        @media ${e.device.mobileL} {
            font-size: var(--small);
        }
    } ;
`;

// icons

export const Menu_Icon = styled(HiMenu)`
    color: inherit;
    font-size: inherit;
`;
