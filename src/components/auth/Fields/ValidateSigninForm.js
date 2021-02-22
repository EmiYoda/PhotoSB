import React from 'react';
import { Link } from "react-router-dom";
import '../../../style/auth/ValidateForms.scss'

const ValidateSigninForm = () => {

    return (
        <div className="container__form container--signin">
            <form action="#" className="form" id="form2">
                <h2 className="form__title">Sign In</h2>
                <input type="email" placeholder="Email" className="input" />
				<input type="password" placeholder="Password" className="input" />
                <Link to="#" className="link">Forgot your password ?</Link>
				<button className="btn">Sign In</button>
            </form>
        </div>
    )
}

export default ValidateSigninForm;