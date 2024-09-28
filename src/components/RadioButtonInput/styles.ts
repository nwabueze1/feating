import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CustomThemeProps } from '../../types';

/** !!-- Remember to update the function name !! */
export const useRadioButtonInputStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: {
    color: theme.design.colors.waz_dangerColor300,
  },
  radio: (props) => ({
    "&.Mui-checked": {
      color: props?.colors?.[300],
    },
    "& span": {
      "& svg:first-child": {
        width: "24px",
        height: "24px",
      },

      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
  })
}));
