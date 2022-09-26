import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import { createContext, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../styles/About.css';
import '../styles/Article.css';
import '../styles/Expect.css';
import '../styles/globals.css';
import '../styles/Home.css';
import '../styles/Projects.css';
import '../styles/Switch.scss';

export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: (theme: 'light' | 'dark') => {},
});

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((cur) => (cur === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MDXProvider>
                <div id={theme}>
                    <Nav />
                    <Component {...pageProps} />
                    <Footer />
                </div>
            </MDXProvider>
        </ThemeContext.Provider>
    );
}

export default MyApp;
