/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Contacts.module.css';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CONTACTS</h1>

            <p className={styles.contactDetail}>rosalispatricia@gmail.com</p>

            <div className={styles.socialMedia}>
                <a
                    href='
                https://github.com/PatriciaRosalis'
                    target='_blank'
                >
                    <img
                        src='/githubWhite.svg'
                        alt='github'
                        width={44}
                        height={44}
                        className={styles.gitHubImg}
                    />
                </a>
                <a
                    href='https://www.linkedin.com/in/patriciarosalis/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <img
                        src='/linkedinWhite.svg'
                        alt='lnkedin'
                        width={44}
                        height={44}
                    />
                </a>
            </div>
        </div>
    );
}
