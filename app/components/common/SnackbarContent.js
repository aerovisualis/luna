/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  primary: () => {}
};

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.light
  },
  info: {
    backgroundColor: theme.palette.secondary.light
  },
  warning: {
    backgroundColor: theme.palette.warning.light
  },
  primary: {
    backgroundColor: 'transparent'
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 300
  }
});

const AppSnackbarContent = props => {
  const { classes, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], classes.root)}
      aria-describedby="cli-snackbar"
      message={
        <span id="cli-snackbar" className={classes.message}>
          {variant !== 'primary' && (
            <Icon className={classNames(classes.icon, classes.iconVariant)} />
          )}
          {message}
        </span>
      }
      action={[
        typeof onClose === 'function' && (
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        )
      ]}
      {...other}
    />
  );
};

AppSnackbarContent.defaultProps = {
  variant: 'info'
};

AppSnackbarContent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'primary'])
    .isRequired
};

const AppSnackbarContentWrapper = withStyles(styles)(AppSnackbarContent);
export default AppSnackbarContentWrapper;
