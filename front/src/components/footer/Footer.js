import { Link } from 'react-router-dom'
import logo1 from './logo1.png'

import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import Styles from '../footer/Footer.module.css'

export default function Footer () {
    
    return (
        
        <div>
        <div className={Styles.footer}>
            <section>
                <div className={Styles.footer_box}>
                    <div className={Styles.logo}>
                        <Link className={Styles.menu} to={"/"}>
                            <img src={logo1} alt="logo1" height={100} width={100} />
                        </Link>
                    </div>
                    <p className={Styles.footer_p}>Lorem ipsum dolor sit amet consectetur. 
                        Nec mattis dui sit massa accumsan ultricies. Lectus odio egestas at fames. 
                    </p>
                </div>
            </section>

            <section className={Styles.footer_box}>
                <div className={Styles.footer_menu}>
                    <h2>ESTORE</h2>
                    <Link className={Styles.menu} to={"/"}>Home</Link>
                    <Link className={Styles.menu} to={"/estore"}>EStore</Link>
                    <Link className={Styles.menu} to={"/contact"}>Atendimento</Link>
                </div>      
            </section>

            <section className={Styles.footer_box}>
            <h2>NOS SIGA NAS REDES SOCIAIS</h2><br></br>
                <div className={Styles.footer_social}>
                    <div>
                    <MDBBtn size='lg' floating style={{ backgroundColor: 'black' }} href='#'>
                        <MDBIcon fab icon='facebook' />
                    </MDBBtn>
                    </div>
                    <div>
                    <MDBBtn size='lg' floating style={{ backgroundColor: 'black' }} href='#'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>
                    </div>
                    <div>
                    <MDBBtn size='lg' floating style={{ backgroundColor: 'black' }} href='#'>
                        <MDBIcon fab icon='linkedin' />
                    </MDBBtn>
                    </div>
                </div>
            </section>

            <section className={Styles.footer_box}>
                <div>
                    <h2>CONTATO</h2><br></br>
                    <p>Rua Alberto Hungria, 151, Paraíso-SP</p>
                    <p>adm@estore.com</p>
                    <p>(11) 9256-4563</p>
                </div>
            </section>

        </div>

            <footer>
                <p style={{color: "white"}}> © 2000-2023 Copyright: EStore.com </p>
            </footer>

        </div>
    )
}
