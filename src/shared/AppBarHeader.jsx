import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AppBarLogo from "../assets/AppBarLogo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/Slice/userSlice";

const AppBarHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userFromSlice = useSelector((store) => store.user);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  // Here problem occur because we can only navigate inside router not outside it
  useEffect(() => {
    /* Since we know that our Header will load multiple times so it will keep on attaching eventListener in it */
    // Since onAuthStateChanged being eventListener its good or Hygiene practice to remove it
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/suggestion");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    /* On component unmounting  we will remove it*/
    return () => unsubscribe();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img className="w-44" src={AppBarLogo} alt="" />
          {userFromSlice && (
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {userFromSlice.displayName}
            </Typography>
          )}
          {userFromSlice && (
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarHeader;
