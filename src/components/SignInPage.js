import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../loginSlice";
import SigninButton from "../SigninButton";

const SignInPage = ({ operation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = async () => {
    try {
      const response = await fetch(
        operation === "signin"
          ? "https://reqres.in/api/login"
          : "https://reqres.in/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log(data.token);
        dispatch(setToken({ token: data.token, user: email }));
        setError("");

        navigate(`/full`);
      } else {
        setError(data.error || "An error occurred during sign in.");
      }
    } catch (error) {
      setError("An error occurred during sign in.");
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 5000);
  }, [error]);

  return (
    <div className="flex bg-radial-gradient items-center h-screen w-full  justify-center ">
      <div className="bg-white border border-gray-300 rounded-md p-8 w-1/3">
        <h1 className="text-2xl mb-4">
          {operation === "signin" ? "Sign In" : "Sign up"}
        </h1>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md mb-3 p-1 w-full"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md mb-3 p-1 w-full"
          />
        </div>
        {operation === "signin" && (
          <div className="flex justify-between">
            <SigninButton handleSignIn={handleSignIn} operation={operation} />
            <NavLink
              to={"/signup"}
              className={
                "px-2 py-1 rounded-md hover:bg-gray-200 hover:text-customBlue"
              }
            >
              Create Account
            </NavLink>
          </div>
        )}
        {operation !== "signin" && (
          <SigninButton handleSignIn={handleSignIn} operation={operation} />
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default SignInPage;
