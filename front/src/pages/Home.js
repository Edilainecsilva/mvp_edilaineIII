
import { useContext } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import Product from '../components/Product';
import { ProductContext } from '../contexts/ProductContext'
import img6 from '../assets/img6.png'
import banner1 from '../assets/banner1.png'

//import Carousel from '../components/galery/Carousel';



export default function Home() {
    // get produtos from product context
    const { products } = useContext(ProductContext);
    console.log(products);
    //get somente categoria de homens e mulheres
    const filteredProducts = products.filter((item) => {
        return ( item.category === "men's clothing" || item.category === "women's clothing"
        );
    });
    
    return (
        <div><br></br><br></br>
            <section>
                <img src={banner1} alt='banner1' style={{maxWidth:"100%", paddingTop:"10px", height: "auto", display:"block"}}/>
            </section>

            <section>
                <div >
                    {filteredProducts.map((product) => {
                        return  <Product product={product} key={product.id} />;
                    })}
                    
                    <MDBBtn outline className='mx-2' color='secondary'>
                            ver mais +
                    </MDBBtn><br></br><br></br>
                </div>
            </section>

            <section>
                <img src={img6} alt="imagem de roupas" style={{maxWidth:"90%", height: "auto", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
            </section><br></br>
        </div>
    )
}