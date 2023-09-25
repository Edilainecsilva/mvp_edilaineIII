import { useContext } from 'react';
import { useParams} from 'react-router-dom'
import {CartContext} from '../contexts/CartContext'
import {ProductContext} from '../contexts/ProductContext'
import Styles from '../pages/ProductDetails.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';

const ProductDetails = () => {
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    const { addToCart } = useContext(CartContext)

    //get o produto by ID
    const product = products.find((item) => {
        return item.id === parseInt(id);
    })

    if (!product){
        return (
            <section>Carregando...</section>
        )
    }

    //destructure product
    const { title, price, description, image } = product

    return (
        <section className={Styles.contanier}>
            <div>
                <div className={Styles.contanier2}>
                <div><img style={{maxWidth:'300px'}} src={image} alt=''></img></div>
                <div className={Styles.text}>
                    <h1 style={{fontSize:'medium', maxWidth:'450px'}}>{title}</h1>
                    <div style={{margin:'20px'}}><strong>R$ {price}</strong></div>
                    <p style={{marginBottom:'32px'}}>{description}</p>
                    <MDBBtn color='success' onClick={()=> addToCart(product, product.id)}> Adicionar ao carrinho</MDBBtn>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails