import Link from 'next/link';

export default function Nav() {
    return (
        <footer>
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
