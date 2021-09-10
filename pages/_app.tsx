import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Component } from 'react';
import { useContext, useReducer } from 'react';
import { h, r, e, s, t } from '../components/pages/incoming';

function MyApp({ Component, pageProps }: AppProps) {
    // initiating - SETTINGS - reducer
    const [state_settings, dispatch_settings] = useReducer(r.settings.reducer, r.settings.initialState);

    // const state_settings = useContext(r.settings.StateContext);
    // const dispatch_settings = useContext(r.settings.DispatchContext)!;
    return (
        <>
            <r.settings.StateContext.Provider value={state_settings}>
                <r.settings.DispatchContext.Provider value={dispatch_settings}>
                    <Component {...pageProps} />
                </r.settings.DispatchContext.Provider>
            </r.settings.StateContext.Provider>
        </>
    );
}
export default MyApp;

// const ContextWrapper = ( ) => {
//     return (
//         <>
//             <p.component />
//         </>
//     );
// };
