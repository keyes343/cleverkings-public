import React from 'react';
import { h, r, e, s, t, media } from './incoming';
import Image from 'next/image';

// section
export const ThingsThatMatter = () => {
    return (
        <s.home.ThingsThatMatter>
            <ShoutoutText />
            <SocialIcons />
            {/* off in mobile */}
            {/* black dot moving from left to side animation */}
            <s.home.MovingDots>
                <Image src={media.designs.black_dots} alt="" layout="fill" objectFit="contain" />
            </s.home.MovingDots>
            {/* stationary laptop image */}
            <s.home.Laptop>
                <Image src={media.designs.laptop} alt="" layout="fill" objectFit="contain" />
            </s.home.Laptop>

            <s.home.circle1 />
            <s.home.circle2 />
            <s.home.Ribbon>
                <Image src={media.designs.ribbon} alt="" layout="fill" objectFit="contain" />
            </s.home.Ribbon>
        </s.home.ThingsThatMatter>
    );
};

// -------------------

const ShoutoutText = () => {
    return (
        <s.home.ShoutoutArea>
            <s.home.ShoutoutArea_heading>
                <h1>
                    We do things <br /> that matter.
                </h1>
            </s.home.ShoutoutArea_heading>
            {/* off in desktop */}
            <s.Grid2a relative>
                <Image src={media.designs.laptop} alt="" layout="fill" objectFit="contain" />
            </s.Grid2a>
            {/* <s.Grid1a>dd</s.Grid1a> */}
            <s.Box4>
                Unique Solutions for your Business.
                <br />
                Solving problems since 2015 {`:)`}
            </s.Box4>
            <s.home.lets_talk_btn>Lets Talk</s.home.lets_talk_btn>
        </s.home.ShoutoutArea>
    );
};

const SocialIcons = () => {
    const icons = [
        {
            icon: media.social.fb,
            link: '',
        },
        {
            icon: media.social.whatsapp,
            link: '',
        },
        {
            icon: media.social.twitter,
            link: '',
        },
        {
            icon: media.social.zoom,
            link: '',
        },
        {
            icon: media.social.linkedin,
            link: '',
        },
    ];
    return (
        <s.home.SocialIcions>
            {/* hh */}
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
            <s.home.ThingsWeLove_line1>Things &nbsp;We &nbsp;L o v e &nbsp;to &nbsp;do</s.home.ThingsWeLove_line1>
            <div />
            <s.home.ThingsWeLove_line2>
                {icons.map((icon, i) => {
                    return (
                        <s.Grid2a key={i}>
                            <s.home.ThingsWeLove_icon relative>
                                <Image src={icon.icon} alt="" layout="fill" objectFit="contain" />
                            </s.home.ThingsWeLove_icon>
                            <s.GridB>{icon.title}</s.GridB>
                        </s.Grid2a>
                    );
                })}
            </s.home.ThingsWeLove_line2>

            {/* only mobile */}
            {/* white dots floating */}
            <s.home.ThingsWeLove_dots>
                <s.Grid3a relative>
                    <Image src={media.designs.white_dots} layout="fill" objectFit="contain" alt="" />
                </s.Grid3a>
            </s.home.ThingsWeLove_dots>
        </s.home.ThingsWeLove>
    );
};

// section
export const WeAre = () => {
    return (
        <s.home.WeAre>
            {/* row 1 of 2 */}
            <s.home.WeAre_title>
                <s.Box1>We are</s.Box1>
                <s.Box2>
                    Global leaders <br /> in Strengthening of Business
                </s.Box2>
            </s.home.WeAre_title>

            {/* row 2 of 2 */}
            <s.home.WeAre_imageAndDescriptionWrapper>
                {/* left pics */}
                <s.Grid1>
                    <ThreePics />
                </s.Grid1>
                {/* awards */}
                <s.home.WeAre_descriptionAndAwardWrapper>
                    {/* about cleverkings */}
                    <s.home.WeAre_description>
                        Cleverkings Pvt. Ltd. is one of the pre-eminent software company, engaged in flourishing out-of-box products that aim to bring
                        smartness to a world of business operations where everything goes usual. Our company came into existence in 2016 and became
                        fully integrated in 2017. We are headquartered at Calicut and is one of the most respected IT company, inaugurated and website
                        launching done by Sri. T. P. Ramakrishnan (Honourable Labour and Excise Minister of Kerala). Cleverkings being a part of
                        Startup India, MSME, Kerala startup mission with ISO certification proves we are the top-notch company that blooms around the
                        world. Through innovation, commitment, quality, and superior service we assist you to give a productive outcome to your
                        business.
                        <s.Grid aim="horizontal" pd="1rem 0">
                            <s.Box bd="rgba(0,0,0,0.1)" wd="auto" pd="0.3rem 1rem 0.1rem" opacity="0.8">
                                Read More
                            </s.Box>
                        </s.Grid>
                    </s.home.WeAre_description>
                    <s.Box2>
                        <Awards />
                    </s.Box2>
                    {/* <div /> */}
                </s.home.WeAre_descriptionAndAwardWrapper>
            </s.home.WeAre_imageAndDescriptionWrapper>
        </s.home.WeAre>
    );
};

const ThreePics = () => {
    return (
        <s.home.ThreePics>
            <s.Grid1 relative>
                <Image src={media.pages.home.who_we_are_1} alt="" layout="fill" objectFit="cover" />
            </s.Grid1>
            <s.Grid2 relative>
                <Image src={media.pages.home.who_we_are_2} alt="" layout="fill" objectFit="cover" />
            </s.Grid2>
            <s.Grid3 relative>
                <Image src={media.pages.home.who_we_are_3} alt="" layout="fill" objectFit="cover" />
            </s.Grid3>
        </s.home.ThreePics>
    );
};

const Awards = () => {
    const icons = [media.award_1, media.award_2, media.award_3, media.award_4];
    return (
        <s.home.Awards count={icons.length}>
            <s.Box3>Awards &amp; Recognition</s.Box3>
            <s.Box2>CLEVERKINGS PVT. LTD, AN ISO 9001:2015 CERTIFIED COMPANY</s.Box2>
            <s.home.Awards_imageRow>
                <s.Grid1a>
                    {icons.map((icon, i) => {
                        return (
                            <s.home.Awards_imageHolder key={i} relative>
                                <Image src={icon} alt="" layout="fill" objectFit="contain" />
                            </s.home.Awards_imageHolder>
                        );
                    })}
                    <div />
                </s.Grid1a>
            </s.home.Awards_imageRow>
        </s.home.Awards>
    );
};

// section
export const DiscussProject = () => {
    return (
        <s.home.DiscussProject>
            {/* is absolute */}
            <s.home.DiscussProject_dots>
                <s.Box ht="19rem" wd="19rem" left="-4rem" relative>
                    <Image src={media.designs.white_dots} alt="" layout="fill" objectFit="contain" />
                </s.Box>
            </s.home.DiscussProject_dots>
            {/* spacing */}
            <div />
            {/* col 1 of 2 - two line text */}
            <s.home.DiscussProject_line1>
                <span style={{ fontWeight: 'bold', fontSize: '2.3rem' }}>T</span>he way we work is to define your problem, and find the best way to
                solve the problem. We Turn Experiences Into Solutions
            </s.home.DiscussProject_line1>
            {/* col 2 of 2 - discuss a project */}
            <s.Grid2>
                <s.Grid>
                    <Image src={media.designs.right_arrow} alt="" height={50} width={50} />
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
                <s.Grid1 relative>
                    <Image src={media.designs.left_arrow} alt="laptop" layout="fill" objectFit="contain" />
                </s.Grid1>
                <s.Grid2 relative>
                    <Image src={media.designs.laptop} alt="laptop" layout="fill" objectFit="contain" />
                </s.Grid2>
                <s.Grid1 relative>
                    <Image src={media.designs.right_arrow} alt="laptop" layout="fill" objectFit="contain" />
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
            <s.home.OurClients_header relative>
                Our Clients
                {/* <s.Box relative bd="red" bottom="0" right="0" ht="5rem" wd="5rem">
                    <Image src={media.designs.ribbon} alt="" layout="fill" objectFit="contain" />
                </s.Box> */}
            </s.home.OurClients_header>
            <s.home.OurClients_body>
                {/* <div /> */}
                {/* 4 icons */}
                <s.home.OurClients_animationColumn>
                    {four_icons.map((icon, i) => {
                        return (
                            <s.home.OurClients_animationCard key={i}>
                                <s.Grid2a>
                                    <Image src={icon.icon} alt="" height={40} width={40} />
                                </s.Grid2a>
                                <s.Grid2b>{icon.title}</s.Grid2b>
                            </s.home.OurClients_animationCard>
                        );
                    })}
                </s.home.OurClients_animationColumn>
                {/* client list */}
                <s.home.OurClients_cards>
                    <s.GridA>
                        {client_icons.map((icon, i) => {
                            return (
                                <s.home.OurClients_card key={i}>
                                    <s.Grid4a relative>
                                        <Image src={icon} alt="" layout="fill" objectFit="contain" />
                                    </s.Grid4a>
                                </s.home.OurClients_card>
                            );
                        })}
                    </s.GridA>
                </s.home.OurClients_cards>
                {/* <div style={{ border: '2px solid cyan', width: '100%' }}>aaa</div> */}
                {/* <div /> */}
            </s.home.OurClients_body>
        </s.home.OurClients>
    );
};

// section
export const Quote = () => {
    return (
        <s.home.Quote>
            <s.home.Quote_header>
                <s.Box1>
                    Your success is our story,
                    <br />
                    Clients Feedback
                </s.Box1>
            </s.home.Quote_header>
            <s.home.Quote_wrapper1>
                {/* quote icons */}
                <s.home.Quote_icon relative>
                    <Image src={media.designs.quote_icon} alt="quote" layout="fill" objectFit="contain" />
                </s.home.Quote_icon>
                <s.Box2>
                    The team here is well qualified and has an incredible level of professionalism.
                    <br />
                    Good attitude, communication skills and timely delivery.
                    <br />
                    I would wholeheartedly recommend them to anyone.
                    <br />
                </s.Box2>
            </s.home.Quote_wrapper1>
            {/* quote said by - */}
            <s.home.Quote_by>
                - Ajith Kumar <br />
                MD, Company
            </s.home.Quote_by>
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
            <s.home.OurThoughts_PicStripe>
                {/* <div /> */}
                {thumbnails.map((thumbnail, i) => {
                    return (
                        <s.home.OurThoughts_Pic_MapContainer key={i}>
                            <s.home.OurThoughts_Pic relative>
                                <Image src={thumbnail.pic} layout="fill" objectFit="contain" alt="" />
                            </s.home.OurThoughts_Pic>
                            <s.Grid2b>{thumbnail.text}</s.Grid2b>
                            {/* <div /> */}
                        </s.home.OurThoughts_Pic_MapContainer>
                    );
                })}
                {/* <div /> */}
            </s.home.OurThoughts_PicStripe>
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
                <s.home.LetsTalk_wrapInput>
                    <input
                        type="number"
                        value={phone}
                        placeholder="Enter phone number"
                        onChange={(e) => {
                            set_phone(e.currentTarget.value);
                        }}
                    />
                </s.home.LetsTalk_wrapInput>
                <s.Grid2b relative>
                    <Image src={media.designs.right_arrow_black} alt="" layout="fill" objectFit="contain" />
                </s.Grid2b>
            </s.Grid2>

            <s.Box2 relative>
                <Image src={media.backgrounds.lets_talk} layout="fill" objectFit="cover" alt="" />
            </s.Box2>
        </s.home.LetsTalk>
    );
};
