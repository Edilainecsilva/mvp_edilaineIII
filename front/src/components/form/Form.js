import React from 'react';
import { useState } from "react";
import axios from 'axios';
import Styles from '../form/Form.module.css'


export default function Form() {

  // Modelo (JSON)
  const [data, setData] = useState({
    nome: '',
    email: '',  
    telefone: '',
    data: '',
    msg: '',
  })


  const handleSubmit = async (e) => {
    e.preventDefault();
    
      //transformando um objeto em Formdata
      const formData = new FormData();
      formData.append('nome', data.nome);
      formData.append('email', data.email);
      formData.append('telefone', data.telefone);
      formData.append('data', data.data);
      formData.append('msg', data.msg);

      //metódo POST para enviar dados (mensagens) para a api, utilizando axios
      axios.post('http://127.0.0.1:5000/mensagem', formData)
      .then((response) => {
          console.log('Correto', response.data)
          alert('Mensagem enviada com sucesso!')
          window.location.href = ('http://localhost:3000/contact')
      }).catch((error) => {
       console.log(error)
       alert('Não foi possível enviar a mensagem, por favor tente novamente')
      })
    }

      const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
      }
    

  return (
    <div className={Styles.form}>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Nome Completo</label>
          <input type='text' name='nome' placeholder='Seu nome completo'
            value={data.nome}
            onChange={handleChange} 
            required
          />

          <label>E-mail</label>
          <input type='email' name='email' placeholder='exemplo@gmail.com' 
            value={data.email}
            onChange={handleChange}
            required
          />

          <label>Telefone</label>
          <input type='tel' name='telefone' placeholder='11956989969' 
            value={data.telefone}
            onChange={handleChange}
            required
          />

          <label>Data</label>
          <input type='date' name='data' 
            value={data.data}
            onChange={handleChange}
            required
          />

          <label>Mensagem</label>
          <textarea type='textarea' name='msg' placeholder='Mensagem' 
            value={data.msg}
            onChange={handleChange}
            required
          />

        <br></br><br></br>
        
          <button>ENVIAR</button>
          
        </form>
      </section>

    </div>
  );
}