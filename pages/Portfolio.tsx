import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as pages from '../components/pages/index';
import { h, r, e, s, t, reuse } from '../components/pages/incoming';

const About = () => {
    return (
        <>
            <pages.About />
        </>
    );
};

export default About;
