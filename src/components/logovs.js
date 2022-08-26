import React, { Component }  from 'react';
import "./component-style.css"

 function Logovs() {
  return (
    <div className=' d-flex logo-head  justify-content-start bg-head'>

      {/* Logo */}
      <div className='rounded bg-head align-content-center flex-wrap  d-flex justify-content-start ps-logo' >
      <img className="logoEye d-flex " style={{width:"245px" , height:"65px"}} src="https://www.monsternotebook.com.tr/images/frontend/monster-logo.svg"  title="Monster Notebook" alt="Monster Notebook" />
      </div>

     {/* İnput Search */}
    <div className='d-flex ps-2 pe-2 justify-content-center bg-head flex-input'> 
      <div className='search d-inline-flex '>
        
      <input type="text" maxLength="55"  placeholder="Arama Yap" className='input'/> 

      </div>
       </div>


    {/* Harici Ödeme */}
      <div className='d-flex'>

    <div className='hrci-box d-flex align-content-center flex-wrap'>
     <div className='hariciOdeme akt-hrci'>
      <a href='#'> <span className='harici-button'  style={{color:"lime"}}>Harici Ödeme</span></a>
      </div>
    </div>

      {/* Login */}

      <div className='login-box'>
        <div className='login-border d-flex align-content-center flex-wrap  '>
          <div className='log-span'>
             <a href='#'><span className='log'>Ahmet Kemal    ...</span></a>
             </div>
        </div>
      </div>

      {/* My Card */}

      <div className='my-card d-flex align-content-center flex-wrap spacing'>
        <div className='card-border d-flex align-content-center flex-wrap justify-content-center'>
              <a href='#'>
              <i className="fa-solid fa-cart-shopping"></i>
                <span className='clr-wht text-center'>Sepetim</span>
                </a>
        </div>
      </div>

          </div>
    </div>
  )
}
export default Logovs;

// EDİT BY AKT