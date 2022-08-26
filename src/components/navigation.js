import React from 'react'
import "./component-style.css"
import App from '../App'

function Navigation() {
  return (
    <div className='navigation'>
      <div className='navigation-spacing'>
        <div className='nav-box'>
          <div className='navi-urun d-flex'>
            <ul type='none'>
            <li  className="navigasyonSeviye2"><img id='home-icon' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE0IDEyIiBmaWxsPSJub25lIj4KPHBhdGggZD0iTTUuNjY2ODMgMTEuMzMzM1Y3LjMzMzMzSDguMzMzNVYxMS4zMzMzSDExLjY2NjhWNkgxMy42NjY4TDcuMDAwMTYgMEwwLjMzMzQ5NiA2SDIuMzMzNVYxMS4zMzMzSDUuNjY2ODNaIiBmaWxsPSIjQTRBNEE1Ii8+Cjwvc3ZnPg=='/><a className='nav-hover' href="/laptop/">
              <span className='nav-color'>Ana Sayfa  </span></a></li>
               <li className='next-item'>&gt;</li>
               <li  className="navigasyonSeviye2"><a className='nav-hover' href="/laptop/">
              <span className='nav-color'>Tüm Laptoplar</span></a></li>
            </ul>
          </div>
        </div>
      </div>   
    </div>
  )
}
export default Navigation;

// EDİT BY AKT


