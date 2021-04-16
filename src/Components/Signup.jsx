import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm} from 'react-hook-form';
import axios from 'axios';

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

  const classes = useStyles();

  const {register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
     
      const user ={};
      user.firstName = data.name.firstName;
      user.lastName = data.name.lastName;
      user.userName = data.username;
      user.email = data.email;
      user.password = data.password;
      user.confirmationPassword = data.confirm_password;

      try {
        const {data}  = await axios.post("http://localhost:5000/api/v1/users/signup",user);
        if(data.status="success messsgea"){
          history.push('/login')
        }
      } catch (error) {
        console.log(error);
      }
  }

  return (
      <div className="signin-page">
    <Container className="signin-form" component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Typography className="pt-3 text-white" component="p" variant="p">
          Please complete to sign up
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
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField  
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={register}
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
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="t&c" value="agree" color="primary" inputRef={register} />}
                label="I agree with terms and conditions."
              />
            </Grid>
          </Grid>
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