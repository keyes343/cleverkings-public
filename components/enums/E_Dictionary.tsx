import { t } from '../pages/incoming';
import * as links from './E_Links';
import * as flds from './E_Fields';
import { func } from '../reuse';

// export const text_to_path: Record<t.subcat.CombinedSubcategory, string> = {
//     'Flats_Apartments': 'Flats_Apartments'
// }

export const all_categories: t.forms.Category[] = [
    'Vehicles',
    'Properties',
    'Fashion',
    'Jobs',
    'Furniture',
    'Skilled Workers',
    'Services',
    'Electronics',
    'Books',
    'Construction Equipments',
    'Sound System and Instruments',
    'Sports and Fitness Equipments',
    'Travelling Accessories',
    'Medical and Babycare Equipments',
    'Agricultural Equipments',
];

// export const all_jobs: t.subcat.Job[] = ['Professional', 'Freelance'];
// export const all_properties: t.subcat.Property[] = [
//     'Flats_Apartments',
//     'House_Villa',
//     'PG_Guest House',
//     'Office_Shop',
//     'Land_Plot',
// ];
// const common_formKeys: t.forms.FormKeys[] = [];
// const common_ads = [];

// export const ALL_FIELDS = [...fields_Job, ...fields_Product];

export const form_by_category: Record<t.forms.Category, t.forms.render_fields<t.forms.CombinedFormDocument>[]> = {
    Jobs: flds.fields_Job,
    'Agricultural Equipments': flds.fields_Agricultural,
    Books: flds.fields_Books,
    'Home Appliances': [],
    'Smart Phones': [],
    'Camera Equipments': [],
    Vehicles: flds.fields_Vehicle,
    Properties: flds.fields_Product,
    Fashion: flds.fields_Fashion,
    Furniture: flds.fields_Furniture,
    'Skilled Workers': flds.fields_Skilled,
    Services: flds.fields_Services,
    Electronics: flds.fields_Electronics,
    'Construction Equipments': flds.fields_Construction,
    'Sound System and Instruments': flds.fields_Sound,
    'Sports and Fitness Equipments': flds.fields_Sports,
    'Travelling Accessories': flds.fields_Travelling,
    'Medical and Babycare Equipments': flds.fields_Medical,
};

// --------- SUBCATEGORY

export const subcategories_by_category: Record<t.forms.Category, t.subcat.CombinedSubcategory[]> = {
    Jobs: ['Professional', 'Freelancer'],
    'Home Appliances': [],
    'Smart Phones': [],
    'Camera Equipments': [],
    Properties: ['Flats_Apartments', 'House_Villa', 'PG_Guest House', 'Office_Shop', 'Land_Plot'],
    Vehicles: ['Car', 'Jeep', 'Bike', 'Bicycle', 'Commercial Vehicles'],
    Fashion: ['Mens wear', 'Womens Wear', 'Watch', 'Sunglass', 'Shoes', 'Jewellery'],
    Furniture: ['Bedroom', 'Living room', 'Work from home', 'Kitchen & Dining', 'Baby furniture', 'Office'],
    'Skilled Workers': [
        'Carpenter',
        'Electrician',
        'Plumber',
        'Mechanic',
        'Electrical',
        'Plumbing',
        'Electronics',
        'Decoration',
        'Upholestry',
        'Air conditioning',
        'Construction',
        'Home Appliance',
        'Curtain',
        'Swimming Pool',
        'Tiles',
        'Landscape',
        'Aluminium ',
        'Wrought Iron',
        'Carpentry',
        'Umbrella',
        'Painting',
        'Saloon at home',
        'Makeup and hair styling',
    ],
    Services: [
        'Auto care',
        'Banquets',
        'Tourist Bus',
        'Catering',
        'Event management',
        'Flowers',
        'House keeping',
        'Interior designing',
        'Pest control',
        'Light and sounds',
        'Orchestra',
        'Road side assitance',
        'Security system intallation',
        'Laundry',
        'Packing and moving',
        'Personal driver',
        'Climbers',
        'Wood Cutters',
        'Drilling',
        'Septic Tank Cleaning',
        'Home Nurse',
    ],
    Electronics: [
        'Laptop',
        'Smart phones',
        'Gadgets',
        'Camera & lens',
        'Gaming console',
        'Smart devices',
        'Fridge',
        'Tv',
        'Washing machine',
        'Hard disk',
        'Printers & Monitors',
        'Kitchen & Other appliances',
    ],
    Books: [
        'Anthologies, Essay & Journals',
        'Architecture',
        'Art & Design',
        'Australian Non Fiction',
        'Biography & Memoir',
        'Children & Young Adult',
        'Classics',
        'Crime & Thrillers',
        'Display & Gift Books',
        'Fashion',
        'Fiction',
        'Film',
        'Food & Cooking',
        'Gardening',
        'Graphic novels',
        'Health & Self help',
        'History',
        'Humour',
        'Introducing & Beginners services',
        'Music',
        'Mythology',
        'Religion Spirituality',
        'Natural history & Environment',
        'New hardback',
    ],
    'Construction Equipments': ['Tools', 'Cranes', 'Earth movers', 'Heavy duty equipments', 'Road machinery', 'Plants', 'Miscellaneous'],
    'Sound System and Instruments': ['Musical'],
    'Sports and Fitness Equipments': ['Sports', 'Exercise', 'Weight Training'],
    'Travelling Accessories': ['Bagpack', 'Sunglasses'],
    'Medical and Babycare Equipments': ['Powder', 'Diapers'],
    'Agricultural Equipments': [
        'Tractor and Pover',
        'Soil Cultivation',
        'Planting',
        'Irrigation',
        'Harvesting',
        'Hay making',
        'Loading',
        'Milking',
        'Animal Feeding',
        'Miscellaneous',
    ],
};

export const Kinds: Record<t.panel.PanelKeys, t.kinds.AllKinds[]> = {
    _id: [],
    owner_id: [],
    'Project Name': [],
    Year: [],
    Subcategory: [],
    Category: [],
    State: [],
    City: [],
    Rate: [],
    'Rate Type': [],
    Bedrooms: ['1', '2', '3', '4'],
    Furnished: ['Furnished', 'Semi-Furnished', 'Un-Furnished'],
    'Room Type': ['Bedroom', 'Living Room', 'Dining Room'],
    Furniture: ['Sofas', 'Tables', 'Chairs', 'Beds', 'Desks', 'Mattresses', 'Dressers'],
    Vehicles: ['Used', 'New', 'Rent', 'Fast', 'Slow', 'Rent', 'Buy'],
    Area: ['< 800 sq ft', '1000 - 2000 sq ft', '> 2000 sq ft'],
    Fashion: [],
    Properties: ['__nothing__'],
    'ID Card Type': ['Drivers License', 'Adhaar Card'],
    Price: ['Per hr', 'Per day', 'Per month', 'One time'],
    owner_type: ['Candidate', 'Employer'],
    'Listed by': ['Owner', 'Broker'],
    Facing: ['East', 'West'],
    'Salary Type': ['Per hr', 'Per day', 'Per month', 'One time'],
    'Camera Equipments': [],
    'Home Appliances': [],
    'Smart Phones': [],
    Jobs: [],
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
    'Job Name': [],
    'About Company': [],
    'Responsibilities and Duties': [],
    Brand: [],
    Model: [],
    Fuel: [],
    Transmission: [],
    'KM Driven': [],
    Qualifications: [],
    // for candidate
    Skills: [],
    Experience: [],
    Name: [],
    Phone: [],
    Resume: [],
    'Expiry Date': [],
    Featured: [],
    Salary: [],
    Bathrooms: [],
    Washrooms: [],
    'Super Buildup Area': [],
    'Carpet Area': [],
    'Bachelors Allowed': [],
    'Maintenance Amount': [],
    'Total Floors': [],
    'Floor Number': [],
    'Car Parking': [],
    Length: [],
    Breadth: [],
    // limits
    'Meals Included': [],
    'Ad Title': [],
    'Ad Description': [],
    'Price Type': [],
    // media
    'Ad Photos': [],
    'Ad Videos': [],
    Type: [],
    createdAt: [],
    updatedAt: [],
};

// --------- SUB-FIELDS ( eg - transmission / year etc )
export const sub_fields: Partial<
    {
        [k in keyof t.forms.VehicleDocument]: any;
    }
> = {
    Year: func.range_generator(1980, 2021),
    Brand: ['Toyota', 'BMW', 'Hero'],
    Transmission: ['Auto', 'Manual'],
    Fuel: ['Petrol', 'Diesel'],
};

// HOMEPAGE CARDS

export const Cards_rect: {
    name: t.forms.Category;
}[] = [
    {
        name: 'Furniture',
        // pic: links.pics.card_category+'furniture.jpg',
    },
    {
        name: 'Electronics',
        // pic:links.pics.card_category+'electronics.jpg',
    },
    {
        name: 'Properties',
        // pic: links.pics.card_category+'properties.jpg',
    },
    {
        name: 'Jobs',
        // pic: links.pics.card_category+'jobs.jpg',
    },
    {
        name: 'Construction Equipments',
    },
    {
        name: 'Skilled Workers',
    },
    {
        name: 'Properties',
    },
    {
        name: 'Fashion',
    },
    {
        name: 'Books',
    },
];
export const Cards_square: {
    name: t.forms.Category;
    // pic:string
}[] = (() => {
    return all_categories.map((cat, i) => {
        return {
            name: cat,
        };
    });
})();

// [
//     {
//         name: 'Vehicles',
//     },
//     {
//         name: 'Fashion',
//     },
//     {
//         name: 'Home Appliances',
//     },
//     {
//         name: 'Smart Phones',
//     },
//     {
//         name: 'Services',
//     },
//     {
//         name: 'Camera Equipments',
//     },
// ];
