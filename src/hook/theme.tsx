import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { setCookie, parseCookies } from 'nookies';

interface IThemeProvider {
  children: ReactNode;
}

interface IThemeContextData {
  themeSelected: 'light' | 'dark';
  handleChangeTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext({} as IThemeContextData);

function ThemeProvider({ children }: IThemeProvider): JSX.Element {
  const [themeSelected, setThemeSelected] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const { 'sharbewebsite.theme': theme } = parseCookies() as any;

    if (theme) {
      setThemeSelected(theme);
    }
  }, []);

  const handleChangeTheme = useCallback((theme: 'light' | 'dark') => {
    setThemeSelected(theme);
    setCookie(undefined, 'sharbewebsite.theme', theme, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeSelected, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
