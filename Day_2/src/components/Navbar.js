import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector} from 'react-redux';
import BellIcon from '../icons/bell';
import { selectUser } from '../features/userslice';
const AppNavbar = () => {
  const redux_user=useSelector(selectUser);
  const mail=redux_user.email;
  const username=mail.substr(0,mail.indexOf('@'));
  
  return (
    <Navbar expand="lg" py-5>
      <Navbar.Brand href="#home">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" py-5 />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center ">
          <Nav.Link href="#home"></Nav.Link>
          <Nav.Link href="#about"><BellIcon /></Nav.Link>
          <div className="profile-image ml-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU" alt="Profile" className="rounded-circle" width="32" height="32"/>
          </div>
          <NavDropdown title={username} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
            <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
