import '../styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from '../components/Navbar';



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
    }
  }
})



function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Navbar/>
   <Component {...pageProps} />
   </ThemeProvider>
}

export default MyApp
