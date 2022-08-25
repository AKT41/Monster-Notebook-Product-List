import axios from 'axios';
import React, { useEffect, useState} from 'react'
import './style.css';
import Tophead from './components/tophead'
import Logovs from './components/logovs'
import Allproducts from './components/allproducts'
// import Navigation from './components/navigation'
import BackToSchool from './components/backToSchool'
import ProductList from './components/product-list'


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
      <BackToSchool/>
      <Tophead/>
      <Logovs/>
      <div className='rainbown-line'/>
      <Allproducts/>
      {/* <Navigation/> */}
      <ProductList/>

</>
  )
}
export default App;