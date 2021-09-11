import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { r, e, t } from './incoming';
import axios from 'axios';

// MAIN HOOK
export const Contact = () => {
    const [cards, setCards] = useState<t.forms.ProductDocument[] | null>(null);

    const write_to_us = (name: string, email: string, phone: string, message: string) => {
        // alert('send button working fine.');
        console.log({ name, email, phone, message });
        // await
    };

    // useState
    const [spinner, setSpinner] = useState(false);

    return {
        write_to_us,
    };
};
