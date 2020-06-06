import React from 'react';
import './MediaCard.css';

function MediaCard(props) {
  return (
    <div>
        <h2 className="title">{props.title}</h2>
        <br></br>
        <p>{props.body}</p>
        <br></br>
        <img src = "https://picsum.photos/seed/picsum/221/101" alt="River"/>
    </div>
  );
}

export default MediaCard;
