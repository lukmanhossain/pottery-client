import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { useHistory } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';
// 

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const history = useHistory();

    const { user, registerUser, isLoading, authError} = useAuth();
 

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        if (loginData.password !== loginData.confirmpassword) {
            alert("Your Password didn't match");
            return
        }
        registerUser(loginData.name, loginData.email, loginData.password, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        New User? Register Here
                    </Typography>

                    { !isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="confirmpassword"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <Button sx={{ width: '75%', mt: 2 }} type="submit" variant="contained">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Your Registration Created Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', borderRadius: '10px' }} src="https://i.ibb.co/7C3Fqh0/Registration.jpg" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;