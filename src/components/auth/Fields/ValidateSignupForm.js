import React, { useState } from "react";
import "../../../style/auth/ValidateForms.scss";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidateLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email().required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - shuold be at least 8 characters min")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    })}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      const [isShow, setShow] = useState("false");

      const handleToggle = () => {
        setShow(!isShow);
      };

      return (
        <div className="container__form ">
          <form onSubmit={handleSubmit} className="form">
            <h2 className="form__title">Sign Up</h2>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter Your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={isShow ? "password" : "text"}
                placeholder="Enter Your Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {/* <button onClick={handleToggle} className="show-password">{handleToggle ? <VisibilityOff fontSize="large"/> : <Visibility fontSize="large" />}</button> */}

              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>

            <div className="link">Alredy have an account? Log In</div>

            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      );
    }}
  </Formik>
);

export default ValidateLoginForm;
