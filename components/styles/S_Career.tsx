import styled, { keyframes } from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';

// ----------------------------- start

export const JoinUs = styled(Grid)``;
export const Checkout = styled(Grid)``;

export const RightSkills = styled(Grid)``;
export const BodyText = styled(Box)``;
export const Btn = styled(Grid)``;
export const Pic = styled(Box)`
    position: relative;
`;
export const Heading = styled(Box)``;
export const Stripe = styled(Grid)``;
export const Card = styled(Grid)``;
// ----------------------------- end
export const Career_body = styled(Grid)`
    --desktopPadding: 4rem 6rem;
    --mobilePadding: 4rem 2rem;
    border: 2px solid blue;
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
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            grid-template-areas:
                'pic'
                'right-skills'
                'body-text'
                'btn';
            padding: var(--mobilePadding);
        }
        ${RightSkills} {
            grid-area: right-skills;
            width: auto;
            font-size: var(--large);
            font-family: var(--poppins);
            font-weight: bold;
        }
        ${BodyText} {
            grid-area: body-text;
            text-align: justify;
            text-justify: inter-word;
        }
        ${Btn} {
            grid-area: btn;
            width: auto;
            color: rgba(255, 255, 255, 0.9);
            background-color: rgba(0, 0, 0, 0.8);
            padding: 0.5rem 1rem;
            cursor: pointer;
        }
        ${Pic} {
            grid-area: pic;
            height: 100%;
        }
    }
    ${Checkout} {
        padding: var(--desktopPadding);
        background-color: rgba(0, 0, 0, 0.05);
        gap: 2rem;
        ${Heading} {
            font-size: 2rem;
            width: auto;
            font-weight: bold;
        }
        ${Stripe} {
            grid-template-columns: repeat(6, 1fr);
            /* border: 2px solid red; */
            ${Card} {
                gap: 1rem;
                ${g.GridA} {
                    height: 3rem;
                }
            }
        }
    }
`;
