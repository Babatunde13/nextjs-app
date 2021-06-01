import Head from 'next/head'

const Meta = ({title, description, keywords}) => {
    return (
        <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="Get the latest news  in web dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}
Meta.defaultProps = {
    title: 'WebDev Newz',
    keywords: 'Web development, programming',
    description: 'Get the latest news  in web dev'
}
export default Meta