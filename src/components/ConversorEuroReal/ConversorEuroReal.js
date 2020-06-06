import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import euro from './img/euro.png'

const Container = styled.div`
  background-color: #fcfa96;
  padding: 3%;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  display:grid;
  grid-template-areas: "nome nome";
  grid-template-columns: 1.7fr 1fr;  
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
  margin-top: -13%;
  input{
    width: 60%;
    padding: 5%;
  }
`

const DivResult = styled.div`
  margin-top: -8%;
  font-size: 0.7em;
`

const MinMax = styled.div`
  background-color: #c0d9e0;
  font-size: 0.8em;    
`

const Porcent = styled.div`
  background-color: #c0d9e0;
`

const ImgEuro = styled.div`
  height: 12vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
  background-color: #c0d9e0;
  background-image: url(${euro});
  background-size: cover;
    
`
const ConversorEuroReal = () =>  {

const [euroValor, setEuroValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const comprarEuro = (parseFloat(euroValor.bid).toFixed(2));
const alta = (parseFloat(euroValor.high).toFixed(2));
const baixa = (parseFloat(euroValor.low).toFixed(2));
const venderEuro = (parseFloat(euroValor.ask).toFixed(2));
const variacao = (parseFloat(euroValor.varBid).toFixed(2));
const pctChange = (parseFloat(euroValor.pctChange).toFixed(2));
const resultado = (parseFloat(valorReal * comprarEuro).toFixed(2));

    useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/EUR-BRL').then(response => {
    console.log(response.data)
    setEuroValor(response.data.EUR)     
    })
  }, [setEuroValor]);  

    return (
      <Container>
        <Nome>
          <h1 className="nome">Euro</h1>        
        </Nome>
        <DivResult>
          <h1>R$ {resultado}</h1>
        </DivResult>
        <DivInput>
          <input type="text" placeholder="Valor aqui" onChange={e => setValorReal(e.target.value)} ></input>
        </DivInput>
        <DivAgora>
          <h3>Agora: R$ <strong>{comprarEuro}</strong></h3>
        </DivAgora>
        <MinMax>
          <p>Máx. R$ {alta}</p>
          <p>Mín. R$ {baixa}</p>
        </MinMax>
          <p>vender R$ {venderEuro}</p>
          <p>Var. R$ {variacao}</p>
        <Porcent>
          <p>Porc. da variação  {pctChange}%</p>
        </Porcent>
        <ImgEuro></ImgEuro>
      </Container>
    )
  }

export default ConversorEuroReal;


