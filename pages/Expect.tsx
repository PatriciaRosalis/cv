import styles from '../styles/Expect.module.css';

export default function Expect() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>WHAT TO EXPECT FROM ME</h1>

            <section>
                <div className={styles.expectContainer}>
                    <h2 className={styles.expectTitlePink}>
                        I ALWAYS TRY TO GIVE MORE
                    </h2>
                    <p className={styles.expectResume}>
                        I’m a creative person and I always like to give my point
                        of view!
                    </p>
                </div>

                <div className={styles.expectContainerRight}>
                    <h2 className={styles.expectTitlePurple}>
                        I’M ALWAYS LEARNING
                    </h2>
                    <p className={styles.expectResume}>
                        As you can see from my journey, I like to be efficient
                        and productive as much as I can be!
                    </p>
                </div>

                <div className={styles.expectContainer}>
                    <h2 className={styles.expectTitlePink}>TEAM WORKER</h2>
                    <p className={styles.expectResume}>
                        I like to help and be helped by me colleagues and learn
                        from them.
                    </p>
                </div>

                <div className={styles.expectContainerRight}>
                    <h2 className={styles.expectTitlePurple}>
                        GOOD COMMUNICATOR
                    </h2>
                    <p className={styles.expectResume}>
                        Before I enter in this tech world I was a receptionist
                        for about 3 years, this gave me different perspectives
                        and conflict management. I’am very good with
                        communication!
                    </p>
                </div>
            </section>
            <h1 className={styles.title}>WANT TO KNOW MORE?</h1>
        </div>
    );
}
