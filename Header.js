import React from 'react';
import "./Header.css"

const Header = (props)=>{
    
    return (
        <header className='header-div'>
            <span><h1>Medical Store</h1></span>
            <span><button onClick={props.onCartShow}>View Cart</button></span>
        </header>
    )
};

export default Header;