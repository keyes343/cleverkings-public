// import { JobDocument } from '../T_Forms';
import { e, t } from '../incoming';

export type login_doc = {
    // the object returned from firebase after logging in
    email: string | null;
    phone: string | null;
    uid: string;
};

// used in reducer for 'uploads'
export type edit_form = {
    key_: keyof t.forms.CombinedFormDocument | 'ID Card Type';
    value: any;
};

// used to tell reducer which other settings to show to user while they are trying to log in, such as a message
export type redirect_login = {
    show_this_btn: 'google' | 'phone' | null;
    msg: string;
    redirect_to: string;
};

export type edit_panel = {
    panelkey_: t.panel.PanelKeys;
    value: any;
};

export type edit_myprofile = {
    profilekey_: keyof t.user.User | 'file';
    value: any;
};
