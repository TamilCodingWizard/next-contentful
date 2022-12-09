import '../styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '../components/Navbar';
import { Container } from '@mui/system';



const theme = createTheme({
  palette: {
    text: {
      primary:'#708238'
    },
    primary:{
      main:'#fff'
    }
  },
  typography: {
    fontFamily:'Poppins',
    h2: {
      fontFamily:'Alex Brush'
    },
    h3: {
      fontFamily:'Alex Brush'
    }

  }
})



function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Navbar/>
    <Container maxWidth='lg'>
      <Component {...pageProps} />
   </Container>
   </ThemeProvider>
}

export default MyApp
