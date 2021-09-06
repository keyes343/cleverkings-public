export type IndianStates =
    | 'Maharashtra'
    | 'West Bengal'
    | 'Karnataka'
    | 'Madhya Pradesh'
    | 'Uttar Pradesh'
    | 'Uttarakhand'
    | 'Gujarat';
export type IndianCities =
    | 'Kolkata'
    | 'Lucknow'
    | 'Kanpur'
    | 'Hyderabad'
    | 'Pune'
    | 'Mumbai'
    | 'Bangalore'
    | 'Indore'
    | 'Bhopal'
    | 'Dehradun'
    | 'Gandhi Nagar'
    | 'Surat'
    | 'Jabalpur'
    | 'Ujjain';

export type Url_storage = {
    url: string;
    fileName: string;
    deleteKey: string;
    bucket: string;
    dateCreated: Date;
};
export type button_purpose =
    | 'submit'
    | 'menu'
    | 'dropdown'
    | 'uploading'
    | 'login'
    | 'navigate'
    | 'mini-submit';

export type Locations = {
    State: IndianStates | '';
    City: IndianCities | '';
};
