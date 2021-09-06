import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from '.';

// section
export const PageHeader = styled(Grid)`
    /* min-height: 10rem; */
    --height: 25rem;
    padding: 2rem;
    height: var(--height);
    grid-template-rows: auto auto 1fr;
    gap: 1rem;
    /* absolute */
    ${g.GridA} {
        z-index: -10;
        top: 0;
        ${g.Box1} {
            height: var(--height);
        }
    }
    ${g.Grid1} {
        /* border: 1px solid red; */
        /* background-color: redÆ; */
        color: white;
        /* width: auto; */
        grid-template-columns: auto 1fr auto;
        ${g.Grid1a} {
        }
        ${g.Grid2a} {
        }
    }
`;

export const Navbar = styled(Grid)`
    /* min-height: 7rem; */
    color: white;
    /* border: 2px solid red; */
    padding: 0.5rem 1rem;
    grid-template-columns: auto 1fr auto;
    background-color: rgba(255, 255, 255, 0.3);
    ${g.Grid1} {
        height: 5rem;
        width: 5rem;
        margin: -1rem auto 0;
    }
    ${g.Grid2} {
        grid-template-columns: repeat(9, auto);
        width: auto;
        gap: 1.5rem;
        ${g.Grid2a} {
        }
    }
    ${g.Grid3} {
        ${g.Grid3a} {
            width: auto;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 0.5rem 1rem;
        }
    }
`;

export const NavOption = styled(Grid)<{ isDropdown: boolean }>`
    font-size: 0.7rem;
    /* padding: 0 0.3rem; */
    /* border: 2px solid blue; */
    cursor: pointer;
    /* min-width:4rem; */
    font-weight: bold;
    border-bottom: 2px solid transparent;
    grid-template-columns: ${(p) => (p.isDropdown ? `1fr auto` : `1fr`)};

    :hover {
        /* padding: 0; */
        color: black;
        border-bottom: 2px solid black;
    }
    ${g.GridA} {
        color: white;
        padding: ${(p) => (p.isDropdown ? '0' : '0.3rem 0')};
        /* border: 2px solid red; */
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
    ${g.Box1} {
        font-size: var(--larger);
        width: auto;
    }
    ${g.Box2} {
        font-size: var(--small);
        width: auto;
    } ;
`;
