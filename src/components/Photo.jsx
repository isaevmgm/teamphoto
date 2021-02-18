import React from 'react';
import PropTypes from "prop-types";

function Photo(props) {
  return (
    <li>
      <img src={props.photo.thumbnailUrl} />
    </li>
  );
}

Photo.propTypes = {
    photo: PropTypes.object.isRequired
}

export default Photo;
