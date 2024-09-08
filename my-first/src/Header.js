import React from 'react';

function Header(props) {
    return (
        <div>
            <img src = {props.image}></img>
            <h1>{props.username}</h1>
        </div>
    );
}

export default Header;