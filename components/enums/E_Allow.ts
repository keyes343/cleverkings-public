import { t } from './incoming';
import { dict } from '.';
import { services } from '../media/categoryIcons';
export const Jobs = dict.subcategories_by_category.Jobs;
export const Properties = dict.subcategories_by_category.Properties;
export const Vehicles = dict.subcategories_by_category.Vehicles;
// export const Furniture: t.dict.subcategories_by_categoryNew', 'Used', 'Rentable'];
export const Furniture = dict.subcategories_by_category.Furniture;
export const Fashion = dict.subcategories_by_category.Fashion;
export const Skilled_Workers = dict.subcategories_by_category['Skilled Workers'];
export const Services = dict.subcategories_by_category['Services'];

const all_sub_categories: t.subcat.CombinedSubcategory[] = [
    ...dict.subcategories_by_category['Agricultural Equipments'],
    ...dict.subcategories_by_category['Books'],
    ...dict.subcategories_by_category['Construction Equipments'],
    ...dict.subcategories_by_category['Electronics'],
    ...dict.subcategories_by_category['Fashion'],
    ...dict.subcategories_by_category['Furniture'],
    ...dict.subcategories_by_category.Jobs,
    ...dict.subcategories_by_category['Medical and Babycare Equipments'],
    ...dict.subcategories_by_category.Properties,
    ...dict.subcategories_by_category['Services'],
    ...dict.subcategories_by_category['Skilled Workers'],
    ...dict.subcategories_by_category['Sound System and Instruments'],
    ...dict.subcategories_by_category['Sports and Fitness Equipments'],
    ...dict.subcategories_by_category['Travelling Accessories'],
    ...dict.subcategories_by_category['Vehicles'],
];

// THIS IS A DICTIONARY
// to check which formFields to allow, if a certain subcategory is selected
export const AllFormFields: Record<keyof t.forms.CombinedFormDocument, (t.subcat.CombinedSubcategory | t.forms.Category)[]> = {
    _id: [],
    createdAt: [],
    updatedAt: [],
    owner_id: [],
    Category: [],
    Subcategory: [],
    Featured: [],
    Resume: [...Jobs],
    Salary: [...Jobs],
    owner_type: [...Jobs],
    Rate: [...Skilled_Workers, ...Services],
    'Rate Type': [...Skilled_Workers, ...Services],
    'Salary Type': [...Jobs],
    'Price Type': all_sub_categories,
    // --- PROPERTIES n buildings
    Price: all_sub_categories,
    Bedrooms: ['House_Villa', 'Flats_Apartments'],
    Bathrooms: ['Flats_Apartments'],
    Washrooms: ['Office_Shop'],
    'Bachelors Allowed': ['Flats_Apartments'],
    Furnished: ['House_Villa', 'Flats_Apartments', 'Office_Shop', 'PG_Guest House'],
    'Super Buildup Area': ['House_Villa', 'Flats_Apartments', 'Office_Shop'],
    'Carpet Area': ['Flats_Apartments', 'Office_Shop'],
    'Maintenance Amount': ['Flats_Apartments', 'Office_Shop'],
    'Total Floors': ['Flats_Apartments', 'House_Villa'],
    'Floor Number': ['Flats_Apartments'],
    'Car Parking': ['Flats_Apartments', 'PG_Guest House', 'Office_Shop'],
    Facing: ['Flats_Apartments', 'PG_Guest House', 'House_Villa'],
    'Meals Included': ['PG_Guest House'],
    // dimensions
    Area: ['Land_Plot'],
    Length: ['Land_Plot'],
    Breadth: ['Land_Plot'],
    // identity
    'Job Name': Jobs,
    'Project Name': Jobs,
    'Responsibilities and Duties': Jobs,
    Qualifications: Jobs,
    Skills: Jobs,
    Experience: Jobs,
    City: [...all_sub_categories],
    State: [...all_sub_categories],
    Phone: Jobs,
    'About Company': Jobs,
    'Ad Description': [
        // ...Properties,
        // ...Vehicles,
        // ...Furniture,
        // ...Fashion,
        // ...Skilled_Workers,
        ...all_sub_categories,
    ],
    'Ad Title': [
        // ...Properties,
        // ...Vehicles,
        // ...Furniture,
        // ...Fashion,
        // ...Skilled_Workers,
        ...all_sub_categories,
    ],
    'Listed by': [
        // ...Properties,
        // ...Vehicles,
        // ...Furniture,
        // ...Fashion,
        // ...Skilled_Workers,
        ...all_sub_categories,
    ],
    // media
    'Ad Photos': [
        // ...Properties,
        // ...Vehicles,
        // ...Furniture,
        // ...Fashion,
        // ...Skilled_Workers,
        ...all_sub_categories,
    ],
    'Ad Videos': [
        // ...Properties,
        // ...Vehicles,
        // ...Furniture,
        // ...Fashion,
        // ...Skilled_Workers,
        ...all_sub_categories,
    ],
    // Location: all_sub_categories,
    // limits
    'Expiry Date': [...Properties],

    // -----------Vehicle
    Brand: [...Vehicles, ...Furniture, ...Skilled_Workers],
    Type: [...Vehicles, ...Furniture, ...Skilled_Workers],
    Year: Vehicles,
    Model: Vehicles,
    Fuel: Vehicles,
    Transmission: Vehicles,
    'KM Driven': Vehicles,
    Name: [...all_sub_categories],
};

export const AllKinds: Record<t.forms.Category, t.kinds.AllKinds[]> = {
    Vehicles: ['Used', 'New', 'Rent', 'Fast', 'Slow', 'Rent', 'Buy'],
    Properties: [],
    'Home Appliances': [],
    'Smart Phones': [],
    'Camera Equipments': [],
    Fashion: [],
    Jobs: [],
    Furniture: ['Sofas', 'Tables', 'Chairs', 'Beds', 'Desks', 'Mattresses', 'Dressers'],
    'Skilled Workers': [],
    Services: [],
    Electronics: [],
    Books: [],
    'Construction Equipments': [],
    'Sound System and Instruments': [],
    'Sports and Fitness Equipments': [],
    'Travelling Accessories': [],
    'Medical and Babycare Equipments': [],
    'Agricultural Equipments': [],
};
