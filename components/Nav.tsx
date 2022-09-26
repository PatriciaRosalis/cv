import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEvent, useContext } from 'react';
import { ThemeContext } from '../pages/_app';
import Switch from './Switch';

export default function Nav() {
    const router = useRouter();
    const theme = useContext(ThemeContext);

    const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
        theme.toggleTheme(e.target.checked ? 'dark' : 'light');
    };

    return (
        <nav id='nav-up'>
            <div>
                <h1>
                    <Link href='/'>PR.</Link>
                </h1>
                <Switch onChange={handleThemeChange} />
            </div>

            <div className='link-nav-mobile'>
                <Link href='/Blog'>BLOG</Link>
            </div>

            {router.pathname === '/Blog' ? (
                <div className='link-nav'>
                    <Link href='/#projects'>PROJECTS</Link>
                    <Link href='/Blog'>BLOG</Link>
                    <Link href='/#about-me'>ABOUT ME</Link>
                    <Link href='/#contact-me'>CONTACTS</Link>
                </div>
            ) : (
                <div className='link-nav'>
                    <Link href='#projects'>PROJECTS</Link>
                    <Link href='/Blog'>BLOG</Link>
                    <Link href='#about-me'>ABOUT ME</Link>
                    <Link href='#contact-me'>CONTACTS</Link>
                </div>
            )}
        </nav>
    );
}
