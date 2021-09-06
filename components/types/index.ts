import * as forms from './T_Forms';
import * as payloads from './T_Payloads';
import * as user from './T_User';
import * as box from './T_Box';
import * as panel from './T_Panel';
import * as places from './T_Places';
import * as kinds from './T_Kinds';
import * as isFor from './T_IsFor';

// import * as params from './Params';
import * as subcat from './T_Subcategories';
export { forms, payloads, user, subcat, box, panel, places, kinds, isFor };

export const hasKey = <O>(obj: O, key: keyof any): key is keyof O => {
    return key in obj;
};

export type Url_storage = {
    url: string;
    fileName: string;
    deleteKey: string;
    bucket: string;
    dateCreated: Date;
};

export type Quicklinks = 'About us' | 'Services' | 'Careers' | 'Contact';
export type Docref = 'user' | 'product' | 'job';
export type Menu = 'Home' | 'Chats' | 'Post Ads' | 'My Ads' | 'Profile';
