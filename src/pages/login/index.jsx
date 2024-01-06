import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");



const Email = (event) => {
        SetEmail(event.target.value)
       // console.log(email)
    }
const Password = (event) => {
    SetPassword(event.target.value)
   // console.log(event.target.value)
}



  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <img style={{ width:"170px"}} src="/logo.png"></img>
        <Typography component="h1" variant="h5">
          Entre com seu usuario e senha
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="E-mail"
          name="email"
          autoComplete="email"
          autoFocus
          type="email"
          onChange={Email}
          value={email}
        ></TextField>
        <TextField
          style={{marginBottom:'40px'}}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Senha"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={Password}
          autoFocus
          value={password}
        ></TextField>

        <Button variant="contained"> Entrar</Button>
      </Container>
    </>
  );
}

export default Login;
