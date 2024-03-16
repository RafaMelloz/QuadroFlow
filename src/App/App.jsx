import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global-styles.js'
import { darkMode, lightMode } from '../styles/theme.js'
import { useState } from 'react';
import { NavBar } from '../components/NavBar/index.jsx';
import { ListSection } from '../components/ListSection/index.jsx';
import { BasicFunction } from '../teste.jsx';

function App() {

  const [themeStatus, setThemeStatus] = useState(false);

  const toggle = () =>{
    setThemeStatus(!themeStatus);
  }

  return (
    <ThemeProvider theme={ themeStatus ? lightMode : darkMode }>
      <GlobalStyles/>
      <NavBar toggle={toggle} />
      <ListSection/>


    </ThemeProvider>
    // <BasicFunction/>
  )
}

export default App
