import React from 'react';
import Img from 'react-image'

export default function Poster(props) {


  return (
    <div className="poster">
      <div className="poster-img">
        <Img className="image" src={[props.path, '/notFoundPoster.jpg']} />
      </div>
      <div className="poster-title">
        <h4>{props.title}</h4>
        </div>
    </div>
  );
}
