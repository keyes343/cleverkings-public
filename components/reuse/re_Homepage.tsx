import React from 'react';
import { h, r, e, s, t } from './incoming';
import Image from 'next/image';
// import fb from './fb.svg';

// const media = process.env.AWS_PUBLIC_FILES;
const media = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media';

const root_social = media + '/socialIcons/';
const fb = root_social + 'fb.svg';
const linkedin = root_social + 'linkedin.svg';
const twitter = root_social + 'twitter.svg';
const whatsapp = root_social + 'whatsapp.svg';
const zoom = root_social + 'zoom.svg';

const root_weLove = media + '/weLove/';
const design_and_branding = root_weLove + 'design_branding.svg';
const app_and_web_dev = root_weLove + 'app_web_development.svg';
const business_consultation = root_weLove + 'business_consultation.svg';
const seo_smm = root_weLove + 'seosmm.svg';

const root_designs = media + '/designs/';
const black_dots = root_designs + 'black_dots.svg';
const white_dots = root_designs + 'white_dots.svg';
const laptop_pic = root_designs + 'laptop_pic.png';
const left_arrow = root_designs + 'left_arrow.svg';
const quote_icon = root_designs + 'quote_icon.svg';
const ribbon = root_designs + 'ribbon.svg';
const right_arrow = root_designs + 'right_arrow.svg';
const right_arrow_black = root_designs + 'right_arrow_black.svg';

const root_awards = media + '/awards/';
const award_1 = root_awards + 'award_1.png';
const award_2 = root_awards + 'award_2.png';
const award_3 = root_awards + 'award_3.png';
const award_4 = root_awards + 'award_4.png';

const root_ourClients = media + '/ourClients/';
const awesome_people = root_ourClients + 'awesome_people.svg';
const clients_world_wild = root_ourClients + 'clients_world_wild.svg';
const project_delivered = root_ourClients + 'project_delivered.svg';
const years_of_expertise = root_ourClients + 'years_of_expertise.svg';

const root_ourClients_list = media + '/ourClients/clientList/';
const clients_02 = root_ourClients_list + 'Clients_02.svg';
// const clients_02 = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media/ourClients/clientList/Clients_02.svg';
const clients_04 = root_ourClients_list + 'Clients_04.svg';
const clients_05 = root_ourClients_list + 'Clients_05.svg';
const clients_06 = root_ourClients_list + 'Clients_06.svg';
const clients_07 = root_ourClients_list + 'Clients_07.svg';
// const clients_10 = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media/ourClients/clientList/Clients-10.svg';
const clients_08 = root_ourClients_list + 'Clients-08.svg';
const clients_10 = root_ourClients_list + 'Clients-10.svg';
const clients_11 = root_ourClients_list + 'Clients-11.svg';
const clients_12 = root_ourClients_list + 'Clients-12.svg';
const clients_13 = root_ourClients_list + 'Clients-13.svg';
const clients_14 = root_ourClients_list + 'Clients-14.svg';
const clients_15 = root_ourClients_list + 'Clients-15.svg';

const root_backgrounds = media + '/backgrounds/';
const feedback = root_backgrounds + 'feedback_bg.png';
const lets_talk = root_backgrounds + 'lets_talk_bg.jpg';

const root_ourThoughts = media + '/ourThoughts/';
const blog_1 = root_ourThoughts + 'blog_1.png';
const blog_2 = root_ourThoughts + 'blog_2.png';
const blog_3 = root_ourThoughts + 'blog_3.png';

// pages
const root_pages = media + '/pages/';
const root_pages_home = media + '/pages/home/';
const who_we_are_1 = root_pages_home + 'who_we_are_1.jpg';
// const who_we_are_1 = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media/pages/home/who_we_are_1.png';
const who_we_are_2 = root_pages_home + 'who_we_are_2.jpg';
// const who_we_are_2 = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media/pages/home/who_we_are_2.png';
const who_we_are_3 = root_pages_home + 'who_we_are_3.jpg';
// --------------------------------------------------------------------------------------------------------------------

// section
export const ThingsThatMatter = () => {
    return (
        <s.home.ThingsThatMatter>
            <ShoutoutText />
            <SocialIcons />
            {/* off in mobile */}
            {/* black dot moving from left to side animation */}
            <s.home.MovingDots>{<Image src={black_dots} alt="" layout="fill" objectFit="contain" />}</s.home.MovingDots>
            {/* stationary laptop image */}
            <s.home.Laptop>{<Image src={laptop_pic} alt="" layout="fill" objectFit="contain" />}</s.home.Laptop>

            <s.home.circle1 />
            <s.home.circle2 />
            <s.home.Ribbon>{<Image src={ribbon} alt="" layout="fill" objectFit="contain" />}</s.home.Ribbon>
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
                <Image src={laptop_pic} alt="" layout="fill" objectFit="contain" />
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
            icon: fb,
            link: '',
        },
        {
            icon: whatsapp,
            link: '',
        },
        {
            icon: twitter,
            link: '',
        },
        {
            icon: zoom,
            link: '',
        },
        {
            icon: linkedin,
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
            icon: design_and_branding,
            title: 'Design & Branding',
        },
        {
            icon: app_and_web_dev,
            title: 'App and Web Development',
        },
        {
            icon: seo_smm,
            title: 'SEO SMM & Marketing',
        },
        {
            icon: business_consultation,
            title: 'Business Consultation',
        },
    ];
    const S = s.home;
    return (
        <S.ThingsWeLove>
            <S.ThingsWeLove_line1>Things &nbsp;We &nbsp;L o v e &nbsp;to &nbsp;do</S.ThingsWeLove_line1>
            <div />
            <S.ThingsWeLove_line2>
                {icons.map((icon, i) => {
                    return (
                        <s.Grid2a key={i}>
                            <S.ThingsWeLove_icon relative>
                                <Image src={icon.icon} alt="" layout="fill" objectFit="contain" />
                            </S.ThingsWeLove_icon>
                            <s.GridB>{icon.title}</s.GridB>
                        </s.Grid2a>
                    );
                })}
            </S.ThingsWeLove_line2>

            {/* only mobile */}
            {/* white dots floating */}
            <S.ThingsWeLove_dots>
                <S.Pic>
                    <Image src={white_dots} layout="fill" objectFit="contain" alt="" />
                </S.Pic>
            </S.ThingsWeLove_dots>
        </S.ThingsWeLove>
    );
};

// section
export const WeAre = () => {
    const S = s.home;
    return (
        <S.WeAre>
            {/* row 1 of 2 */}
            <S.Title>
                <s.Box1>We are</s.Box1>
                <s.Box2>
                    Global leaders in <br /> Strengthening of Business
                </s.Box2>
                <S.Ribbon>
                    <Image src={ribbon} layout="fill" objectFit="contain" alt="" />
                </S.Ribbon>
            </S.Title>

            {/* row 2 of 2 */}
            <S.ImageAndDescriptionWrapper>
                {/* left pics */}
                <s.home.ThreePics_wrapper>
                    <s.home.ThreePics>
                        <s.Grid1 relative>
                            <Image src={who_we_are_1} alt="" layout="fill" objectFit="cover" />
                        </s.Grid1>
                        <s.Grid2 relative>
                            <Image src={who_we_are_2} alt="" layout="fill" objectFit="cover" />
                        </s.Grid2>
                        <s.Grid3 relative>
                            <Image src={who_we_are_3} alt="" layout="fill" objectFit="cover" />
                        </s.Grid3>
                    </s.home.ThreePics>
                </s.home.ThreePics_wrapper>
                {/* awards */}
                <S.DescriptionAndAwardWrapper>
                    {/* about cleverkings */}
                    <S.Description>
                        Cleverkings Pvt. Ltd. is one of the pre-eminent software company, engaged in flourishing out-of-box products that aim to bring
                        smartness to a world of business operations where everything goes usual. Our company came into existence in 2016 and became
                        fully integrated in 2017. We are headquartered at Calicut and is one of the most respected IT company, inaugurated and website
                        launching done by Sri. T. P. Ramakrishnan (Honourable Labour and Excise Minister of Kerala). Cleverkings being a part of
                        Startup India, MSME, Kerala startup mission with ISO certification proves we are the top-notch company that blooms around the
                        world. Through innovation, commitment, quality, and superior service we assist you to give a productive outcome to your
                        business.
                        <s.Grid aim="horizontal" pd="1rem 0">
                            <s.Box wd="auto" pd="0.3rem 1rem 0.1rem 0" bold opacity="0.8">
                                Read More
                            </s.Box>
                        </s.Grid>
                    </S.Description>
                    <s.Box2>
                        <Awards />
                    </s.Box2>
                    {/* <div /> */}
                </S.DescriptionAndAwardWrapper>
            </S.ImageAndDescriptionWrapper>
        </S.WeAre>
    );
};

const Awards = () => {
    const icons = [award_1, award_2, award_3, award_4];
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
                    <Image src={white_dots} alt="" layout="fill" objectFit="contain" />
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
                    <Image src={right_arrow} alt="" height={50} width={50} />
                </s.Grid>
                <s.Box2>Discuss A Project</s.Box2>
            </s.Grid2>
        </s.home.DiscussProject>
    );
};

// section
export const ViewAllProjects = () => {
    const S = s.home;

    return (
        <S.ViewAllProjects>
            <s.GridA>
                Growing brands through <br />
                Strategy, Innovation, Technology and Creativity.
                <S.Ribbon>
                    <Image src={ribbon} alt="" layout="fill" objectFit="contain" />
                </S.Ribbon>
            </s.GridA>

            <s.GridB>
                <s.Grid1 relative>
                    <Image src={left_arrow} alt="laptop" layout="fill" objectFit="contain" />
                </s.Grid1>
                <s.Grid2 relative>
                    <Image src={laptop_pic} alt="laptop" layout="fill" objectFit="contain" />
                </s.Grid2>
                <s.Grid1 relative>
                    <Image src={right_arrow} alt="laptop" layout="fill" objectFit="contain" />
                </s.Grid1>
            </s.GridB>

            <s.GridC>View All Projects</s.GridC>
        </S.ViewAllProjects>
    );
};

// section
export const OurClients = () => {
    const four_icons = [
        {
            icon: years_of_expertise,
            title: 'Years of Expertise',
        },
        {
            icon: project_delivered,
            title: 'Projects Delivered',
        },
        {
            icon: clients_world_wild,
            title: 'Clients Worldwide',
        },
        {
            icon: awesome_people,
            title: 'Awesome People',
        },
    ];

    const client_icons = [
        clients_02,
        clients_04,
        clients_05,
        clients_06,
        clients_07,
        clients_08,
        clients_10,
        // 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media/ourClients/clientList/Clients-10.svg',
        clients_11,
        clients_12,
        clients_13,
        clients_14,
        clients_15,
    ];
    const S = s.home;

    return (
        <S.OurClients>
            <S.OurClients_header relative>
                Our Clients
                <S.Ribbon>
                    <Image src={ribbon} alt="" layout="fill" objectFit="contain" />
                </S.Ribbon>
            </S.OurClients_header>
            <S.OurClients_body>
                {/* <div /> */}
                {/* 4 icons */}
                <S.OurClients_animationColumn>
                    {four_icons.map((icon, i) => {
                        return (
                            <S.OurClients_animationCard key={i}>
                                <S.Pic>
                                    <Image src={icon.icon} alt="" layout="fill" objectFit="contain" />
                                </S.Pic>
                                <s.Grid2b>{icon.title}</s.Grid2b>
                            </S.OurClients_animationCard>
                        );
                    })}
                </S.OurClients_animationColumn>
                {/* client list */}
                <S.OurClients_cards>
                    <S.Wrapper1>
                        {client_icons.map((icon, i) => {
                            return (
                                <S.OurClients_card key={i}>
                                    <S.Pic>
                                        <Image src={icon} alt="" layout="fill" objectFit="contain" />
                                    </S.Pic>
                                </S.OurClients_card>
                            );
                        })}
                    </S.Wrapper1>
                </S.OurClients_cards>
                {/* <div style={{ border: '2px solid cyan', width: '100%' }}>aaa</div> */}
                {/* <div /> */}
            </S.OurClients_body>
        </S.OurClients>
    );
};

// section
export const Quote = () => {
    const S = s.home;
    return (
        <s.home.Quote>
            <s.home.Quote_header>
                <S.Text>
                    Your success is our story,
                    <br />
                    Clients Feedback
                    <S.Ribbon>
                        <Image src={ribbon} alt="" layout="fill" objectFit="contain" />
                    </S.Ribbon>
                </S.Text>
            </s.home.Quote_header>
            <s.home.Quote_wrapper1>
                {/* quote icons */}
                <s.home.Quote_icon relative>
                    <Image src={quote_icon} alt="quote" layout="fill" objectFit="contain" />
                </s.home.Quote_icon>
                <S.Text>
                    The team here is well qualified and has an incredible level of professionalism.
                    <br />
                    Good attitude, communication skills and timely delivery.
                    <br />
                    I would wholeheartedly recommend them to anyone.
                    <br />
                </S.Text>
            </s.home.Quote_wrapper1>
            {/* quote said by - */}
            <s.home.Quote_by>
                - Ajith Kumar <br />
                MD, Company
            </s.home.Quote_by>
            {/* background image */}
            <s.GridD>
                <Image src={feedback} alt="somoene on phone" layout="fill" objectFit="cover" />
            </s.GridD>
        </s.home.Quote>
    );
};

// section
export const OurThoughts = () => {
    const thumbnails = [
        {
            pic: blog_1,
            text: 'Let Your Top Performers Move Around the Company',
        },
        {
            pic: blog_2,
            text: `Digitizing India's Small and Midsize Businesses`,
        },
        {
            pic: blog_3,
            text: `Leaders, Don’t Be Afraid to Talk About Your Fears and Anxieties`,
        },
    ];
    const S = s.home;
    return (
        <s.home.OurThoughts>
            <S.Text>
                Our Thoughts &amp; Insights <br />
                Follow the Magic Tech
                <S.Ribbon>
                    <Image src={ribbon} alt="" layout="fill" objectFit="contain" />
                </S.Ribbon>
            </S.Text>
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
    const S = s.home;
    return (
        <S.LetsTalk>
            <S.Text>Its come to an end. Lets talk now</S.Text>
            <S.Wrapper1>
                <S.LetsTalk_wrapInput>
                    <input
                        type="number"
                        value={phone}
                        placeholder="Enter phone number"
                        onChange={(e) => {
                            set_phone(e.currentTarget.value);
                        }}
                    />
                </S.LetsTalk_wrapInput>
                <s.Grid2b relative>
                    <Image src={right_arrow} alt="" layout="fill" objectFit="contain" />
                </s.Grid2b>
            </S.Wrapper1>

            <S.Pic>
                <Image src={lets_talk} layout="fill" objectFit="cover" alt="" />
            </S.Pic>
        </S.LetsTalk>
    );
};
