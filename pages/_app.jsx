import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { UserProvider } from '../src/context/useContext'
import { LoginProvider } from '../src/context/useContextLogin'
import { RegionProvider } from '../src/context/useContextRegion'
import { CleanerAvailableProvider } from '../src/context/useContextCleanersAvailable'
import { CardIdProvider } from '../src/context/useContextCardId'
import { PopUpProvider } from '../src/context/useContextPopUp'
import { DateProvider } from '../src/context/useContextDate'

import theme from '../theme'

const GlobalStyles = createGlobalStyle`
 body.no-scroll {
    overflow: hidden;
  }
* { 
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html{
 font-size: 62.5%;
}
body {
  font-family: 'Open Sans', sans-serif;
}
h1,h2,h3,h4,h5 {
 font-family: ${(props) => props.theme.font.family.heading}
}
 `
function MyApp({ Component, pageProps }) {
  return (
    <DateProvider>
      <PopUpProvider>
        <CardIdProvider>
          <CleanerAvailableProvider>
            <RegionProvider>
              <LoginProvider>
                <UserProvider>
                  <ThemeProvider theme={theme}>
                    <>
                      <Component {...pageProps} />
                      <GlobalStyles />
                    </>
                  </ThemeProvider>
                </UserProvider>
              </LoginProvider>
            </RegionProvider>
          </CleanerAvailableProvider>
        </CardIdProvider>
      </PopUpProvider>
    </DateProvider>
  )
}

export default MyApp
