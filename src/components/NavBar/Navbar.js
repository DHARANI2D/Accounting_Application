import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import BellIcon from '../icons/bell';
import { selectUser } from '../features/userslice';
import EnvelopeIcon from '../icons/envelope';
import { FaUser } from 'react-icons/fa';
import { AiFillSetting ,AiOutlineLogout} from 'react-icons/ai';

const AppNavbar = () => {
  const reduxUser = useSelector(selectUser);
  const mail = reduxUser.email;
  const username = mail.substr(0, mail.indexOf('@'));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <Navbar expand="lg" variant="light" className="navbar navbar-expand-lg navbar-light" bg="transparent">
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="fixed" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto align-items-center">
          <Nav.Link href="#home">
            <EnvelopeIcon />
          </Nav.Link>
          <Nav.Link href="#about">
            <BellIcon />
          </Nav.Link>
          <div className="profile-image ml-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQ-YHX2i3RvTDDmpfnde4qyb2P8up7Wi3Ww&usqp=CAU"
              alt="Profile"
              className="rounded-circle"
              width="32"
              height="32"
            />
          </div>
          <NavDropdown
            title={username}
            id="basic-nav-dropdown"
            show={isDropdownOpen}
            aria-expanded="false"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            menuAlign="left" data-toggle="dropdown" aria-haspopup="true" 
            flip
            renderMenuOnMount
          >
            <NavDropdown.Item>
              <Nav.Link href="#profile">
                <FaUser className="mr-2" />
                Profile
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link href="#settings">
              <AiFillSetting className="mr-2" />
              Settings</Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link href="#logout">
              <AiOutlineLogout className="mr-2" />
              Logout</Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
