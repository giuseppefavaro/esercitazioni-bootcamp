import React from "react"; //opzionale

import pic from './giuseppefavaro.jpg';
import "./style.css"


export const Header = () => {
    return (

    <div className="header">
        <img src={pic} className="" width="200" height="200" alt="Giuseppe Favarò" />
        <h1>Giuseppe Favarò</h1>
    </div>
    
    );
};


// export {Header};