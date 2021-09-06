import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { r, e, t } from './incoming';

export interface CardsProps {}

// MAIN HOOK
export const Panel = () => {
    // history
    // const history = useHistory();
    // reducers
    const [cards, setCards] = useState<t.forms.ProductDocument[] | null>(null);

    // useState
    const [spinner, setSpinner] = useState(false);

    return {};
};
