import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import dolarcad from './img/dolarcad.png';
import canada from './img/canada.png';

const Container = styled.div` 
  min-height: 70%;
  background-color: #E3E8F0;
  padding: 1%;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);  
  text-align: center;
  color:black;  
`
const Nome = styled.div`    
  
`
const DivAgora = styled.div`
    
`
const DivInput = styled.div`
  margin: 2%;
  input{ 
   
  }
  @media screen and (max-width:480px) {
    margin-top: -14%;
    input{
      width: 60%;
      padding: 10%;
    }
  }
`
const DivResult = styled.div`  
  font-size: 1em;
  width:80%;
  height: 6vh;
  margin: auto;
  background-color: #F9F1F0;
  @media screen and (max-width:480px) {
    margin-top: -8%;
  }
`
const MinMax = styled.div`  
  font-size: 0.8em;    
`
const ImgDolarCad = styled.div`
   height: 15vh;
  width: 70%;  
  margin: auto;  
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${dolarcad}); 
  background-size: 100% 100%;
  @media screen and (max-width:480px) {
    height: 8vh; 
  }
`
const ImgCad = styled.div`
  height: 22vh;
  width: 100%;  
  margin: auto;  
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${canada}); 
  background-size: 100% 100%;
  @media screen and (max-width:480px) {
    height: 8vh; 
  }
  `

const ConversorDolarCadReal = () =>  {
const [dolarCadValor, setdolarCadValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const comprarDolarCad = (parseFloat(dolarCadValor.bid).toFixed(2));
const alta = (parseFloat(dolarCadValor.high).toFixed(2));
const baixa = (parseFloat(dolarCadValor.low).toFixed(2));
const venderDolarCad = (parseFloat(dolarCadValor.ask).toFixed(2));
const variacao = (parseFloat(dolarCadValor.varBid).toFixed(2));
const pctChange = (parseFloat(dolarCadValor.pctChange).toFixed(2));
const resultado = (parseFloat(valorReal * comprarDolarCad).toFixed(2)); 

  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/CAD-BRL').then(response => {
      
      setdolarCadValor(response.data.CAD)     
    })
  }, [setdolarCadValor]);  

  return (
    <Container>
    <ImgDolarCad/>
      <Nome>
        <h1>Dólar Canadense</h1>        
      </Nome>
      <DivResult>
        <h1>R$ {resultado}</h1>
      </DivResult>
      <DivAgora>
        <h3>C$ 1 = R$ <strong>{comprarDolarCad}</strong></h3>
      </DivAgora>
      <MinMax>
        <p> Máx. R$ {alta} Mín. R$ {baixa}</p>
        <p>vender R$ {venderDolarCad}</p>    
        {pctChange > 0 ? <p> Var. R$ {variacao} = + {pctChange}%</p> : <p> Var. R$ {variacao} = {pctChange}%</p>}
      </MinMax>
      <DivInput>
        <form  noValidate autoComplete="off">      
          <TextField type="number" id="outlined-basic" label="C$" variant="outlined" onChange={e => setValorReal(e.target.value)}/>
        </form>       
      </DivInput>
      <ImgCad/>      
    </Container>
  )
}

export default ConversorDolarCadReal;


