import React from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

const Homepage = () => {
    return (
        <s.Grid>
            <reuse.nav.Navbar />
            <reuse.home.ThingsThatMatter />
            <reuse.home.ThingsWeLove />
            <reuse.home.WeAre />
            <reuse.home.DiscussProject />
            <reuse.home.ViewAllProjects />
            <reuse.home.OurClients />
            <reuse.home.Quote />
            <reuse.home.OurThoughts />
            <reuse.home.LetsTalk />
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter />
        </s.Grid>
    );
};

export default Homepage;
