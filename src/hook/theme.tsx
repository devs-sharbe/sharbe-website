import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
} from 'react';

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

  const handleChangeTheme = useCallback((theme: 'light' | 'dark') => {
    setThemeSelected(theme);
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
