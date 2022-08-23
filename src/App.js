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
      {datas.products?.filter((product) => product.catIds.includes('1105,6224')).map((product) => (


<a href='/' target="blank" className='productsUrl'>  {/* href={product.productUrl} */}

    <div key={product.productId} className="todo">


        <div className='cards'>
             <img
             src={product?.smallImageUrl}
             width={253}
             height={168}
             layout="responsive"
             sizes="253px"
             alt="smallImageUrl"/>
       </div>



        
          <h3 className='cards title'>{product.productName}</h3>
          
          <div className='description cards'>
        <div dangerouslySetInnerHTML={{__html: product.shortDescription}} >
        </div>
         </div>

          

        <div className='cards'>   {product?.salePrice} {product?.currency}  </div>

        </div>
        </a>
      )

      )}

    </div>

    </>
  )
}
export default App;