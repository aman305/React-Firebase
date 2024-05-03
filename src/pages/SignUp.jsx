import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { Link } from "react-router-dom";
import "../css/SignUp.css";

const auth = getAuth(app);

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Sucess")
    );
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>SignUp page</h1>
        <div className="signup-page">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            required
          />
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="Enter your password"
            required
          />
          <button onClick={createUser}>Sign Up</button>
          <p>
            Already have an account?
            <Link to="/signin">SiginIn</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
