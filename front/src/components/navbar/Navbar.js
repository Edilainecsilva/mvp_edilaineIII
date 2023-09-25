import { Link } from 'react-router-dom'
import logo from './logo1.png'
import { useContext } from 'react'
import { SidebarContext } from '../../contexts/SidebarContext'
import {MDBIcon} from 'mdb-react-ui-kit';

import Styles from '../navbar/Navbar.module.css'
import { CartContext } from '../../contexts/CartContext';

export default function Navbar () {
    const {isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext)

    return (
        <header className={Styles.header}>
            <div className={Styles.logo}>
            <Link className={Styles.menu} to={"/"}>
                <img src={logo} alt="logo1"/>
            </Link>
            </div>
            <div className={Styles.display_menu}>
                
                <Link className={Styles.menu} to={"/"}>Home</Link>
                <Link className={Styles.menu} to={"/estore"}>EStore</Link>
                <Link className={Styles.menu} to={"/contact"}>Atendimento</Link>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} style={{cursor:'pointer', display:'flex'}}>
              
              <div style={{margin:'8px'}}>  <MDBIcon fas icon="shopping-bag" /> </div>
                <div className={Styles.amount}>{itemAmount}</div>
            </div>
        </header>
    )
}