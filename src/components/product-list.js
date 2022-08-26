import axios from 'axios';
import React, { useEffect, useState} from 'react'


 function ProductList() {
    const [datas,setDatas] = useState([]);


  useEffect(() => {
    const fetchtodos = async () => {
    try {
      const response = await axios.get
      ("https://monster-p.mncdn.com/cckeyboardapp/response.json");
      console.log(response);

      setDatas(response.data.data);

    } catch (err) {
      console.log(err);
    }
  };

  fetchtodos();

 }, []);

  return (
    <>
        
        <div className='product-list-spacing'>

    <div className='col-left'> 
        <div className='containerTest'> </div> {/* test kategoriler divi */}
        


    <ul className="d-flex product-list">

    {datas.products?.filter((product) => product.catIds.includes('1105')).map((product) => (

      <li className="card-list" key={product.productId}> 
        <div className="d-flex box-spaceing">

          <a href={product.productUrl}></a>  

        <div className="image">
         <div className="images"> 
            <img 
            src={product?.smallImageUrl}
            width={253}
            height={168}
            alt={product?.shortName}
            
             /> 
         </div>  
        </div>

        <div className="Descriptions-box">
            <div className="d-flex Descriptions-box ">
                <div className='compare-box'> <span> <span className="compare-checkbox" type="checkbox"/> </span>
                  <span>Karşılaştır</span> 
                   </div>

                <div className='title-spaceing'>
                   <h3 className="product-title">{product.productName}</h3>  
                   </div>

            <div className='Descriptions d-flex' dangerouslySetInnerHTML={{__html: product.shortDescription} }>
              
               </div>

   
            </div>
        </div>

     <div className="price-addBasket d-flex">
            <div className="price salePrice"> <span><b>{product?.salePrice}  {product?.currency} </b> </span>
            <span align="left" style={{}} className='taksit'>1.234,56 TL x 12 ay'a varan Taksit Seçenekleri</span>

            </div>
           
        <div className='BasketSpacing'>
          <a className='sepet-link' href=''>  <div className="addBasket d-flex"> <span className='text' align="center"> Sepete Ekle </span> </div> </a>
        </div>

     </div>


        </div>
    </li> 
  )

  )}



    </ul>
    </div>
</div>


    </>
  )
}
export default ProductList ;

// EDİT BY AKT