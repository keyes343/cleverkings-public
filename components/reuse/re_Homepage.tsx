import React from 'react';
import { h, r, e, s, t, media } from './incoming';
import Image from 'next/image';

// section
export const ThingsThatMatter = () => {
    return (
        <s.home.ThingsThatMatter>
            <ShoutoutText />
            <SocialIcons />
        </s.home.ThingsThatMatter>
    );
};

// -------------------

const ShoutoutText = () => {
    return (
        <s.home.ShoutoutArea>
            <s.Box1>
                We do things <br /> that matter.
            </s.Box1>
            <s.Box>
                Unique Solutions for your Business.
                <br />
                Solving problems since 2015 {`:)`}
            </s.Box>
            <s.Grid1>Lets Talk</s.Grid1>
        </s.home.ShoutoutArea>
    );
};

const SocialIcons = () => {
    const icons = [
        {
            icon: media.fb,
            link: '',
        },
        {
            icon: media.whatsapp,
            link: '',
        },
        {
            icon: media.twitter,
            link: '',
        },
    ];
    return (
        <s.home.SocialIcions>
            {icons.map((icon, i) => {
                return (
                    <s.Grid key={i}>
                        <Image src={icon.icon} alt="" height={20} width={20} />
                    </s.Grid>
                );
            })}
            <s.Box2 />
            {/* <s.Box1>
            </s.Box1> */}
        </s.home.SocialIcions>
    );
};

// section
export const ThingsWeLove = () => {
    const icons = [
        {
            icon: media.design_and_branding,
            title: 'Design & Branding',
        },
        {
            icon: media.app_and_web_dev,
            title: 'App and Web Development',
        },
        {
            icon: media.seo_smm,
            title: 'SEO SMM & Marketing',
        },
        {
            icon: media.business_consultation,
            title: 'Business Consultation',
        },
    ];
    return (
        <s.home.ThingsWeLove>
            <s.Grid1>Things &nbsp;We &nbsp;L o v e &nbsp;to &nbsp;do</s.Grid1>
            <div />
            <s.Grid2>
                {icons.map((icon, i) => {
                    return (
                        <s.Grid3 key={i}>
                            <s.GridA>
                                <Image src={icon.icon} alt="" height={50} width={50} />
                            </s.GridA>
                            <s.GridB>{icon.title}</s.GridB>
                        </s.Grid3>
                    );
                })}
            </s.Grid2>
        </s.home.ThingsWeLove>
    );
};

// section
export const WeAre = () => {
    return (
        <s.home.WeAre>
            {/* row 1 of 2 */}
            <s.GridA>
                <s.Box1>We are</s.Box1>
                <s.Box2>
                    Global leaders <br /> in Strengthening of Business
                </s.Box2>
            </s.GridA>

            {/* row 2 of 2 */}
            <s.GridB>
                {/* left pics */}
                <s.Grid1>
                    <ThreePics />
                </s.Grid1>
                {/* awards */}
                <s.Grid2>
                    {/* about cleverkings */}
                    <s.Box1>
                        Cleverkings Pvt. Ltd. is one of the pre-eminent software company, engaged in flourishing out-of-box products that aim to bring
                        smartness to a world of business operations where everything goes usual. Our company came into existence in 2016 and became
                        fully integrated in 2017. We are headquartered at Calicut and is one of the most respected IT company, inaugurated and website
                        launching done by Sri. T. P. Ramakrishnan (Honourable Labour and Excise Minister of Kerala). Cleverkings being a part of
                        Startup India, MSME, Kerala startup mission with ISO certification proves we are the top-notch company that blooms around the
                        world. Through innovation, commitment, quality, and superior service we assist you to give a productive outcome to your
                        business.
                    </s.Box1>
                    <s.Box2>
                        <Awards />
                    </s.Box2>
                    {/* <div /> */}
                </s.Grid2>
            </s.GridB>
        </s.home.WeAre>
    );
};

const ThreePics = () => {
    return (
        <s.home.ThreePics>
            <s.Grid1 />
            <s.Grid2 />
            <s.Grid3 />
        </s.home.ThreePics>
    );
};

const Awards = () => {
    const icons = [media.award_1, media.award_2, media.award_3, media.award_4];
    return (
        <s.home.Awards>
            <s.Box1>Awards &amp; Recognition</s.Box1>
            <s.Box2>CLEVERKINGS PVT. LTD, AN ISO 9001:2015 CERTIFIED COMPANY</s.Box2>
            <s.Grid1>
                {icons.map((icon, i) => {
                    return (
                        <s.Box3 key={i}>
                            <Image src={icon} alt="" height={80} width={80} />
                        </s.Box3>
                    );
                })}
                <div />
            </s.Grid1>
        </s.home.Awards>
    );
};

// section
export const DiscussProject = () => {
    return (
        <s.home.DiscussProject>
            {/* is absolute */}
            <s.Grid1>
                <s.Box1>
                    <Image src={media.white_dots} alt="" height={200} width={200} />
                </s.Box1>
            </s.Grid1>
            {/* spacing */}
            <div />
            {/* col 1 of 2 - two line text */}
            <s.Box2>
                <span style={{ fontWeight: 'bold', fontSize: '1.7rem' }}>T</span>he way we work is to define your problem, and find the best <br />
                way to solve the problem. We Turn Experiences Into Solutions
            </s.Box2>
            {/* col 2 of 2 - discuss a project */}
            <s.Grid2>
                <s.Grid>
                    <Image src={media.right_arrow} alt="" height={50} width={50} />
                </s.Grid>
                <s.Box2>Discuss A Project</s.Box2>
            </s.Grid2>
        </s.home.DiscussProject>
    );
};

// section
export const ViewAllProjects = () => {
    return (
        <s.home.ViewAllProjects>
            <s.GridA>
                Growing brands through <br />
                Strategy, Innovation, Technology and Creativity.
            </s.GridA>

            <s.GridB>
                <s.Grid1>
                    <Image src={media.left_arrow} alt="laptop" height="80" width="80" />
                </s.Grid1>
                <Image src={media.laptop} alt="laptop" height="300" width="300" />
                <s.Grid1>
                    <Image src={media.right_arrow} alt="laptop" height="80" width="80" />
                </s.Grid1>
            </s.GridB>

            <s.GridC>View All Projects</s.GridC>
        </s.home.ViewAllProjects>
    );
};

// section
export const OurClients = () => {
    const four_icons = [
        {
            icon: media.ourClients.years_of_expertise,
            title: 'Years of Expertise',
        },
        {
            icon: media.ourClients.project_delivered,
            title: 'Projects Delivered',
        },
        {
            icon: media.ourClients.clients_world_wild,
            title: 'Clients Worldwide',
        },
        {
            icon: media.ourClients.awesome_people,
            title: 'Awesome People',
        },
    ];

    const client_icons = [
        media.ourClients.Clients_02,
        media.ourClients.Clients_05,
        media.ourClients.Clients_06,
        media.ourClients.Clients_07,
        media.ourClients.Clients_08,
        media.ourClients.Clients_10,
        media.ourClients.Clients_11,
        media.ourClients.Clients_12,
        media.ourClients.Clients_13,
        media.ourClients.Clients_14,
        media.ourClients.Clients_15,
    ];
    return (
        <s.home.OurClients>
            <s.GridA>Our Clients</s.GridA>
            <s.GridB>
                {/* <div /> */}
                {/* 4 icons */}
                <s.Grid1>
                    {four_icons.map((icon, i) => {
                        return (
                            <s.Grid1a key={i}>
                                <s.Grid2a>
                                    <Image src={icon.icon} alt="" height={40} width={40} />
                                </s.Grid2a>
                                <s.Grid2b>{icon.title}</s.Grid2b>
                            </s.Grid1a>
                        );
                    })}
                </s.Grid1>
                {/* client list */}
                <s.Grid2>
                    {client_icons.map((icon, i) => {
                        return (
                            <s.Grid2a key={i}>
                                <Image src={icon} alt="" height={30} width={50} />
                            </s.Grid2a>
                        );
                    })}
                </s.Grid2>
                {/* <div style={{ border: '2px solid cyan', width: '100%' }}>aaa</div> */}
                {/* <div /> */}
            </s.GridB>
        </s.home.OurClients>
    );
};

// section
export const Quote = () => {
    return (
        <s.home.Quote>
            <s.GridA>
                <s.Box1>
                    Your success is our story,
                    <br />
                    Clients Feedback
                </s.Box1>
            </s.GridA>
            <s.GridB>
                {/* quote icons */}
                <s.Grid1>
                    <Image src={media.quote_icon} alt="quote" height="100" width="100" />
                </s.Grid1>
                <s.Box2>
                    The team here is well qualified and has an incredible level of professionalism.
                    <br />
                    Good attitude, communication skills and timely delivery.
                    <br />
                    I would wholeheartedly recommend them to anyone.
                    <br />
                </s.Box2>
            </s.GridB>
            {/* quote said by - */}
            <s.GridC>
                - Ajith Kumar <br />
                MD, Company
            </s.GridC>
            {/* background image */}
            <s.GridD>
                <Image src={media.backgrounds.feedback} alt="somoene on phone" layout="fill" objectFit="cover" />
            </s.GridD>
        </s.home.Quote>
    );
};

// section
export const OurThoughts = () => {
    const thumbnails = [
        {
            pic: media.ourThoughts.blog_1,
            text: 'Let Your Top Performers Move Around the Company',
        },
        {
            pic: media.ourThoughts.blog_2,
            text: `Digitizing India's Small and Midsize Businesses`,
        },
        {
            pic: media.ourThoughts.blog_3,
            text: `Leaders, Don’t Be Afraid to Talk About Your Fears and Anxieties`,
        },
    ];
    return (
        <s.home.OurThoughts>
            <s.Box1>
                Our Thoughts &amp; Insights <br />
                Follow the Magic Tech
            </s.Box1>
            {/* 3 boxes */}
            <s.Grid1>
                <div />
                {thumbnails.map((thumbnail, i) => {
                    return (
                        <s.Grid1a key={i}>
                            <s.Grid2a relative>
                                <Image src={thumbnail.pic} layout="fill" objectFit="contain" alt="" />
                            </s.Grid2a>
                            <s.Grid2b>{thumbnail.text}</s.Grid2b>
                            <div />
                        </s.Grid1a>
                    );
                })}
                <div />
            </s.Grid1>
            {/* <s.Grid2>
                <s.Box2>Load More</s.Box2>
            </s.Grid2> */}
        </s.home.OurThoughts>
    );
};

// section
export const LetsTalk = () => {
    const [phone, set_phone] = React.useState<string>('');
    return (
        <s.home.LetsTalk>
            <s.Box1>Its come to an end. Lets talk now</s.Box1>
            <s.Grid2>
                <s.Grid2a>
                    <input
                        type="number"
                        value={phone}
                        placeholder="Enter phone number"
                        onChange={(e) => {
                            set_phone(e.currentTarget.value);
                        }}
                    />
                </s.Grid2a>
                <s.Grid2b relative>
                    <Image src={media.right_arrow_black} alt="" layout="fill" objectFit="contain" />
                </s.Grid2b>
            </s.Grid2>

            <s.Box2 relative>
                <Image src={media.backgrounds.lets_talk} layout="fill" objectFit="cover" alt="" />
            </s.Box2>
        </s.home.LetsTalk>
    );
};
