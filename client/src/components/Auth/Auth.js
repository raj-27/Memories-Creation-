import React, { useState } from 'react'
import { Avatar,Button,Paper,Grid,Typography ,Container} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import {GoogleLogin} from 'react-google-login'
import Icon from "./Icon"
import useStyles from "./style"
import Input from "./Input"
import {useDispatch} from "react-redux"
import { useNavigate} from 'react-router-dom';
import { SignUp,SignIn} from  "../../actions/auth"

let initialState = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  confirmPassword:"",
}

const Auth = () => {
    let [showPassword,setShowPassword]=useState(false)
    let [isSignup,setIsSignUp]=useState(false)
    let [formData,setFormData]=useState(initialState)
    const classes = useStyles()
    const dispatch=useDispatch()
    let Navigate = useNavigate()

    
    const handleSubmit=(e)=>{ 
      e.preventDefault()
      if (isSignup) {
        dispatch(SignUp(formData,Navigate))
      } else {
        dispatch(SignIn(formData,Navigate))
      }
    }

    let handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleShowPassword = () => setShowPassword(!showPassword);
    
    const switchMode = () => {
      setFormData(initialState);
      setIsSignUp((prevIsSignup) => !prevIsSignup);
      setShowPassword(false);
    };


    let googleSuccess = async (res)=>{
      const result =res?.profileObj; 
      const token =res?.tokenId;
      try {
        dispatch({type: 'AUTH',data:{result,token}})
        Navigate("/")
      } catch (error) {
        console.log(error);
      }
}
    let googleError=()=>{ 
      console.log("Google Sign In was UnSuccessful");
    }
  return (
    <>
   <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
          clientId="88500805113-0g8fjh6b06e4f6i26od5m7oiau912od1.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="center">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    </>
  )
}

export default Auth




