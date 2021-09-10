import styled, { keyframes } from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';

export const title = styled(Grid)``;
export const divider = styled(Grid)``;
export const linkWrapper = styled(Grid)``;
export const column = styled(Grid)<{ count: number; mob_off?: boolean }>`
    grid-template-rows: ${(p) => `repeat(${p.count},auto) 1fr`};
    /* border: 2px solid blue; */
    height: 100%;
    place-items: center start;
    gap: 1rem;
    @media ${e.device.mobileL} {
        padding: 2rem 0;
    }
    ${title} {
        /* border: 2px solid red; */
        width: auto;
    }
    ${divider} {
        border: 2px solid grey;
        max-width: 2rem;
    }
    ${linkWrapper} {
        gap: 0.4rem;
        ${g.Box1} {
            /* border: 2px solid red; */
            color: lightblue;
            opacity: 0.8;
        }
    }
    @media ${e.device.mobileL} {
        display: ${(p) => (p.mob_off ? 'none' : 'grid')};
    }
`;
export const column1 = styled(column)``;
export const column2 = styled(column)``;
export const column3 = styled(column)``;
export const column4 = styled(column)``;

export const AddressSection = styled(Grid)``;
export const MainWrapper = styled(Grid)``;
export const LogoWrapper = styled(Grid)``;
export const Footer2 = styled(Grid)`
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem 4rem;
    min-height: 16rem;
    /* border: 2px solid yellow; */
    @media ${e.device.mobileL} {
        /* border: 2px solid blue; */
        padding: 2rem;
    }
    ${MainWrapper} {
        /* border: 2px solid red; */
        width: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 'quickLinks usefulLinks subscribe address';
        @media ${e.device.mobileL} {
            gap: 1rem;
            /* border: 2px solid blue; */
            grid-template-columns: repeat(2, 1fr);
            place-items: start start;
            grid-template-areas:
                'logo .'
                'quickLinks usefulLinks'
                'address address';
        }
        ${LogoWrapper} {
            display: none;
            grid-area: logo;
            /* border: 2px solid blue; */
            @media ${e.device.mobileL} {
                display: grid;
                min-height: 7rem;
                /* border: 2px solid yellow; */
                width: 5rem;
            }
        }
        ${column1} {
            /* border: 2px solid red; */
            grid-area: quickLinks;
        }
        ${column2} {
            grid-area: usefulLinks;
        }
        ${column3} {
            grid-area: subscribe;
            ${g.Grid3a} {
                /* border: 2px solid blue; */
                place-items: center start;
                input {
                    /* border: 2px solid red; */
                    height: 2rem;
                    padding: 1rem;
                    ::placeholder {
                        font-size: 1rem;
                    }
                }
            }
        }
        ${AddressSection} {
            grid-area: address;
            gap: 1rem;
            /* border: 2px solid pink; */
            /* row - 1 */
            ${g.Grid1a} {
                /* border: 2px solid red; */
                grid-template-columns: 2rem 1fr;
                place-items: start start;
                gap: 1rem;
                /* col - 1 */
                ${g.Grid2a} {
                    place-items: center start;
                    /* border: 2px solid skyblue; */
                    height: 1.2rem;
                    /* background-color: white; */
                }
                /* col - 2 */
                ${g.Grid2b} {
                    /* border: 2px solid skyblue; */
                    place-items: center start;
                    gap: 0.5rem;
                    ${g.Box1} {
                        /* border: 2px solid yellow; */
                        opacity: 0.7;
                    }
                }
            }
        }
    }
`;

export const BelowFooter = styled(Grid)`
    background-color: rgba(0, 0, 0, 1);
    color: white;
    grid-template-columns: auto 1fr auto;
    padding: 1rem 2rem;
    @media ${e.device.mobileL} {
        grid-template-columns: 1fr;
        /* border: 2px solid red; */
        /* display: none; */
        gap: 1rem;
        /* gap: 3rem; */
    }
    ${g.GridA} {
        grid-template-columns: repeat(4, auto);
        gap: 0.4rem;
        /* border: 2px solid blue; */
        width: auto;
        @media ${e.device.mobileL} {
            /* border: 2px solid blue; */
            /* grid-template-columns: repeat(2, minm); */

            display: flex;
            flex-wrap: wrap;
            width: auto;
            max-width: 70vw;
        }
        ${g.Grid1} {
            font-size: var(--smallest);
            /* border: 2px solid red; */
            width: auto;
            @media ${e.device.mobileL} {
                font-size: 1rem;
                opacity: 0.7;
                /* border: 2px solid red; */
            }
            :hover {
                color: pink;
                cursor: pointer;
            }
        }
    }
    ${g.GridB} {
        grid-template-columns: 1fr;
        /* border: 2px solid blue; */
        text-align: center;
        /* font-size: var(--smallest); */
    } ;
`;

export const BelowFooter2 = styled(BelowFooter)``;
