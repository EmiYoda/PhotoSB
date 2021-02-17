import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {

        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch (
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();

            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if(!photoData) return <div/>

    return (
        <div>
            {photoData.media_type == "image" ? (
                <img src={photoData.url} alt={photoData.title}/>                
            ) : (
                <iframe
                title='space-video'
                src={photoData.url}
                frameborder='0'
                gesture='media'
                allow='encrypted-media'
                className='photo'
                />
            )}

            <h1>{photoData.title}</h1>
        </div>
    )
}