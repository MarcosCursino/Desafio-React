import styled from "styled-components";

export const Container = styled.div`
 max-width: 500px;
 margin: 50px auto;

 display: flex;
 flex-direction: column;

 ul {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 15px;
   margin-top: 30px;

 }
 h1{
   display: flex;
   justify-content: center;
   flex-direction: center;
   font-size: 34px;
   color: #fff;
 }
 strong{
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 3px;
  line-height: 30px;
 }

 span{
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 3px;
  line-height: 30px;
  font-weight: bold;
 }
 button {
    color: #000;
    font-size: 16px;
    background: #fff;
    height: 46px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    margin-top: 30px;
  
 }
`;