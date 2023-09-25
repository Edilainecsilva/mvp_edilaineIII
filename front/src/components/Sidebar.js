import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import Styles from '../components/Sidebar.module.css'
import { MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext)
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    
      <div className={`${ isOpen ? Styles.sidebar2 : Styles.sidebar }`}>
       <strong> Carrinho ({itemAmount}) </strong>
         {/* Botão para voltar */}
          
          <MDBIcon onClick={handleClose} style={{cursor:'pointer', marginLeft:'70%'}} fas icon="angle-double-right" />
       
      
      <div className={Styles.cart}>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>

          {/* Total da compra */}
          <div style={{padding:'15px',  margin:'10px', display:'flex'}}>
           <strong> <span>TOTAL:</span> R$ {parseFloat(total).toFixed(2)}</strong>

            {/* Limpar carrinho inteiro */}
           <MDBIcon onClick={clearCart} className={Styles.trash} fas icon="trash-alt" />
           <br></br>
          </div>
          
           <div>
              <Link className="d-grid gap-2 col-6 mx-auto">
                <MDBBtn color='dark'>
                  Comprar 
                </MDBBtn>
              </Link>
            </div>
        
       </div>
   
  );
};

export default Sidebar;