import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import styled from 'styled-components';
import libras from './img/libras.png';
import londres from './img/londres.png';


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

const ImgLibras = styled.div`
  height: 15vh;
  width: 70%;  
  margin: auto;  
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${libras}); 
  background-size: 100% 100%;
  @media screen and (max-width:480px) {
    height: 8vh; 
  }

`
const ImgLondres = styled.div`
  height: 22vh;
  width: 100%;  
  margin: auto;  
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${londres}); 
  background-size: 100% 100%;
  @media screen and (max-width:480px) {
    height: 8vh; 
  }
`
const ConversorLibrasReal = () =>  {
const [librasValor, setLibrasValor] = useState([])
const [valorReal, setValorReal] = useState (0)
const comprarLibra = (parseFloat(librasValor.bid).toFixed(2));
const alta = (parseFloat(librasValor.high).toFixed(2));
const baixa = (parseFloat(librasValor.low).toFixed(2));
const venderEuro = (parseFloat(librasValor.ask).toFixed(2));
const variacao = (parseFloat(librasValor.varBid).toFixed(2));
const pctChange = (parseFloat(librasValor.pctChange).toFixed(2));
const resultado = (parseFloat(valorReal * comprarLibra).toFixed(2));

  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/GBP-BRL').then(response => {
      
      setLibrasValor(response.data.GBP)     
    })
  }, [setLibrasValor]);  
  
  return (
    <Container>
      <ImgLibras/>
      <Nome>
        <h1>Libra</h1>        
      </Nome>
      <DivResult>
        <h1>R$ {resultado}</h1>
      </DivResult>
      <DivAgora>
        <h3>£ 1 = R$ <strong>{comprarLibra}</strong></h3>
      </DivAgora>
      <MinMax>
        <p> Máx. R$ {alta} Mín. R$ {baixa}</p>
        <p>vender R$ {venderEuro}</p>    
        {pctChange > 0 ? <p> Var. R$ {variacao} = + {pctChange}%</p> : <p> Var. R$ {variacao} = {pctChange}%</p>}
      </MinMax>
      <DivInput>
        <form  noValidate autoComplete="off">      
          <TextField type="number" id="outlined-basic" label="£" variant="outlined" onChange={e => setValorReal(e.target.value)}/>
        </form>       
      </DivInput>
      <ImgLondres/>      
    </Container>
  )
}

export default ConversorLibrasReal;

