import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard';

import Usuarios from './pages/usuarios';
import UsuariosEditar from './pages/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/usuarios/usuarios.cadastrar';

export default function Routes() {
    return <BrowserRouter>
                <Switch>
                    <Route path= "/" exact component={Dashboard} />

                    <Route path= "/usuarios" exact component={Usuarios} />
                    <Route path= "/usuarios/cadastrar" exact component={UsuariosCadastrar} />
                    <Route path= "/usuarios/editar/:idUsuario" exact component={UsuariosEditar} />
                  
                </Switch>
            </BrowserRouter>

}