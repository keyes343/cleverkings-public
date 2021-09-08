import React from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
    const router = useRouter();
    const navLinks = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'About',
            link: '/About',
        },
        {
            title: 'Services',
            link: '/Services',
        },
        {
            title: 'Products',
            link: '/Products',
        },
        {
            title: 'Process',
            link: '/Process',
        },
        {
            title: 'Careers',
            link: '/Careers',
        },
        {
            title: 'Contact Us',
            link: '/Contact_Us',
        },
    ];

    const routeTo = (path: string) => {
        console.log({ path });
        router.push(path);
    };

    return (
        <s.nav.Navbar count={navLinks.length}>
            {/* only desktop */}
            <s.GridA>
                {navLinks.map((link, i) => {
                    return (
                        <s.Grid1 key={i} onClick={() => routeTo(link.link)}>
                            {link.title}
                        </s.Grid1>
                    );
                })}
            </s.GridA>

            {/* only mobile */}
            <s.GridB>
                <s.Grid1 relative>
                    <Image src={media.mobileMenu} alt="menu button" layout="fill" objectFit="contain" />
                </s.Grid1>
                <div />
                <s.Grid2 relative>
                    <Image src={media.threeDots} alt="three dots" layout="fill" objectFit="contain" />
                </s.Grid2>
            </s.GridB>

            {/* center logo for mobile */}
            {/* left logo for desktop */}
            <s.GridC>
                <s.Grid1>
                    <s.Grid1a relative>
                        <Image src={media.logos.white_logo} alt="logo" layout="fill" objectFit="contain" />
                    </s.Grid1a>
                </s.Grid1>
            </s.GridC>
        </s.nav.Navbar>
    );
};

export const Footer = () => {
    const [email, set_email] = React.useState('');

    const addresses = [
        {
            lines: ['CLEVERKINGS PVT LTD', 'Thamburan Arcade, Medical College'],
            icon: media.footer.address_icon,
        },
        {
            lines: ['+91 9656 600 009 | +91 8013 666 999'],
            icon: media.footer.call_icon,
        },
        {
            lines: ['info@cleverkings.com'],
            icon: media.footer.mail_icon,
        },
    ];

    const others = ['Web development', 'Andoid app development', ' IOS App development', 'React App development', 'UI UX design', 'App designs'];

    return (
        <s.home.Footer>
            {/* <Image src={media.right_arrow} alt="" layout="fill" objectFit="cover" /> */}
            <s.GridA>
                <s.Grid2>Logo goes here</s.Grid2>
                <s.Grid1>
                    {addresses.map((address, i) => {
                        return (
                            <s.Grid1a key={i}>
                                <s.Grid2a relative>
                                    <Image src={address.icon} alt="" layout="fill" objectFit="contain" />
                                </s.Grid2a>
                                <s.Grid2b>
                                    {address.lines.map((line, i) => {
                                        return <s.Box1 key={i}>{line}</s.Box1>;
                                    })}
                                </s.Grid2b>
                            </s.Grid1a>
                        );
                    })}
                </s.Grid1>

                {/* subscribe area */}
                <s.Grid3>
                    <s.Grid3a>
                        <input
                            placeholder="Subscribe to our newsletter"
                            value={email}
                            onChange={(e) => set_email(e.currentTarget.value)}
                            type="text"
                        />
                    </s.Grid3a>
                    <s.Grid3b relative>
                        <Image src={media.right_arrow_black} layout="fill" objectFit="contain" alt="" />
                    </s.Grid3b>
                </s.Grid3>
            </s.GridA>

            <s.GridB>
                {others.map((other, i) => {
                    return <s.Grid2a key={i}>{other}</s.Grid2a>;
                })}
            </s.GridB>
            <s.GridB>
                {others.map((other, i) => {
                    return <s.Grid2a key={i}>{other}</s.Grid2a>;
                })}
            </s.GridB>
            <s.GridB>
                {others.map((other, i) => {
                    return <s.Grid2a key={i}>{other}</s.Grid2a>;
                })}
            </s.GridB>
        </s.home.Footer>
    );
};

export const BelowFooter = () => {
    const leftList = [
        {
            title: 'Privacy Policy',
            link: '',
        },
        {
            title: 'Terms and conditions',
            link: '',
        },
        {
            title: 'Cookie Policy',
            link: '',
        },
        {
            title: 'Refund Policy',
            link: '',
        },
    ];
    return (
        <s.home.BelowFooter>
            <s.GridA>
                {leftList.map((list, i) => {
                    return (
                        <s.Grid1 key={i}>
                            {i !== 0 && '|'} {list.title}
                        </s.Grid1>
                    );
                })}
            </s.GridA>
            <div />
            <s.GridB>All rights reserved. Made with love. Team Cleever Kings</s.GridB>
        </s.home.BelowFooter>
    );
};
