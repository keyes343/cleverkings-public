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

// -------------------------------------------start
export const Pic = styled(Box)`
    position: relative;
`;
export const Wrapper1 = styled(Grid)``;
export const Wrapper2 = styled(Grid)``;
export const Wrapper3 = styled(Grid)``;

const circle0 = styled(Grid)`
    height: 40rem;
    width: 40rem;
    border-radius: 50%;
    position: absolute;
`;
export const circle1 = styled(circle0)`
    /* upward */
    right: -25rem;
    bottom: -30rem;
    @media ${e.device.mobileL} {
        right: -28rem;
        bottom: -33rem;
    }
`;
export const circle2 = styled(circle0)`
    /* leftward */
    right: -15rem;
    bottom: -33rem;
    @media ${e.device.mobileL} {
        right: -20rem;
        bottom: -37rem;
    }
`;
export const Ribbon = styled(Grid)`
    position: relative;
    transform: rotate(-45deg);
`;
export const Laptop = styled(Grid)``;

const swing = keyframes`
    0% {
        right: 20rem;
        top:7%
        transform:scale(1)
    }
    40% {
        right: 50rem;
        top:13%;
        transform:scale(1.3)
    }
    100% {
        right: 20rem;
        top:7%
    }
`;
export const MovingDots = styled(Grid)`
    animation: ${swing} 9s infinite;
`;
// -------------------------------------------end

// section
export const ThingsThatMatter = styled(Grid)`
    @media ${e.device.mobileL} {
        height: 40rem;
        /* display: none; */
        /* border: 2px solid blue; */
    }
    height: 80vh;
    /* border: 2px solid yellow; */
    position: relative;
    overflow: hidden;
    /* black dots moving */
    ${MovingDots} {
        @media ${e.device.mobileL} {
            display: none;
        }
        position: absolute;
        top: 7%;
        right: 30rem;
        /* transform: translateY(-50%); */
        width: 16rem;
        height: 16rem;

        /* border: 2px solid blue; */
    }
    /* stationary laptop image */
    ${Laptop} {
        position: absolute;
        top: 50%;
        right: 5rem;
        transform: translateY(-50%);
        width: 35rem;
        height: 30rem;
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            display: none;
            /* position: relative;
            border: 2px solid blue;
            left: 0;
            transform: translateY(0); */
        }
    }
    ${circle1} {
        background-color: rgba(0, 0, 0, 0.6);
        /* border: 2px solid blue; */
    }
    ${circle2} {
        background-color: rgba(0, 0, 0, 0.7);
        /* border: 2px solid red; */
    }
    ${Ribbon} {
        position: absolute;
        /* border: 2px solid blue; */
        height: 8rem;
        width: 10rem;
        z-index: -10;
        top: 10%;
        right: 2rem;
        @media ${e.device.mobileL} {
            height: 6rem;
            width: 8rem;
            top: 3%;
            right: -1rem;
            /* border: 2px solid blue; */
        }
    }
`;

// ------------------------------------------start
export const ShoutoutArea_heading = styled(Grid)``;
// ------------------------------------------end
export const lets_talk_btn = styled(Grid)``;
// section
export const ShoutoutArea = styled(Grid)`
    @media ${e.device.mobileL} {
        /* border: 2px solid red; */
        padding: 0 1rem;
        width: 100%;
        left: 0;
        place-items: center center;
        /* display: none; */
    }
    width: auto;
    position: absolute;
    /* border: 2px solid cyan; */
    top: 50%;
    left: 8rem;
    transform: translateY(-50%);
    place-items: center start;
    gap: 1.5rem;
    ${ShoutoutArea_heading} {
        height: 12rem;
        font-family: var(--poppins);
        line-height: 4.6rem;
        font-size: 2.2rem;
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            font-size: 1.4rem;
            /* border: 2px solid red; */
            /* font-weight: bold; */
            width: auto;
            height: 100%;
            line-height: 2.7rem;
            text-align: center;
            max-height: 8rem;
        }
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
        font-size: 1.2rem;
        @media ${e.device.mobileL} {
            text-align: center;
            font-size: 1.4rem;
        }
    }
    /* lets talk button */
    ${lets_talk_btn} {
        @media ${e.device.mobileL} {
            font-size: 1rem;
            padding: 0.7rem 2rem;
            border-radius: 5px;
        }
        /* border: 2px solid blue; */
        background-color: ${(p) => p.theme.primary};
        padding: 0.7rem 1.5rem;
        /* padding: 0.7rem 1.2rem 0.4rem; */
        border-radius: 3px;
        color: white;
        width: auto;
        /* font-size: var(--smallest); */
        text-transform: uppercase;
        cursor: pointer;
        :hover {
            opacity: 0.7;
        }
    }
`;

export const SocialIcions = styled(Grid)`
    gap: 0.5rem;
    width: auto;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    border: 2px solid red;
    @media ${e.device.mobileL} {
        display: none;
    }
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

// ------------------------------------------start
export const ThingsWeLove_line1 = styled(Grid)``;
export const ThingsWeLove_line2 = styled(Grid)``;
export const ThingsWeLove_icon = styled(Grid)``;
export const ThingsWeLove_dots = styled(Grid)``;
// ------------------------------------------start

// section
export const ThingsWeLove = styled(Grid)`
    /* grid-template-rows: auto 1fr auto; */
    background-color: rgba(0, 0, 0, 0.87);
    /* height: 50vh; */
    overflow: hidden;
    z-index: -100;
    gap: 1rem;
    color: white;
    padding: 5rem;
    position: relative;
    @media ${e.device.mobileL} {
        background-color: rgba(0, 0, 0, 0.88);
        /* display: none; */
        padding: 4rem 2rem;
    }
    ${ThingsWeLove_line1} {
        z-index: -50;

        opacity: 0.8;
        font-size: 2.3rem;
        @media ${e.device.mobileL} {
            font-size: 1.6rem;
            font-weight: bold;
        }
    }
    ${ThingsWeLove_line2} {
        grid-template-columns: repeat(4, 1fr);
        width: auto;
        gap: 4rem;
        z-index: -50;
        @media ${e.device.mobileL} {
            /* height: 100%; */
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            /* width: 100%; */
        }
        ${g.Grid2a} {
            @media ${e.device.mobileL} {
                place-items: start center;
            }
            z-index: -50;
            height: 100%;
            padding: 1rem;
            /* background-color: #0a0a0a; */
            background-color: #1b1b1b;
            /* height: 100%; */
            grid-template-columns: 1fr;
            gap: 1rem;

            ${ThingsWeLove_icon} {
                /* border: 2px solid red; */
                height: 4rem;
                max-width: 8rem;
                @media ${e.device.mobileL} {
                    height: 3rem;
                }
            }
            ${g.GridB} {
                /* border: 2px solid yellow; */
                font-size: 1.1rem;
                max-width: 10rem;
                text-align: center;
                opacity: 0.8;
                @media ${e.device.mobileL} {
                    font-size: var(--small);
                    max-width: 7rem;
                }
            }
        }
    }
    /* white dots */
    ${ThingsWeLove_dots} {
        /* background-color: pink; */
        z-index: -75;
        /* display: none; */
        position: absolute;
        top: 50%;
        right: -8rem;
        width: auto;
        @media ${e.device.desktop} {
            transform: translateY(-40%);
        }
        @media ${e.device.mobileL} {
            display: grid;
            /* border: 2px solid red; */
            top: -4rem;
            right: -4rem;
        }
        ${Pic} {
            height: 17rem;
            width: 17rem;
            /* border: 2px solid bÆlue; */
            @media ${e.device.mobileL} {
            }
        }
    }
`;

// -------------------------------------------start
export const Title = styled(Grid)``;
export const Description = styled(Grid)``;
export const ImageAndDescriptionWrapper = styled(Grid)``;
export const DescriptionAndAwardWrapper = styled(Grid)``;
export const ThreePics = styled(Grid)``;
export const ThreePics_wrapper = styled(Grid)``;
// -------------------------------------------end

// section
export const WeAre = styled(Grid)`
    grid-template-columns: 1fr;
    gap: 3rem;
    /* border: 2px solid blue; */
    /* place-items: center start; */
    @media ${e.device.mobileL} {
        gap: 1rem;
        /* display: none; */
        padding: 0;
        /* border: 2px solid blue; */
    }
    padding: 7rem 7rem;
    ${Title} {
        position: relative;
        place-items: center start;
        @media ${e.device.mobileL} {
            /* border: 2px solid red; */
            gap: 1rem;
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
            font-size: 2.6rem;
            font-weight: bold;
            /* max-width: 40rem; */
            /* border: 2px solid blue; */
            @media ${e.device.mobileL} {
                font-size: var(--large);
                /* border: 2px solid blue; */
            }
            /* border: 2px solid blue; */
        }
        ${Ribbon} {
            position: absolute;
            /* border: 2px solid blue; */
            height: 7rem;
            width: 7rem;
            bottom: -4rem;
            left: 22rem;
            transform: rotate(-40deg);
            @media ${e.device.mobileL} {
                height: 6rem;
                width: 6rem;
                bottom: -2rem;
                right: 3rem;
                left: auto;
            }
        }
    }
    ${ImageAndDescriptionWrapper} {
        /* border: 2px solid blue; */
        grid-template-columns: 1fr 1.5fr;
        gap: 3rem;
        @media ${e.device.mobileL} {
            gap: 0rem;
            grid-template-columns: 1fr;
            /* border: 2px solid red; */
        }
        ${ThreePics_wrapper} {
            height: 100%;
            ${ThreePics} {
                /* border: 2px solid blue; */
                height: 100%;
                --webHeight: 14rem;
                --mobHeight: 11rem;
                grid-template-columns: 1fr 1fr;
                /* grid-template-rows: repeat(8, auto); */
                grid-template-areas:
                    '. bb'
                    'aa bb'
                    'aa bb'
                    'aa cc'
                    'aa cc'
                    '. cc';
                gap: 1rem;
                @media ${e.device.mobileL} {
                    padding: 1rem 15%;
                    gap: 1rem;
                    /* border: 2px solid blue; */
                }
                ${g.Grid1} {
                    height: 100%;
                    grid-area: aa;
                    min-height: var(--webHeight);
                    @media ${e.device.mobileL} {
                        min-height: var(--mobHeight);
                    }
                }
                ${g.Grid2} {
                    height: 100%;
                    /* width: 2rem; */
                    grid-area: bb;
                    min-height: var(--webHeight);
                    @media ${e.device.mobileL} {
                        min-height: var(--mobHeight);
                    }
                }
                ${g.Grid3} {
                    grid-area: cc;
                    height: 100%;
                    min-height: var(--webHeight);
                    /* width: 20rem; */
                    @media ${e.device.mobileL} {
                        min-height: var(--mobHeight);
                    }
                }
            }
        }
        ${DescriptionAndAwardWrapper} {
            height: 100%;
            grid-template-rows: auto 1fr;
            place-items: start start;
            gap: 2rem;
            /* border: 2px solid blue; */
            /* about cleverkings */
            ${Description} {
                font-size: 1.2rem;
                line-height: 1.7rem;
                /* border: 2px solid red; */
                max-width: 900px;
                opacity: 0.7;
                @media ${e.device.mobileL} {
                    /* font-size: 1rem; */
                    line-height: 2rem;
                    opacity: 0.7;
                    padding: 1rem 2rem;
                    font-family: var(--inter);
                    text-align: justify;
                    text-justify: inter-word;
                }
            }
            /* awards section */
            ${g.Box2} {
                /* border: 2px solid red; */
            }
        }
    } ;
`;

// -------------------------------------------start
export const Awards_imageRow = styled(Grid)``;
export const Awards_imageHolder = styled(Grid)``;
// -------------------------------------------end
// section
export const Awards = styled(Grid)<{ count: number }>`
    /* border: 2px solid cyan; */
    @media ${e.device.mobileL} {
        padding: 2rem 0;
        /* border: 2px solid red; */
    }
    gap: 0.7rem;
    ${g.Box3} {
        font-size: var(--larger);
        font-weight: bold;
        @media ${e.device.mobileL} {
            /* border: 2px solid blue; */
            /* height: 1.5rem;
            overflow: hidden; */
            padding: 0 2rem;
        }
    }
    ${g.Box2} {
        /* font-size: var(--smallest); */
        /* font-weight: bold; */
        /* border: 2px solid blue; */
        font-size: var(--medium);
        @media ${e.device.mobileL} {
            padding: 1rem 2rem;
            font-size: var(--normal);
            font-family: var(--inter);
            font-weight: bold;
            opacity: 0.8;
            line-height: 1.8rem;
        }
    }
    ${Awards_imageRow} {
        /* border: 2px solid blue; */
        --cardWidth: 8rem;
        @media ${e.device.mobileL} {
            overflow: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            padding: 1rem;
            /* border: 2px solid blue; */
        }
        ${g.Grid1a} {
            @media ${e.device.mobileL} {
                grid-template-columns: repeat(${(p) => p.count}, var(--cardWidth));
            }
            grid-template-columns: repeat(4, 1fr);
            gap: 0.7rem;
            /* place-items: start start; */
            ${Awards_imageHolder} {
                border: 1px solid grey;
                height: 8rem;
                padding: 0.2rem;
                border-radius: 4px;
                padding: 0.3rem 2rem;
                /* place-items: center center; */
                /* width: 9rem; */
                @media ${e.device.mobileL} {
                    height: 5rem;
                }
            }
        }
    } ;
`;

// -------------------------------------------start
export const DiscussProject_dots = styled(Grid)``;
export const DiscussProject_line1 = styled(Box)``;
// -------------------------------------------end
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
    min-height: 25rem;
    position: relative;
    grid-template-columns: 1fr 4fr 2fr;
    background-color: ${(p) => p.theme.primary};
    ${DiscussProject_dots} {
        min-height: 5rem;
        position: absolute;
        left: -5rem;
        width: auto;
    }
    ${DiscussProject_line1} {
        font-size: 1.5rem;
        opacity: 0.7;
        /* span {
            border: 2px solid yellow;
            display: inline-block;
        } */
        @media ${e.device.mobileL} {
            text-align: center;
            max-width: 22rem;
            font-size: var(--medium);
        }
    }
    ${g.Grid2} {
        @media ${e.device.mobileL} {
            gap: 1rem;
        }
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
    gap: 1rem;
    /* border: 1px solid; */
    padding: 4rem 0;
    min-height: 80vh;
    @media ${e.device.mobileL} {
        min-height: 10vh;
        /* display: none; */
        padding: 4rem 2rem;
        /* border: 2px solid blue; */
    }
    ${g.GridA} {
        font-weight: bold;
        font-size: var(--larger);
        text-align: center;
        /* border: 2px solid blue; */
        @media ${e.device.mobileL} {
            font-size: var(--large);
        }
    }
    padding: 0 3rem;
    ${g.GridB} {
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
            height: 20rem;
            @media ${e.device.mobileL} {
                height: 15rem;
                /* width: 7rem; */
            }
        }
    }
    ${g.GridC} {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.3rem;
        cursor: pointer;
        :hover {
            color: darkred;
            text-decoration: underline;
        }
        @media ${e.device.mobileL} {
            font-size: 1rem;
        }
    }
`;

//  -------------------------------------------start
export const OurClients_header = styled(Grid)``;
export const OurClients_body = styled(Grid)``;
export const OurClients_animationColumn = styled(Grid)``;
export const OurClients_animationCard = styled(Grid)``;
export const OurClients_cards = styled(Grid)``;
export const OurClients_card = styled(Grid)``;
// -------------------------------------------end
// section
export const OurClients = styled(Grid)`
    gap: 4rem;
    background-color: ${(p) => p.theme.primary};
    color: white;
    padding: 5rem 0;
    /* text - our clients */
    @media ${e.device.mobileL} {
        gap: 4rem;
        /* display: none; */
    }
    ${OurClients_header} {
        font-size: ${(p) => p.theme.font.larger};
        /* border: 2px solid blue; */
        font-weight: bold;

        ${Ribbon} {
            display: none;
            /* get white ribbon first, then turn on display, currently we have black ribbon */
        }
    }
    /* 4 icons */
    ${OurClients_body} {
        /* border: 2px solid green; */
        grid-template-columns: auto 1fr;
        gap: 2rem;
        width: auto;
        @media ${e.device.mobileL} {
            /* border: 2px solid red; */
            gap: 4rem;
            width: 100%;
            grid-template-columns: 1fr;
        }
        /* map wrapper */
        ${OurClients_animationColumn} {
            grid-template-columns: repeat(2, auto);
            gap: 1rem;
            /* border: 2px solid blue; */
            height: 100%;
            @media ${e.device.mobileL} {
                grid-template-columns: repeat(2, auto);
                overflow: none;
                gap: 2rem;
                /* border: 2px solid red; */
                /* width: 20rem; */
                width: auto;
            }
            /* each icon */
            ${OurClients_animationCard} {
                padding: 0.8rem;
                background-color: #111111;
                grid-template-columns: 1fr;
                gap: 1rem;
                /* border: 2px solid blue; */
                @media ${e.device.mobileL} {
                    /* display: none; */
                }
                /* img wrapper */
                ${Pic} {
                    /* border: 1px solid white; */
                    width: 5rem;
                    height: 5rem;
                    @media ${e.device.mobileL} {
                        width: 3rem;
                        height: 3rem;
                    }
                }
                /* title */
                ${g.Grid2b} {
                    text-align: center;
                    font-size: 1.5rem;
                    opacity: 0.7;
                    max-width: 6rem;
                    color: #bbb5c9;
                    @media ${e.device.mobileL} {
                        font-size: 1.1rem;
                    }
                }
            }
        }
        ${OurClients_cards} {
            overflow: auto;
            @media ${e.device.mobileL} {
                /* display: none; */
            }
            ${Wrapper1} {
                gap: 3rem 1rem;
                grid-template-columns: repeat(4, 11rem);
                width: auto;
                /* height: 100%; */
                @media ${e.device.mobileL} {
                    grid-template-columns: repeat(6, auto);
                    gap: 1rem 0.5rem;
                    /* width: 150vw; */
                    padding: 2rem;
                }
                ${OurClients_card} {
                    padding: 0.5rem;
                    background-color: white;
                    border-radius: 3px;
                    min-height: 5rem;
                    /* width: auto; */
                    /* min-width: 7rem; */
                    @media ${e.device.mobileL} {
                    }
                    ${Pic} {
                        padding: 0.7rem 0;
                        min-height: 6rem;
                        /* transform: scale(1.5); */
                        @media ${e.device.mobileL} {
                            min-height: 4rem;
                            min-width: 9rem;
                            /* padding: 1rem; */
                        }
                    }
                }
            }
        }
    }
`;

// -------------------------------------------start
export const Quote_header = styled(Grid)``;
export const Quote_icon = styled(Grid)``;
export const Quote_wrapper1 = styled(Grid)``;
export const Quote_by = styled(Grid)``;
export const Text = styled(Box)``;
// -------------------------------------------end

// section
export const Quote = styled(Grid)`
    --height: 35rem;
    --mobheight: 40rem;
    --pad: 4rem 6rem;
    --padMobile: 4rem 2rem;

    @media ${e.device.mobileL} {
        /* display: none; */
        height: var(--mobheight);
    }
    gap: 2rem;
    position: relative;
    height: var(--height);
    ${Quote_header} {
        position: absolute;
        padding: var(--pad);
        top: 0;
        left: 0;
        width: auto;
        @media ${e.device.mobileL} {
            padding: var(--padMobile);
            /* left: 2rem; */
            height: auto;
        }
        ${Text} {
            opacity: 0.8;
            font-size: var(--larger);
            font-weight: bold;
            position: relative;
            @media ${e.device.mobileL} {
                opacity: 0.9;
                position: relative;
                /* display: none; */
                font-size: var(--large);
            }
            ${Ribbon} {
                position: absolute;
                @media ${e.device.mobileL} {
                    /* border: 2px solid blue; */
                    height: 7rem;
                    width: 7rem;
                    bottom: -4.6rem;
                    left: 6rem;
                }
            }
        }
    }
    ${Quote_wrapper1} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        grid-template-columns: 1fr 4fr;
        /* width: auto; */
        gap: 2rem;
        @media ${e.device.mobileL} {
            width: 100%;
            padding: 0 1rem;
            /* border: 2px solid blue; */
            gap: 0;
            place-items: start center;
        }
        /* border: 2px solid red; */
        ${Quote_icon} {
            /* border: 2px solid blue; */
            height: 9rem;
            @media ${e.device.mobileL} {
                height: 5rem;
                top: 0;
                /* border: 2px solid blue; */
                margin: -2rem 0 0;
                transform: translate(0, 0);
            }
        }
        ${Text} {
            opacity: 0.6;
            /* font-weight: bold; */
            font-style: italic;
            line-height: 2rem;
            font-size: 1.4rem;
            @media ${e.device.mobileL} {
                font-size: 1rem;
                font-weight: bold;
                /* border: 2px solid blue; */
                max-width: 18rem;
                opacity: 0.7;
            }
        }
    }
    ${Quote_by} {
        position: absolute;
        top: 70%;
        left: 80%;
        width: auto;
        font-style: italic;
        font-weight: bold;
        opacity: 0.8;
        @media ${e.device.mobileL} {
            top: 75%;
            left: 60%;
        }
    }
    ${g.GridD} {
        position: absolute;
        z-index: -10;
        height: var(--height);
        top: 0;
        left: 0;
        height: 100%;
        width: 100;
    }
`;

// -------------------------------------------start
export const OurThoughts_Header = styled(Grid)``;
export const OurThoughts_PicStripe = styled(Grid)``;
export const OurThoughts_Pic_MapContainer = styled(Grid)``;
export const OurThoughts_Pic = styled(Grid)``;
// -------------------------------------------end

// section
export const OurThoughts = styled(Grid)`
    --pad: 6rem 6rem;
    position: relative;
    padding: var(--pad);
    place-items: end center;
    gap: 6rem;
    @media ${e.device.mobileL} {
        /* border: 2px solid blue; */
        padding: 4rem 2rem;
        /* margin: -4rem 0 0; */
        /* height: auto; */
        /* display: none; */
    }
    ${Text} {
        /* position: absolute; */
        /* width: auto; */
        /* top: 3rem; */
        font-weight: bold;
        /* border: 2px solid blue; */
        /* left: 3rem; */
        /* border: 2px solid blue; */
        font-size: var(--large);
        position: relative;
        @media ${e.device.mobileL} {
        }
        ${Ribbon} {
            position: absolute;
            width: auto;
            height: 7rem;
            width: 7rem;
            /* border: 2px solid red; */
            bottom: -5rem;
            left: 10rem;
            @media ${e.device.mobileL} {
                /* height: 7rem;
                width: 7rem;
                bottom: -5rem;
                left: 10rem; */
            }
            /* border: 2px solid blue; */
        }
    }
    // 3 boxes
    ${OurThoughts_PicStripe} {
        padding: 0;
        grid-template-columns: repeat(3, 1fr);
        /* padding: 10%; */
        gap: 3rem;
        @media ${e.device.mobileL} {
            grid-template-columns: 1fr;
            /* padding: 10rem 0 0; */
            width: 100%;
            height: auto;
        }
        ${OurThoughts_Pic_MapContainer} {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr;
            gap: 0.7rem;
            height: 100%;
            place-items: start start;
            /* width: auto; */
            @media ${e.device.mobileL} {
                gap: 1rem;
                width: 100%;
                /* border: 2px solid blue; */
                /* height: 5rem; */
            }
            ${OurThoughts_Pic} {
                overflow: hidden;
                height: 24rem;
                /* width: 24rem; */
                @media ${e.device.mobileL} {
                    width: 90%;
                    height: 17rem;
                    width: 100%;
                }
            }
            ${g.Grid2b} {
                /* border: 2px solid; */
                /* max-width: 10rem; */
                /* font-size: var(--smaller); */
                font-size: 1.3rem;
                padding: 0 0.5rem;
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

// -------------------------------------------start
export const LetsTalk_wrapInput = styled(Grid)``;
// -------------------------------------------end

// section
export const LetsTalk = styled(Grid)`
    --height: 20rem;
    --mobHeight: 15rem;
    --pad: 4rem 6rem;
    padding: var(--pad);
    height: var(--height);
    color: white;
    grid-template-columns: 1fr;
    position: relative;
    place-items: center start;
    gap: 1rem;
    @media ${e.device.mobileL} {
        place-items: center;
        height: var(--mobHeight);
        /* display: none; */
        padding: 2rem 1rem;
    }
    ${Text} {
        font-size: var(--largest);
        @media ${e.device.mobileL} {
            font-size: var(--large);
            text-align: center;
            /* border: 2px solid blue; */
            max-width: 17rem;
        }
    }
    ${Wrapper1} {
        grid-template-columns: 25rem 5rem;
        width: auto;
        @media ${e.device.mobileL} {
            grid-template-columns: 1fr 5rem;
        }
        ${LetsTalk_wrapInput} {
            /* border: 2px solid blue; */
            input {
                outline: none;
                padding: 0.7rem 1rem;
                width: 100%;
                font-size: var(--large);
                ::placeholder {
                    color: #9b9999;
                }
                @media ${e.device.mobileL} {
                    font-size: var(--medium);
                    /* border: 2px solid blue; */
                    /* display: none; */
                }
            }
        }
        // col - 2
        ${g.Grid2b} {
            height: 3rem;
            cursor: pointer;
        }
    }
    ${Pic} {
        position: absolute;
        height: var(--height);
        z-index: -10;
        filter: brightness(0.25);
        @media ${e.device.mobileL} {
            height: var(--mobHeight);
        }
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
            grid-template-columns: 1fr;
            gap: 1rem;
            /* row - 1 */
            ${g.Grid1a} {
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
