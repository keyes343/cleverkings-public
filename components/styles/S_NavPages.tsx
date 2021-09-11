import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';

// page
export const About = styled(Grid)`
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`;

// section
export const AboutBody = styled(Grid)`
    --mini_heading: 1.2rem;
    padding: 2rem;
    gap: 4rem;
    /* border: 2px solid blue; */
    /* row 1 */
    @media ${e.device.mobileL} {
        gap: 1rem;
        padding: 0;
        /* border: 2px solid blue; */
        padding: 0 0 2rem; // for very bottom, right above footer
    }
    ${g.GridA} {
        gap: 1rem;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            'left-pic heading'
            'left-pic long-Text';
        @media ${e.device.mobileL} {
            padding: 2rem;
            grid-template-columns: 1fr;
            /* grid-template-rows: ; */
            grid-template-areas:
                'heading'
                'left-pic'
                'long-Text';
        }
        ${g.Grid1} {
            grid-area: left-pic;
            /* border: 2px solid red; */
            height: 100%;
            min-height: 20rem;
            @media ${e.device.mobileL} {
                /* border: 2px solid red; */
                min-height: 20rem;
            }
        }
        ${g.Box1} {
            font-size: var(--large);
            font-weight: bold;
            /* border: 2px solid blue; */
            grid-area: heading;
            @media ${e.device.mobileL} {
                font-size: var(--medium);
                text-align: center;
                /* border: 2px solid red; */
            }
        }
        ${g.Box2} {
            /* border: 2px solid red; */
            height: 100%;
            grid-area: long-Text;
            @media ${e.device.mobileL} {
                line-height: 1.5rem;
                opacity: 0.8;
            }
        }
    }
    ${g.GridB} {
        grid-template-columns: 1fr 1fr;
        max-width: 70vw;
        gap: 1rem;
        @media ${e.device.mobileL} {
            /* border: 2px solid blue; */
            padding: 1rem;

            max-width: 100vw;
            grid-template-columns: 1fr;
        }
        ${g.Grid1a} {
            grid-template-rows: repeat(3, auto) 1fr;
            height: 100%;
            padding: 1rem 2rem 0;
            background-color: black;
            color: white;
            gap: 1rem;
            @media ${e.device.mobileL} {
                gap: 2rem;
                padding: 6rem 2rem 5rem;
            }
            ${g.Grid2a} {
                /* border: 1px solid blue; */
                text-transform: uppercase;
                @media ${e.device.mobileL} {
                    font-size: var(--larger);
                }
            }
            ${g.Grid2b} {
                /* border: 1px solid blue; */
                min-height: 7rem;
                @media ${e.device.mobileL} {
                    min-height: 10rem;
                }
            }
            ${g.Grid2c} {
                height: 100%;
                @media ${e.device.mobileL} {
                    /* border: 2px solid blue; */
                    font-size: 1.1rem;
                }
                ${g.Box1} {
                    /* border: 1px solid red; */
                    opacity: 0.7;
                    text-align: center;
                    /* @media ${e.device.mobileL} {
                        line-height: 2.5rem;
                        border: 2px solid blue;
                    } */
                }
            }
        }
    }
    /* certificates and recognition */
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
            @media ${e.device.mobileL} {
                gap: 2rem;
                grid-template-columns: repeat(2, auto);
            }
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
        /* border: 2px solid blue; */
        ${g.Grid1} {
            width: auto;
            /* border: 2px solid blue; */
            ${g.Box1} {
                text-transform: uppercase;
                font-size: var(--mini_heading);
                font-weight: bold;
            }
        }
        ${g.Grid1a} {
            @media ${e.device.mobileL} {
                overflow: auto;
            }
            ${g.Grid2} {
                width: auto;
                grid-template-columns: repeat(3, 1fr);
                padding: 1rem 2rem;
                /* border: 2px solid red; */
                gap: 2rem;
                @media ${e.device.mobileL} {
                    gap: 1rem;
                    grid-template-columns: repeat(5, 50vw);
                }
                ${g.Grid2a} {
                    /* border: 2px solid red; */
                    gap: 1rem;
                    text-transform: uppercase;
                    ${g.Grid3a} {
                        /* border: 2px solid blue; */
                        min-height: 10rem;
                    }
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

// ---------------------------------start
export const GetQuote = styled(Grid)``;
export const ViewMore = styled(Box)``;
export const Text = styled(Box)``;
``;
// ---------------------------------end

// section
export const ServicesBody = styled(Grid)`
    padding: 3rem 6rem;
    gap: 3rem;
    grid-template-columns: 1fr 1fr;
    @media ${e.device.mobileL} {
        padding: 3rem 1rem;
        grid-template-columns: 1fr;
    }

    ${g.Grid1} {
        padding: 2rem 1rem;
        border: 1px solid rgba(0, 0, 0, 0.1);
        gap: 2rem;
        /* border: 2px solid blue; */
        height: 100%;
        place-items: start start;
        grid-template-areas:
            'pic heading'
            'pic text-area'
            'getQuote viewMore';
        @media ${e.device.mobileL} {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
            background-color: rgba(240, 240, 240, 0.5);
            grid-template-areas:
                'pic'
                'heading'
                'text-area'
                'viewMore'
                'getQuote';
        }
        ${g.Grid1a} {
            /* border: 1px solid; */
            grid-area: pic;
            height: 100%;
            min-height: 14rem;
            min-width: 12rem;
        }
        ${g.Box1} {
            grid-area: heading;
            font-weight: bold;
            font-size: 1.4rem;
            @media ${e.device.mobileL} {
                text-align: center;
            }
        }
        ${g.Box2} {
            grid-area: text-area;
        }
        ${GetQuote} {
            grid-area: getQuote;
            border: 1px solid rgba(0, 0, 0, 0.5);
            opacity: 0.4;
            padding: 0.7rem 0 0.5rem;
            cursor: pointer;
            @media ${e.device.mobileL} {
                /* display: none; */
            }
            :hover {
                opacity: 1;
                border: 1px solid rgba(0, 0, 0, 0.8);
            }
        }
        ${ViewMore} {
            grid-area: viewMore;
            /* border: 1px solid rgba(0, 0, 0, 0.4); */
            width: auto;
            padding: 0.7rem 0 0.5rem;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            @media ${e.device.mobileL} {
                /* display: none; */
                width: 100%;
                text-align: center;
                text-decoration: underline;
                font-weight: bold;
                /* border: 2px solid blue; */
            }
            :hover {
                color: #1f15a7;
                transform: scale(1.2) translateX(0.7rem);
            }
        }
    }
`;

// section
export const MainArea = styled(Grid)``;
export const CookiePolicy = styled(Grid)`
    gap: 4rem;
    ${MainArea} {
        gap: 1.7rem;
        max-width: 800px;
        /* border: 2px solid blue; */
        /* border: 2px solid blue; */
        padding: 0 2rem;
        ${g.Box1} {
            text-align: justify;
            text-justify: inter-word;
            /* border: 2px solid red; */
            line-height: 1.5rem;
            /* width: 20rem; */
        }
        /* ${g.Box2}{

        }
        ${g.Box3}{

        } */
    }
`;
