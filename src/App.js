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
  return (

    <>

    <div className='box'>
      {datas.products?.map((product) => (
        <div key={product.productId} className="todo">
          <h3>{product.brandName}</h3>

        </div>
      )

      )}

    </div>

    </>
  )
}
export default App;