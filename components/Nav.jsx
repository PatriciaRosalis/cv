import Link from 'next/link';
import Switch from './Switch';

export default function Nav() {
    return (
        <nav>
            <div>
                <h1>PR.</h1>
                <Switch />
            </div>

            <div className='link-nav'>
                <Link href=''>PROJECTS</Link>
                <Link href=''>ABOUT ME</Link>
                <Link href=''>CONTACT ME</Link>
            </div>
        </nav>
    );
}
