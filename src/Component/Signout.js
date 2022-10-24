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
    <div className="pe-5">

    <button
      className="sb"
      style={{ width: "auto", fontSize: 18 }}
      onClick={userSignOut}
    >
      Signout
    </button>
    </div>
  );
};

export default Signout;
