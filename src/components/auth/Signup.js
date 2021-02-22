import React from 'react';
import background from '../../../static/leaves.jpg'
import '../../style/auth/Signup.scss'
import ValidateSignUpForm from './Fields/ValidateSignupForm';

function Signup() {
    return (
                <div className="signup" style={{backgroundImage : `url(${background})`}}>
                    <ValidateSignUpForm />
                </div>
    )
}

export default Signup
