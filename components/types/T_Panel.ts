import { forms, places, subcat, kinds } from '.';

// export type Furnished = 'Furnished' | 'Semi-Furnished' | 'Un-Furnished';
// export type RoomType = 'Bedroom' | 'Living Room' | 'Dining Room';
export type PanelValues =
    | null
    | number
    | [number, number]
    | forms.Category
    | subcat.CombinedSubcategory
    | kinds.Room
    | kinds.Furnished
    | string
    | places.Locations;
export type PanelKeys =
    | forms.Category
    | keyof forms.CombinedFormDocument
    | 'Room Type'
    | 'ID Card Type';
export type State = Record<PanelKeys, PanelValues>;
