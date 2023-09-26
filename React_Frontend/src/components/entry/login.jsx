import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from "react-router-dom";
  

const SignInPage = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 

  const onSubmit = async (data) => {
    
    const url = 'http://localhost:8080/api/user/signin';
    try{
      const response = await axios.post(url + '/getUser?email='+ data.email +"&password="+ data.password);
      console.log(response);
      if(response.data === true)
      {
        window.location.pathname = "/home"
        // alert("Success");
      }
      else
      {
        alert("User does not exist");
      }
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
  }
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
                  <Typography variant="h4" style={{fontFamily:"cursive"}}>LOGIN</Typography>
                </Grid>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid item>
                    <Box sx={{ p: 3 }}>
                      <TextField
                        type="email"
                        fullWidth
                        label="Email Id"
                        placeholder="Enter Your Email Id"
                        variant="outlined"
                        autoFocus
                        {...register("email", {
                          required: "Required",
                        })}
                        error={!!errors?.email}
                        helperText={errors?.email ? errors.email.message : null}
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ p: 3 }}>
                      <TextField
                        type="password"
                        fullWidth
                        label="Enter your password"
                        placeholder="Enter password"
                        variant="outlined"
                        autoFocus
                        {...register("password", {
                          required: "Required",
                        })}
                        error={!!errors?.password}
                        helperText={
                          errors?.password ? errors.password.message : null
                        }
                      ></TextField>
                    </Box>
                  </Grid>
                  <Grid item sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ p: 3 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          bgcolor: "rgb(#141e30, #243b55)",
                          color: "black",
                        }}
                       >Sign In
                      {/* {<Link to='/home' style={{textDecoration:"nome",color:"white" , textUnderlineOffset:"none"}}>Sign In
                      </Link>} */}
                      </Button>
                    </Box>
                  </Grid>   
                </form>
              </Grid>
              <div style={{textAlign:"center"}}>
              <h6><Link to='/signup'>New User ? Register Now</Link></h6>
              </div>
            </Paper>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SignInPage;

