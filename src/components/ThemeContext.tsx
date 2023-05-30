import { createContext, useState } from 'react';

interface Theme {
  foreground: string;
  background: string;
  color?: string;
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const themes: { [key: string]: Theme } = {
  light: {
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
    color: '#fff',
  },
};

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((previousValue) =>
      previousValue === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
