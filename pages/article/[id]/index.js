import Link from 'next/link'
import Meta from '../../../components/Meta'
import { server } from '../../../config'

const article = ({article}) => {
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
           <h1>{article.title}</h1>
           <p>{article.body}</p>
           <br />
           <Link href='/'>Go Back</Link>
        </>
    )
}

// // Using SSR
// export const getServerSideProps = async context => {
//     const res = await fetch(`${server}/api/articles/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }


// USING SSG to fetch data, faster than SSR but itn't a good idea for real time data

export const getStaticPaths = async (context) => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export default article