import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import dolar from './img/dolar.png'

const Container = styled.div`
  background-color: #fcfa96;
  padding: 3%;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  display:grid;
  grid-template-areas: "nome nome";                        
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 8vw 3vw 5vw 3vw 5vw;
  text-align: center;
  color:black;
`
const Nome = styled.div`
  background-color: #c0d9e0;
  grid-area: nome;
  margin-bottom: 8%;  
`

const DivAgora = styled.div`
  margin-top: -8%;  
`

const DivInput = styled.div`
  margin-top: -7%;
  input{
    padding: 5%;
  }
`

const DivResult = styled.div`
  background-color: #c0d9e0;
`

const MinMax = styled.div`
  background-color: #c0d9e0;    
`

const Porcent = styled.div`
  background-color: #c0d9e0;
`

const ImgDolar = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${dolar});
  background-size: cover;    
`

const ConversorDolarReal = () =>  {

const [dolarValor, setDolarValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const comprarDolar = (parseFloat(dolarValor.bid).toFixed(2));
const alta = (parseFloat(dolarValor.high).toFixed(2));
const baixa = (parseFloat(dolarValor.low).toFixed(2));
const venderDolar = (parseFloat(dolarValor.ask).toFixed(2));
const variacao = (parseFloat(dolarValor.varBid).toFixed(2));
const pctChange = (parseFloat(dolarValor.pctChange).toFixed(2));
const resultado = (parseFloat(valorReal * comprarDolar).toFixed(2));

  useEffect(() => {
  axios.get('https://economia.awesomeapi.com.br/json/all/USD-BRL').then(response => {
  console.log(response.data)
  setDolarValor(response.data.USD)     
  })
  }, [setDolarValor]);  

  return (
    <Container>
      <Nome>
        <h1 className="nome">Dólar Americano</h1>        
      </Nome>
      <DivAgora>
        <h3>Agora: R$ <strong>{comprarDolar}</strong></h3>
      </DivAgora>
      <DivInput>
        <input type="text" placeholder="Digite aqui o valor em Dolar" onChange={e => setValorReal(e.target.value)} ></input>
      </DivInput>
      <DivResult>
        <h1>R$ {resultado}</h1>
      </DivResult>
      <MinMax>
        <p>Máx. R$ {alta}</p>
        <p>Mín. R$ {baixa}</p>
      </MinMax>
      <p>vender R$ {venderDolar}</p>
      <p>Variação R$ {variacao}</p>
      <Porcent>
        <p>Porc. da variação  {pctChange}%</p>
      </Porcent>
      <ImgDolar></ImgDolar>
    </Container>
  )
}

export default ConversorDolarReal;


