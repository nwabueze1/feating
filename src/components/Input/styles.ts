import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useInputStyles = makeStyles((theme: Theme) => ({
  inputContainer: {
    position: "relative",
    width: '100%',
    '& input': {
      background: 'transparent',
      paddingLeft: theme.spacing(2.5),
      width: '100%',
      outline: 'none',
      color: theme.euDesign.colors.black,
      padding: theme.spacing(1.8, 0),
      fontSize: theme.typography.fontSize + 2,
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.typography.fontSize,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.fontSize - 2,
      },
      border: `1px solid ${theme.euDesign.colors.light_grey}`,
      '&.validate': {
        border: `1px solid ${theme.euDesign.colors.danger}`,
      },
      '&:focus': {
        border: `1px solid ${theme.euDesign.colors.light_grey}`,
      },
      '&.white': {
        border: `1px solid ${theme.euDesign.colors.light_grey}`,
        '&::placeholder': {
          color: theme.euDesign.colors.white,
        },
      },
      '&::placeholder': {
        color: theme.euDesign.colors.neutral_100,
        fontSize: theme.typography.fontSize + 2,
        [theme.breakpoints.down('lg')]: {
          fontSize: theme.typography.fontSize,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: theme.typography.fontSize - 2,
        },
      },
    },
  },
  inputLabel: {
    position: "absolute",
    top: 14,
    left: 10,
    fontSize: theme.typography.fontSize,
    color: theme.euDesign.colors.black,
    transition: "top 0.5s, font-size 0.3s",
    pointerEvents: "none",
    transform: "translateY(0)",
  },
  activeLabel: {
    top: 6,
    transform: "translateY(-100%)",
    backgroundColor: theme.euDesign.colors.white,
    "&.error": {
      color: theme.euDesign.colors.error,
    },
  },
  inputStar: {
    color: theme.euDesign.colors.danger,
  },
  inputError: {
    border: `1px solid ${theme.euDesign.colors.danger} !important`,
  },
  helperTextDefault: {
    display: "flex",
    width: "100%",
    letterSpacing: 0,
    fontSize: theme.typography.fontSize - 1,
    textAlign: "left",
    marginTop: 4,
    fontFamily: "inherit",
  },
  helperTextError: {
    color: theme.euDesign.colors.danger,
  },
}));
