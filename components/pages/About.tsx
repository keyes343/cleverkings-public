import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <s.home.About>
            <reuse.headers.PageHeader title="ABOUT US" title2="Our services make us the real KINGS" pic={e.links.pics.headers.about} />
            <s.Grid1>Something something</s.Grid1>
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.home.About>
    );
};

export default About;
