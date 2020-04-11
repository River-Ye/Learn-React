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

function Box({ vid, img }) {
  return (
    <div className="col-6 box">
      <Link className="image" to={`/video/${vid}`}>
        <img src={img} alt="" />
      </Link>
    </div>
  );
}

Box.propTypes = {
  vid: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default function Videos() {
  return (
    <div className="videos-root">
      <h2>Video</h2>
      <div className="row">
        { boxes.map(item => <Box {...item} key={item.vid} />) }
      </div>
    </div>
  );
}
