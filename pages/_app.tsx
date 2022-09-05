import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/Switch.scss';

export const ThemeContext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme((cur) => (cur === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <Nav />
                <Component {...pageProps} />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

export default MyApp;
