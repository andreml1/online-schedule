import React, {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CachedIcon from '@mui/icons-material/Cached';
import DeleteIcon from '@mui/icons-material/Delete';

import Menu from '../../components/menu';
import Footer from '../../components/footer';
import api from '../../services/api';
import '../../App.css';



const mdTheme = createTheme();

function UsuariosLista() {

  const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{

      async function loadUsuarios(){
        const response = await api.get('/api/usuarios')
        setUsuarios(response.data)

      }
      loadUsuarios();
    },[]);

    async function handleDelete(id) {
      if(window.confirm("Tem certeza disso?")){
        var result = await api.delete('/api/usuarios/' + id);
        if (result.status === 200) {
          window.location.href = '/usuarios';
        }else {
          alert('Ocorreu um erro. Por favor tente novamente!');
        }
      }
    }
 

  return (
      <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Menu title={'LISTA DE FUNCIONÁRIOS'} />
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
            <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>NOME COMPLETO</TableCell>
            <TableCell align="center">E-MAIL</TableCell>
            <TableCell align="center">TELEFONE</TableCell>
            <TableCell align="right">ATUALIZAR/DELETAR</TableCell>
           </TableRow>
            </TableHead>
            <TableBody>
            {usuarios.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nome_usuario}
              </TableCell>
              <TableCell align="center">{row.email_usuario}</TableCell>
              <TableCell align="center">{row.telefone_usuario}</TableCell>
              <TableCell align="right">
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button startIcon={<CachedIcon />} href={'/usuarios/editar/' + row._id} ></Button>
                <Button color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(row._id)}></Button>
              </ButtonGroup>
              </TableCell>
              </TableRow>
          ))}
            </TableBody>
           </Table>
          </TableContainer>
            </Grid>
            </Grid>
            <Footer sx={{ pt: 4, color: "white" }}  />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Lista() {
  return <UsuariosLista />;
}