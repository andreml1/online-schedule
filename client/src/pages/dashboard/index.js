import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Menu from '../../components/menu';
import Footer from '../../components/footer';
import '../../App.css';


const mdTheme = createTheme();

function DashboardContent() {
 

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Menu title={'AGENDA ON-LINE DE FUNCIONÁRIOS'} />
        <Box
          component="main"
          sx={{
            backgroundColor: 'black',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <img class="image" />
          <Footer sx={{ color: 'white' }} />
          </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}