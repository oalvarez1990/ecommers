import { useForm } from 'react-hook-form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/actions';

const SignUp = ({ goLogin }) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const submit = data => {
        dispatch(signUpThunk(data))
            .then(() => goLogin())
            .catch()
    }

    console.log(errors);

    return (
        <form className="login" onSubmit={handleSubmit(submit)}>
            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email"
                    { ...register("email") }
                />
            </div>
            <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input 
                    type="text" 
                    id="firstName"
                    { ...register("firstName") }
                />
            </div>
            <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text" 
                    id="lastName"
                    { ...register("lastName") }
                />
            </div>
            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" { ...register("password") } />
            </div>
            <div className="input-container">
                <label htmlFor="phone">Phone (10 characters)</label>
                <input 
                    type="tel" 
                    id="phone"
                    { ...register("phone", { required: true, maxLength: 10, minLength: 10 }) }
                />
            </div>
            <div className="error-message">
                {errors.phone && "The phone length is 10 characters"}
            </div>
            <button className='submit-button'>
                Sign up
            </button>
        </form>
    );
};

export default SignUp;