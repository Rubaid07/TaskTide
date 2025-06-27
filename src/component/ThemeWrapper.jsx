// src/component/ThemeWrapper.jsx
import { useEffect } from 'react';
import { useTheme } from '../provider/ThemeProvider';

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();

  // This ensures theme is applied before children render
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return children;
};

export default ThemeWrapper;