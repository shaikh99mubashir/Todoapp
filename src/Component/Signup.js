import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import app from "../Config/FirebaseCongig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Signup = () => {
  const auth = getAuth(app);
  const database = getDatabase(app);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupBtn = () => {
    new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password, fname, lname)
        .then((succ) => {
          const user = succ.user;
          const obj = { email, fname, lname };
          const reference = ref(database, `users/${user.uid}`);
          set(reference, obj)
            .then(() => {
              resolve("data successfully add");
              console.log(resolve);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  };

  return (
    <div>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom:10 }}
      >
        <Grid item md={6} sm={8} xs={10} sx={{ width: "40%" }}>
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
              SignUp
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
              }}
            >
              <TextField
                id="filled-basic"
                label="First Name"
                required
                variant="filled"
                sx={{ width: "90%" }}
                onChange={(e) => setFname(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Last Name"
                required
                variant="filled"
                sx={{ width: "90%" }}
                onChange={(e) => setLname(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Email"
                type="email"
                required
                variant="filled"
                sx={{ width: "90%" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="filled-basic"
                label="Password"
                type="password"
                required
                variant="filled"
                sx={{ width: "90%" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
              <br />
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={signupBtn}
                sx={{
                  width: "90%",
                  height: 50,
                  background: "#24292e",
                  "&:hover": {
                    background: "#525960 ",
                  },
                }}
              >
                Signup
              </Button>
            </Box>
            <br />
            <Box style={{ marginTop: 5, marginBottom: 20 }}>
              <Link to="/" underline="none" style={{ color: "white", fontSize:'1rem'}}>
                Already Have an Account?
              </Link>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Signup;
