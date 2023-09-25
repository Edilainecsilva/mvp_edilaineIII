
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';
import Styles from '../components/Product.module.css'
import { useContext } from 'react';

const Product = ({ product }) => {
  const{ addToCart } = useContext(CartContext)
   //destructure product
   const {id, image, category, title, price } = product;
    
  return (
    <div className={Styles.grid_container}>
      <MDBCard >
        <MDBCardImage
          src={image}
          alt='...'
          position='top'
        />
        <MDBCardBody style={{textAlign:"left"}}>
            
            {/*Categorias */}
            <MDBCardText><small className='text-muted'>{category}</small> </MDBCardText>
          
          <Link to={`/product/${id}`}>
            <MDBCardText className={Styles.title}><h6>{title}</h6> </MDBCardText>
          </Link>

          <MDBCardTitle><strong>R${price}</strong></MDBCardTitle>
          <MDBCardText><small className='text-muted'>5x de R${price}</small></MDBCardText>
          
          
        {/*Botões, função ver detalhes do produto e outro adicionar ao carrinho*/}
        <div className={Styles.buttons}>
          <div className={Styles.button}> 
          {/*ver produto*/}
            <Link to={`/product/${id}`}>
              <MDBBtn className='m-1' style={{ backgroundColor: 'black' }}>
                <MDBIcon fas icon="eye" />
              </MDBBtn>
            </Link>
              </div>
              <div className={Styles.button2}>   
              <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} onClick={() => addToCart(product, id)}>
                  <MDBIcon fas icon="cart-plus" />
              </MDBBtn>
              </div>
          </div>
        </MDBCardBody>
      </MDBCard>
          
    
    </div>
  );
};

export default Product;