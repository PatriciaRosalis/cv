import Link from 'next/link';
import { ChangeEvent, useContext } from 'react';
import { ThemeContext } from '../pages/_app';
import Switch from './Switch';

export default function Nav() {
    const theme = useContext(ThemeContext);

    const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
        theme.toggleTheme(e.target.checked ? 'dark' : 'light');
    };

    return (
        <nav>
            <div>
                <h1>
                    <Link href='/'>PR.</Link>
                </h1>
                <Switch onChange={handleThemeChange} />
            </div>

            <div className='link-nav'>
                <Link href='#projects'>PROJECTS</Link>
                <Link href='/Blog'>BLOG</Link>
                <Link href='#about-me'>ABOUT ME</Link>
                <Link href='#contact-me'>CONTACTS</Link>
            </div>
        </nav>
    );
}
