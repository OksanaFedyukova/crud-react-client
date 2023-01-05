import React from 'react';
import './Footer.scss';
/* import Facebook  from '../../../assets/icons/iconmassenger.phg';
import Twitter  from '../../../assets/icons/icontwitter,phg'; */

const Footer = () => {
  return (
    <footer className='footer'>  
         <div className='container-sm'>
         <ul className='footnav'>
            <li> <a href="/">About Us</a>
            </li>
            <li><a href="/">Contact</a>
             </li>
         </ul>
        <ul className='socialM'>
           {/* <li><a href="/">  <img src={Twitter} width='15' alt="twitter" /> Twitter</a>
          </li> 
          <li> <a href="/">  <img src={Facebook} width='15' alt="faceboor" /> Facebook</a>
           </li> */}
        </ul>
         </div>
    </footer>
 
  )
};

export default Footer;