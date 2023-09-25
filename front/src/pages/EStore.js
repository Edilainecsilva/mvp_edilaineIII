import Circle from '../components/Circle'
import Paragraph from '../components/layout/Paragraph'
import banner4 from '../assets/banner2.png'

export default function Estore () {
    
    return (
        <div>
            <section>
                <div>
                    <h1 style={{fontWeight: 'bold', color: 'black'}}>Sobre EStore</h1><br></br>
                    <img src={banner4} alt='imagem de modelos com as roupas da loja' style={{maxWidth:"100%", height: "auto"}}></img>
                </div>
            </section>

            <section>
                <div>
                    <Paragraph />
                </div>
            </section>

            <section>
                <div>
                    <div>
                        <Circle />
                    </div>
                </div>
            </section>
        </div>
    )
}
