import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';

import Menu from '../../components/menu';
import Footer from '../../components/footer';
import api from '../../services/api';



const mdTheme = createTheme();

  function UsuariosCadastrar() {
 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleSubmit() {
    const data = {
      nome_usuario:nome, 
      email_usuario:email, 
      telefone_usuario:telefone
    }

      if (nome !== '' && email !== '' && telefone !== '') { 
        const response = await api.post('/api/usuarios', data)

        if (response.status === 200) {
          window.location.href='/usuarios'
        }else{
          alert('Erro ao cadastrar!')
        } 
      
      }else {
        alert('Por favor preencha todos os campos!');
      }


  }
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Menu title={'CADASTRO'} />
        <Box
          component="main"
          sx={{
            backgroundColor: 'black', 
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 200,
                    width: 1150,
                  }}
                >
            <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
            <TextField
                required
                id="nome"
                name="nome"
                label="Nome Completo"
                fullWidth
                autoComplete="nome"
                variant="standard"
                value={nome}
                onChange={e => setNome(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="email"
                name="email"
                label="E-mail"
                fullWidth
                autoComplete="email"
                variant="standard"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={3}>
            <TextField
                required
                id="telefone"
                name="telefone"
                label="Telefone"
                fullWidth
                autoComplete="telefone"
                variant="standard"
                value={telefone}
                onChange={e => setTelefone(e.target.value)}
            />
            </Grid>
            <Grid item xs={12} sm={12}>
            <Button size="small" variant="contained" onClick={handleSubmit}>
              Salvar
            </Button>
            </Grid>
            </Grid>
            </Paper>
            <Footer sx={{ pt: 4, color: 'white' }} />
          </Container>
         </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Cadastrar() {
  return <UsuariosCadastrar />;
}