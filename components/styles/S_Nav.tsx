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
        /* border: 2px solid blue; */
    }
    /* only deskR̥top */
    ${g.GridA} {
        @media ${e.device.mobileL} {
            display: none;
        }
        gap: 1rem;
        width: auto;
        grid-template-columns: ${(p) => `repeat(${p.count},auto)`};
        ${g.Grid1} {
            width: auto;
            cursor: pointer;
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
                height: 1.3rem;
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
        top: 0;
        left: 2rem;
        /* transform: translateX(-50%); */
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            left: 50%;
            transform: translateX(-50%);
        }
        /* end child */
        ${g.Grid1} {
            /* border: 2px solid red; */
            border-radius: 60%;
            overflow: hidden;
            padding: 1rem;
            background-color: ${(p) => p.theme.primary};
            margin: -0.7rem 0 0;
            ${g.Grid1a} {
                @media ${e.device.mobileL} {
                    /* border: 2px solid blue; */
                    margin: 2rem 0 0;
                    width: 5rem;
                    height: 4rem;
                }
                /* border: 2px solid blue; */
                width: 6rem;
                height: 5rem;
                color: white;
            }
        }
    } ;
`;
