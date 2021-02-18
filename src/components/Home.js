import React, { useState } from 'react';
import Search from './Search';


const unsplashimgSmall = {
    src: 'https://source.unsplash.com/random/1600x810',
    alt: 'random usplash image'
};



export default function Home() {


    return (

        <div className="home">
            <div className="home__body">
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}