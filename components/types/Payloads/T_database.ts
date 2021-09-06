import { forms, user, subcat, kinds } from '../index';

export type acknowledge_user = {
    email: string | null;
    uid: string;
    phoneNumber: string | null;
};

// this payload goes while submitting any form, such as Job/Properties/Vehicles etc
export type FormData = {
    owner_id: string;
    formName: forms.Form_name;
    files: File[] | string[]; // FILELIST WILL NOT EXIST IN BACKEND
    fileNames: string[] | null;
    formData: Partial<forms.CombinedFormDocument>;
};

// this payload goes when user tries to upload identity document
export type UserIdentity = {
    files: File[] | string[];
    fileNames: string[] | null;
    mongoose_id: string;
    'ID Type': kinds.Id;
};

export type UserUploads = {
    mongoose_id: string;
    'Identity Proof': user.User['Identity Proof'];
    files: string[];
    filenames: string[];
};

export type Panel = {
    Category: forms.Category | null;
    Subcategory: subcat.CombinedSubcategory | null;
    Price: [number, number] | null;
    Furnishing: kinds.Furnished | null;
    'Room Type': kinds.Room | null;
    Bedrooms: kinds.Bedroom | null;
    Area: kinds.Area | null;
};

export type ToggleFeaturedProduct = {
    mongoose_id: string | null;
    product_id: string;
};

// ----------------------- MyProfile
export type MyProfile = {
    mongoose_id: string;
    payload: Pick<
        user.User,
        | 'email'
        | 'About me'
        | 'First name'
        | 'Last name'
        | 'Address line 1'
        | 'Address line 2'
        | 'City'
        | 'State'
        | 'Pincode'
        | 'phoneNumber'
    >;
    profilePic: File | string | null;
    fileName: string;
};
