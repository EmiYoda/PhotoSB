import React, { Component } from 'react';
import { Link, animatedScroll as Scroll } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import Signup from './auth/Signup';
import '../../static/camera.png'
import '../style/Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="header__nav">
                    <div className="header__logo">
                        <img 
                        src="https://via.placeholder.com/70"
                        alt=""
                        />
                    </div>
                    <div className="header__links">
                        <ol>
                            <li className="header__link">
                                <Link
                                activeClass="active"
                                to="#"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                >About</Link>
                            </li>
                            <li className="header__link">
                                <Link
                                activeClass="active"
                                to="#"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={700}
                                >Customers</Link>
                            </li>
                        <li className="header__link">
                            <Link
                            activeClass="active"
                            to="#"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            >For Creators</Link>
                        </li>
                        <li className="header__link">
                            <Link
                            activeClass="active"
                            to="#"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                            >PHOTOS</Link>
                        </li>
                        <li className="header__link-sign-in">
                            <RouterLink
                            to="/signup"
                            >SIGN UP</RouterLink>
                        </li>
                        </ol>
                    </div>
            </nav>
        </header>
        )
    }
}
