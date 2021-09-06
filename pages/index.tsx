import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as pages from '../components/pages/index';
import { h, r, e, s, t } from '../components/pages/incoming';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../components/styles/theme';

const Home: NextPage = () => {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <s.GlobalStyle />
                <s.Box>
                    <pages.Homepage />
                </s.Box>
            </ThemeProvider>
        </>
    );
};

export default Home;
