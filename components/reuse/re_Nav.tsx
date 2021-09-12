import React, { useContext } from 'react';
import { h, r, e, s, t, reuse } from './incoming';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const media = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media';

const root_designs = media + '/designs/';
const right_arrow_black = root_designs + 'right_arrow_black.svg';

const root_logos = media + '/logos/';
const white_logo = root_logos + 'ck_logo_white.svg';

const root_footer = media + '/footer/';
const call_icon = root_footer + 'call_icon.svg';
const address_icon = root_footer + 'address_icon.svg';
const mail_icon = root_footer + 'mail_icon.svg';

const root_nav = media + '/nav/';
// const mobile_menu = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media/nav/mobile_menu.svg';
const mobile_menu = root_nav + 'mobile_menu.svg';
const threeDots = root_nav + 'right_three_dots.svg';

// ----------------------

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
        link: '/Contact',
    },
    // {
    //     title: 'Cookie Policy',
    //     link: '/Cookie_Policy',
    // },
];

// const popup_name = 'right_nav_button';

export const Navbar = () => {
    const router = useRouter();
    const state_settings = useContext(r.settings.StateContext);
    const dispatch_settings = useContext(r.settings.DispatchContext)!;

    const routeTo = (path: string) => {
        console.log({ path });
        router.push(path);
    };

    const print_contexts = () => {
        console.log({
            state_settings,
        });
    };

    // only Mobile
    const show_nav_options = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        evt.stopPropagation();
        dispatch_settings({
            type: r.settings.act['active-div-toggle'],
            payload: e.DivNames['right-nav-button'],
        });
    };

    const S = s.nav;
    return (
        <S.Navbar count={navLinks.length} onClick={print_contexts}>
            {/* floating popup for nav */}
            <NavPopup />
            {/* only desktop */}
            <S.NavOption_wrapper count={navLinks.length}>
                {navLinks.map((link, i) => {
                    return (
                        <S.NavOption_btn key={i} onClick={() => routeTo(link.link)}>
                            {link.title}
                        </S.NavOption_btn>
                    );
                })}
            </S.NavOption_wrapper>
            {/* only mobile */}
            <s.GridB>
                <s.Grid1 relative>
                    <Image src={mobile_menu} alt="menu button" layout="fill" objectFit="contain" />
                </s.Grid1>
                <div />
                <s.Grid2 relative onClick={show_nav_options}>
                    <Image src={threeDots} alt="three dots" layout="fill" objectFit="contain" />
                </s.Grid2>
            </s.GridB>
            {/* center logo for mobile */}
            {/* left logo for desktop */}
            <s.GridC>
                <s.Grid1>
                    <s.Grid1a relative>
                        <Image src={white_logo} alt="logo" layout="fill" objectFit="contain" />
                    </s.Grid1a>
                </s.Grid1>
            </s.GridC>
        </S.Navbar>
    );
};

export const Footer = () => {
    const [email, set_email] = React.useState('');

    const addresses = [
        {
            lines: ['CLEVERKINGS PVT LTD', 'Thamburan Arcade, Medical College'],
            icon: address_icon,
        },
        {
            lines: ['+91 9656 600 009 | +91 8013 666 999'],
            icon: call_icon,
            clr: 'rgba(0,0,0,0.4)',
        },
        {
            lines: ['info@cleverkings.com'],
            icon: mail_icon,
        },
    ];

    const others = ['Web development', 'Andoid app development', ' IOS App development', 'React App development', 'UI UX design', 'App designs'];

    return (
        <s.home.Footer>
            {/* <Image src={media.right_arrow} alt="" layout="fill" objectFit="cover" /> */}
            <s.GridA>
                <s.Grid2 relative>
                    <Image src={white_logo} alt="" layout="fill" objectFit="contain" />
                </s.Grid2>
                <s.Grid1>
                    {addresses.map((address, i) => {
                        return (
                            <s.Grid1a key={i}>
                                <s.Grid2a relative>
                                    <Image src={address.icon} alt="" layout="fill" objectFit="contain" />
                                </s.Grid2a>
                                <s.Grid2b>
                                    {address.lines.map((line, i) => {
                                        return <s.Box key={i}>{line}</s.Box>;
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
                        <Image src={right_arrow_black} layout="fill" objectFit="contain" alt="" />
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
export const Footer2 = () => {
    const router = useRouter();
    const [email, set_email] = React.useState('');

    const addresses = [
        {
            lines: ['CLEVERKINGS PVT LTD', 'Thamburan Arcade, Medical College'],
            icon: address_icon,
        },
        {
            lines: ['+91 9656 600 009 | +91 8013 666 999'],
            icon: call_icon,
            clr: '#fddab3',
        },
        {
            lines: ['info@cleverkings.com'],
            icon: mail_icon,
        },
    ];

    const others = ['Web development', 'Andoid app development', ' IOS App development', 'React App development', 'UI UX design', 'App designs'];

    const quick_links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About Us',
            path: '/',
        },
        {
            title: 'Services',
            path: '/',
        },
        {
            title: 'Portfolio',
            path: '/',
        },
        {
            title: 'Contact Us',
            path: '/',
        },
    ];
    const useful_links = [
        {
            title: 'Privacy Policy',
            path: '/',
        },
        {
            title: 'Disclaimer',
            path: '/',
        },
        {
            title: 'Terms & Condition',
            path: '/',
        },
        {
            title: 'Refund Policy',
            path: '/',
        },
        {
            title: 'Cookie Policy',
            path: '/Cookie_Policy',
        },
    ];
    return (
        <s.footer.Footer2>
            {/* <Image src={media.right_arrow} alt="" layout="fill" objectFit="cover" /> */}
            <s.footer.MainWrapper>
                <s.footer.LogoWrapper area="logo" relative>
                    <Image src={white_logo} alt="" layout="fill" objectFit="contain" />
                </s.footer.LogoWrapper>
                <s.footer.column1 count={3}>
                    <s.footer.title>Quick Links</s.footer.title>
                    <s.footer.divider />
                    <s.footer.linkWrapper>
                        {quick_links.map((link, i) => {
                            return <s.Box1 key={i}>{link.title}</s.Box1>;
                        })}
                    </s.footer.linkWrapper>
                    <div />
                </s.footer.column1>
                <s.footer.column2 count={3}>
                    <s.footer.title>Useful Links</s.footer.title>
                    <s.footer.divider />
                    <s.footer.linkWrapper>
                        {useful_links.map((link, i) => {
                            return (
                                <s.Box1 key={i} onClick={() => router.push(link.path)}>
                                    {link.title}
                                </s.Box1>
                            );
                        })}
                    </s.footer.linkWrapper>
                    <div />
                </s.footer.column2>

                {/* subscribe area */}
                <s.footer.column3 count={4} mob_off>
                    <s.footer.title>Subscribe to our newsletter</s.footer.title>
                    <s.footer.divider />

                    <s.Grid3a>
                        <input placeholder="Enter you email" value={email} onChange={(e) => set_email(e.currentTarget.value)} type="text" />
                    </s.Grid3a>
                    <s.Grid3b relative>
                        <Image src={right_arrow_black} layout="fill" objectFit="contain" alt="" />
                    </s.Grid3b>
                    <div />
                </s.footer.column3>

                {/* address */}
                <s.footer.AddressSection>
                    {addresses.map((address, i) => {
                        return (
                            <s.Grid1a key={i}>
                                <s.Grid2a relative>
                                    <Image src={address.icon} alt="" layout="fill" objectFit="contain" />
                                </s.Grid2a>
                                <s.Grid2b>
                                    {address.lines.map((line, i) => {
                                        return (
                                            <s.Box1 key={i} clr={address.clr ?? ''}>
                                                {line}
                                            </s.Box1>
                                        );
                                    })}
                                </s.Grid2b>
                            </s.Grid1a>
                        );
                    })}
                </s.footer.AddressSection>
            </s.footer.MainWrapper>
        </s.footer.Footer2>
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
    const S = s.footer;
    return (
        <S.BelowFooter>
            <s.GridA>
                {leftList.map((list, i) => {
                    return (
                        <S.Text key={i}>
                            {i !== 0 && '|'} {list.title}
                        </S.Text>
                    );
                })}
            </s.GridA>
            <div />
            <S.Text>All rights reserved. Made with love. Team Clever Kings</S.Text>
        </S.BelowFooter>
    );
};
export const BelowFooter2 = () => {
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
    return <s.footer.BelowFooter2>Stunning execution by Cleverkings Pvt. Ltd.</s.footer.BelowFooter2>;
};

// only mobile
export const NavPopup = () => {
    const router = useRouter();

    const clear_activeDiv = () => {
        dispatch_settings({
            type: r.settings.act['active-div'],
            payload: null,
        });
    };

    const state_settings = useContext(r.settings.StateContext);
    const dispatch_settings = useContext(r.settings.DispatchContext)!;
    return (
        <s.nav.NavPopupWrapper isOn={state_settings.active_div === e.DivNames['right-nav-button']}>
            <s.nav.NavPopup>
                {navLinks.map((link, i) => {
                    return (
                        <s.nav.NavPopup_element
                            key={i}
                            onClick={(e) => {
                                e.stopPropagation();
                                clear_activeDiv();
                                router.push(link.link);
                            }}
                        >
                            <s.Box1>{link.title}</s.Box1>
                        </s.nav.NavPopup_element>
                    );
                })}
            </s.nav.NavPopup>
        </s.nav.NavPopupWrapper>
    );
};

export const NavPopup1 = () => {
    // const router = useRouter();

    // const state_settings = useContext(r.settings.StateContext);
    // const dispatch_settings = useContext(r.settings.DispatchContext)!;
    // return <s.nav.NavPopupWrapper isOn={state_settings.active_div === e.DivNames['right-nav-button']}>hello</s.nav.NavPopupWrapper>;
    return <s.Box bd="red">hellow</s.Box>;
};
