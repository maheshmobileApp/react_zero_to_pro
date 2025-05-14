
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Card, CardContent, Typography, FormControlLabel, Checkbox, Link } from '@mui/material';

const LoginScreen = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/dashboard');
    };

    const signUpAction = () => {
        console.log('sign up action');
        navigate('/signup');

    }

    return (
        <Box sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            flexDirection: 'column',
        }}>
            <Card
                sx={{
                    width: '350px',
                    height: '450px',
                    padding: 3,
                    boxShadow: 3,
                    borderRadius: 3
                }}
            >
                <CardContent>
                    <Typography variant='h5' align='center'>
                        Login
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}

                    >
                        <TextField
                            label="Email"
                            type='email'
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            { ...register('email', {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address"
                                }

                            })
                            }
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        >

                        </TextField>
                        <TextField
                            label="Password"
                            type='password'
                            fullWidth
                            margin='normal'
                            variant='outlined'
                            { ...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })

                            }
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        >

                        </TextField>

                        <FormControlLabel
                            control={<Checkbox />}
                            label="Remember Me"
                        >
                        </FormControlLabel>
                        <Button
                            type='submit'
                          variant='contained'
                            fullWidth
                            sx = {{
                                mt: 2,
                                borderRadius: 2
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant='contained'
                            onClick={signUpAction}
                            fullWidth
                            sx={{
                                mt: 2,
                                borderRadius: 2
                            }}
                        >
                            Sign Up
                        </Button>

                        <Typography
                         align='center'
                         variant='body2'
                         sx = {{
                            mt: 2
                         }}
                        >
                            <Link href="/forgot" underline="hover">
                                Forgot password?
                                </Link>
                        </Typography>


                    </Box>

                </CardContent>

            </Card>


        </Box>
    );

}

export default LoginScreen

/*
1. BOX 
2. Card
3. CartContent
4. Typography
5. Button
6. TextField
7. checkbox
8. FormControl
9. Link 

Box: Acts like a div



/*
Login
Sign up
forgor password
dashbaord
logout 

Router 
*/