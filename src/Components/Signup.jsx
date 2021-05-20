import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {Helmet} from 'react-helmet'
import {URL} from '../Utils/TokenConfig'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup({history}) {
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [term , setTerm ] = useState("");
  const [valid, setValid ] = useState(true);
  const [loading, setLoading ] = useState(false);
  const classes = useStyles();

  const {register, handleSubmit} = useForm();

  var isValidEmail=(email)=>{
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(email.match(mailformat)){
     return true;
   }
   else{
     return false;
   }
  }
  const onSubmit = async (data) => {
     setValid(isValidEmail(email));
     setTerm(data.tc?data.tc:"not agreed");
      const user ={};
      user.firstName = data.name.firstName;
      user.lastName = data.name.lastName;
      user.userName = data.username;
      user.email = email;
      user.password = password;
      user.confirmationPassword = confirm;

      let error = false;
      error = (!email ? true : false);
      error = (password!==confirm ? true : false);
      error = (term!=="agree" ? true : false)

      try {
        if(error==false){
          setLoading(true);
          const {data}  = await axios.post(`${URL}api/v1/users/signup`,user);
        if(data.token!=null){
          setLoading(false);
          history.push('/login')
        }
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
      <div className="signin-page">
        <Helmet>
            <title>Asociety || Sign up</title>
        </Helmet>
    <Container className="signin-form" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Typography className="pt-3 text-white" component="p" variant="p">
          {loading?<CircularProgress />:(<p>Please complete to sign up</p>)}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name.firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="name.lastName"
                autoComplete="lname"
                inputRef={register}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            {!valid&&( <p style={{color: "#fbff00"}}>Enter a valid Email</p>)}
              <TextField  
                required
                fullWidth
                name="password"
                label="Password "
                placeholder="Minium 8 character"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField  
                required
                fullWidth
                name="confirm_password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            {confirm.length>0&&password.length>0&&(password!=confirm)&&( <p  style={{color: "#fbff00"}}>Password is not matched</p>)}
              <FormControlLabel
                control={<Checkbox name="tc" value="agree" color="primary" inputRef={register} />}
                label="I agree with terms and conditions."
              />
            </Grid>
          </Grid>
          {term!="agree" &&(term.length>0) &&( <p  style={{color: "#fbff00"}}>Accept Term and condition</p>)}
          <Grid container justify="center">
            <Grid item>
          <Button
            type="submit"
            className={`${classes.submit} create-btn`}
          >
            Create
          </Button>
            </Grid>
          </Grid>
          
          <Grid container justify="center">
            <Grid item>
              <Link className="text-white" href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item className="pt-2 pb-4">
              <Link className="text-white" href="#" variant="body2">
                <small>
                    Terms  of use . Privacy policy
                </small>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
      </div>
  );
}

export default Signup;