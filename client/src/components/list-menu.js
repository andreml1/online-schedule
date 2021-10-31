import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <div>
    <ListItem button component="a" href="/" >
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Página Inicial" />
    </ListItem>
    <ListItem button component="a" href="/usuarios" >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Lista de Funcionarios" />
    </ListItem>
    <ListItem button component="a" href="/usuarios/cadastrar" >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastrar" />
    </ListItem>
     </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>

  </div>
);