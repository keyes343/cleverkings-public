// these fields are to be used in jsx directly, during a form
import { t } from './incoming';

// REFER = forms>JobCandidate
const common_fields: t.forms.render_fields<t.forms.CommonFields>[] = [
    {
        title: 'Ad Title',
        inputType: 'text',
    },
    {
        title: 'Ad Description',
        inputType: 'textarea',
    },
    {
        title: 'Price',
        inputType: 'price',
    },
    {
        title: 'Price Type',
        inputType: null,
    },
    {
        title: 'State',
        inputType: 'location',
    },
    {
        title: 'City',
        inputType: null,
    },
    {
        title: 'Ad Photos',
        inputType: 'photos',
    },
    {
        title: 'Featured',
        inputType: null,
    },
    {
        title: 'Name',
        inputType: null,
    },
    {
        title: 'Phone',
        inputType: null,
    },
];

const common_to_Jobs: t.forms.render_fields<t.forms.JobDocument>[] = [
    {
        title: 'Job Name',
        inputType: 'text',
    },
    {
        title: 'Qualifications',
        inputType: 'qualifications',
    },
    {
        title: 'Experience',
        inputType: 'toggle-number',
    },
    {
        title: 'City',
        inputType: null, // null bcoz these fields are separately being rendered
    },
    {
        title: 'State',
        inputType: 'location',
    },
    {
        title: 'Name',
        inputType: null,
    },
    {
        title: 'Phone',
        inputType: null,
    },
    {
        title: 'Salary',
        inputType: 'salary',
    },
    {
        title: 'Salary Type',
        inputType: null,
    },
    {
        title: 'Skills',
        inputType: 'textarea',
    },
    {
        title: 'owner_type',
        inputType: null,
    },
];

export const fields_Job: t.forms.render_fields<t.forms.JobDocument>[] = [
    ...common_to_Jobs,
    {
        title: 'About Company',
        inputType: 'textarea',
    },
    {
        title: 'Responsibilities and Duties',
        inputType: 'textarea',
    },
];
export const fields_Candidate: t.forms.render_fields<t.forms.JobDocument>[] = [...common_to_Jobs];

export const fields_Product: t.forms.render_fields<t.forms.ProductDocument>[] = [
    ...common_fields,

    {
        title: 'Bedrooms',
        inputType: 'toggle-number',
    },
    {
        title: 'Bathrooms',
        inputType: 'toggle-number',
    },
    {
        title: 'Washrooms',
        inputType: 'toggle-number',
    },
    {
        title: 'Furnished',
        inputType: 'toggle-text',
    },
    {
        title: 'Super Buildup Area',
        inputType: 'number',
    },
    {
        title: 'Carpet Area',
        inputType: 'number',
    },
    {
        title: 'Bachelors Allowed',
        inputType: 'boolean',
    },
    {
        title: 'Maintenance Amount',
        inputType: 'number',
    },
    {
        title: 'Total Floors',
        inputType: 'number',
    },
    {
        title: 'Floor Number',
        inputType: 'number',
    },
    {
        title: 'Car Parking',
        inputType: 'boolean',
    },
    {
        title: 'Facing',
        inputType: 'toggle-text',
    },
    {
        title: 'Area',
        inputType: 'number',
    },
    {
        title: 'Length',
        inputType: 'number',
    },
    {
        title: 'Breadth',
        inputType: 'number',
    },
    {
        title: 'Listed by',
        inputType: 'toggle-text',
    },

    {
        title: 'Meals Included',
        inputType: 'boolean',
    },
    {
        title: 'Expiry Date',
        inputType: null,
    },
];

export const fields_Vehicle: t.forms.render_fields<t.forms.VehicleDocument>[] = [
    ...common_fields,
    // -- vehicles
    // {
    //     title: 'Kind',
    //     inputType: 'text',
    // },
    {
        title: 'Year',
        inputType: 'dropdown-vehicle',
    },
    {
        title: 'Brand',
        inputType: 'dropdown-vehicle',
    },
    {
        title: 'Model',
        inputType: 'text',
    },
    {
        title: 'Fuel',
        inputType: 'dropdown-vehicle',
    },
    {
        title: 'Transmission',
        inputType: 'dropdown-vehicle',
    },
    {
        title: 'KM Driven',
        inputType: 'number',
    },
];

export const fields_Furniture: t.forms.render_fields<t.forms.FurnitureDocument>[] = [
    ...common_fields,
    // {
    //     title: 'Kind',
    //     inputType: 'text',
    // },
    {
        title: 'Brand',
        inputType: 'text',
    },
];

export const fields_Fashion: t.forms.render_fields<t.forms.FashionDocument>[] = [
    ...common_fields,
    // {
    //     title: 'Kind',
    //     inputType: 'text',
    // },
];
export const fields_Agricultural: t.forms.render_fields<t.forms.AgriculturalDocument>[] = [...common_fields];
export const fields_Books: t.forms.render_fields<t.forms.BooksDocument>[] = [...common_fields];
export const fields_Medical: t.forms.render_fields<t.forms.MedicalDocument>[] = [...common_fields];
export const fields_Travelling: t.forms.render_fields<t.forms.TravellingDocument>[] = [...common_fields];
export const fields_Sports: t.forms.render_fields<t.forms.SportsDocument>[] = [...common_fields];
export const fields_Sound: t.forms.render_fields<t.forms.SoundDocument>[] = [...common_fields];
export const fields_Construction: t.forms.render_fields<t.forms.ConstructionDocument>[] = [...common_fields];
export const fields_Electronics: t.forms.render_fields<t.forms.ElectronicsDocument>[] = [...common_fields];
export const fields_Services: t.forms.render_fields<t.forms.ServicesDocument>[] = [...common_fields];
export const fields_Skilled: t.forms.render_fields<t.forms.SkilledDocument>[] = [...common_fields];
