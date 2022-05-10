import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/router";
import { login, reset_register_success } from '../actions/auth' 
import Layout from "../hocs/Layout";
import { Oval } from 'react-loader-spinner'

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const loading = useSelector(state => state.auth.loading);
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: 'bjayanta',
        password: '123456789',
    });

    const {
        username,
        password,
    } = formData;

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch != undefined)
            dispatch(reset_register_success());
    }, [dispatch]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (dispatch && dispatch !== null && dispatch != undefined)
            dispatch(login(username, password));
    }

    if (typeof window !== 'undefined' && isAuthenticated)
        router.push('/dashboard')

    return (
        <Layout>
            <h1 className="display-4">Login page</h1>
            <form className="bg-light p-5 my-5" onSubmit={onSubmit}>
                <h3>Login to your account</h3>

                <div className="form-group">
                    <label htmlFor="username" className="form-label mt-3">
                        <strong>Username*</strong>
                    </label>
                    <input type="text" name="username" onChange={onChange} value={username} className="form-control" placeholder="Username" required />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="form-label mt-3">
                        <strong>Password*</strong>
                    </label>
                    <input type="password" name="password" onChange={onChange} value={password} className="form-control" placeholder="Password" minLength='8' required />
                </div>

                {
                    loading ? (
                        <div className="d-flex justify-content-center align-items-center mt-5">
                            <Oval color='#00bfff' width={50} height={50} ariaLabel='loading' />
                        </div>
                    ) : (
                        <button type="submit" className="btn btn-primary mt-5">Login </button>
                    )
                }
            </form>
        </Layout>
    );
}

export default LoginPage;