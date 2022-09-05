import styles from '../styles/About.module.css';

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ABOUT ME</h1>

            <div>
                <h2 className={styles.dateTitle}>2019</h2>
                <p className={styles.resume}>
                    9 Week Fullstack Bootcamp at Ironhack School
                </p>
            </div>

            <div>
                <h2 className={styles.dateTitle}>2020 - January</h2>
                <p className={styles.resume}>
                    Start working in NTT Data Lisbon
                </p>
            </div>

            <div>
                <h2 className={styles.dateTitle}>
                    2021 September - 2022 February
                </h2>
                <p className={styles.resume}>
                    UX/UI Bootcamp at Edit Disruptive Digital Education
                </p>
            </div>

            <div>
                <h2 className={styles.dateTitle}>2022 - June</h2>
                <p className={styles.resume}>
                    I moved to London! Looking for a new junior frontend role.
                </p>
            </div>
        </div>
    );
}
