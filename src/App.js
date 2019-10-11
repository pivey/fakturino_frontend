import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'; 
import img1 from './assets/fakturinoimg_1.jpg'
import img2 from './assets/fakturinoimg_2.jpg'
import img3 from './assets/fakturinoimg_3.jpg'
import axios from 'axios';
const imgCarousel = [img1, img2, img3]
const random = Math.floor(Math.random(0)*3);

const AppHolder = styled.div`
    height:100vh;
    width:100vw;
    z-index:100; 
    background:url(${imgCarousel[random]}); 
    text-align: center;
    background-size: cover;
    background-position: 50% 50%;
    background-color: transparent;
    background-repeat: no-repeat;
`;

const WelcomeBtn = styled.button`
  padding:1rem;
  color:white;
  background:black;
  border: 2px solid white;
  font-weight:bold;
  font-size:2rem;
}
`;

const MessageHolder = styled.div`
  box-sizing:border-box;
  width:auto;
  height:auto;
  background:#ff8800;
  border:2px solid white;
  color:white;
  margin-top:1rem;
  padding:1rem;
  visibility:${props => props.showMe};
`;

function App() {
  const [divContent, setDivContent] = useState(''); 

  const clickHandle = () => {
    axios.get('https://fakturinotest.herokuapp.com/welcome')
    .then(res => setDivContent(res.data));
  }

  useEffect(() => {
  },[divContent]);
  
  return (
    <>
    <AppHolder>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <WelcomeBtn className='welcomeBtn' onClick={clickHandle} >Our vision</WelcomeBtn>
        <MessageHolder showMe={divContent === '' ? 'hidden' : 'visible'}>{divContent}</MessageHolder>
        <a
          className="App-link"
          href="https://www.fakturino.se/"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          Om Fakturino
        </a>
      </header>
    </AppHolder>
    </>
  );
}

export default App;
