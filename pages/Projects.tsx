import styles from '../styles/Projects.module.css';

export default function Projects() {
    return (
        <div className={styles.projectsContainer} id='projects'>
            <h1 className={styles.title}>PROJECTS</h1>

            <div>
                <button className={styles.options}>FRONT-END</button>
                <button className={styles.options}>UX/UI</button>
            </div>
        </div>
    );
}
