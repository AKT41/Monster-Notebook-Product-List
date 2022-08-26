import React from 'react'
import "./component-style.css"

function Mythology() {
  return (
    <div className='mythology-bg'>
      <div className='shadow'> 
        <div className='mythology-explanation'> 
         <h1 data-text="Tüm Laptoplar" className='mythology-title'>Tüm Laptoplar</h1>
            <span className='mythology-text' > <p className='tr-mythology'>Adını Türk mitolojisindeki efsanevi canlılardan alan laptop serileriyle masaüstü bilgisayarların performans alanındaki hükümdarlığına son veren Monster, geliştirdiği laptop modelleriyle dilediğiniz her yerde çalışmalarınızı sürdürmenizi ve güncel oyunları oynamanızı sağlıyor. Laptoplarının tamamında Intel’in güçlü işlemcileri ve NVIDIA’nın oyun ya da iş</p>
             </span>
               <div className="urnListContentMore">
                <a href='#' className="moreText"><span className="dfazla"><b>daha fazla göster</b>
                <img className='down-icon' src='.\icons\down-arrow.png'/> </span>
              </a>
            </div>
        </div> 

       </div>

    </div>
  )
}
export default  Mythology  ;