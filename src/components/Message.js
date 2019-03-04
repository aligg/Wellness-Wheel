import React from 'react';
import PropTypes from 'prop-types';
import * as theme from '../../public/static/theme';

const Message = ({ item }) => (
  <div
    style={{
      fontSize: '5vw',
      color: theme.colors.calmblue,
      maxWidth: '90vw',
      maxHeight: '90vh',
    }}
  >
    {item.content}
  </div>
);

Message.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Message;
