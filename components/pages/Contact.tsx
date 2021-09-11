import React, { useState, useEffect, useContext, useCallback, useRef, useMemo } from 'react';
import { h, r, e, s, t, reuse, media } from './incoming';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
    return (
        <s.contact.MainWrapper>
            <reuse.headers.PageHeader title="Contact" title2="Our Contact make us the real KINGS" pic={e.links.pics.headers.contact} />
            <Contact_body />
            <reuse.nav.Footer />
        </s.contact.MainWrapper>
    );
};

export default Contact;

const Contact_body = () => {
    const hook_contact = h.Contact();

    const [name, set_name] = useState('');
    const [email, set_email] = useState('');
    const [phone, set_phone] = useState('');
    const [message, set_message] = useState('');

    const send_clicked = () => {
        if (!name || !email || !phone || !message) {
            alert('Please check incomplete fields');
            return;
        }
        hook_contact.write_to_us(name, email, phone, message);
    };

    return (
        <s.contact.Body>
            <s.Grid1>
                <s.contact.Line1>Contact us</s.contact.Line1>
                <s.contact.Line2>We{`'`}d Love to Hear From You</s.contact.Line2>
                <s.contact.Line3>
                    <s.contact.MultipleTexts>
                        {[
                            `Whether you’re curious about features, a free trial, or even press—we’re ready to
                                answer any and all questions.`,
                            `Our door is always open for a good cup of coffee.`,
                        ].map((line, i) => {
                            return <s.contact.Text key={i}>{line}</s.contact.Text>;
                        })}
                    </s.contact.MultipleTexts>
                </s.contact.Line3>
            </s.Grid1>
            {/* address */}
            <s.Grid2>
                <s.contact.Address>
                    <s.contact.IconWrapper>
                        <s.contact.Icons_gps />
                    </s.contact.IconWrapper>
                    <s.contact.MultipleTexts>
                        {['Clever Kings Pvt Ltd.', 'Thamburan Arcade, Medical College,', 'Kozhikode, Kerala,', 'India - 673008'].map((line, i) => {
                            return (
                                <s.contact.Text key={i}>{line}</s.contact.Text>
                                //     <s.Box key={i}>
                                // <s.Box>
                            );
                        })}
                    </s.contact.MultipleTexts>
                </s.contact.Address>

                {/* phone */}
                <s.contact.Divider />
                <s.contact.Phone>
                    <s.contact.IconWrapper>
                        <s.contact.Icons_phone />
                    </s.contact.IconWrapper>
                    <s.contact.MultipleTexts>
                        {['+91 9656 600 009', '+91 8013 666 999'].map((line, i) => {
                            return (
                                <s.contact.Text key={i}>{line}</s.contact.Text>
                                //     <s.Box key={i}>
                                // <s.Box>
                            );
                        })}
                    </s.contact.MultipleTexts>
                </s.contact.Phone>

                {/* email */}
                <s.contact.Divider />
                <s.contact.Email>
                    <s.contact.IconWrapper>@</s.contact.IconWrapper>
                    <s.contact.MultipleTexts>
                        {['info@cleverkings.com,', 'support@cleverkings.com'].map((line, i) => {
                            return (
                                <s.contact.Text key={i}>{line}</s.contact.Text>
                                //     <s.Box key={i}>
                                // <s.Box>
                            );
                        })}
                    </s.contact.MultipleTexts>
                </s.contact.Email>
            </s.Grid2>
            <s.contact.Form>
                <s.Box bold>Write to us</s.Box>

                <s.contact.Input>
                    {[
                        {
                            placeholder: 'Name',
                            value: name,
                            onChange: (val: string) => set_name(val),
                        },
                        {
                            placeholder: 'Email',
                            value: email,
                            onChange: (val: string) => set_email(val),
                        },
                        {
                            placeholder: 'Phone',
                            value: phone,
                            onChange: (val: string) => set_phone(val),
                        },
                        {
                            placeholder: 'Message',
                            value: message,
                            onChange: (val: string) => set_message(val),
                        },
                    ].map((box, i) => {
                        return (
                            <s.Box1 key={i}>
                                <input
                                    placeholder={box.placeholder}
                                    value={box.value}
                                    onChange={(e) => {
                                        box.onChange(e.currentTarget.value);
                                    }}
                                />
                            </s.Box1>
                        );
                    })}
                </s.contact.Input>

                {/* send button */}
                <s.contact.SendBtn onClick={send_clicked}>SEND</s.contact.SendBtn>
            </s.contact.Form>
        </s.contact.Body>
    );
};
