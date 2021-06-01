import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => (
                <Article key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList

const Article = ({article}) => (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
        <a className={articleStyles.card}>
            <h3>{article.title} &rarr;</h3>
            <p>{article.excerpt}</p>
        </a>
    </Link>
)
