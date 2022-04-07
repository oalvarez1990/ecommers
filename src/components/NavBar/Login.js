import { userAvatar } from 'assets/images';
import { useState } from 'react';
import 'styles/login.css';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [refresh, setRefresh] = useState(true);


    const token = localStorage.getItem("token");

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        setRefresh(!refresh)
    }

    return (
        <>
            <img src={userAvatar} className="user-avatar" alt="" />
            {
                token ? (
                    <div className="user-info">
                        <b>{localStorage.getItem("userName")}</b>
                        <button onClick={logout}>
                            Log out
                        </button>
                    </div>
                ) : (
                    <>
                        {isLogin ? <LoginForm /> : <SignUp goLogin={() => setIsLogin(true)} />}

                        <div className="switch-forms">
                            {isLogin ? "Don't have an account?" : "Have an account?"} {" "}
                            <button type="button" onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? "Sign up" : "Log in"}
                            </button>
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Login;