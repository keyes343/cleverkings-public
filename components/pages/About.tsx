import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';
import Image from 'next/image';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
    return (
        <s.navPages.About>
            <reuse.headers.PageHeader title="ABOUT US" title2="Our services make us the real KINGS" pic={e.links.pics.headers.about} />
            <s.Grid1>
                <AboutBody />
            </s.Grid1>
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.navPages.About>
    );
};

export default About;

const AboutBody = () => {
    const certificates = [media.ourClients.Clients_02, media.ourClients.Clients_04, media.ourClients.Clients_05, media.ourClients.Clients_06];
    const profilePics = [
        {
            pic: media.pages.about.shafhan,
            name: 'Shafhan Kalathil',
            designation: `Founder, CMD, CEO`,
        },
        {
            pic: media.pages.about.labeeb,
            name: 'Labeeb Kulangara Kandi',
            designation: `Managing Director`,
        },
        {
            pic: media.pages.about.mouz,
            name: 'MOUZA GAREEB SALEM HASHEL AL-QAYDI',
            designation: `BUSINESS ADVISOR`,
        },
        {
            pic: media.pages.about.team_member_5,
            name: 'HUMOOD SAEED SAIF ABOOD AL-KAABI',
            designation: `Managing Director`,
        },
        {
            pic: media.pages.about.team_member_7,
            name: 'HUMOOD SAEED SAIF ABOOD AL-KAABI',
            designation: `Managing Director`,
        },
    ];
    return (
        <s.navPages.AboutBody>
            {/* row 1 */}
            <s.GridA>
                {/* left pic */}
                <s.Grid1 relative>
                    <Image src={media.pages.about.cowork} alt="" layout="fill" objectFit="contain" />
                </s.Grid1>
                {/* top right heading */}
                <s.Box1>Providing you with the most actionable Products and Servies.</s.Box1>
                <s.Box2>
                    Cleverkings Pvt. Ltd. is one of the pre-eminent software company, engaged in flourishing out-of-box products that aim to bring
                    smartness to a world of business operations where everything goes usual. Our company came into existence in 2016 and became fully
                    integrated in 2017. We are headquartered at Calicut and is one of the most respected IT company, inaugurated and website launching
                    done by Sri. T. P. Ramakrishnan (Honourable Labour and Excise Minister of Kerala). Cleverkings being a part of Startup India,
                    MSME, Kerala startup mission with ISO certification proves we are the top-notch company that blooms around the world. Through
                    innovation, commitment, quality, and superior service we assist you to give a productive outcome to your business.
                </s.Box2>
            </s.GridA>
            {/* row 2 */}
            {/* certificates and recognition */}
            <s.GridB>
                {[
                    {
                        image: media.pages.about.partnership,
                        heading: 'Our Mission',
                        text: `To rise with high standards and professionality and to emerge
                            as a reliable alternative for our clients.`,
                    },
                    {
                        image: media.pages.about.solidarity,
                        heading: 'Our Vision',
                        text: `We endeavour to be among the premier software companies in
                            the industry with a credible name, to accomplish digital`,
                    },
                ].map((box, i) => {
                    return (
                        <s.Grid1a key={i}>
                            <s.Grid2a>{box.heading}</s.Grid2a>
                            <s.Grid2b relative>
                                <Image src={box.image} layout="fill" objectFit="contain" alt="" />
                            </s.Grid2b>
                            <s.Grid2c>
                                <s.Box1>{box.text}</s.Box1>
                            </s.Grid2c>
                            <div />
                        </s.Grid1a>
                    );
                })}
            </s.GridB>
            {/* row 3 */}
            <s.GridC>
                <s.Grid1>
                    <s.Box1>Certificates &amp; Recognitions</s.Box1>
                </s.Grid1>
                <s.Grid2>
                    {certificates.map((certificate, i) => {
                        return (
                            <s.Grid2a key={i} relative>
                                <Image src={certificate} alt="" layout="fill" objectFit="contain" />
                            </s.Grid2a>
                        );
                    })}
                </s.Grid2>
                {/* divider */}
                <s.Grid3>
                    <s.Box1 />
                </s.Grid3>
            </s.GridC>
            {/* row 4 */}
            {/* our leadership section */}
            <s.GridD>
                <s.Grid1>
                    <s.Box1>Meet our Leadershipt</s.Box1>
                </s.Grid1>
                <s.Grid2>
                    {profilePics.map((profilePic, i) => {
                        return (
                            <s.Grid2a key={i}>
                                <s.Grid3a relative>
                                    <Image src={profilePic.pic} alt="" layout="fill" objectFit="contain" />
                                </s.Grid3a>
                                <s.Grid3b>
                                    <s.Box1>{profilePic.name}</s.Box1>
                                    <s.Box2>{profilePic.designation}</s.Box2>
                                </s.Grid3b>
                            </s.Grid2a>
                        );
                    })}
                </s.Grid2>
                <s.Grid3>
                    <s.Box1>View Director Profile</s.Box1>
                </s.Grid3>
            </s.GridD>
        </s.navPages.AboutBody>
    );
};
