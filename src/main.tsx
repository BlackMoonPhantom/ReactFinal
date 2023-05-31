import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsList } from './components/products/ProductsList';
import { ProductDetail } from './components/products/ProductDetail';
import { RouteNotFound } from './components/RouteNotFound';
import NoteCard from './components/NoteCard';
import { Provider } from 'react-redux';
import store from './components/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <>
                <div className="flex-centered">
                  
                  <img src="src\image\shop.PNG" alt="App Image" style={{ width: '200px', height: 'auto' }} />
                  <h1>Welcome to my shopping app!</h1>
                </div>
              </>
            }
          />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="notes" element={<NoteCard />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
