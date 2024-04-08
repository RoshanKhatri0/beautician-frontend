import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import '../css/SignInUp.css';

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        showPassword: false, 
        showConfirmPassword: false 
    });

    const { name, email, password, confirmPassword } = values;
    const navigate = useNavigate();

    const handleChange = (name) => (event) => {
        setValues({ ...values, error: '', [name]: event.target.value });
    };

    const togglePasswordVisibility = (field) => {
        setValues({ ...values, [field]: !values[field] });
    };

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(showLoading());
        // Check if passwords match
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            dispatch(hideLoading());
            return;
        }

        try {
            const response = await axios.post(`${API}/register`, { name, email, password });
            dispatch(hideLoading());

            if (response.data.success) {
                toast.success(response.data.message);
                toast.success("Redirected to login page");
                setValues({ ...values, name: '', email: '', password: '', confirmPassword: '' });
                navigate('/login');
            } else {
                toast.error(response.data.error || 'Failed to register');
            }
            
        } catch (err) {
            dispatch(hideLoading());
            let errorMessage = 'Something went wrong. Please try again later.';
            if (err.response && err.response.data) {
                errorMessage = err.response.data.error || err.response.data.message;
            }
            toast.error(errorMessage);
        }
    };

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="card">
                <div className="card2">
                    <form className="form" onSubmit={handleSubmit}>
                        <p id="heading">New Here? Register Now</p>
                        <div className="field">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="Name"
                                value={name}
                                onChange={handleChange('name')}
                            />
                        </div>
                        <div className="field">
                            <input
                                type="email"
                                className="input-field"
                                placeholder="name@example.com"
                                value={email}
                                onChange={handleChange('email')}
                            />
                        </div>
                        <div className="field">
                            <input
                                type={values.showPassword ? "text" : "password"}
                                className="input-field"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange('password')}
                            />
                            <i className={`fas ${values.showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icon`} onClick={() => togglePasswordVisibility('showPassword')}></i>
                        </div>
                        <div className="field">
                            <input
                                type={values.showConfirmPassword ? "text" : "password"}
                                className="input-field"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={handleChange('confirmPassword')}
                            />
                            <i className={`fas ${values.showConfirmPassword ? "fa-eye-slash" : "fa-eye"} toggle-password-icon`} onClick={() => togglePasswordVisibility('showConfirmPassword')}></i>
                        </div>
                        <button className="button3 signupbtn"  type="submit">Register</button>
                        <Link to='/login'><p>Already have an account, login</p></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
