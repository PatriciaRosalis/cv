import Head from 'next/head';
import Article from '../../components/Article';
import articles from './articles';

export default function blog() {
    return (
        <div>
            <Head>
                <title>Patricia Rosalis - Blog</title>
                <meta
                    name='Frontend Developer - Patricia Rosalis'
                    content='Front end developer'
                />
                <link rel='icon' href='/patcv.svg' />
            </Head>

            <div className='articles'>
                <h1>BLOG ARTICLES</h1>
                <ul>
                    {articles.map((article) => (
                        <>
                            <Article article={article} key={article.id} />
                            <hr />
                        </>
                    ))}
                </ul>
            </div>
        </div>
    );
}
