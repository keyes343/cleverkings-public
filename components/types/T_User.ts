import { forms, places, Url_storage } from './index';

export type ID_Type = 'Drivers License' | 'Adhaar Card';
export type ID_Proof = {
    'ID Type': ID_Type;
    'ID Card': places.Url_storage[];
};
export type User = {
    // _id?: string | null;
    Name: string;
    email: string | null;
    phoneNumber: string;
    uid: string;
    'Identity Proof': ID_Proof | null;
    // myprofile section
    'First name': string;
    'Last name': string;
    'About me': string;
    'Address line 1': string;
    'Address line 2': string;
    City: string;
    State: string;
    Pincode: string;
    profilePic: Url_storage | null;
};

export interface UserDocument extends User {
    _id: string;
}

// export type MyProfile = {
//     // Name: string;
//     'First Name': string;
//     'Last Name': string;
//     'About me': string;
//     // 'Email address':string;
//     // 'Mobile number':string;
// };
