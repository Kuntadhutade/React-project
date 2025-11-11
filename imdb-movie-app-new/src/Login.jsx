import React, { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { user, login } = useContext(AuthContext);

  console.log(user, login, "user from context");

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState([]);

 

  const handlLogin = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/account?api_key=ac6ccd4964b9f8e5953099e2a8f50fc9/login",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      }
    );

    console.log(response, "response");
    console.log(response.ok, "response.ok");

    const result = await response.json();
    setUserData(result);
    login(result);

    if (response.ok) {
      navigate("/home");
    }

    console.log(result, "result");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ p: 3, width: "100%", maxWidth: 400,   }}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Login
          </Typography>

          <Box>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Token"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              onChange={(e) => setToken(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handlLogin}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;




