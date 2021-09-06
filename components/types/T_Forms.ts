import * as subcat from './T_Subcategories';
import { kinds, Url_storage } from '.';
// this tells the uploads section what 'form' to show
export type Form_name = 'Identity' | Category;
export type Category =
    | 'Vehicles'
    | 'Properties'
    | 'Fashion'
    | 'Jobs'
    | 'Camera Equipments'
    | 'Furniture'
    | 'Home Appliances'
    | 'Smart Phones'
    | 'Skilled Workers'
    | 'Services'
    | 'Electronics'
    | 'Books'
    | 'Construction Equipments'
    | 'Sound System and Instruments'
    | 'Sports and Fitness Equipments'
    | 'Travelling Accessories'
    | 'Medical and Babycare Equipments'
    | 'Agricultural Equipments';

export type render_fields<T> = {
    title: keyof T;
    inputType:
        | 'text'
        | 'number'
        | 'price'
        | 'dropdown'
        | 'salary'
        | 'dropdown-vehicle'
        | 'toggle-text'
        | 'toggle-number'
        | 'textarea'
        | 'qualifications'
        | null
        | 'boolean'
        | 'photos'
        | 'videos'
        | 'location'
        | 'date';
};

export type FormKeys = keyof CombinedFormDocument;

// diff type of forms below

export interface CommonFields {
    owner_id: string;
    Name: string;
    Phone: number;
    // identity
    Category: Category;
    Subcategory: Pick<subcat.CombinedSubcategory, keyof subcat.Property>;
    'Ad Title': string | null;
    'Ad Description': string | null;
    Price: number;
    'Price Type': kinds.Price | null;
    // media
    'Listed by': string | null;
    'Ad Photos': Url_storage[] | null;
    'Ad Videos': string[] | null;
    City: string;
    State: string;
    'Expiry Date': Date | null;
    Featured: boolean;
    Type: kinds.AllKinds | null;
    createdAt?: string;
    updatedAt?: string;
    Rate: number | null;
    'Rate Type': string | null;
}

export interface JobDocument {
    _id?: string;
    owner_id: string;
    owner_type: kinds.Owner;
    Category: Category;
    'Job Name': string;
    Subcategory: Pick<subcat.CombinedSubcategory, keyof subcat.Job>;
    'About Company': string;
    'Responsibilities and Duties': string;
    Qualifications: string[];
    // for candidate
    Skills: string | null;
    Experience: string;
    Name: string;
    Phone: number;
    City: string;
    State: string;
    Resume: Url_storage | null;
    'Expiry Date': Date | null;
    Featured: boolean;
    Salary: string;
    'Salary Type': kinds.Price;
}

export interface ProductDocument extends CommonFields {
    // about
    _id?: string;
    'Project Name': string | null;
    // specs
    Bedrooms: number | null;
    Bathrooms: number | null;
    Washrooms: number | null;
    Furnished: kinds.Furnished | null;
    'Super Buildup Area': number | null;
    'Carpet Area': number | null;
    'Bachelors Allowed': boolean | null;
    'Maintenance Amount': number | null;
    'Total Floors': number | null;
    'Floor Number': number | null;
    'Car Parking': boolean | null;
    Facing: kinds.Facing | null;
    Area: number | null;
    Length: number | null;
    Breadth: number | null;
    // limits
    'Meals Included': boolean | null;
    // Type: kinds.Property | null;
}

export interface VehicleDocument extends CommonFields {
    Brand: string | null;
    Model: string | null;
    Fuel: string | null;
    Transmission: string | null;
    'KM Driven': string | null;
    // Type: kinds.Vehicles | null;
    Year: number;
}
export interface FurnitureDocument extends CommonFields {
    Brand: string | null;
    // Type: kinds.Furniture | null;
}
export interface FashionDocument extends CommonFields {
    // Type: kinds.Fashion | null;
    // | 'Streetwear Style'
    // | 'Ethnic fashion style'
    // | 'Formal Office Wear'
    // | 'Business Casual'
    // | 'Evening Black Tie'
    // | 'Sports Wear'
    // | 'Girly Style'
}

export interface AgriculturalDocument extends CommonFields {}
export interface MedicalDocument extends CommonFields {}
export interface TravellingDocument extends CommonFields {}
export interface SportsDocument extends CommonFields {}
export interface SoundDocument extends CommonFields {}
export interface ConstructionDocument extends CommonFields {}
export interface BooksDocument extends CommonFields {}
export interface ElectronicsDocument extends CommonFields {}
export interface ServicesDocument extends CommonFields {}
export interface SkilledDocument extends CommonFields {}

// MAIN FORM
export interface CombinedFormDocument
    extends JobDocument,
        ProductDocument,
        VehicleDocument,
        FurnitureDocument,
        FashionDocument,
        FashionDocument,
        AgriculturalDocument,
        MedicalDocument,
        TravellingDocument,
        SportsDocument,
        SoundDocument,
        ConstructionDocument,
        BooksDocument,
        ElectronicsDocument,
        ServicesDocument,
        SkilledDocument {
    // user_id?: string;
    // Type: kinds.AllKinds | null;
} // all forms combined into one
