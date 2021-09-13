import React, { useState, useEffect, useMemo, useContext } from 'react';
import { h, r, e, s, t } from './incoming';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { NavPopup } from './re_Nav';

const media = 'https://cleverkings-public.s3.ap-south-1.amazonaws.com/media';

const root_logos = media + '/logos/';
const white_logo = root_logos + 'ck_logo_white.svg';
const black_logo = root_logos + 'black_logo.svg';

const root_social = media + '/socialIcons/';
const fb = root_social + 'fb.svg';
const linkedin = root_social + 'linkedin.svg';
const twitter = root_social + 'twitter.svg';
const whatsapp = root_social + 'whatsapp.svg';
const zoom = root_social + 'zoom.svg';

export interface PageHeaderProps {
    pic: string;
    title: string;
    title2: string;
}

export const PageHeader: React.FC<PageHeaderProps> = (p) => {
    const S = s.header;
    const social_icons = [fb, twitter, linkedin, whatsapp, zoom];
    return (
        <s.header.PageHeader relative icon_count={social_icons.length}>
            {/* header-background-img */}
            <S.Column1 absolute>
                <S.Pic>
                    <Image src={p.pic} alt="" layout="fill" objectFit="cover" />
                </S.Pic>
            </S.Column1>
            {/* opening timings display */}
            <S.Column2>
                <S.Timings>Opening: Mon-Sat 09:00 - 18-00</S.Timings>
                <div />
                <S.Icons>
                    {social_icons.map((icon, i) => {
                        return (
                            <S.Pic key={i}>
                                <Image src={icon} alt="" layout="fill" objectFit="contain" />
                            </S.Pic>
                        );
                    })}
                </S.Icons>
            </S.Column2>
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
                <Image src={black_logo} alt="" layout="fill" objectFit="contain" />
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
