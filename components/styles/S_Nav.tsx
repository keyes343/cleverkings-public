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
        padding: 0.8rem;
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
        }
        ${g.Grid1} {
            width: auto;
        }
        ${g.Grid2} {
            width: auto;
        }
    }
    /* Logo */
    ${g.GridC} {
        position: absolute;
        width: auto;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        ${g.Grid1} {
            background-color: ${(p) => p.theme.primary};
            margin: -0.7rem 0 0;
            border-radius: 60%;
            /* border: 2px solid blue; */
            width: 6rem;
            height: 5rem;
            color: white;
        }
    } ;
`;
