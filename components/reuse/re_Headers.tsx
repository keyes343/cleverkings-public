import React, { useState, useEffect, useMemo } from 'react';
import { h, r, e, s, t, media } from './incoming';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

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
    return (
        <s.header.Navbar>
            {/* logo */}
            <s.Grid1 relative>
                <Image src={media.logos.black_logo} alt="" layout="fill" objectFit="contain" />
            </s.Grid1>
            {/* nav options */}
            <s.Grid2>
                {nav_options.map((option, i) => {
                    return (
                        <s.header.NavOption
                            key={i}
                            isDropdown={option.dropdown}
                            onClick={() => {
                                router.push(option.link);
                            }}
                        >
                            <s.GridA>{option.title}</s.GridA>
                            <s.GridB>
                                <s.icons.Dropdown />
                            </s.GridB>
                        </s.header.NavOption>
                    );
                })}
            </s.Grid2>
            {/* get started btn */}
            <s.Grid3>
                <s.Grid3a>Get Started</s.Grid3a>
            </s.Grid3>
        </s.header.Navbar>
    );
};
