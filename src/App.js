import axios from 'axios';
import React, { useEffect, useState} from 'react'
import './style.css';
// import Image from "next/image";

function App() {
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

<div className='box'>
      {datas.products?.filter((product) => product.catIds.includes('1105')).map((product) => (


   

    <div key={product.productId} className="todo">


        <div className='images'>
             <img
             src={product?.smallImageUrl}  // İmages
             width={253}
             height={168}
             layout="responsive"
             sizes="253px"
             alt="smallImageUrl"/>
       </div>
   
          <h3 className='titles'>{product.productName}</h3>
        
          <div className='descriptions'>
        <div dangerouslySetInnerHTML={{__html: product.shortDescription}} >
        </div>
         </div>

          

        <div className='price'>   {product?.salePrice} {product?.currency}  </div>

        </div>

        
      )

      )}

    </div>

    </>
  )
}
export default App;