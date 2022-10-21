import app from "./FirebaseCongig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

let signupWithUser = (email, password, fname, lname) => {
  return createUserWithEmailAndPassword(auth, email, password, fname, lname);
};

export default { signupWithUser };
