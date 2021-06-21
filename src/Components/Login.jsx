import {Checkbox, FormControlLabel} from '@material-ui/core';
import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import CircularProgress from '@material-ui/core/CircularProgress'
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {URL} from '../Utils/TokenConfig'
const Login = () => {
    const {register, handleSubmit} = useForm();
    const [loading, setLoading ] = useState(false);
    const [worngpass, setWrongpass] = useState(false);
    let english = localStorage.getItem('english');
    let content = english ==="true" ? {
      head: "User Login",
      email: "Email Address",
      pass: "Password",
      term: "Remember me",
      forget: "Forgot password?",
      log: "Login",
      sign: "signup"
    }:
    {
        head: "تسجيل دخول المستخدم",
        email: "عنوان البريد الإلكتروني",
        pass: "كلمه السر",
        term: "تذكرنى",
        forget: "هل نسيت كلمة السر؟",
        log: "تسجيل الدخول",
        sign: "اشتراك"
    }
    const onSubmit = async (data) => {
        // console.log(data);
        const loginData = {};
        loginData.email = data.email;
        loginData.password = data.password;
        try {
            setLoading(true);
            const {data} = await axios.post(`${URL}api/v1/users/login`,loginData);
            if(data==="wrong"){
                setLoading(false);
                setWrongpass(true);
            }
            if (data && data !== "wrong") {
                setLoading(false);
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
            <Helmet>
              <title>Asociety || Login</title>
            </Helmet>
            <div className="login-form">
                <h1 className="title">{loading?<CircularProgress />:<p>{content.head}</p>}</h1>
                {worngpass&&(<p>invalid username or password</p>)}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="email-pass">
                        <input type="email" name="email" placeholder={content.email} ref={register}/>
                        <input type="password" name="password" placeholder={content.pass} ref={register}/> 
                    </div>
                    <div className="remember">
                        <FormControlLabel
                            control={<Checkbox name="remember-password" value="agree" inputRef={register} />}
                            label={content.term}
                        />
                        <a href="!#"> {content.forget}</a>
                    </div>

                    <div className="log_sign_in-btn">
                        <button type="submit" className="login-btn">{content.log}</button>
                        <a className="signin-btn" href="/signup">{content.sign}</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;