/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Contacts.module.css';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>CONTACTS</h1>

            <p className={styles.contactDetail}>+44 7984819 186</p>
            <p className={styles.contactDetail}>rosalispatricia@gmail.com</p>

            <div className={styles.socialMedia}>
                <img
                    src='/githubWhite.svg'
                    alt='github'
                    width={44}
                    height={44}
                    className={styles.gitHubImg}
                />
                <img
                    src='/linkedinWhite.svg'
                    alt='lnkedin'
                    width={44}
                    height={44}
                />
            </div>
        </div>
    );
}
