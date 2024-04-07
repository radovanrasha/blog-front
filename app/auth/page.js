"use client";
import Axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [logIn, setLogIn] = useState(true);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();

  const handleChangeInputValue = (e, type) => {
    const value = e.target.value;

    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(value);
        break;
      default:
        break;
    }
  };

  const handleSignUp = async () => {
    try {
      const data = {
        email,
        // firstName,
        // lastName,
        username,
        password,
        passwordConfirm,
      };

      await Axios.post(`https://blog-api.radovanrasha.com/register`, data);

      toast.success("Account successfully created!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
      toast.error(error, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleLogIn = () => {};

  return (
    <main>
      {logIn ? (
        <div className="register-container">
          <h2>SIGN IN NOW</h2>
          <label>email/username:</label>
          <input></input>
          <label>password:</label>
          <input></input>
          <label>confirm password:</label>
          <input></input>

          <button
            onClick={() => {
              handleLogIn();
            }}
          >
            Log in
          </button>
          <button
            onClick={() => {
              setLogIn(false);
            }}
          >
            Don't have an account yet? Sign Up
          </button>
        </div>
      ) : (
        <div className="register-container">
          <h2>SIGN UP NOW</h2>
          <label>email:</label>
          <input
            onChange={(e) => {
              handleChangeInputValue(e, "email");
            }}
            value={email}
          ></input>
          <label>firstName:</label>
          <input
            onChange={(e) => {
              handleChangeInputValue(e, "firstName");
            }}
            value={firstName}
          ></input>
          <label>lastName:</label>
          <input
            onChange={(e) => {
              handleChangeInputValue(e, "lastName");
            }}
            value={lastName}
          ></input>
          <label>username:</label>
          <input
            onChange={(e) => {
              handleChangeInputValue(e, "username");
            }}
            value={username}
          ></input>
          <label>password:</label>
          <input
            onChange={(e) => {
              handleChangeInputValue(e, "password");
            }}
            value={password}
          ></input>
          <label>confirm password:</label>
          <input
            onChange={(e) => {
              handleChangeInputValue(e, "passwordConfirm");
            }}
            value={passwordConfirm}
          ></input>

          <button
            onClick={() => {
              handleSignUp();
            }}
          >
            Sign up
          </button>
          <button
            onClick={() => {
              setLogIn(true);
            }}
            type="link"
            style={{ fontWeight: "bold" }}
          >
            Already have an account? Log in
          </button>
        </div>
      )}
    </main>
  );
}
