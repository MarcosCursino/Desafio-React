import React, { Component } from 'react';
import api from '../../services/api';

import{ Container } from "./styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem('mytoken');
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await api.get('/api/v1/auth/users');
    this.setState({ users: response.data.data });
  }

 
  render() {
    
    const { users } = this.state;

    return (
      <Container>
        
        <h1>Usuários</h1>
       
        {users.map((item) => (
          <ul key={item.id}>
              <strong>
                {item.username}
              </strong>
              <span>
                {item.email}
              </span>
          </ul>
        ))}
     
      </Container>
     
    );
  };
};