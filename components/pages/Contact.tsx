import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <s.Grid>
            <reuse.headers.PageHeader title="Contact" title2="Our Contact make us the real KINGS" pic={e.links.pics.headers.contact} />
            <s.Grid1>Something something</s.Grid1>
            <reuse.nav.Footer />
        </s.Grid>
    );
};

export default Contact;
