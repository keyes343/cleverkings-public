import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

export interface Digital_CardsProps {}

const Digital_Cards: React.FC<Digital_CardsProps> = () => {
    return (
        <s.Grid>
            <reuse.headers.PageHeader
                title="Digital_Cards US"
                title2="Our services make us the real KINGS"
                pic={e.links.pics.headers.digital_cards}
            />
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.Grid>
    );
};

export default Digital_Cards;
