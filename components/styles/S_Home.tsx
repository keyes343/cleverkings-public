import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';

export const Header = styled(Grid)`
    border: 2px solid red;
    /* @media only screen and (max-width: 1200px) {
        border: 2px solid cyan;
    }
    @media only screen and (max-width: 400px) {
        border: 4px solid red;
    } ; */
`;
// section
export const ThingsThatMatter = styled(Grid)`
    height: 20rem;
    border: 2px solid red;
    position: relative;
`;
export const ShoutoutArea = styled(Grid)`
    width: auto;
    position: absolute;
    top: 50%;
    left: 8rem;
    transform: translateY(-50%);
    gap: 1rem;
    place-items: center start;
    ${g.Box1} {
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 2.6rem;
    }
    ${g.Grid1} {
        background-color: ${(p) => p.theme.primary};
        padding: 0.3rem 1rem;
        border-radius: 3px;
        color: white;
        width: auto;
        font-size: var(--smallest);
        text-transform: uppercase;
    }
`;

export const SocialIcions = styled(Grid)`
    gap: 0.5rem;
    width: auto;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    border: 2px solid red;
    ${g.Box2} {
        position: absolute;
        left: -11rem;
        z-index: -10;
        background-color: ${(p) => p.theme.secondary};
        /* background-color: whitesmoke; */
        border-radius: 60%;
        /* border: 2px solid green; */
        height: 19rem;
        width: 15rem;
    }
`;
// section
export const ThingsWeLove = styled(Grid)`
    grid-template-rows: auto 1fr auto;
    background-color: ${(p) => p.theme.primary};
    /* height: 20rem; */
    gap: 2rem;
    color: white;
    padding: 4rem;
    ${g.Grid1} {
        /* border: 2px solid red; */
        font-size: ${(p) => p.theme.font.large};
    }
    ${g.Grid2} {
        /* border: 2px solid red; */
        grid-template-columns: repeat(4, 1fr);
        width: auto;
        gap: 4rem;
        ${g.Grid3} {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            ${g.GridA} {
            }
            ${g.GridB} {
                font-size: var(-smaller);
                max-width: 6rem;
                text-align: center;
                opacity: 0.8;
            }
        }
    }
`;

// section
export const WeAre = styled(Grid)`
    grid-template-columns: 1fr;
    gap: 1rem;
    /* place-items: center start; */
    padding: 0 2rem;
    ${g.GridA} {
        /* border: 2px solid red;R̥ */
        ${g.Box1} {
            /* border: 2px solid blue;R̥ */
            font-weight: bold;
            font-size: var(--small);
        }
        ${g.Box2} {
            font-size: ${(p) => p.theme.font.large};
            font-weight: bold;
            /* border: 2px solid blue;R̥ */
        }
    }
    ${g.GridB} {
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
        ${g.Grid1} {
            height: 100%;
        }
        ${g.Grid2} {
            height: 100%;
            grid-template-rows: auto 1fr;
            place-items: start start;
            gap: 1rem;
            /* about cleverkings */
            ${g.Box1} {
            }
            /* awards section */
            ${g.Box2} {
            }
        }
    } ;
`;

export const Awards = styled(Grid)`
    /* border: 2px solid cyan; */
    gap: 0.7rem;
    ${g.Box1} {
        font-size: ${(p) => p.theme.font.large};
        font-weight: bold;
    }
    ${g.Box2} {
        font-size: var(--smallest);
        font-weight: bold;
    }
    ${g.Grid1} {
        grid-template-columns: repeat(4, auto) 1fr;
        gap: 0.7rem;
        /* place-items: start start; */
        ${g.Box3} {
            border: 1px solid grey;
            height: auto;
            padding: 0.2rem;
            border-radius: 4px;
            padding: 0.3rem 2rem;
            /* place-items: center center; */
            /* width: auto; */
        }
    } ;
`;

export const ThreePics = styled(Grid)`
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        '. bb'
        'aa bb'
        'aa bb'
        'aa cc'
        'aa cc'
        '. cc';
    gap: 0.6rem;
    ${g.Grid1} {
        border: 2px solid cyan;
        grid-area: aa;
    }
    ${g.Grid2} {
        height: 1rem;
        /* width: 2rem; */
        grid-area: bb;
        border: 2px solid orange;
        min-height: 16rem;
    }
    ${g.Grid3} {
        grid-area: cc;
        height: 1rem;
        border: 2px solid orange;
        min-height: 16rem;
    }
`;

// section
export const DiscussProject = styled(Grid)`
    border: 2px solid yellow;
    color: white;
    min-height: 15rem;
    position: relative;
    grid-template-columns: 1fr 4fr 2fr;
    background-color: ${(p) => p.theme.primary};
    ${g.Grid1} {
        position: absolute;
        left: -5rem;
        width: auto;
    }
    ${g.Box2} {
    }
    ${g.Grid2} {
        ${g.Grid3} {
        }
        ${g.Box2} {
            text-transform: uppercase;
            text-align: center;
            font-size: var(--small);
        }
    } ;
`;

// section
export const ViewAllProjects = styled(Grid)`
    /* border: 1px solid; */
    padding: 2rem 0;
    ${g.GridA} {
        font-weight: bold;
        font-size: ${(p) => p.theme.font.large};
        text-align: center;
    }
    ${g.GridB} {
        padding: 0 3rem;
        grid-template-columns: 1fr 2fr 1fr;
        ${g.Grid1} {
            cursor: pointer;
        }
    }
    ${g.GridC} {
        text-transform: uppercase;
        font-weight: bold;
    }
`;

// section
export const OurClients = styled(Grid)`
    background-color: ${(p) => p.theme.primary};
    color: white;
    padding: 2rem 0;
    /* border: 2px solid blue; */
    ${g.GridA} {
        font-size: ${(p) => p.theme.font.larger};
        font-weight: bold;
    }
    ${g.GridB} {
        /* border: 2px solid green; */
        grid-template-columns: 1fr 4fr;
        gap: 2rem;
        width: auto;
        /* map wrapper */
        ${g.Grid1} {
            grid-template-columns: repeat(2, 6rem);
            gap: 1rem;
            /* each icon */
            ${g.Grid1a} {
                padding: 0.8rem;
                background-color: #111111;
                grid-template-columns: 1fr;
                gap: 1rem;
                /* img wrapper */
                ${g.Grid2a} {
                    /* border: 1px solid white; */
                }
                /* title */
                ${g.Grid2b} {
                    /* border: 2px solid skyblue; */
                    text-align: center;
                    font-size: var(--small);
                    opacity: 0.7;
                }
            }
        }
        ${g.Grid2} {
            /* border: 2px solid yellow; */
            grid-template-columns: repeat(4, auto);
            gap: 0.5rem;
            ${g.Grid2a} {
                border-radius: 3px;
                background-color: white;
                padding: 0.7rem 0;
                /* transform: scale(1.5); */
            }
        }
    }
`;

// section
export const Quote = styled(Grid)`
    --height: 35rem;
    /* padding: 2rem 4rem; */
    gap: 2rem;
    position: relative;
    height: var(--height);
    ${g.GridA} {
        position: absolute;
        top: 3rem;
        left: 3rem;
        width: auto;
        ${g.Box1} {
            opacity: 0.8;
            font-size: ${(p) => p.theme.font.larger};
            font-weight: bold;
        }
    }
    ${g.GridB} {
        @media ${e.device.mobileL} {
            width: 100%;
            padding: 0 1rem;
        }
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        grid-template-columns: 1fr 4fr;
        width: auto;
        gap: 2rem;
        ${g.Box2} {
            opacity: 0.6;
            font-weight: bold;
            font-style: italic;
            line-height: 2rem;
            @media ${e.device.mobileL} {
                opacity: 1;
            }
        }
    }
    ${g.GridC} {
        position: absolute;
        top: 70%;
        left: 70%;
        width: auto;
        font-style: italic;
        font-weight: bold;
        opacity: 0.8;
    }
    ${g.GridD} {
        position: absolute;
        z-index: -10;
        height: var(--height);
        top: 0;
        left: 0;
        /* height: 100%; */
        width: 100;
    }
`;

// section
export const OurThoughts = styled(Grid)`
    position: relative;
    padding: 3rem;
    place-items: end center;
    gap: 2rem;
    @media ${e.device.mobileL} {
        border: 2px solid blue;
        width: 400px;
        height: auto;
    }
    ${g.Box1} {
        /* position: absolute; */
        /* width: auto; */
        /* top: 3rem; */
        font-weight: bold;
        /* left: 3rem; */
        font-size: ${(p) => p.theme.font.large};
    }
    // 3 boxes
    ${g.Grid1} {
        @media ${e.device.mobileL} {
            grid-template-columns: 1fr;
            padding: 10rem 0 0;
        }
        padding: 0;
        grid-template-columns: 1fr repeat(3, auto) 1fr;
        /* padding: 10%; */
        gap: 3rem;
        ${g.Grid1a} {
            @media ${e.device.mobileL} {
                gap: 0;
            }
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr;
            gap: 0.7rem;
            height: 100%;
            place-items: start start;
            /* border: 2px solid blue; */
            width: auto;
            ${g.Grid2a} {
                /* border: 2px solid blue; */
                overflow: hidden;
                height: 15rem;
                width: 17rem;
                @media ${e.device.mobileL} {
                    width: 90%;
                    height: 450px;
                }
            }
            ${g.Grid2b} {
                /* border: 2px solid; */
                max-width: 10rem;
                font-size: var(--smaller);
                opacity: 0.7;
                font-weight: bold;
                @media ${e.device.mobileL} {
                    font-weight: bold;
                    /* padding: 0 3rem; */
                    font-size: ${(p) => p.theme.font.medium};
                }
            }
        }
    }
    /* ${g.Grid2} {
        width: auto;
        ${g.Box2} {
            width: auto;
            text-transform: uppercase;
        }
    } */
`;

// section
export const LetsTalk = styled(Grid)`
    --height: 15rem;
    padding: 3rem;
    height: var(--height);
    color: white;
    grid-template-columns: 1fr;
    position: relative;
    place-items: center start;
    gap: 1rem;
    // row - 1
    ${g.Box1} {
        font-size: ${(p) => p.theme.font.large};
    }
    // row - 2
    ${g.Grid2} {
        grid-template-columns: 15rem 5rem;
        width: auto;
        // col - 1
        ${g.Grid2a} {
            // 1
            input {
                outline: none;
                padding: 1rem;
                width: 100%;
                ::placeholder {
                    color: grey;
                    font-size: var(--small);
                }
            }
        }
        // col - 2
        ${g.Grid2b} {
            height: 3rem;
            cursor: pointer;
        }
    }
    ${g.Box2} {
        position: absolute;
        height: var(--height);
        z-index: -10;
        filter: brightness(0.4);
    }
    /* ${g.GridA} {
    } */
`;

export const Footer = styled(Grid)`
    color: white;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 2rem 4rem;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    ${g.GridA} {
        gap: 2rem;
        ${g.Grid1} {
            /* border: 2px solid pink; */
            grid-template-columns: 1fr;
            gap: 1rem;
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
        // subscribe area
        ${g.Grid3} {
            grid-template-columns: 1fr 4rem;
            gap: 1rem;
            ${g.Grid3a} {
                /* border: 2px solid red; */
                input {
                    outline: none;
                    width: 100%;
                    padding: 0.5rem;
                    ::placeholder {
                        font-size: var(--small);
                        color: grey;
                    }
                }
            }
            ${g.Grid3b} {
                /* border: 2px solid cyan; */
                height: 2rem;
                /* background-color: white; */
            }
        }
    }
    ${g.GridB} {
        /* border: 2px solid blue; */
        gap: 0.4rem;
        /* textbox */
        ${g.Grid2a} {
            /* border: 2px solid yellow; */
            place-items: center start;
            font-size: var(--small);
            opacity: 0.7;
            :hover {
                opacity: 1;
                color: #eff30d;
                cursor: pointer;
            }
        }
    }
`;

export const BelowFooter = styled(Grid)`
    background-color: rgba(0, 0, 0, 1);
    color: white;
    grid-template-columns: auto 1fr auto;
    padding: 1rem 2rem;
    ${g.GridA} {
        grid-template-columns: repeat(4, auto);
        gap: 0.4rem;
        /* border: 2px solid blue; */
        width: auto;
        ${g.Grid1} {
            font-size: var(--smallest);
            /* border: 2px solid red; */
            width: auto;
            :hover {
                color: pink;
                cursor: pointer;
            }
        }
    }
    ${g.GridB} {
        grid-template-columns: 1fr;
        font-size: var(--smallest);
    } ;
`;

// page
export const About = styled(Grid)`
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`;
