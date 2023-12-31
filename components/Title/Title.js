import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import useStyles from './title-style';

export default function Title(props) {
  const { classes, cx } = useStyles();
  const { children, align } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={cx(classes.title, setAlign(align))}>
      <Typography variant="h3">
        {children}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

Title.defaultProps = {
  align: 'left'
};
