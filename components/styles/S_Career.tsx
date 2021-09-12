import styled, { keyframes } from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';
import { RiArrowDropDownLine, RiFileUploadFill } from 'react-icons/ri';

// ----------------------------- start

export const JoinUs = styled(Grid)``;
export const Checkout = styled(Grid)``;
export const Apply = styled(Grid)``;

export const RightSkills = styled(Grid)``;
export const BodyText = styled(Box)``;
export const Btn = styled(Grid)``;
export const Pic = styled(Box)`
    position: relative;
`;
export const Heading = styled(Box)``;
export const Stripe = styled(Grid)``;
export const Card = styled(Grid)``;
export const Inputs = styled(Grid)``;
export const Input_1 = styled(Grid)``;
export const BestOfLuck = styled(Box)``;

// icons
export const Icon_dropdown = styled(RiArrowDropDownLine)`
    font-size: inherit;
    color: inherit;
`;
export const Icon_upload = styled(RiFileUploadFill)`
    font-size: inherit;
    color: inherit;
`;

// ----------------------------- end
export const Career_body = styled(Grid)`
    --desktopPadding: 4rem 6rem;
    --mobilePadding: 4rem 2rem;
    ${JoinUs} {
        padding: var(--desktopPadding);
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        place-items: center start;
        grid-template-areas:
            'right-skills pic'
            'body-text pic'
            'btn pic';
        @media ${e.device.mobileL} {
            padding: 2rem;
            grid-template-columns: 1fr;
            gap: 2rem;
            /* border: 2px solid blue; */
            grid-template-areas:
                'pic'
                'right-skills'
                'body-text'
                'btn';
        }
        ${RightSkills} {
            grid-area: right-skills;
            width: auto;
            font-size: 1.2rem;
            font-family: var(--poppins);
            font-weight: bold;
            @media ${e.device.mobileL} {
                font-size: var(--medium);
                /* border: 2px solid blue; */
            }
        }
        ${BodyText} {
            grid-area: body-text;
            text-align: justify;
            text-justify: inter-word;
            line-height: 1.4rem;
            @media ${e.device.mobileL} {
                font-size: 1.1rem;
            }
        }
        ${Btn} {
            grid-area: btn;
            width: auto;
            color: rgba(255, 255, 255, 0.9);
            background-color: rgba(0, 0, 0, 0.8);
            padding: 0.5rem 1rem;
            cursor: pointer;
            font-size: var(--small);
        }
        ${Pic} {
            @media ${e.device.mobileL} {
                /* display: none; */
                min-height: 18rem;
                /* border: 2px solid red; */
            }
            grid-area: pic;
            height: 100%;
        }
    }
    ${Checkout} {
        padding: var(--desktopPadding);
        background-color: rgba(0, 0, 0, 0.08);
        gap: 2rem;
        @media ${e.device.mobileL} {
            gap: 4rem;
            padding: var(--mobilePadding);
            /* display: none; */
        }
        ${Heading} {
            font-size: 2rem;
            width: auto;
            font-weight: bold;
            @media ${e.device.mobileL} {
                text-align: center;
            }
        }
        ${Stripe} {
            grid-template-columns: repeat(6, 1fr);
            @media ${e.device.mobileL} {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }
            ${Card} {
                gap: 1rem;
                ${g.GridA} {
                    height: 3rem;
                }
                ${g.GridB} {
                    text-align: center;
                }
            }
        }
    }
    ${Apply} {
        background-color: #f7f7f7;
        padding: var(--desktopPadding);
        grid-template-columns: 1fr;
        place-items: center start;
        grid-template-areas:
            'apply'
            'inputs';
        gap: 2rem;
        position: relative;
        @media ${e.device.mobileL} {
            display: none;
        }
        ${g.GridA} {
            font-weight: bold;
            font-size: 1.5rem;
            grid-area: apply;
            width: auto;
        }
        ${Inputs} {
            grid-area: inputs;
            width: auto;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            ${Input_1} {
                input {
                    padding: 0.5rem 1rem;
                }
            }
            ${Btn} {
                font-family: var(--inter);
                background-color: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 0.5rem 1rem;
                /* grid-area: btn; */
            }
        }
        ${BestOfLuck} {
            position: absolute;
            height: 16rem;
            width: 16rem;
            right: 20%;
            top: 50%;
            transform: translateY(-50%);
        }
    }
`;
