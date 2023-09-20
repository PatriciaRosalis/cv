import { useState } from 'react'
import './App.scss'
import { ThemeContext } from './contexts/theme-context';
import Header from './components/header/header';
import Projects from './components/projects/projects';

function App() {
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`} style={{margin: '0px'}}>
        <div className="wrapper">
          <Header />
          <Projects />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
