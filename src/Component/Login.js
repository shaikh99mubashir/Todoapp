import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Config/FirebaseCongig";
import { getDatabase, ref, onValue } from "firebase/database";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const db = getDatabase(app);
  const navigate = useNavigate();

  const loginBtnClicked = () => {
    new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const obj = [email, password];
          const reference = ref(db, `users/${user.uid}`);
          onValue(reference, (e) => {
            console.log("reference", reference);
            const status = e.exists();
            if (status) {
              resolve(e.val());
              navigate("/todo/:id");
            }
            console.log("status", status);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('error==>', errorCode)
        });
    });
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/todo");
      }
    });
  }, []);

  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item sx={{ width: "40%" }}>
          <Card
            sx={{
              backgroundColor: "#c9d0d63d",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Typography
              variant="p"
              style={{
                color: "#ced4da",
                fontFamily: "Roboto",
                fontSize: "2.8rem",
                marginTop: 20,
              }}
            >
              Login
            </Typography>
            <Box className="mb-3" style={{ color: "white", width: "90%" }}>
              <hr />
            </Box>
            <Box
              id="inputFeild"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                // color:'white'
              }}
            >
              <TextField
                id="filled-basic"
                label="Email"
                type="email"
                required
                variant="filled"
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: "90%" }}
              />
              <TextField
                id="filled-basic"
                label="Password"
                type="password"
                required
                variant="filled"
                onChange={(e) => setPassword(e.target.value)}
                sx={{ width: "90%" }}
              />
            </Box>
              <br />
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={loginBtnClicked}
                sx={{
                  width: "90%",
                  height: 50,
                  background: "#24292e",
                  "&:hover": {
                    background: "#525960 ",
                  },
                }}
              >
                Login
              </Button>
            </Box>
            <Box style={{ marginTop: 20 }}>
              <Link
                to=""
                underline="none"
                style={{ color: "white", marginTop: 20 }}
              >
                Forget Password?
              </Link>
            </Box>
            <br />
            <Box style={{ marginTop: 5, marginBottom: 20 }}>
              <Link to="signup" underline="none" style={{ color: "white" }}>
                Create or Register An Account?
              </Link>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
