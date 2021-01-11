import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';


const theme = createMuiTheme({
    palette: {
        primary: {
          // light: will be calculated from palette.primary.main,
          main: deepPurple[800],
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          main: '#ffb300',
        },
      },
    });
export default theme;