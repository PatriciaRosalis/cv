/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Nav() {
    return (
        <footer>
            <div className='arrow-up'>
                <Link
                    href='#nav-up
            '
                >
                    go up
                </Link>
                <div className='small-dot'></div>
            </div>
            <div className=''>
                <h1>
                    <Link href='/'>PR.</Link>
                </h1>
            </div>

            <div className='link-footer'>
                <Link href='#projects'>PROJECTS</Link>
                <Link href='/blog'>BLOG</Link>
            </div>
        </footer>
    );
}
