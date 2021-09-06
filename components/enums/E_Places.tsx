import { t } from './incoming';

export const location_by_state: Record<t.places.IndianStates, t.places.IndianCities[]> = {
    Maharashtra: ['Mumbai', 'Pune'],
    'West Bengal': ['Kolkata'],
    Karnataka: ['Bangalore'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur', 'Ujjain'],
    'Uttar Pradesh': ['Kanpur', 'Lucknow'],
    Uttarakhand: ['Dehradun'],
    Gujarat: ['Surat', 'Gandhi Nagar'],
};

export const all_states_in_india: t.places.IndianStates[] = [
    'Maharashtra',
    'West Bengal',
    'Karnataka',
    'Madhya Pradesh',
    'Uttar Pradesh',
    'Gujarat',
];

export const all_cities_in_india: t.places.IndianCities[] = [
    'Kolkata',
    'Lucknow',
    'Kanpur',
    'Hyderabad',
    'Pune',
    'Mumbai',
    'Bangalore',
    'Indore',
    'Bhopal',
    'Dehradun',
    'Gandhi Nagar',
    'Surat',
    'Jabalpur',
    'Ujjain',
];
