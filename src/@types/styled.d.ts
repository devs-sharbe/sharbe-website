/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';
import { lightTheme } from '../styles/theme/colors';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme;

  export interface DefaultTheme extends ThemeType {}
}
