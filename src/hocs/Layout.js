import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { check_auth_status } from "../actions/auth";
import Head from 'next/head'
import Navbar from '../components/Navbar';

const Layout = ({ title, content, children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(check_auth_status());
    }, [dispatch]);

    return (
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
}

Layout.defaultProps = {
    title: 'Page title',
    content: 'Meta description'
}

export default Layout;