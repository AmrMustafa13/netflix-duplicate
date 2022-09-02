import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./SignIn.module.css";
import NetflixLogo from "../../../assets/netflix_logo.png";

const SignIn = () => {
  return (
    <div className={classes["sign-in"]}>
      <Stack zIndex={1} position="absolute" top={0} left={0} right={0} p="24px">
        <img
          src={NetflixLogo}
          alt="Netflix-Logo"
          width={200}
          style={{ cursor: "pointer" }}
        />
      </Stack>
      <form>
        <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
          Sign In
        </Typography>
        <TextField
          label="Email or phone number"
          variant="outlined"
          type="email"
          sx={{ width: "350px" }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          sx={{ width: "350px" }}
        />
        <Button
          variant="contained"
          color="error"
          fullWidth
          sx={{ padding: "14px" }}
        >
          Sign In
        </Button>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <FormControlLabel label="Remember me" control={<Checkbox />} />
          <a href="/help">Need help?</a>
        </Stack>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <span>New to Netflix?</span>
          <a href="/signup">Sign up now</a>
        </Stack>
      </form>
    </div>
  );
};

export default SignIn;
