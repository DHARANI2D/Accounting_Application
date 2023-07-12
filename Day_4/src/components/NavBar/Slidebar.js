import React, { useState } from 'react';
import '../NavBar/slidebar.css';
import Logoicon from '../icons/logo';
import { ImHome,ImUser } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbDeviceAnalytics,TbFileInvoice,TbReceiptTax } from "react-icons/tb";
import { PiWarehouseBold } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import AiOutlineLogout from '../icons/logout'

function Slidebar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  

  return (
    <div>
      <div className={`l-navbar `} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo" >
              <i ><Logoicon /></i>
            
            </a>
            <div className="nav_list">
              <a href="#" className="nav_link" >
              <i ><ImHome /></i>
              </a>
              <a href="#" className="nav_link" >
                <i><ImUser /></i>
              </a>
              <a href="#" className="nav_link" >
                <i><AiOutlineShoppingCart /></i>
              </a>
              <a href="#" className="nav_link" >
                <i><TbDeviceAnalytics /></i>
              </a>
              <a href="#" className="nav_link" >
                <i><TbFileInvoice/></i>
              </a>
              <a href="#" className="nav_link" >
                <i><PiWarehouseBold/></i>
              </a>
              <a href="#" className="nav_link" >
                <i><MdPayment/></i>
              </a>
              <a href="#" className="nav_link" >
                <i><TbReceiptTax/></i>
              </a>
            </div>
          </div>
          <a href="#" className="nav_link" >
            <i><AiOutlineLogout/></i>
            
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Slidebar;
