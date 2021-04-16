import {Checkbox, FormControlLabel} from '@material-ui/core';
import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
const Login = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const loginData = {};
        loginData.email = data.email;
        loginData.password = data.password;
        try {
            const {data}  = await axios.post("http://localhost:5000/api/v1/users/login",loginData);
            console.log(data);
            if (data) {
                localStorage.setItem("user", JSON.stringify(data));
                localStorage.setItem("token", data.token);
                window.location.href = "/admin";
              }
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <div className="login-page">
            <div className="login-form">
                <h1 className="title">User Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="email-pass">
                        <input type="email" name="email" placeholder="Email Address" ref={register}/>
                        <input type="password" name="password" placeholder="Password" ref={register}/> 
                    </div>
                    <div className="remember">
                        <FormControlLabel
                            control={<Checkbox name="remember-password" value="agree" inputRef={register} />}
                            label="Remember me."
                        />
                        <a href="!#"> Forgot password?</a>
                    </div>

                    <div className="log_sign_in-btn">
                        <button type="submit" className="login-btn">Login</button>
                        <a className="signin-btn" href="/signup">Signup?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;