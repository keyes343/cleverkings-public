// import fb from './fb.svg';
// import twitter from './twitter.svg';
// import whatsapp from './whatsapp.svg';
// import linkedin from './linkedin.svg';
// import zoom from './zoom.svg';

import { t, e } from './incoming';

// const media = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media';
const media = process.env.AWS_PUBLIC_FILES;
const root = media + '/socialIcons/';

export const fb = root + 'fb.svg';
export const linkedin = root + 'linkedin.svg';
export const twitter = root + 'twitter.svg';
export const whatsapp = root + 'whatsapp.svg';
export const zoom = root + 'zoom.svg';
