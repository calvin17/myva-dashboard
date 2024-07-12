import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const SharedCard = ({ title, content, height, width }) => {
  return (
    <Card className="shared-card" style={{ height: `${height}px`, maxWidth: `${width}px`, margin: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

SharedCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

SharedCard.defaultProps = {
  height: 200,
  width: 300,
};

export default SharedCard;
