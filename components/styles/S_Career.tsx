import styled, { keyframes } from 'styled-components';
import { t, e } from './incoming';
import { Box, Grid } from './S_Box';
import * as g from './S_Box';

// ----------------------------- start

export const JoinUs = styled(Grid)``;
export const RightSkills = styled(Grid)``;
export const BodyText = styled(Box)``;
export const Btn = styled(Grid)``;
export const Pic = styled(Box)``;
// ----------------------------- end
export const Career_body = styled(Grid)`
    ${JoinUs} {
        ${RightSkills} {
            grid-area: right-skills;
        }
        ${BodyText} {
            grid-area: body-text;
        }
        ${Btn} {
            grid-area: btn;
        }
        ${Pic} {
            grid-area: pic;
        }
    }
`;
