import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { API } from '../config';
import toast from 'react-hot-toast';
import {useDispatch} from 'react-redux'
import { showLoading, hideLoading } from '../redux/features/alertSlice';

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
    });

    const { name, email, password, confirmPassword } = values
    const navigate = useNavigate()
    

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: '', [name]: event.target.value })
    }
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(showLoading())
        // Check if passwords match
        if (password !== confirmPassword) {
            toast.error("Passwords do not match")
            return
        }

        try {
            const response = await axios.post(`${API}/register`, { name, email, password })
            dispatch(hideLoading())

            if (response.data.success) {
                toast.success(response.data.message);
                toast.success("Redirected to login page")
                setValues({ ...values, name: '', email: '', password: '', confirmPassword: '' })
                
                navigate('/login')
            } else {
                toast.error(response.data.error || 'Failed to register')
            }
        } catch (err) {
            dispatch(hideLoading())
            let errorMessage = 'Something went wrong. Please try again later.'
            if (err.response && err.response.data) {
                errorMessage = err.response.data.error || err.response.data.message
            }
            toast.error(errorMessage);
        }
    };

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="row w-50">
                <div className="col-md shadow py-3">
                    <main className="form-signin">
                        <form onSubmit={handleSubmit}>
                            <h1 className="h3 mb-3 fw-normal">New Here? Register Now</h1>
                            
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Name"
                                    value={name}
                                    onChange={handleChange('name')}
                                />
                                <label htmlFor="floatingInput">Name</label>
                            </div>
                            
                            <div className="form-floating mt-2">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={handleChange('email')}
                                />
                                <label htmlFor="floatingEmail">Email address</label>
                            </div>
                            
                            <div className="form-floating my-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={password}
                                    onChange={handleChange('password')}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingConfirmPassword"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                />
                                <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                            </div>

                            <div className="form-check text-start my-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                    required
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                            
                            <button className="btn btn-primary w-100 py-2" type="submit">
                                Register
                            </button>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Register;
