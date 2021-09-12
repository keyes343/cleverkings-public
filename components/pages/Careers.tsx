import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';
import Image from 'next/image';

export interface CareersProps {}

const Careers: React.FC<CareersProps> = () => {
    return (
        <s.Grid>
            <reuse.headers.PageHeader title="JOIN WITH US" title2="Lets Learn and Grow Together" pic={e.links.pics.headers.career} />
            <Career_body />
            <reuse.nav.Footer2 />
            <reuse.nav.BelowFooter2 />
        </s.Grid>
    );
};

export default Careers;

const Career_body = () => {
    const S = s.career;
    const iconsList = [
        {
            icon: media.pages.career.icon1,
            title: 'Tuitioon Reimbursement',
        },
        {
            icon: media.pages.career.icon2,
            title: 'Corporate Discounts',
        },
        {
            icon: media.pages.career.icon3,
            title: 'Paid Vacation',
        },
        {
            icon: media.pages.career.icon4,
            title: 'Performance Bonus',
        },
        {
            icon: media.pages.career.icon5,
            title: 'Office Perks',
        },
        {
            icon: media.pages.career.icon6,
            title: 'Employee Training',
        },
    ];
    return (
        <S.Career_body>
            <S.JoinUs>
                <S.RightSkills>Right Skills Right Jobs - Join with us</S.RightSkills>
                <S.BodyText>
                    Welcome to the career service of Cleverkings Pvt. Ltd., providing comprehensive employment business solutions and support, service
                    employers and job seekers. Our services include offers for job seekers and businesses of any size, effective recruitment, hiring,
                    and training expert services. We address any employment as an entry point to the extensive network of public and private support
                    programs. Ourselves get committed to career and professional development, fully prepared to succeed and to find a purposeful
                    position to the individuals. The strong belief in us, redefine the work and career towards passion can articulate professional
                    skills and activities. Career service here offer encouragement to the true ones and cast them to be a purpose-driven leader ready
                    to tackle any challenge. We love to guide you at each stage of your professional journey, starting from building your professional
                    identity to taking you inside. Let{`'`} s work together towards achieving career aspirations. Check out the current openings!
                </S.BodyText>
                <S.Btn>View Current Openings</S.Btn>
                <S.Btn>View Current Openings</S.Btn>
                <S.Pic>
                    <Image src={media.pages.career.job} alt="" layout="fill" objectFit="contain" />
                </S.Pic>
            </S.JoinUs>

            <S.Checkout>
                <S.Heading>Check out our benefits</S.Heading>
                <S.Stripe>
                    {iconsList.map((box, i) => {
                        return (
                            <S.Card key={i}>
                                <s.GridA relative>
                                    <Image src={box.icon} layout="fill" objectFit="contain" alt="" />
                                </s.GridA>
                                <s.GridB>{box.title}</s.GridB>
                            </S.Card>
                        );
                    })}
                </S.Stripe>
            </S.Checkout>
        </S.Career_body>
    );
};
