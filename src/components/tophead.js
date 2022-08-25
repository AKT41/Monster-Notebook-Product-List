import React, { Component }  from 'react';
import "./component-style.css"
function Tophead() {
  return (
    <div className='bg-head header-tabSite  text-warning'>
      <div className='d-flex justify-content-end pe-5'>
      <ul className='d-flex p-10 th-style' >
                <li><span><a className='topHover' href='#'>0 850 255 11 11</a></span></li>
                <li><span><a className='topHover' href='#'>Mesaj Gönder</a></span></li>
                <li><span><a className='topHover' href='#'>MAĞAZALAR</a></span></li>
                <li><span><a className='topHover' href='#'>TEKNİK SERVİS</a></span></li>
                <li><span><a className='topHover' href='#'>MONSTER RANDEVU SİSTEMİ</a></span></li>
                <li><span><a className='topHover' href='#'>MONSTER ÇÖZÜM MERKEZİ</a></span></li>
                <li><span><a className='topHover' href='#'> <img src="https://img-monsternotebook.mncdn.com/UPLOAD/help_center/windows11.svg" /></a></span> </li> 
            </ul>
            </div>
    </div> 
  )
}
export default  Tophead ;