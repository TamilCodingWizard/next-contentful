import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Link  from 'next/link';

const Navbar = () => {
  return (
    <AppBar elevation={0} position='sticky'>
        <Toolbar sx={{justifyContent:'center'}}>
            <Stack my={3} alignItems='center'>
                <Link href='/'>
                <Typography  sx={{color:'#708238',fontSize:60,typography: { xs: 'h3', sm: 'h2' }}} component='h2'><strong>My Travel Blog</strong></Typography>
                <Typography variant='subtitle1' textAlign='center' sx={{color:'#708238',letterSpacing:{ xs: 5, sm: 10 }} }>EAT SLEEP TRAVEL</Typography>
                </Link>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar