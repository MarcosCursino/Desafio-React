import React, { useState } from 'react';

import api from '../../services/api'



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  

async function handleSubimit(event) {
  event.preventDefault();

  const options = {
    method: 'post',
    url   : '/api/v1/auth/login',
    data  : {
      email,password }
  };

   
  const response = await api(options).then(resp => {

    const { data } = resp
    if(data) { 
      localStorage.setItem('mytoken', data.data.token)
    }
});

}

    
      // console.log('Logado, seu Token de acesso: ',response.data.data.token);




  return (
    <>
    <form onSubmit={(e) => handleSubimit(e)}>
     <label htmlFor="email">E-mail</label>
      <input type="email"
      placeholder="Seu E-mail"
      onChange={event => setEmail(event.target.value)}
     
  
      />

      <label htmlFor="password">Senha</label>
      <input type="password"
      placeholder="Sua senha"
      onChange={event => setPassword(event.target.value)}
      
      
      />
      <button className= "btn" type="submit" >Logar</button>
    </form>
    </>
  );
 }