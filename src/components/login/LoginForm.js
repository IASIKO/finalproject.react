import { Button, FormControl } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../application";
import { authenticateUser } from "../../redux";
import { TextFieldComponent } from "../shared";

const generateLoginFormValues = () => {
  return {
    email: {
      value: "",
      required: true,
      error: "",
      validateInput: (email) =>
        email.includes("gmail.com") ? null : "email is not valid",
    },
    password: {
      value: "",
      required: true,
      error: "",
      validateInput: (password) =>
        password.length > 6
          ? null
          : "password should have at least 6 characters",
    },
  };
};

export const LoginForm = () => {
  const { formValues: loginFormValues, onInputChange } = useForm({
    defaultFormValues: generateLoginFormValues(),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (event) => {
    event.preventDefault();
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    dispatch(
      authenticateUser({ formValues: { email, password }, isLogin: true })
    )
      .unwrap()
      .then(() => navigate("/"));
  };
  return (
    <FormControl fullWidth>
      <TextFieldComponent
        name="email"
        label="email"
        value={loginFormValues.email.value}
        onChange={onInputChange}
        error={loginFormValues.email.error}
      />
      <TextFieldComponent
        name="password"
        label="password"
        value={loginFormValues.password.value}
        onChange={onInputChange}
        error={loginFormValues.password.error}
      />
      <Button onClick={onLogin}>login</Button>
    </FormControl>
  );
};
