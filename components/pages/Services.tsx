import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';
import Image from 'next/image';

export interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
    return (
        <s.Grid>
            <reuse.headers.PageHeader title="Services" title2="Our services make us the real KINGS" pic={e.links.pics.headers.services} />
            <s.Grid1>
                <ServicesBody />
            </s.Grid1>
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.Grid>
    );
};

export default Services;

const ServicesBody = () => {
    const boxes = [
        {
            pic: media.pages.about.cowork,
            heading: 'Website Development',
            text: `Cleverkings Pvt. Ltd., a web designing
            company in Calicut, India, plays a dominant
            role in the field of website development,
            where you can make your business on the
            digital track. Our web development company
            is a full-scale solution to responsive and
            professional websites. We are well cognizant`,
        },
        {
            pic: media.pages.about.cowork,
            heading: 'Website Development',
            text: `Your business success is in creating outstanding and passionate
            solutions. Cleverkings Pvt. Ltd., the web and mobile app
            development company in Dubai and India, give you a chance to
            experience web and mobile app development service of the
            world-class standard by building it affordably, friendly, and rich
            in features.`,
        },
    ];
    return (
        <s.navPages.ServicesBody>
            {boxes.map((box, i) => {
                return (
                    <s.Grid1 key={i}>
                        <s.Grid1a relative>
                            <Image src={box.pic} alt="" layout="fill" objectFit="contain" />
                        </s.Grid1a>
                        <s.Box1>{box.heading}</s.Box1>
                        <s.Box2>{box.text}</s.Box2>
                    </s.Grid1>
                );
            })}
        </s.navPages.ServicesBody>
    );
};
