export type Job = 'Professional' | 'Freelancer';
export type Vehicle = 'Car' | 'Jeep' | 'Bike' | 'Bicycle' | 'Commercial Vehicles';
export type Property =
    | 'Flats_Apartments'
    | 'House_Villa'
    | 'PG_Guest House'
    | 'Office_Shop'
    | 'Land_Plot';
export type Furniture =
    | 'Bedroom'
    | 'Living room'
    | 'Work from home'
    | 'Kitchen & Dining'
    | 'Baby furniture'
    | 'Office'
    | 'Sofas'
    | 'Tables'
    | 'Chairs'
    | 'Beds'
    | 'Desks'
    | 'Mattresses'
    | 'Dressers';
export type Fashion = 'Mens wear' | 'Womens Wear' | 'Watch' | 'Sunglass' | 'Shoes' | 'Jewellery';
export type SkilledWorkers =
    | 'Carpenter'
    | 'Electrician'
    | 'Plumber'
    | 'Mechanic'
    | 'Cleaning'
    | 'Electrical'
    | 'Plumbing'
    | 'Electronics'
    | 'Decoration'
    | 'Upholestry'
    | 'Air conditioning'
    | 'Construction'
    | 'Home Appliance'
    | 'Curtain'
    | 'Swimming Pool'
    | 'Tiles'
    | 'Landscape'
    | 'Aluminium '
    | 'Wrought Iron'
    | 'Carpentry'
    | 'Umbrella'
    | 'Painting'
    | 'Saloon at home'
    | 'Makeup and hair styling';

export type Service =
    | 'Auto care'
    | 'Banquets'
    | 'Tourist Bus'
    | 'Catering'
    | 'Event management'
    | 'Flowers'
    | 'House keeping'
    | 'Interior designing'
    | 'Pest control'
    | 'Light and sounds'
    | 'Orchestra'
    | 'Road side assitance'
    | 'Security system intallation'
    | 'Laundry'
    | 'Packing and moving'
    | 'Personal driver'
    | 'Climbers'
    | 'Wood Cutters'
    | 'Drilling'
    | 'Septic Tank Cleaning'
    | 'Home Nurse';

export type ConstructionEquipment =
    | 'Tools'
    | 'Cranes'
    | 'Earth movers'
    | 'Heavy duty equipments'
    | 'Road machinery'
    | 'Plants'
    | 'Miscellaneous';
export type AgriculturalEquipments =
    | 'Tractor and Pover'
    | 'Soil Cultivation'
    | 'Planting'
    | 'Irrigation'
    | 'Harvesting'
    | 'Hay making'
    | 'Loading'
    | 'Milking'
    | 'Animal Feeding'
    | 'Miscellaneous';

export type Electronics =
    | 'Laptop'
    | 'Smart phones'
    | 'Gadgets'
    | 'Camera & lens'
    | 'Gaming console'
    | 'Smart devices'
    | 'Fridge'
    | 'Tv'
    | 'Washing machine'
    | 'Hard disk'
    | 'Printers & Monitors'
    | 'Kitchen & Other appliances';
export type Book =
    | 'Anthologies, Essay & Journals'
    | 'Architecture'
    | 'Art & Design'
    | 'Australian Non Fiction'
    | 'Biography & Memoir'
    | 'Children & Young Adult'
    | 'Classics'
    | 'Crime & Thrillers'
    | 'Display & Gift Books'
    | 'Fashion'
    | 'Fiction'
    | 'Film'
    | 'Food & Cooking'
    | 'Gardening'
    | 'Graphic novels'
    | 'Health & Self help'
    | 'History'
    | 'Humour'
    | 'Introducing & Beginners services'
    | 'Music'
    | 'Mythology'
    | 'Religion Spirituality'
    | 'Natural history & Environment'
    | 'New hardback';
// SUBCATEGORY
export type SportsAndFitness = 'Sports' | 'Exercise' | 'Weight Training';
export type Sound_System_and_Instruments = 'Musical';
export type TravellingAccessories = 'Bagpack' | 'Sunglasses';
export type Medical_and_BabyCare_Equipments = 'Powder' | 'Diapers';

// NOW COMBINE THEM ALL
export type CombinedSubcategory =
    | Job
    | Property
    | Vehicle
    | Furniture
    | Fashion
    | SkilledWorkers
    | Service
    | ConstructionEquipment
    | AgriculturalEquipments
    | Electronics
    | Book
    | SportsAndFitness
    | Sound_System_and_Instruments
    | TravellingAccessories
    | Medical_and_BabyCare_Equipments;
