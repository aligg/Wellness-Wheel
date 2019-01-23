import React from 'react';
import PropTypes from 'prop-types';
import * as theme from '../../public/static/theme';

const Image = ({ image }) => (
  <div>
    <img
      src={image.content}
      alt="Chill"
      style={{
        maxHeight: '90vh',
        maxWidth: '90vw',
        boxShadow: theme.boxShadow,
      }}
    />
  </div>
);

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Image;
