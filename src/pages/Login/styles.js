import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
  export const Form = styled.form`
  width: 300px;
  height: 280px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
 

  input {

    border: 1px solid #eee;
    padding: 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 20px;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    margin-top: 30px;
  }
`;