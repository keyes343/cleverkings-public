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
            <reuse.nav.Footer2 />
            <reuse.nav.BelowFooter2 />
        </s.Grid>
    );
};

export default Services;

const ServicesBody = () => {
    const boxes = [
        {
            pic: media.pages.services.website_development,
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
            pic: media.pages.services.app_development,
            heading: 'App Development',
            text: `Your business success is in creating
            outstanding and passionate solutions.
            Cleverkings Pvt. Ltd., web and mobile app
            development company in Dubai and India, give
            you a chance to experience web and mobile app development service of the world-class`,
        },
        {
            pic: media.pages.services.software_development,
            heading: 'Software Development',
            text: `Cleverkings Pvt. Ltd., the software
            development company in Dubai and
            worldwide, design, develop and deploy
            solutions to your software ideas. The first and
            foremost challenge on the client’s side is to
            choose the right software company with a top`,
        },
        {
            pic: media.pages.services.graphic_designing,
            heading: 'GRAPHIC DESIGNING',
            text: `Graphics is the best and fast communication
            tool to convey anything that words can’t
            describe. Our graphic designing company in
            Calicut provide graphic designing services
            that are inspiring, incredible and customized,
            which will be impossible for your customers to`,
        },
        {
            pic: media.pages.services.email_marketing,
            heading: 'DIGITAL MARKETING',
            text: `Cleverkings Pvt. Ltd. is an extension in
            assisting you in development by the means of
            Digital marketing that is advertising through
            digital channels. The Main Digital marketing
            services we look forward to are, Search Engine
            Optimization (SEO), Social Media Marketing`,
        },
        {
            pic: media.pages.services.email_marketing,
            heading: 'BRANDING',
            text: `Beyond a logo, branding for our internet
            marketing company is like creating memories,
            stories, and relationships with the customers.
            The brand we give you is all you need for the
            initial promotion of your business. Through
            branding, we tell your business story to the`,
        },
        {
            pic: media.pages.services.seo,
            heading: 'SEO',
            text: `Digital marketing company Cleverkings Pvt.
            Ltd. is a reliable and experienced digital
            marketer and SEO expert in India. SEO stands
            for Search Engine Optimization. Our perfect
            and planned SEO results in more visitors to
            your website and thus increases sales, more`,
        },
        {
            pic: media.pages.services.smm,
            heading: 'SMM',
            text: `Social media is a voice to communicate with
            the bulk of potential customers and spread
            the brand message to the world. Social media
            marketing is the procedure of driving
            engagement and sharing on a social media
            platform. Competitors in this field look`,
        },
        {
            pic: media.pages.services.smm,
            heading: 'BULK SMS AND VOICE CALLS',
            text: `The best bulk SMS service provider in India,
            Cleverkings Pvt. Ltd. enables you; to easily
            communicate with people through brief and
            pertinent messages. The Bulk SMS Marketing
            technique is a great and superior option to
            promote business, and this idea came from`,
        },
        {
            pic: media.pages.services.smm,
            heading: 'BULK SMS AND VOICE CALLS',
            text: `Bulk E-Mail marketing is the easiest method to
            communicate with customers. This is a
            marketing platform for businesses and
            marketers, to send marketing messages and
            triggered mail. An email marketing system is a
            combination of workspace email, workspace`,
        },
        {
            pic: media.pages.services.influencer_marketing,
            heading: 'INFLUENCER MARKETING',
            text: `As we lead the new-normal life in this
            pandemic period, it needs a new way of
            thinking. The internet marketing company in
            Calicut Cleverkings Pvt. Ltd. brings out the
            data insights and technology into the creative
            process to build a digital brand. Ourselves is`,
        },
        {
            pic: media.pages.services.domain,
            heading: 'DOMAIN',
            text: `A domain name is your business address and
            gives a credible professional touch to your
            business in the cyberspace. Here is the best
            domain service provider company in India,
            Cleverkings Pvt. Ltd. offering domain
            registration, domain transfer and domain`,
        },
        {
            pic: media.pages.services.hosting,
            heading: 'Hosting',
            text: `Cleverkings Pvt. Ltd. stands up as the best
            domain service provider company in Canada
            and many other places in the world, with the
            most powerful and reliable hosting services;
            shared, cloud, dedicated and VPS, by being a
            good companion in your online business`,
        },
        {
            pic: media.pages.services.animation,
            heading: 'Animation',
            text: `Cleverkings Pvt. Ltd. is a creative animation
            production company. We develop each one
            with a distinctive style and reflect the quality
            of work done for you. Our media group
            welcomes each one of you to be part of our
            family with each new project and the creative`,
        },
        {
            pic: media.pages.services.branding,
            heading: 'ARTIFICIAL INTELLIGENCE',
            text: `As artificial intelligence can change the future,
            it is a bonus to the exponential growth in
            automation. We are the digital marketing
            company and AI consultancy, trained in,
            cutting-edge AI and transforming digital and ecommerce
            business in a post-covid world. The`,
        },
        {
            pic: media.pages.services.game,
            heading: 'GAME DEVELOPMENT',
            text: `Cleverkings Pvt. Ltd. is the IT company in
            Calicut with a perfect mix of technical, unique,
            memorable, creative, effective game services.
            We are the best game development company
            in India to develop 3D games and apps to
            support various platforms like iPad/iPhone`,
        },
        {
            pic: media.pages.services.cloud,
            heading: 'CLOUD COMPUTING',
            text: `Cleverkings Pvt. Ltd is the most reviewed IT
            company having a constantly evolving cloud
            infrastructure with empowering security and
            hold a comprehensive cloud-native security
            platform. We craft out the best cloud
            computing services in Kerala, for`,
        },
        {
            pic: media.pages.services.robotics,
            heading: 'ROBOTICS',
            text: `Robotics is the mind-storming combination of
            electronics, computer software, and
            mechanics. As the growth of robotics is daily,
            Cleverkings Pvt. Ltd., an IT company in Calicut,
            Kerala, India, bears the hallmark in robotics
            development. Our company provides`,
        },
        {
            pic: media.pages.services.research,
            heading: 'RESEARCH & DEVELOPMENT',
            text: `Research and development is the
            establishment of web technology to innovate
            products or services. We are a unique retailed
            software service providing company in
            Calicut. In the business field, Cleverkings Pvt.
            Ltd. help to make your steps towards creating`,
        },
        {
            pic: media.pages.services.business_consultation,
            heading: 'Business Consultation',
            text: `Research and development is the
            establishment of web technology to innovate
            products or services. We are a unique retailed
            software service providing company in
            Calicut. In the business field, Cleverkings Pvt.
            Ltd. help to make your steps towards creating`,
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
                        <s.navPages.GetQuote>Get Quote</s.navPages.GetQuote>
                        <s.navPages.ViewMore>View More Details</s.navPages.ViewMore>
                    </s.Grid1>
                );
            })}
        </s.navPages.ServicesBody>
    );
};
