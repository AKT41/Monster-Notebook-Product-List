import React, { Component }  from 'react';
import "./component-style.css"

 function Allproducts() {
  return (
    <div className='allproducts d-flex '>
      <div className='prdc-spacing'> 
        <nav className='nav-main'>
          <ul className='d-flex prdc-list '>
              <li className='sub-menu'><a href='#' className='spacing-list-prdc'>TÜM LAPTOPLAR</a></li>
              <li className='sub-menu'><a href='#' className='spacing-list-prdc'>OYUN BİLGİSAYARLARI</a></li>
              <li className='sub-menu'><a href='#' className='spacing-list-prdc'>OYUNCU EKİPMANLARI</a></li>
              <li className='sub-menu'><a href='#' className='spacing-list-prdc'>OYUNCU MONİTÖRÜ</a></li>
              <li className='sub-menu'><a href='#' className='spacing-list-prdc'>İŞ BİLGİSAYARLARI</a></li>
              <li className='sub-menu'><a href='#' className='spacing-list-prdc'>İS İSTASYONLARI</a></li>
          </ul>
          </nav>
      </div>
      
    </div>
  )
}
export default Allproducts;

// EDİT BY AKT