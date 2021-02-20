import React from 'react';
import '../../style/auth/Signup.scss'
import background from  '../../../static/winter.jpg'

function Signup() {
    return (
                <div className="signup" style={{ backgroundImage: `url(${background})` }}>
                    <div className="signup__body">
                        <h2>Sign Up</h2>
                        <form className="signup__form">
                            <section className="signup__form-email">
                                <label>Email</label>
                                <input
                                type="email"
                                placeholder="Email"
                                required
                                />
                            </section>    

                            <section className="signup__form-password">
                                <label>Password</label>
                                <input
                                type="password"
                                placeholder="Password"
                                required
                                />
                            </section>    

                            <section className="signup__confirm-password">
                                <label>Confirm Password</label>
                                <input
                                type="password"
                                placeholder="Confirm Password"
                                required
                                />
                            </section>
                            <button className="signup__form-submit" type="submit">Sign Up</button>    
                            <div className="signup__Log In">
                                Alredy have an account ? Log In
                            </div>
                        </form>
                    </div>
                    <span>Photo by <a href="https://unsplash.com/@wydouwnicolas?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nicolas Wydouw</a> on <a href="https://unsplash.com/s/photos/land-scape?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                </div>
    )
}

export default Signup
