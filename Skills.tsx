/* eslint-disable @next/next/no-img-element */
import styles from './styles/Skills.module.css';

export default function Skills() {
    return (
        <div className={styles.SkillsContainer}>
            <h1 className={styles.title}>SKILLS</h1>

            <section className={styles.sectionSkills}>
                <div className={styles.skillWrapper}>
                    <img src='/JS.svg' alt='JS' />
                    <p className={styles.description}>JavaScript</p>
                </div>

                <div className={styles.skillWrapper}>
                    <img src='/REACT.svg' alt='react' />
                    <p className={styles.description}>ReactJS</p>
                </div>

                <div className={styles.skillWrapper}>
                    <img src='/angula.svg' alt='Angular' />
                    <p className={styles.description}>Angular 6+</p>
                </div>

                <div className={styles.skillWrapper}>
                    <img src='/sass.svg' alt='Sass' />
                    <p className={styles.description}>Sass</p>
                </div>

                <div className={styles.skillWrapper}>
                    <img src='/HTML.svg' alt='HTML' />
                    <p className={styles.description}>HTML5</p>
                </div>

                <div className={styles.skillWrapper}>
                    <img src='/Figma.svg' alt='Figma' />
                    <p className={styles.description}>Figma</p>
                </div>
            </section>
        </div>
    );
}
