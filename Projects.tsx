import { useState } from 'react';
import Carousel from './components/Carousel';

export default function Projects() {
    const [value, setValue] = useState('');

    const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const button: HTMLButtonElement = event.currentTarget;
        setValue(button.name);
    };

    return (
        <div className='projectsContainer' id='projects'>
            <h1 className='title-projects'>PROJECTS</h1>

            <div>
                <button
                    className={
                        value === 'front-end' ? 'active' : 'options-projects'
                    }
                    name='front-end'
                    onClick={buttonHandler}
                >
                    FRONT-END
                </button>

                <button
                    className={
                        value === 'ux-ui' ? 'active' : 'options-projects'
                    }
                    name='ux-ui'
                    onClick={buttonHandler}
                >
                    UX/UI
                </button>
            </div>

            <div>
                <Carousel category={value} />
            </div>
        </div>
    );
}
