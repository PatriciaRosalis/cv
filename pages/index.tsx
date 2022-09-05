/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from './AboutMe';
import Contacts from './Contacts';
import Expect from './Expect';
import Projects from './Projects';
import Skills from './Skills';

const Home: NextPage = () => {
    return (
        <div className='container'>
            <Head>
                <title>Patricia Rosalis</title>
                <meta
                    name='Frontend Developer - Patricia Rosalis'
                    content='Front end developer'
                />
                <link rel='icon' href='/patcv.svg' />
            </Head>

            <section className='homePhotoSection'>
                <img id='main-photo' src='/patcv.svg' alt='pat-cv' />

                <h2 className='title'>Patrícia Rosális</h2>
                <h1 className='titleDescription'>
                    FRONT-END DEVELOPER passionate about UX/ UI
                </h1>
                <p className='location'>Currently living in London</p>

                <button className='buttonContact'>
                    <a href='mailto:rosalispatricia@gmail.com'>CONTACT ME</a>
                </button>

                <div className='socialMedia'>
                    <a
                        href='
                https://github.com/PatriciaRosalis'
                        target='_blank'
                    >
                        <img
                            src='/github.svg'
                            alt='github'
                            width={44}
                            height={44}
                        />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/patriciarosalis/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src='/lnkedin.svg'
                            alt='lnkedin'
                            width={44}
                            height={44}
                        />
                    </a>
                </div>
            </section>
            <section>
                <Projects />
            </section>

            <section>
                <AboutMe />
            </section>

            <section>
                <Skills />
            </section>

            <section>
                <Expect />
            </section>

            <section>
                <Contacts />
            </section>
        </div>
    );
};

export default Home;
