import React, { useContext } from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/Login-context';
import Login from './login/login';
export default function Header() {
  const loginContext = useContext(LoginContext);
    return (
        <>
        <Navbar className="Navbar">
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading className="title"><h2>Shopping📋</h2></Navbar.Heading>
            <Navbar.Divider />
            <Link to='/'>
            <Button className="bp4-minimal" icon="home" text="Home" />
            </Link>
            <Link to='/settings'>
            <Button className='bp3-minimal' icon='settings' text='Settings' />
           
          </Link>
          {loginContext.loggedin && <Login></Login>}
        </Navbar.Group>
    </Navbar>
    </>
    );
  }


  