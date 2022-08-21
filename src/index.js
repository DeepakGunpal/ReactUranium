import React from 'react';
import ReactDOM from 'react-dom/client';


//react router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import ProductPage from './pages/ProductPage';
import HomePage from './pages/homePage';
import ErrorPage from './pages/errorPage';
import CatFacts from './pages/catFacts';
import CryptoCurrencyList from './pages/crypto';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>
    <div> Deepak's App </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* //*how to accept parameter from path ? */}
        <Route path='payment' element={<PaymentPage />}>
          <Route path=':price' element={<PaymentPage />} >
            {/* //* multiple params */}
            <Route path=':quantity' element={<PaymentPage />} />
          </Route>
        </Route>
        <Route path='product' element={<ProductPage />} />
        <Route path='catfact' element={<CatFacts />} />
        <Route path='crypto' element={<CryptoCurrencyList />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)


