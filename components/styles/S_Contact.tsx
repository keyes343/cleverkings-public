import styled from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from '.';
import { HiMenu } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

export const MainWrapper = styled(Grid)``;

//---------------------------------start
const Line = styled(Box)``;
export const Line1 = styled(Line)``;
export const Line2 = styled(Line)``;
export const Line3 = styled(Line)``;

export const Address = styled(Grid)``;
export const Phone = styled(Grid)``;
export const Email = styled(Grid)``;
export const SendBtn = styled(Grid)``;

export const Form = styled(Grid)``;
export const IconWrapper = styled(Grid)`
    opacity: 0.2;
`;

export const Icons_phone = styled(FaPhoneAlt)`
    font-size: inherit;
    color: inherit;
`;
export const Icons_gps = styled(ImLocation)`
    font-size: inherit;
    color: inherit;
`;

export const MultipleTexts = styled(Grid)``;
export const Text = styled(Box)``;
export const Input = styled(Grid)``;
export const Divider = styled(Box)`
    border: 1px solid rgba(0, 0, 0, 0.1);
`;
//---------------------------------end

// secion
export const Body = styled(Grid)`
    padding: 4rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        'intro .'
        'address-area form';
    width: auto;
    @media ${e.device.mobileL} {
        grid-template-columns: 1fr;
        padding: 2rem;
        grid-template-areas:
            'intro'
            'address-area'
            'form';
    }
    ${g.Grid1} {
        grid-area: intro;
        gap: 0.6rem;
        ${Line1} {
            text-transform: uppercase;
            color: grey;
            font-family: var(--poppins);
            font-weight: bold;
        }
        ${Line2} {
            font-size: 1.2rem;
            font-family: var(--poppins);
            font-weight: bold;
        }
        ${Line3} {
            ${MultipleTexts} {
                ${Text} {
                    color: grey;
                    max-width: 30rem;
                    font-size: var(--small);
                    text-align: justify;
                }
            }
        }
    }
    ${g.Grid2} {
        --common_grid-template-columns: auto 1fr;
        --common_place-items: start start;
        grid-area: address-area;
        /* ${Divider} {
            background-color: red;
        } */
        gap: 1rem;
        /* grid-template-columns: 1fr; */
        ${Address} {
            grid-template-columns: var(--common_grid-template-columns);
            place-items: var(--common_place-items);
            /* border: 3px solid orange; */
            ${IconWrapper} {
                /* height: 3rem; */
                font-size: 1.5rem;
                width: 3rem;
            }
            ${MultipleTexts} {
                ${Text} {
                    /* border: 2px solid blue; */
                }
            }
        }
        ${Phone} {
            grid-template-columns: var(--common_grid-template-columns);
            place-items: var(--common_place-items);
            /* border: 2px solid red; */
            ${IconWrapper} {
                height: auto;
                width: 3rem;
                font-size: 1.5rem;
            }
            ${MultipleTexts} {
                ${Text} {
                    /* border: 2px solid blue; */
                }
            }
        }
        ${Email} {
            grid-template-columns: var(--common_grid-template-columns);
            place-items: var(--common_place-items);
            /* border: 2px solid red; */
            ${IconWrapper} {
                height: auto;
                width: 3rem;
                font-size: 2rem;
            }
            ${MultipleTexts} {
                ${Text} {
                    /* border: 2px solid blue; */
                }
            }
        }
    }
    ${Form} {
        grid-area: form;
        /* border: 2px solid blue; */
        height: auto;
        gap: 1rem;
        ${Input} {
            gap: 1rem;
            grid-template-columns: 1fr;
            /* border: 2px solid red; */
            ${g.Box1} {
                gap: 1rem;
                /* border: 2px solid blue; */
                input {
                    width: 100%;
                    outline: none;
                    border: 1px solid rgba(0, 0, 0, 0.2);
                    /* height: 2rem; */
                    font-size: 1.1rem;
                    padding: 0.5rem;
                    ::placeholder {
                    }
                }
            }
        }
        ${SendBtn} {
            color: rgba(255, 255, 255, 0.7);
            background-color: #3c3c3c;
            padding: 1rem 0 0.7rem;
            cursor: pointer;
        }
    }
`;
