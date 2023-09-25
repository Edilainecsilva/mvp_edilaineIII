import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarProvider>
        <CartProvider>
            <ProductProvider>
                <App /> 
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
);
