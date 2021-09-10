import React, { useState, useEffect, useMemo, useContext } from 'react';
import { h, r, e, s, t, media } from './incoming';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NavPopup } from './re_Nav';

export interface PageHeaderProps {
    pic: string;
    title: string;
    title2: string;
}

export const PageHeader: React.FC<PageHeaderProps> = (p) => {
    return (
        <s.header.PageHeader relative>
            {/* header-background-img */}
            <s.GridA absolute>
                <s.Box1 relative>
                    <Image src={p.pic} alt="" layout="fill" objectFit="cover" />
                </s.Box1>
            </s.GridA>
            {/* opening timings display */}
            <s.Grid1>
                <s.Grid1a>Opening: Mon-Sat 09:00 - 18-00</s.Grid1a>
                <div />
                <s.Grid2a>fb | twitter | youtube etc</s.Grid2a>
            </s.Grid1>
            {/* navbar */}
            <Navbar />
            {/* Large Text */}
            <s.header.LargeTextArea>
                <s.Box1>{p.title}</s.Box1>
                <s.Box2>{p.title2}</s.Box2>
            </s.header.LargeTextArea>
            <div />
        </s.header.PageHeader>
    );
};

const Navbar = () => {
    const router = useRouter();
    const state_settings = useContext(r.settings.StateContext);
    const dispatch_settings = useContext(r.settings.DispatchContext)!;
    const nav_options = [
        {
            title: 'Home',
            link: '/',
            dropdown: false,
        },
        {
            title: 'About',
            link: '/About',
            dropdown: false,
        },
        {
            title: 'Services',
            link: '/Services',
            dropdown: true,
        },
        {
            title: 'Portfolio',
            link: '/Portfolio',
            dropdown: true,
        },
        {
            title: 'Careers',
            link: '/Careers',
            dropdown: true,
        },
        {
            title: 'Digital Cards',
            link: '/Digital_Cards',
            dropdown: false,
        },
        {
            title: 'Contact',
            link: '/Contact',
            dropdown: false,
        },
    ];

    const print_contexts = () => {
        console.log({
            state_settings,
        });
    };

    const open_navMenu = () => {
        console.log(`${e.DivNames['right-nav-button']}`);
        dispatch_settings({
            type: r.settings.act['active-div-toggle'],
            payload: e.DivNames['right-nav-button'],
        });
    };
    return (
        <s.header.Navbar onClick={print_contexts} relative>
            {/* floating popup for nav */}
            <NavPopup />
            {/* logo */}
            <s.header.LogoWrapper relative onClick={() => router.push('/')}>
                <Image src={media.logos.black_logo} alt="" layout="fill" objectFit="contain" />
            </s.header.LogoWrapper>
            {/* nav options */}
            {/* only desktop */}
            <s.header.NavOption_wrapper>
                {nav_options.map((option, i) => {
                    return (
                        <s.header.NavOption
                            key={i}
                            isDropdown={option.dropdown}
                            onClick={() => {
                                router.push(option.link);
                            }}
                        >
                            <s.header.NavBtn_title>{option.title}</s.header.NavBtn_title>
                            <s.GridB>
                                <s.icons.Dropdown />
                            </s.GridB>
                        </s.header.NavOption>
                    );
                })}
            </s.header.NavOption_wrapper>

            {/* right most button on desktop, hamburger menu on mobile */}
            <s.Grid3>
                {/* get started btn */}
                <s.Grid3a>Get Started</s.Grid3a>
                {/* hamburger menu */}
                <s.Grid3b onClick={open_navMenu}>
                    <s.header.Menu_Icon />
                </s.Grid3b>
            </s.Grid3>
        </s.header.Navbar>
    );
};
