import axios from 'axios';
import React, { useEffect, useState} from 'react'

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
  return ( //akt

    <>

<div className='box'>
      {datas.products?.filter((product) => product.catIds.includes('1105,6224')).map((product) => (
        <div key={product.productId} className="todo">
          <h3>{product.productName}
          </h3>
          

        </div>
      )

      )}

    </div>

    </>
  )
}
export default App;