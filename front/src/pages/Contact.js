import Form from "../components/form/Form"
import Styles from '../pages/Contact.module.css'
import { useState, useEffect } from 'react';

import axios from 'axios';
import { MDBBadge } from 'mdb-react-ui-kit';


export default function Contact() {

    const [mesageList, setMesageList] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/mensagens')
            .then(res => setMesageList(res.data.mensagens))
            .catch(error => console.log(error))
    }, [])
    
     const handleDelete = (id, e) =>{
        e.preventDefault();
        if(window.confirm('Você deseja exlcluir essa mensagem?')) {
            axios.delete(`http://127.0.0.1:5000/mensagem?id=${id}`)
            .then((response) => {
                console.log('Deletada!', response)
                alert('Mensagem deletada com sucesso!')
                window.location.href = ('http://localhost:3000/contact')
            }).catch(error => console.log(error))
        }
    }
    
    return (
    <div>
        <div className={Styles.contanier}>
                <div>
                    <h5 style={{paddingTop:'80px', fontWeight:'bold', textAlign:"center"}}>Deixe sua mensagem, entre em contato conosco:</h5>
                        <Form />
                </div>
                <div className={Styles.footer_box}>
                    <h2>CONTATO</h2><br></br>
                    <p><strong>Endereço: </strong>Rua Alberto Hungria, 151, Paraíso-SP</p>
                    <p><strong>E-mail: </strong>adm@estore.com</p>
                    <p><strong>Telefone: </strong>(11) 9256-4563</p>
                    <p><strong>Telefone: </strong>(11) 3256-6598</p>
                </div> 
                </div>
                <div style={{marginBottom: '70px'}}>
            <div><h1 style={{fontWeight: 'bold', color: 'black', margin: '40px'}}>Perguntas e mensagens frequentes</h1></div>
            <section style={{width:'80%', margin:'0px auto'}}>
                {mesageList.map((mensagem) => {
                    return (
                        <div key={mensagem.id} className={Styles.contanier2}>
                            <div>
                                <div className='ms-3'>
                                    <p className='fw-bold mb-1' style={{textTransform:'uppercase'}}>{mensagem.nome}</p>
                                    <p>{mensagem.data_insercao}</p>
                                    <p>{mensagem.msg}</p>

                                </div >
                                <div style={{textAlign:'center'}}>
                                {/* botão para remover mensagem */}
                                <MDBBadge color='danger' light 
                                    style={{ padding:'10px'}}
                                        onClick={(e)=>{handleDelete(mensagem.id, e)}}>
                                    DELETAR
                                </MDBBadge>
                                </div>
                            </div>
                        </div>
                        ) //Final do Return
                        
                    })}
            </section>    
            </div>
        </div>    
    )
}