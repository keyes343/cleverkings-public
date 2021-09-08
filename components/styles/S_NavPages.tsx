import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';

// page
export const About = styled(Grid)`
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`;

export const AboutBody = styled(Grid)`
    --mini_heading: 1.2rem;
    padding: 2rem;
    gap: 4rem;
    /* border: 2px solid blue; */
    /* row 1 */
    ${g.GridA} {
        gap: 1rem;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            'left-pic heading'
            'left-pic long-Text';
        ${g.Grid1} {
            grid-area: left-pic;
            /* border: 2px solid red; */
            height: 100%;
        }
        ${g.Box1} {
            font-size: var(--large);
            font-weight: bold;
            /* border: 2px solid blue; */
            grid-area: heading;
        }
        ${g.Box2} {
            /* border: 2px solid red; */
            grid-area: long-Text;
        }
    }
    ${g.GridB} {
        grid-template-columns: 1fr 1fr;
        max-width: 70vw;
        gap: 1rem;
        ${g.Grid1a} {
            grid-template-rows: repeat(3, auto) 1fr;
            height: 100%;
            padding: 1rem 2rem 0;
            background-color: black;
            color: white;
            gap: 1rem;
            ${g.Grid2a} {
                /* border: 1px solid blue; */
                text-transform: uppercase;
            }
            ${g.Grid2b} {
                /* border: 1px solid blue; */
                min-height: 7rem;
            }
            ${g.Grid2c} {
                /* border: 2px solid blue; */
                height: 100%;
                ${g.Box1} {
                    /* border: 1px solid red; */
                    opacity: 0.7;
                    text-align: center;
                }
            }
        }
    }
    ${g.GridC} {
        gap: 2rem;
        ${g.Grid1} {
            width: auto;
            ${g.Box1} {
                text-transform: uppercase;
                font-weight: bold;
                font-size: var(--mini_heading);
            }
        }
        ${g.Grid2} {
            grid-template-columns: repeat(4, auto);
            max-width: 70vw;
            gap: 1rem;
            ${g.Grid2a} {
                min-height: 5rem;
                /* border: 1px solid rgba(0, 0, 0, 0.4); */
            }
        }
        ${g.Grid3} {
            max-width: 80vw;
            ${g.Box1} {
                border: 1px solid rgba(0, 0, 0, 0.2);
            }
        }
    }
    ${g.GridD} {
        gap: 2rem;
        ${g.Grid1} {
            width: auto;
            ${g.Box1} {
                text-transform: uppercase;
                font-size: var(--mini_heading);
                font-weight: bold;
            }
        }
        ${g.Grid2} {
            width: auto;
            grid-template-columns: repeat(3, 1fr);
            padding: 0 2rem;
            gap: 2rem;
            ${g.Grid2a} {
                /* border: 2px solid red; */
                gap: 1rem;
                ${g.Grid3a} {
                    /* border: 2px solid blue; */
                    min-height: 10rem;
                }
                text-transform: uppercase;
                ${g.Grid3b} {
                    ${g.Box1} {
                        font-weight: bold;
                        text-align: center;
                        font-size: var(--smallest);
                    }
                    ${g.Box2} {
                        text-align: center;
                        font-size: var(--smallest);
                    }
                }
            }
        }
        ${g.Grid3} {
            ${g.Box1} {
                border: 1px solid;
                padding: 0.5rem 1rem;
                width: auto;
                /* background-color: white;
                color: black; */
                cursor: pointer;
                transition: all 0.5s;
                :hover {
                    color: white;
                    background-color: black;
                }
            }
        }
    }
`;

export const ServicesBody = styled(Grid)`
    padding: 3rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    ${g.Grid1} {
        border: 1px solid rgba(0, 0, 0, 0.3);
        gap: 1rem;
        padding: 0.5rem;
        height: 100%;
        place-items: start start;
        grid-template-areas:
            'pic heading'
            'pic text-area';
        ${g.Grid1a} {
            /* border: 1px solid; */
            grid-area: pic;
            height: 100%;
            min-width: 12rem;
        }
        ${g.Box1} {
            grid-area: heading;
            font-weight: bold;
            font-size: 1.4rem;
            /* border: 2px solid blue; */
        }
        ${g.Box2} {
            grid-area: text-area;
        }
    }
`;
