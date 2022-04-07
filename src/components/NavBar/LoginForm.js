import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk, setLoginMessage } from 'redux/actions';

const LoginForm = () => {

    const { register, handleSubmit } = useForm();

    const loginMessage = useSelector(state => state.app.loginMessage);

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const submit = data => {
        dispatch(loginThunk(data))
            .then(() => {
                setError("");
                dispatch(setLoginMessage(""));
            })
            .catch(() => setError("Invalid credentials"));
    }

    return (
        <form className="login" onSubmit={handleSubmit(submit)}>

            <p className='login-message'>{loginMessage}</p>

            <div className="test-data">
                <strong>Test data</strong>
                <div className="field">
                    <i className="icon-mail"></i>john@gmail.com
                </div>
                <div className="field">
                    <i className="icon-lock"></i>john1234
                </div>
            </div>

            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    {...register("email")}
                />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
            </div>
            <div className="error-message">{error}</div>
            <button className='submit-button'>
                Login
            </button>
        </form>
    );
};

export default LoginForm;