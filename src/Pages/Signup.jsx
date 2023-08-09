import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { SignUp, checkUsernameAvailability } from "../Firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [signUpInputs, setSignUpInputs] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [isSignupLoading, setIsSignupLoading] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const [usernameStatus, setUsernameStatus] = useState(false);

  const handleInputsOnChange = (e) => {
    const { name, value } = e.target;
    setSignUpInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupSubmit = async () => {
    setIsSignupLoading(true);
    const isSignUp = await SignUp(
      signUpInputs.email,
      signUpInputs.username,
      signUpInputs.password,
      signUpInputs.confirm_password,
    );
    if (isSignUp) {
      navigate("Firebase-Testing-00/Profile");
    }
    setIsSignupLoading(false);
  };
  return (
    <>
      <div className="flex flex-col max-w-md mx-auto my-16 gap-6 p-8 rounded-lg shadow-lg">
        <div className="text-center text-5xl font-bold mb-4">Signup</div>
        <Input
          name="email"
          value={signUpInputs.email}
          onChange={handleInputsOnChange}
          type="email"
          placeholder="Email"
        />
        <div>
          <Input
            name="username"
            value={signUpInputs.username}
            onChange={handleInputsOnChange}
            onBlur={async () => {
              if (signUpInputs.username.trim()) {
                setIsUsernameLoading(true);
                const isAvailable = await checkUsernameAvailability(
                  signUpInputs.username,
                );
                setUsernameStatus(isAvailable);
                setIsUsernameLoading(false);
              }
            }}
            type="username"
            placeholder="Username"
          />
          {signUpInputs.username && (
            <div className="flex items-center gap-2 ml-1 mt-1">
              {isUsernameLoading ? (
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              ) : (
                <div
                  className={`w-2 h-2 ${
                    usernameStatus === "Available"
                      ? "bg-green-500"
                      : usernameStatus === "Taken" && "bg-red-500"
                  } bg-blue-500 rounded-full`}
                ></div>
              )}
              <div className="flex-1">
                <span className="break-all">@{signUpInputs.username}</span>{" "}
                {isUsernameLoading
                  ? "is Checking..."
                  : usernameStatus && "is " + usernameStatus}
              </div>
            </div>
          )}
        </div>
        <Input
          name="password"
          value={signUpInputs.password}
          onChange={handleInputsOnChange}
          type="password"
          placeholder="Password"
        />
        <div className="flex flex-col gap-4 break-words">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 ${
                /^.{8,32}$/.test(signUpInputs.password)
                  ? "bg-green-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
            <div className="flex-1">
              Password must be between 8 and 32 characters
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 ${
                /[!@#$%^&*()-_=+]/.test(signUpInputs.password)
                  ? "bg-green-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
            <div className="flex-1">
              Password must contain at least one special character
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 ${
                /\d/.test(signUpInputs.password) ? "bg-green-500" : "bg-red-500"
              } rounded-full`}
            ></div>
            <div className="flex-1">
              Password must contain at least one number
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 ${
                /^(?=.*[a-z])(?=.*[A-Z])/.test(signUpInputs.password)
                  ? "bg-green-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
            <div className="flex-1">
              Password must contain at least one uppercase and one lowercase
              character
            </div>
          </div>
        </div>
        <Input
          name="confirm_password"
          value={signUpInputs.confirm_password}
          onChange={handleInputsOnChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSignupSubmit();
            }
          }}
          type="password"
          placeholder="Confirm Password"
        />
        <div className="flex gap-2 flex-col">
          <Button
            onClick={handleSignupSubmit}
            disabled={isSignupLoading || !usernameStatus}
            isLoading={isSignupLoading}
            text="Signup"
          />
          <div className="flex gap-1 mx-1 text-sm">
            Already have an account?
            <div
              onClick={() => {
                navigate("Firebase-Testing-00/Login");
              }}
              className="hover:text-black underline cursor-pointer"
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
