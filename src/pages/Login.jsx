import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import { API } from '../config';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const onFinish = async (e) => {
        e.preventDefault(); 

        try {
            dispatch(showLoading())
            const response = await axios.post(`${API}/login`, values)
            dispatch(hideLoading())
            if (response.data.success) {
                toast.success(response.data.message);
                toast.success("Redirected to Homepage");
                localStorage.setItem("token", response.data.token);
                navigate("/");
            } else {
                toast.error(response.data.error || 'Failed to login')
            }
        } catch (err) {
            dispatch(hideLoading())
            let errorMessage = 'Something went wrong. Please try again later.';
            if (err.response && err.response.data) {
                errorMessage = err.response.data.error || err.response.data.message;
            }
            toast.error(errorMessage);
        }
    }

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row w-50">
                <div className="col-md shadow py-3">
                    <main className="form-signin ">
                        <form onSubmit={onFinish}> 
                            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                            <div className="form-floating">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating my-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange('password')}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="remember-me"
                                    id="flexCheckDefault"
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <div className="d-flex justify-content-center align-item-center">
                                <button type="submit" className="btn btn-primary w-25 py-2">Login</button> 
                            </div>
                            <Link to='/register'>
                                <p className="mt-5 mb-3 text-body-secondary">Don't have an account, Register now</p>
                            </Link>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Login;
