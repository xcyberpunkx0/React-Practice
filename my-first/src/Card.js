import React from 'react';
import Header from './Header';
import Body from './Body';

function Card(props){
    return(
        <div>
            <Header profileImg={props.object.profileImg} username={props.object.username} />
            <Body comment={props.object.comment} />
        </div>
    );
}

export default Card;