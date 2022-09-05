import Link from 'next/link';

export default function Nav() {
    return (
        <footer>
            <div className='link-footer'>
                <h1>PR.</h1>
                <Link href=''>PROJECTS</Link>
                <Link href=''>ABOUT ME</Link>
            </div>
        </footer>
    );
}
