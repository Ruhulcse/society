import {Checkbox, FormControlLabel} from '@material-ui/core';
import React from 'react';
import {useForm} from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
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
                        <button type="submit" className="login-btn">Ligin</button>
                        <button className="signin-btn">Signup?</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;