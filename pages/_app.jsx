import { createGlobalStyle,ThemeProvider } from 'styled-components';
 import theme from '../theme'

const GlobalStyles = createGlobalStyle`

* { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  //overflow-x: hidden;
}
html{
 font-size: 62.5%;
}
body {
  font-family: 'Open Sans', sans-serif;
}
h1,h2,h3,h4,h5 {
 font-family: ${props => props.theme.font.family.heading}
}
 `
;


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <>
        <Component {...pageProps}  />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default MyApp;