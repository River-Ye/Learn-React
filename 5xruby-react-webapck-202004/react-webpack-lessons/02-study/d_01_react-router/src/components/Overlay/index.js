import React from 'react';
import { Link } from 'react-router-dom';
import './Overlay.css';


function Overlay(props) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="video-container">
          {/* 
          <iframe
            src={`http://www.youtube.com/embed/${props.match.params.id}?autoplay=1`}
            title="vid"
            frameBorder="0"
            width="720"
            height="480"
          /> 
          */}
        </div>
        <Link to="/video" className="closer">×</Link>
      </div>
    </div>
  );
}


export default Overlay;
