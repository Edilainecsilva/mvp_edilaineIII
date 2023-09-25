import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from 'mdb-react-ui-kit';
import Styles from '../components/CartItem.module.css'
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)

    //destructure Item
    const {id, title, image, price, amount } = item;
    return (
        <div> 
            <div className={Styles.contanier}>
                {/* imagem produto */}
                    <Link to={`/product/${id}`}>
                        <img className={Styles.imagem} src={image} alt=''/>
                    </Link>
                <div style={{width:'100%'}}>
                    {/* titulo produto*/}
                    <div style={{display:'flex', justifyContent:'space-between', marginBottom:'8px'}}>
                        <Link  className={Styles.title} to={`/product/${id}`}>
                            {title}
                        </Link>
                
                        {/* botão para remover produto */}
                        <div onClick={() => removeFromCart(id)}
                        className={Styles.close}>
                            <MDBIcon fas icon="times" />
                        </div>
                    </div>
                    <div  className={Styles.contanier2}>
                    <div style={{display:'flex', columnGap:'8px', height:'36px'}}>
                        <div className={Styles.qtd}>
                            {/* Quantidade */}
                                {/* Icone de menos */}
                            <div onClick={() => decreaseAmount(id)}
                            style={{cursor:'pointer', fontSize:'12px', flex:'1 1 0%'}}>
                                <MDBIcon fas icon="minus" />
                            </div>
                            {/* amount */}
                            <div style={{fontSize:'15px', height:'100%', display:'flex', alignItems:'center', padding:'10px' }}><strong>{amount}</strong></div>
                            {/* Icone de mais */}
                            <div onClick={() => increaseAmount(id)}
                            style={{cursor:'pointer', fontSize:'12px', flex:'1 1 0%'}}>
                                <MDBIcon fas icon="plus" />
                            </div>
                        </div>
                    </div>
                    {/* Preço Produto */}
                    <div style={{color:'grey'}}>R$ {price}</div>
                    {/* Preço final do produto*/}
                    <div>{`R$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default CartItem;