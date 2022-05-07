import Head from 'next/head'
import Navbar from '../components/Navbar';

const Layout = ({ title, content, children }) => (
    <>
        <Head>
            <title>{ title }</title>
            <meta name='description' content={ content } />
        </Head>

        <Navbar />

        <div className='container mt-3'>
            { children }
        </div>
    </>
);

Layout.defaultProps = {
    title: 'Page title',
    content: 'Meta description'
}

export default Layout;