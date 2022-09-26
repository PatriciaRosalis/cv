import Link from 'next/link';

type ArticleProps = {
    article: {
        id: number;
        date: string;
        slug: string;
        title: string;
    };
};

const Article = ({ article }: ArticleProps) => {
    return (
        <div className='article-wrapper'>
            <div className='info-article'>
                <h2>{article.title}</h2>
                <span>{article.date}</span>
            </div>

            <Link href={article.slug}>Read More</Link>
        </div>
    );
};

export default Article;
