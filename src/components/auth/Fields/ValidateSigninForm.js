import React from "react";
import { Link } from "react-router-dom";
import "../../../style/auth/ValidateForms.scss";

const ValidateSigninForm = () => {
  return (
    <div className="container__form ">
      <form action="#" className="form">
        <h2 className="form__title">Sign In</h2>
        <div className="field">
          <input type="email" placeholder="Email" />
        </div>
        <div className="field">
          <input type="password" placeholder="Password" />
        </div>
        <Link to="#" className="link">
          Forgot your password ?
        </Link>
        <button className="btn">Sign In</button>
      </form>
    </div>
  );
};

export default ValidateSigninForm;
