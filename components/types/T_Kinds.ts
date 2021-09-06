import { forms, places } from '.';
import { t } from '../reducers/incoming';

export type Kinds = keyof t.forms.CombinedFormDocument | keyof t.subcat.CombinedSubcategory | t.forms.Category | 'Room';

export type Vehicles = 'Used' | 'New' | 'Rent' | 'Fast' | 'Slow' | 'Rent' | 'Buy';
export type Furnished = 'Furnished' | 'Semi-Furnished' | 'Un-Furnished';
export type Furniture = 'Sofas' | 'Tables' | 'Chairs' | 'Beds' | 'Desks' | 'Mattresses' | 'Dressers';
export type Room = 'Bedroom' | 'Living Room' | 'Dining Room';
export type Bedroom = '1' | '2' | '3' | '4';
export type Area = '< 800 sq ft' | '1000 - 2000 sq ft' | '> 2000 sq ft';
export type Fashion = '__nothing__';
export type Properties = '__nothing__';

export type Id = 'Drivers License' | 'Adhaar Card';
export type Price = 'Per hr' | 'Per day' | 'Per month' | 'One time';
export type Owner = 'Employer' | 'Candidate';
export type Listedby = 'Owner' | 'Broker';
export type Facing = 'East' | 'West' | 'North' | 'South';
// export type Salary = 'Per hr' | 'Per day' | 'Per month' | 'One time';

// ------
export type AllKinds = Vehicles | Furnished | Furniture | Room | Bedroom | Area | Fashion | Properties | Id | Price | Owner | Listedby | Facing;
// | Salary;
