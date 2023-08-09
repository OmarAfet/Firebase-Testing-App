import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { Login as LogIn, forgotPassword } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
    forgottenEmail: "",
  });
  const [isForgot, setIsForgot] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async () => {
    setIsLoading(true);
    const isLogIn = await LogIn(loginInputs.email, loginInputs.password);
    if (isLogIn) {
      navigate("/Profile");
    }
    setIsLoading(false);
  };

  const handleInputsOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleForgotPassword = async () => {
    setIsLoading(true);
    await forgotPassword(loginInputs.forgottenEmail);
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col max-w-md mx-auto my-16 gap-6 p-8 rounded-lg shadow-lg">
        <div className="text-center text-5xl font-bold mb-4">Login</div>
        {isForgot && (
          <>
            <Input
              name="forgottenEmail"
              value={loginInputs.forgottenEmail}
              onChange={handleInputsOnChange}
              type="email"
              placeholder="Forgotten Email"
            />
            <Button
              onClick={handleForgotPassword}
              disabled={isLoading}
              isLoading={isLoading}
              text="Send Email"
            />
            <Button
              onClick={() => {
                setIsForgot(false);
              }}
              text="Back"
            />
          </>
        )}
        {!isForgot && (
          <>
            <Input
              name="email"
              value={loginInputs.email}
              onChange={handleInputsOnChange}
              type="email"
              placeholder="Email"
            />
            <div className="flex gap-1 flex-col">
              <Input
                name="password"
                value={loginInputs.password}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLoginSubmit();
                  }
                }}
                onChange={handleInputsOnChange}
                type="password"
                placeholder="Password"
              />
              <div
                onClick={() => {
                  setIsForgot(true);
                }}
                className="flex gap-2 mx-1 text-sm hover:text-black underline cursor-pointer"
              >
                Forgot Password?
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <Button
                onClick={handleLoginSubmit}
                disabled={isLoading}
                isLoading={isLoading}
                text="Login"
              />
              <div className="flex gap-1 mx-1 text-sm">
                Don't have an account?
                <div
                  onClick={() => {
                    navigate("/Signup");
                  }}
                  className="hover:text-black underline cursor-pointer"
                >
                  SignUp
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
