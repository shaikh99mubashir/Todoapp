import React from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../Config/FirebaseCongig";
import Button from "./Button";

const Signout = () => {
  const auth = getAuth(app);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("signout Sucessfully");
      })
      .catch((error) => {
        alert("error", error);
      });
  };

  return (
    <button
      className="b"
      style={{ width: "auto", fontSize: 18 }}
      onClick={userSignOut}
    >
      Signout
    </button>
  );
};

export default Signout;
