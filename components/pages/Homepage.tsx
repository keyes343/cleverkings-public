import React, { useContext } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

const Homepage = () => {
    const state_settings = useContext(r.settings.StateContext);
    const dispatch_settings = useContext(r.settings.DispatchContext)!;

    const clear_activeDiv = () => {
        if (!!state_settings.active_div) {
            dispatch_settings({
                type: r.settings.act['active-div'],
                payload: null,
            });
        }
    };
    return (
        <s.Grid onClick={clear_activeDiv}>
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
            {/* 
            <reuse.nav.Footer />
            <reuse.nav.BelowFooter /> */}
            {/* floating popup for nav */}
            <reuse.nav.NavPopup />
        </s.Grid>
    );
};

export default Homepage;
