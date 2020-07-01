import React, { useState } from 'react';

import { history } from '../../history';
import api from '../../services/api';

import{ Form, Container } from "./styles";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubimit(event) {
    event.preventDefault();

     api.post('/api/v1/auth/login', {
       email,
       password,
     })
     .then(resp => {
      const { data } = resp;
      if (data)
      {
        localStorage.setItem('mytoken', data.data.token);
        history.push('/users');
      }
    });
  }
  

  return (
    <Container>
      <Form onSubmit={(e) => handleSubimit(e)}>
        <label htmlFor="email"></label>
        <input
          type="email"
          placeholder="Digite Seu E-mail"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          placeholder="Digite Sua senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </Form>
    </Container>
  );
}
