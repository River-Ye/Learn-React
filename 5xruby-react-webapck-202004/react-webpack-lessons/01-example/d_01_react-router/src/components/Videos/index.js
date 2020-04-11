import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Videos.css';

const boxes = [
  { vid: '9NsTQiA7-BE', img: require('img/pic01.jpg') },
  { vid: 'rxYgbKFr2iw', img: require('img/pic02.jpg') },
  { vid: 'oUipiVwEUrI', img: require('img/pic03.jpg') },
  { vid: 'Ghrk0tVwx14', img: require('img/pic04.jpg') },
  { vid: 'gf0fLrzchBk', img: require('img/pic05.jpg') },
  { vid: 'pAyMDW2we1s', img: require('img/pic06.jpg') },
];

export default function Videos() {
  return (
    <div className="videos-root">
      <h2>Video</h2>
      <div className="row">
        {
          boxes.map(({ vid, img }) => (
            <div className="col-6 box" key={vid}>
              <Link className="image" to={`/video/${vid}`}>
                <h2>{img}</h2>
                <img src={img} alt="" />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
