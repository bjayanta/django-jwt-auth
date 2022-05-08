import { useState } from "react";
import Layout from "../hocs/Layout";
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../actions/auth'
import Loader from 'react-loader-spinner'

const RegisterPage = () => {
    const loading = useSelector(state => this.state.auth.loading);

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        re_password: ''
    });

    const {
        first_name,
        last_name,
        username,
        password,
        re_password
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

    }

    return (
        <Layout>
            <h1 className="display-4">Register page</h1>
            <form className="bg-light p-5 my-5" onSubmit={onSubmit}>
                <h3>Create an account</h3>

                <div className="form-group">
                    <label htmlFor="first_name" className="form-label mt-5">
                        <strong>First Name*</strong>
                    </label>
                    <input type="text" name="first_name" onChange={onChange} value={first_name} className="form-control" placeholder="First name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="last_name" className="form-label mt-3">
                        <strong>Last Name*</strong>
                    </label>
                    <input type="text" name="last_name" onChange={onChange} value={last_name} className="form-control" placeholder="Last name" required />
                </div>

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

                <div className="form-group">
                    <label htmlFor="re_password" className="form-label mt-3">
                        <strong>Confirm Password*</strong>
                    </label>
                    <input type="password" name="re_password" onChange={onChange} value={re_password} className="form-control" placeholder="Confirm Password" minLength='8' required />
                </div>

                <button type="submit" className="btn btn-primary mt-5">
                    Create Account
                </button>
            </form>
        </Layout>
    );
}

export default RegisterPage;