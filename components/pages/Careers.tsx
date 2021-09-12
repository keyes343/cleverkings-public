import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

export interface CareersProps {}

const Careers: React.FC<CareersProps> = () => {
    return (
        <s.Grid>
            <reuse.headers.PageHeader title="Careers" title2="Our Careers make us the real KINGS" pic={e.links.pics.headers.career} />
            <s.Grid1>Something something</s.Grid1>
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.Grid>
    );
};

export default Careers;

const Career_body = () => {
    const S = s.career;
    return (
        <S.Career_body>
            <S.JoinUs>
                <S.RightSkills>Right Skills Right Jobs - Join with us</S.RightSkills>
            </S.JoinUs>
        </S.Career_body>
    );
};
