import React, { useState, useEffect } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import {
  fetchUserData,
  getUserInfoByUID,
  uploadUserProfilePicture,
  checkUsernameAvailability,
  updateUserUsername,
} from "../Firebase";

const Profile = () => {
  const user = fetchUserData();
  const [userPhotoURL, setUserPhotoURL] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();

  const [isEditing, setIsEditing] = useState(false);
  const [newPhotoURL, setNewPhotoURL] = useState();
  const [newPhotoURLPreview, setNewPhotoURLPreview] = useState();
  const [newUsername, setNewUsername] = useState("");
  const [usernameStatus, setUsernameStatus] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUserPhotoURL(user.photoURL);
      getUserInfoByUID(user.uid).then((userData) => {
        setEmail(userData.email);
        setUsername(userData.username);
      });
    }
  }, [user]);

  const handleUpdateUserProfile = async () => {
    setIsLoading(true);
    if (newPhotoURL) {
      await uploadUserProfilePicture(user.uid, newPhotoURL);
      setNewPhotoURL(null);
    }

    if (newUsername) {
      await updateUserUsername(user.uid, newUsername);
    }

    setIsEditing(false);
    setIsLoading(false);
  };

  const handleNewPhotoURLPreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPhotoURL(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewPhotoURLPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setNewPhotoURLPreview(null);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col w-96 my-16 gap-4 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col flex- gap-16">
            <div className="flex justify-center">
              <div className="relative">
                <img
                  className={`${
                    newPhotoURL && "ring ring-offset-1 ring-gray-900"
                  } h-32 w-32 rounded-full origin-center object-cover`}
                  src={
                    newPhotoURLPreview ||
                    userPhotoURL ||
                    "./Images/Default Profile Picture.png"
                  }
                  alt="Profile Picture"
                />
                {isEditing && (
                  <>
                    <input
                      className="flex-1"
                      hidden
                      type="file"
                      id="file"
                      onChange={handleNewPhotoURLPreview}
                    />
                    <label
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white bg-black/20 bg-opacity-50 opacity-0 hover:opacity-100 transition cursor-pointer rounded-full"
                      htmlFor="file"
                    >
                      Upload
                    </label>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center">
            <div>@{username}</div>
            <div>{email}</div>
          </div>
          {!isEditing && (
            <Button
              text="Edit"
              onClick={() => {
                setIsEditing(true);
              }}
            />
          )}
          {isEditing && (
            <>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-between">
                  <Input
                    type="text"
                    placeholder="Username"
                    value={newUsername}
                    onChange={(e) => {
                      setNewUsername(e.target.value);
                      setUsernameStatus(null);
                    }}
                    onBlur={async (e) => {
                      const enteredUsername = e.target.value;
                      setNewUsername(enteredUsername);

                      if (enteredUsername.trim()) {
                        setIsUsernameLoading(true);
                        const isAvailable = await checkUsernameAvailability(
                          enteredUsername,
                        );
                        setUsernameStatus(isAvailable);
                        setIsUsernameLoading(false);
                      }
                    }}
                  />
                  {newUsername && (
                    <>
                      <div className="flex items-center gap-1 ml-1 mt-1">
                        <div
                          className={`w-2 h-2 bg-blue-500 rounded-full ${
                            usernameStatus === "Available"
                              ? "bg-green-500"
                              : usernameStatus === "Taken"
                              ? "bg-red-500"
                              : usernameStatus === "Invalid" && "bg-red-500"
                          }`}
                        ></div>
                        <div className="flex-1">
                          @{newUsername}{" "}
                          {isUsernameLoading
                            ? "is Checking..."
                            : usernameStatus && "is " + usernameStatus}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <Button
                text="Save"
                disabled={isLoading}
                isLoading={isLoading}
                onClick={handleUpdateUserProfile}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
