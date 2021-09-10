import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';
import Image from 'next/image';

const CookiePolicy = () => {
    const para1 = `Cookies used on our site are for improving our site and products, enabling essential services and functionality. Your happiness is our main concern, so we
    strictly follow GDPR, European Union law, for all working with personal data. We make use of essential cookies to enable the core features like logins,
    account management, etc. GDPR law gives complete protection against data breaches, on tracking information across all site users, in identifying and
    making strategic decisions by our website. On implementing this rule, our website does, secure transfer of data and permitted to configure any settings to
    provide you with customized, enhanced, optimized content or service.`;

    const para2 = `As contact form is the main source of the website using user’s data on bulk, relevant to you and your interests, remembering your preferences, and the
website uses it for delivering targeted advertisings. We will use your data to improve our platform and services, provide customer service, operating and
expanding our business activities, and process your data to develop a contract with the company, ensure the company’s legitimate interests without its unfair
impact on your rights and freedom. We proficiently manage it to eliminate all risks and improve the effectiveness and quality of the content presented to you.
All information on our website gets transferred with the utmost security and grant access to selected information to perform specific tasks. We are well
aware of the stored data associated with, data items, locations, data format, data transfer methods, accountability, access points, and all third-party services,
and won't compromise and violate the privacy of our users. Third parties are the data processors that support the technical operation and delivery of our
services, for which we are the data controllers. Third parties located within and outside the country, always keep technical and organizational measures in
protecting the information from being accidentally destroyed, deteriorating, against being disclosed to unauthorized persons, etc. We only process those
crucial personal data and is kept secured only for sustainable purposes, even though you still have options to instruct your browser to refuse cookies from
our website. However, we cannot guarantee the security of the information transmitted to us via the internet.`;

    const para3 = `We have a privacy policy explaining the handling of user's data, whether it is used safely or not, and notify you by sending an instant notification when we
try to set or update the policy. We do prepare consent forms to work with users' agreement, to process their personal information, but disagreement means
you are unable to access certain features and contents across the site. We have specific cookies to improve your experience on the acceptance of cookie
messages and some others get temporarily deleted when you finish browsing, helping in internet tracking. Also, have consent options to satisfy processing
needs and well documented that can be withdrawn any time. You are free to revoke your consent for us to process your data by contacting us. Even if any
data theft happens in the future on remembering your browsing actions, we take the responsibility to inform the individuals and report the concerned
authority.`;
    return (
        <s.navPages.CookiePolicy>
            <reuse.headers.PageHeader title="Cookie Policy" title2="" pic={e.links.pics.headers.cookie} />
            <s.navPages.MainArea>
                <s.Box1>{para1}</s.Box1>
                <s.Box1>
                    {' '}
                    <div style={{ width: '4rem', display: 'inline-block' }} /> {para2}
                </s.Box1>
                <s.Box1>
                    <div style={{ width: '4rem', display: 'inline-block' }} /> {para3}
                </s.Box1>
            </s.navPages.MainArea>

            <s.Box>
                <reuse.nav.Footer2 />
                <reuse.nav.BelowFooter2 />
            </s.Box>
        </s.navPages.CookiePolicy>
    );
};

export default CookiePolicy;
