import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

export interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
    return (
        <s.Grid>
            <reuse.headers.PageHeader title="Services" title2="Our services make us the real KINGS" pic={e.links.pics.headers.services} />
            <s.Grid1>Something something</s.Grid1>
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.Grid>
    );
};

export default Services;
