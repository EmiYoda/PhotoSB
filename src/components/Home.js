import React, { useState } from 'react';
import Search from './Search';
import Photos from './Photos';
import Header from './Header';

export default function Home(){
    const [isActive, setActive] = useState("false")

    const handleToggle = () => {
        setActive(!isActive);
    }

    return (

        <div className="home">
            <div className="home__body">
                <div className="home__header">
                    <Header />
                </div>
                <div className="home__inputContainer">
                    <Search className="home__search"/>
                </div>

                <section id="photos">
                    <Photos />
                </section>
            </div>
        </div>
    )
}