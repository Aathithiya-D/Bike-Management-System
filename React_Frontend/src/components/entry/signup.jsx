import React from "react"; 
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import axios from 'axios';
import "./entry.css";
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    // fetch("http://localhost:8080/api/user/signup/postNewUser", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then(() => {
    //     console.log(JSON.stringify(data)    );
    // })
    //   .catch(() => {
    //     console.log("Entered catch");
    //   });
    const url = 'http://localhost:8080/api/user/signup';
    try{
      const response = await axios.post(url + '/postNewUser', data);
      console.log(response);
      if(response.data === false)
      {
        alert("User already exists");
      }
      else
      {
        alert("User registered successfully");
      }
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
    
  };

  return (
    <>
      <div className="sign-in-container">
        <Container maxWidth="sm">
          <Grid
            container
            spacing={2}
            direction="column"
            justifyContent="center"
            style={{ minHeight: "100vh" }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: 5,
                borderRadius: 5,
                bgcolor: "rgb(191, 191, 191)",
              }}
            >
              <Grid container direction="column" spacing={2}>
                <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography variant="h4">Sign Up</Typography>
                </Grid>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid item>
                    <Box sx={{ p: 2 }}>
                      <TextField
                        type="email"
                        fullWidth
                        label="Enter your email id"
                        placeholder="Enter email id"
                        variant="outlined"
                        autoFocus
                        {...register("email", {
                          required: "Required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ p: 2 }}>
                      <TextField
                        type="name"
                        fullWidth
                        label="Enter your name"
                        placeholder="Enter your name"
                        variant="outlined"
                        autoFocus
                        {...register("name", {
                          required: "Required",
                          pattern: {
                            value: /^(?=.*[a-z]).{4,32}$/i,
                            message: "must contain atleast 4 character",
                          },
                        })}
                        error={!!errors?.name}
                        helperText={errors?.name ? errors.name.message : null}
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ p: 2 }}>
                      <TextField
                        type="password"
                        fullWidth
                        label="Enter your password"
                        placeholder="Enter password"
                        variant="outlined"
                        autoFocus
                        {...register("password", {
                          required: "Required",
                          pattern: {
                            value:
                              /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i,
                            message:
                              "must contain atleast 8 character which includes numbers and letter",
                          },
                        })}
                        error={!!errors?.password}
                        helperText={
                          errors?.password ? errors.password.message : null
                        }
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ p: 2 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "rgb(51, 102, 255)",
                          color: "black",
                        }}
                      >
                        Register
                      </Button>
                    </Box>
                  </Grid>
                </form>
              </Grid>
              <div style={{textAlign:"center"}}>
              <h6><Link to='/'>Existing User ? Login Now</Link></h6>
              </div>
            </Paper>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SignUpPage;
