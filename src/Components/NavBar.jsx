import { Link } from "react-router-dom";
import { fetchUserData, Logout } from "../Firebase";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const user = fetchUserData();

  return (
    <>
      <div className="flex flex-wrap justify-between mx-[10%] my-2">
        <Link
          className="hover:shadow-lg rounded-lg p-2"
          to={"Firebase-Testing-00/Home"}
        >
          Home
        </Link>
        <Link
          hidden={!user}
          className="hover:shadow-lg rounded-lg p-2"
          to={"Firebase-Testing-00/Profile"}
        >
          Profile
        </Link>
        <Link
          hidden={user}
          className="hover:shadow-lg rounded-lg p-2"
          to={"Firebase-Testing-00/Login"}
        >
          Login
        </Link>
        <Button
          onClick={() => {
            navigate("Firebase-Testing-00/Signup");
          }}
          hidden={user}
          className="hover:shadow-lg rounded-lg p-2"
          text={"Signup"}
        ></Button>
        <Button
          onClick={async () => {
            const isLogout = await Logout();
            if (isLogout) {
              navigate("Firebase-Testing-00/Login");
            }
          }}
          hidden={!user}
          className="hover:shadow-lg rounded-lg p-2 pointer"
          text={"Logout"}
        ></Button>
      </div>
      <hr />
    </>
  );
};

export default NavBar;
