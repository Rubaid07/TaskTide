import { useEffect } from 'react';
import { useTheme } from '../provider/ThemeProvider';

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return children;
};

export default ThemeWrapper;