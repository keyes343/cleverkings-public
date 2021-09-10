import styled, { keyframes } from 'styled-components';
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
    @media ${e.device.mobileL} {
        height: 40rem;
        /* border: 2px solid blue; */
    }
    height: 20rem;
    /* border: 2px solid yellow; */
    position: relative;
    ${g.Box1} {
        @media ${e.device.mobileL} {
            display: none;
        }
        position: absolute;
        top: 10%;
        left: 55%;
        /* transform: translateY(-50%); */
        width: 10rem;
        height: 10rem;
        /* border: 2px solid blue; */
    }
    /* stationary laptop image */
    ${g.Box2} {
        @media ${e.device.mobileL} {
            display: none;
            /* position: relative;
            border: 2px solid blue;
            left: 0;
            transform: translateY(0); */
        }
        position: absolute;
        top: 50%;
        left: 60%;
        transform: translateY(-50%);
        width: 20rem;
        height: 14rem;
        /* border: 2px solid blue; */
    }
`;

const swing = keyframes`
    from {}
`;

export const ShoutoutArea = styled(Grid)`
    @media ${e.device.mobileL} {
        /* border: 2px solid red; */
        padding: 0 1rem;
        width: 100%;
        left: 0;
        place-items: center center;
    }
    width: auto;
    position: absolute;
    /* border: 2px solid cyan; */
    top: 50%;
    left: 8rem;
    transform: translateY(-50%);
    place-items: center start;
    gap: 2rem;
    ${g.Box3} {
        /* width: auto; */
        /* position: relative; */
        @media ${e.device.mobileL} {
            font-size: 3rem;
            /* border: 2px solid red; */
            width: auto;
            height: 100%;
            /* line-height: 4.3rem; */
            text-align: center;
        }
        font-size: 2.5rem;
        font-weight: bold;
        line-height: 2.6rem;
    }
    ${g.Grid2a} {
        display: none;
        @media ${e.device.mobileL} {
            display: grid;
            min-height: 15rem;
            /* border: 2px solid blue; */
        }
    }
    /* text - unique solutions for your business */
    ${g.Box4} {
        /* position: relative;t
        transform: translate(0, 0); */
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            text-align: center;
            font-size: 1.4rem;
        }
    }
    /* lets talk button */
    ${g.Grid1} {
        @media ${e.device.mobileL} {
            font-size: 1rem;
            padding: 0.7rem 2rem;
            border-radius: 5px;
        }
        background-color: ${(p) => p.theme.primary};
        padding: 0.3rem 1rem;
        border-radius: 3px;
        color: white;
        width: auto;
        font-size: var(--smallest);
        text-transform: uppercase;
        cursor: pointer;
    }
`;

export const SocialIcions = styled(Grid)`
    @media ${e.device.mobileL} {
        display: none;
    }
    gap: 0.5rem;
    width: auto;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    /* border: 2px solid green; */
    ${g.Box2} {
        position: absolute;
        left: -11rem;
        top: 50%;
        transform: translate(0, -50%);
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
    /* grid-template-rows: auto 1fr auto; */
    background-color: ${(p) => p.theme.primary};
    /* height: 20rem; */
    overflow: hidden;

    gap: 2rem;
    color: white;
    padding: 2rem;
    position: relative;
    @media ${e.device.mobileL} {
        /* display: none; */
        /* border: 2px solid blue; */
        padding: 4rem 2rem;
        /* min-height: 25rem; */
    }
    ${g.Grid1} {
        /* border: 2px solid red; */
        font-size: var(--large);
        @media ${e.device.mobileL} {
            font-size: 1.6rem;
            /* border: 2px solid blue; */
            font-weight: bold;
        }
    }
    ${g.Grid2} {
        grid-template-columns: repeat(4, 1fr);
        width: auto;
        gap: 4rem;
        @media ${e.device.mobileL} {
            /* border: 2px solid red; */
            /* height: 100%; */
            grid-template-columns: repeat(2, 1fr);
            /* border: 2px solid blue; */
            /* gap: 2rem; */
            /* width: 100%; */
        }
        ${g.Grid2a} {
            @media ${e.device.mobileL} {
                /* border: 2px solid blue; */
                place-items: start center;
            }
            height: 100%;
            grid-template-columns: 1fr;
            gap: 0.5rem;

            ${g.GridA} {
                /* border: 2px solid red; */
                height: 3rem;
                max-width: 8rem;
                /* @media ${e.device.mobileL} {
                } */
            }
            ${g.GridB} {
                @media ${e.device.mobileL} {
                    font-size: var(--small);
                    max-width: 7rem;
                }
                /* border: 2px solid yellow; */
                font-size: var(--smaller);
                max-width: 6rem;
                text-align: center;
                opacity: 0.8;
            }
        }
    }
    /* white dots */
    ${g.Grid3} {
        display: none;
        @media ${e.device.mobileL} {
            position: absolute;
            display: grid;
            /* border: 2px solid red; */
            width: auto;
            top: -4rem;
            right: -4rem;
        }
        ${g.Grid3a} {
            @media ${e.device.mobileL} {
                height: 17rem;
                width: 17rem;
                /* border: 2px solid blue; */
            }
        }
    }
`;

// section
export const WeAre = styled(Grid)`
    @media ${e.device.mobileL} {
        /* display: none; */
        padding: 0;
    }
    grid-template-columns: 1fr;
    gap: 1rem;
    /* place-items: center start; */
    padding: 2rem;
    ${g.GridA} {
        /* border: 2px solid red; */
        @media ${e.device.mobileL} {
            padding: 2rem;
        }
        ${g.Box1} {
            /* border: 2px solid blue;R̥ */
            /* font-weight: bold; */
            font-size: var(--large);
            @media ${e.device.mobileL} {
                font-size: var(--large);
                /* border: 2px solid blue; */
            }
        }
        ${g.Box2} {
            @media ${e.device.mobileL} {
                font-size: var(--larger);
            }
            font-size: ${(p) => p.theme.font.larger};
            font-weight: bold;
            /* border: 2px solid blue;R̥ */
        }
    }
    ${g.GridB} {
        @media ${e.device.mobileL} {
            grid-template-columns: 1fr;
            /* border: 2px solid red; */
        }
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
                @media ${e.device.mobileL} {
                    font-size: 1.5rem;
                    line-height: 2.7rem;
                    opacity: 0.7;
                    padding: 1rem 2rem;
                }
            }
            /* awards section */
            ${g.Box2} {
            }
        }
    } ;
`;

export const Awards = styled(Grid)<{ count: number }>`
    /* border: 2px solid cyan; */
    @media ${e.device.mobileL} {
        padding: 2rem 0;
        /* border: 2px solid red; */
    }
    gap: 0.7rem;
    ${g.Box3} {
        font-size: var(--large);
        font-weight: bold;
        @media ${e.device.mobileL} {
            padding: 1rem 2rem;
        }
    }
    ${g.Box2} {
        font-size: var(--smallest);
        font-weight: bold;
        @media ${e.device.mobileL} {
            font-size: var(--medium);
            padding: 1rem 2rem;
            font-weight: normal;
        }
    }
    ${g.Grid1} {
        --cardWidth: 8rem;
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            overflow: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
        }
        ${g.Grid1a} {
            @media ${e.device.mobileL} {
                grid-template-columns: repeat(${(p) => p.count}, var(--cardWidth));
            }
            grid-template-columns: repeat(4, auto) 1fr;
            gap: 0.7rem;
            /* place-items: start start; */
            ${g.Box3} {
                border: 1px solid grey;
                height: 3rem;
                padding: 0.2rem;
                border-radius: 4px;
                padding: 0.3rem 2rem;
                /* place-items: center center; */
                /* width: auto; */
                @media ${e.device.mobileL} {
                    height: 5rem;
                }
            }
        }
    } ;
`;

export const ThreePics = styled(Grid)`
    @media ${e.device.mobileL} {
        padding: 1rem 3rem;
        /* border: 2px solid red; */
    }
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
        /* border: 2px solid cyan; */
        grid-area: aa;
    }
    ${g.Grid2} {
        height: 1rem;
        /* width: 2rem; */
        grid-area: bb;
        /* border: 2px solid orange; */
        min-height: 16rem;
    }
    ${g.Grid3} {
        grid-area: cc;
        height: 1rem;
        /* border: 2px solid orange; */
        min-height: 16rem;
    }
`;

// section
export const DiscussProject = styled(Grid)`
    @media ${e.device.mobileL} {
        /* display: none; */
        grid-template-columns: 1fr;
        /* border: 2px solid blue; */
        padding: 4rem 2rem;
        gap: 1rem;
    }
    /* border: 2px solid yellow; */
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
        @media ${e.device.mobileL} {
            text-align: center;
            max-width: 22rem;
            font-size: var(--medium);
        }
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
    @media ${e.device.mobileL} {
        /* display: none; */
        padding: 2rem 1rem;
        gap: 1rem;
        /* border: 2px solid blue; */
    }
    /* border: 1px solid; */
    padding: 2rem 0;
    ${g.GridA} {
        font-weight: bold;
        font-size: ${(p) => p.theme.font.large};
        text-align: center;
        /* border: 2px solid blue; */
    }
    ${g.GridB} {
        padding: 0 3rem;
        grid-template-columns: 1fr 2fr 1fr;
        /* border: 2px solid red; */
        /* @media ${e.device.laptopL} {
        } */
        @media ${e.device.mobileL} {
            /* border: 2px solid blue; */
            grid-template-columns: 1fr 6fr 1fr;
            padding: 0;
        }
        /* border: 2px solid blue; */
        ${g.Grid1} {
            cursor: pointer;
            height: 4rem;
            /* border: 2px solid red; */
            @media ${e.device.mobileL} {
                width: 100%;
            }
        }
        ${g.Grid2} {
            @media ${e.device.mobileL} {
                height: 15rem;
                /* width: 7rem; */
                /* border: 2px solid red; */
            }
        }
    }
    ${g.GridC} {
        text-transform: uppercase;
        font-weight: bold;
    }
`;

// section
export const OurClients = styled(Grid)`
    @media ${e.device.mobileL} {
        /* display: none; */
        gap: 2rem;
    }
    background-color: ${(p) => p.theme.primary};
    color: white;
    padding: 2rem 0;
    /* border: 2px solid blue; */
    /* text - our clients */
    ${g.GridA} {
        font-size: ${(p) => p.theme.font.larger};
        font-weight: bold;
    }
    /* 4 icons */
    ${g.GridB} {
        /* border: 2px solid green; */
        grid-template-columns: 1fr 4fr;
        gap: 2rem;
        width: auto;
        @media ${e.device.mobileL} {
            /* border: 2px solid red; */
            width: 100%;
            grid-template-columns: 1fr;
        }
        /* map wrapper */
        ${g.Grid1} {
            grid-template-columns: repeat(2, 6rem);
            gap: 1rem;
            @media ${e.device.mobileL} {
                /* border: 2px solid red; */
                width: auto;
            }
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
            /* border: 2px solid blue; */
            overflow: auto;
            ${g.Grid2a} {
                gap: 0.5rem;
                grid-template-columns: repeat(4, auto);
                /* border: 2px solid red; */
                @media ${e.device.mobileL} {
                    width: 150vw;
                    /* border: 2px solid red; */
                }
                ${g.Grid3a} {
                    padding: 0.5rem;
                    /* border: 2px solid red; */
                    background-color: white;
                    border-radius: 3px;
                    ${g.Grid4a} {
                        padding: 0.7rem 0;
                        height: 4rem;
                        /* transform: scale(1.5); */
                        @media ${e.device.mobileL} {
                            height: 3rem;
                            /* padding: 1rem; */
                        }
                    }
                }
            }
        }
    }
`;

// section
export const Quote = styled(Grid)`
    --height: 35rem;
    @media ${e.device.mobileL} {
        /* display: none; */
    }
    /* padding: 2rem 4rem; */
    gap: 2rem;
    position: relative;
    height: var(--height);
    /* border: 2px solid blue; */
    ${g.GridA} {
        position: absolute;
        top: 3rem;
        left: 3rem;
        width: auto;
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            left: 2rem;
        }
        ${g.Box1} {
            opacity: 0.8;
            font-size: var(--larger);
            font-weight: bold;
            @media ${e.device.mobileL} {
                font-size: 1.8rem;
            }
        }
    }
    ${g.GridB} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        grid-template-columns: 1fr 4fr;
        width: auto;
        gap: 2rem;
        @media ${e.device.mobileL} {
            width: 100%;
            padding: 0 1rem;
            /* border: 2px solid blue; */
            gap: 0;
            place-items: start center;
        }
        /* border: 2px solid red; */
        ${g.Grid1} {
            @media ${e.device.mobileL} {
                top: 0;
                margin: -2rem 0 0;
                transform: translate(0, 0);
                height: 5rem;
                /* border: 2px solid blue; */
            }
        }
        ${g.Box2} {
            opacity: 0.6;
            font-weight: bold;
            font-style: italic;
            line-height: 2rem;
            @media ${e.device.mobileL} {
                font-weight: bold;

                opacity: 0.5;
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
        @media ${e.device.mobileL} {
            left: 60%;
        }
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
        /* border: 2px solid blue; */
        padding: 3rem 2rem;
        /* height: auto; */
    }
    ${g.Box1} {
        /* position: absolute; */
        /* width: auto; */
        /* top: 3rem; */
        font-weight: bold;
        /* left: 3rem; */
        font-size: ${(p) => p.theme.font.large};
        @media ${e.device.mobileL} {
            /* border: 2px solid blue; */
        }
    }
    // 3 boxes
    ${g.Grid1} {
        @media ${e.device.mobileL} {
            grid-template-columns: 1fr;
            /* padding: 10rem 0 0; */
            /* border: 2px solid red; */
            width: 100%;
            height: auto;
        }
        padding: 0;
        grid-template-columns: 1fr repeat(3, auto) 1fr;
        /* padding: 10%; */
        gap: 3rem;
        ${g.Grid1a} {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr;
            gap: 0.7rem;
            height: 100%;
            place-items: start start;
            /* border: 2px solid blue; */
            width: auto;
            @media ${e.device.mobileL} {
                gap: 1rem;
                width: 100%;
                /* border: 2px solid blue; */
                /* height: 5rem; */
            }
            ${g.Grid2a} {
                /* border: 2px solid blue; */
                overflow: hidden;
                height: 15rem;
                width: 17rem;
                @media ${e.device.mobileL} {
                    width: 90%;
                    height: 17rem;
                    width: 100%;
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
                    /* border: 2px solid blue; */
                    /* width: 100%; */
                    max-width: 50rem;
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
    @media ${e.device.mobileL} {
        /* display: none; */
    }
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
    @media ${e.device.mobileL} {
        /* border: 2px solid blue; */
        padding: 3.4rem 2rem;
        /* display: none; */
        grid-template-columns: 1fr;
    }
    ${g.GridA} {
        gap: 2rem;
        place-items: start start;
        ${g.Grid2} {
            /* border: 2px solid blue; */
            margin: -1rem 0 0;
            height: 5rem;
            width: 5rem;
        }
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
