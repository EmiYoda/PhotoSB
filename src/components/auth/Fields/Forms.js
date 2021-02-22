import React, { useState } from 'react'
import "../../../style/auth/ValidateForms"
import ValidateSigninForm from './ValidateSigninForm';
import ValidateSignupForm from './ValidateSignupForm';

const Forms = () =>  {

        const [isActive, setActive] = useState("true");

        const handleToggle = () => {
            setActive(!isActive);
        }

        return (
            <div className={isActive ? "container right-panel-active" : "container"}>
                <ValidateSignupForm />
                <ValidateSigninForm className={isActive ? "container--signin" : "unactive"} />
                <div className="container__overlay">
                    <div className="overlay">
                        <div className="overlay__panel">
                            <button className="btn" onClick={handleToggle}>{isActive ? 'Sign In' : 'Sign Up'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Forms;
