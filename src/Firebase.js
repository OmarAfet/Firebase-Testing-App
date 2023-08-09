import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Get User Data
export const fetchUserData = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
};

// Signup Function
export const SignUp = async (email, username, password, confirm_password) => {
  try {
    if (!email || !username || !password || !confirm_password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirm_password) {
      toast.error("Passwords do not match");
      return;
    }

    if (!username.trim()) {
      toast.error("Username cannot be empty");
      return;
    }

    const isUsernameAvailable = await checkUsernameAvailability(username);
    if (!isUsernameAvailable) {
      toast.error(
        "Username is not available. Please choose a different username.",
      );
      return;
    }

    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    const userRef = doc(firestore, "users", newUser.user.uid);
    await setDoc(userRef, {
      email: newUser.user.email.toLowerCase(),
      username: username.toLowerCase(),
    });

    toast.success("User Created");
    return true;
  } catch (err) {
    switch (err.code) {
      case "auth/email-already-in-use":
        toast.error("Email address is already in use");
        break;
      case "auth/invalid-email":
        toast.error("Invalid email address");
        break;
      case "auth/operation-not-allowed":
        toast.error(
          "Email/password accounts are not enabled. Contact support.",
        );
        break;
      case "auth/weak-password":
        toast.error("Password is not strong enough");
        break;
      default:
        toast.error("An error occurred. Please try again later.");
        console.error(err);
        return false;
    }
    return false;
  }
};

// Login Function
export const Login = async (email, password) => {
  if (!email || !password) {
    toast.error("Please fill in all fields");
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged In");
    return true;
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        toast.error("Invalid email address");
        break;
      case "auth/user-disabled":
        toast.error("User is disabled");
        break;
      case "auth/user-not-found":
        toast.error("User not found");
        break;
      case "auth/wrong-password":
        toast.error("Wrong password");
        break;
      default:
        toast.error("An error occurred. Please try again later.");
        console.error(err);
    }
    return false;
  }
};

// Logout Function
export const Logout = async () => {
  try {
    await auth.signOut();
    toast.success("Logged Out");
    return true;
  } catch (err) {
    toast.error("An error occurred. Please try again later.");
    console.error(err);
    return false;
  }
};

// Check Username Availability Function
export const checkUsernameAvailability = async (username) => {
  if (
    username.length > 16 ||
    username.length < 3 ||
    !username.match(/^[a-zA-Z0-9_]+$/)
  ) {
    return "Invalid";
  }

  try {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    const userDocs = querySnapshot.docs;

    for (const userDoc of userDocs) {
      const userData = userDoc.data();
      if (userData.username.toLowerCase() === username.toLowerCase()) {
        return "Taken";
      }
    }

    return "Available";
  } catch (err) {
    console.error("Error checking username availability:", err);
    return false;
  }
};

// Get User By UID Function
export const getUserInfoByUID = async (uid) => {
  try {
    const userRef = doc(firestore, "users", uid);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      return userData;
    } else {
      console.log("User document not found for UID:", uid);
      return null;
    }
  } catch (err) {
    console.error("Error fetching user data:", err);
    return null;
  }
};

// Upload Profile Picture Function
export const uploadUserProfilePicture = async (uid, file) => {
  try {
    if (!file) {
      toast.error("Please select an image to upload.");
      return;
    }

    if (file.size > 1024 * 1024) {
      toast.error("Image size exceeds the maximum allowed size of 1MB");
      return;
    }

    const profilePictureRef = ref(storage, `Profile Pictures/${uid}.png`);
    await uploadBytes(profilePictureRef, file);

    const downloadURL = await getDownloadURL(profilePictureRef);

    await updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    });

    toast.success("Profile picture uploaded successfully!");
    return true;
  } catch (error) {
    toast.error("Failed to upload the profile picture");
    console.error(error);
    return false;
  }
};

// Update Username Function
export const updateUserUsername = async (uid, username) => {
  try {
    if ((await checkUsernameAvailability(username)) === "Available") {
      const userRef = doc(firestore, "users", uid);
      await updateDoc(userRef, {
        username: username.toLowerCase(),
      });
      toast.success("Username updated successfully!");
      return true;
    } else {
      toast.error(
        "Username is not available. Please choose a different username.",
      );
      return false;
    }
  } catch (err) {
    toast.error("Failed to update username");
    console.error("Error updating username:", err);
    return false;
  }
};

// Forgot Password Function
export const forgotPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email sent successfully!");
    return true;
  } catch (err) {
    switch (err.code) {
      case "auth/invalid-email":
        toast.error("Invalid email address");
        break;
      case "auth/user-not-found":
        toast.error("User not found");
        break;
      default:
        toast.error("An error occurred. Please try again later.");
        console.error(err);
    }
    return false;
  }
};
