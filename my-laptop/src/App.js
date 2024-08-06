import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './frontend/components/navbar';

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import HomePage from './frontend/pages/home';
import PaymentPage from './frontend/pages/paymentPage';
import LaptopDetails from './frontend/pages/laptopDetails';
import Footer from './frontend/components/footer';
import { MyContext } from './frontend/contaxt/dataProvider';

function App() {
  const [allLaptops, SetLaptops] = useState([]);
    let API = "http://localhost:2410/laptops";
    // optionsArray,optionsSel
    const fetchApiData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        SetLaptops(data.allLaptops.laptops);
        console.log(data.allLaptops);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchApiData(API);
    }, []);
  return (
    <div className="App">
      <MyContext.Provider value={allLaptops}>
      <MyNavbar />
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/laptop/:id" element={<LaptopDetails />} />
            <Route path="/payment/:id" element={<PaymentPage />} />
          </Routes>
          <Footer/>
      </MyContext.Provider>
    </div>
  );
}

export default App;
