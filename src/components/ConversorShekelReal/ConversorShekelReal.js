import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import shekel from './img/shekel.png'

const Container = styled.div`
  background-color: #fcfa96;
  padding: 3%;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  display:grid;
  grid-template-areas: "nome nome";                        
  grid-template-columns: 0.9fr 1.3fr;  
  text-align: center;
  color:black;  
`
const Nome = styled.div`  
  background-color: #c0d9e0;
  grid-area: nome;
  margin-bottom: 8%;  
`
const DivAgora = styled.div`
background-color: #c0d9e0;
    
`
const DivInput = styled.div`
  margin-top: -16%;
  input{
    width: 60%;
    padding: 5%;
    margin: 2%;
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
  margin-top: -15%;
  font-size: 0.7em;
  @media screen and (max-width:480px) {
    margin-top: -8%;
  }
`
const MinMax = styled.div`
  background-color: #c0d9e0;
  font-size: 0.8em;    
`
const Porcent = styled.div`
  background-color: #c0d9e0;
`
const ImgShekel = styled.div`
  height: 14vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${shekel});
  background-size: cover;
  @media screen and (max-width:480px) {
    height: 8vh; 
  }

`

const ConversorShekelReal = () =>  {
const [shekelValor, setShekelValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const comprarShekel = (parseFloat(shekelValor.bid).toFixed(2));
const alta = (parseFloat(shekelValor.high).toFixed(2));
const baixa = (parseFloat(shekelValor.low).toFixed(2));
const venderShekel = (parseFloat(shekelValor.ask).toFixed(2));
const variacao = (parseFloat(shekelValor.varBid).toFixed(2));
const pctChange = (parseFloat(shekelValor.pctChange).toFixed(2));
const resultado = (parseFloat(valorReal * comprarShekel).toLocaleString('pt-BR')); 



  useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/YLS-BRL').then(response => {
      console.log("israel",response.data)
      setShekelValor(response.data.YLS)     
    })
  }, [setShekelValor]);  

  return (
    <Container>
      <Nome>
        <h1>Shekel Israelense</h1>        
      </Nome>
      <DivInput>
        <input type="number" maxLength="7" placeholder="Valor aqui" onChange={e => setValorReal(e.target.value)} ></input>
      </DivInput>
      <DivResult>
        <h1>R$ {resultado}</h1>
      </DivResult>
      <DivAgora>
        <h3>Agora: R$ <strong>{comprarShekel}</strong></h3>
      </DivAgora>
      <MinMax>
        <p>Máx. R$ {alta}</p>
        <p>Mín. R$ {baixa}</p>
      </MinMax>
        <p>vender R$ {venderShekel}</p>
        <p>Var. R$ {variacao}</p>
      <Porcent>
        <p>Variação {pctChange}%</p>
      </Porcent>
      <ImgShekel></ImgShekel>
    </Container>
  )
}

export default ConversorShekelReal;


