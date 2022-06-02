import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { css, Global } from '@emotion/react'
import background from './img/layered-waves-haikei.svg'
import StreamerCard from './components/streamercard'
import { Container } from '@mui/material'
import { useEffect, useState } from 'react';

function App() {
  const [streamer, setStreamer] = useState([])
  useEffect(() => {
    axios.get('https://heroku-learning-favorites.herokuapp.com/recipe').then(res => {
      setStreamer(res.data);
    });
  }, [])
  return (
    <RootLayer>
      <Global styles={GlobalStyle} />
      <Container sx={{ marginTop: "8rem", display: "flex" }}>
        {streamer.map((singleStreamer: { firstName: string; lastName: string; twitchName: string }) => {
          return (<StreamerCard firstName={singleStreamer.firstName} lastName={singleStreamer.lastName} />)
        })}
      </Container>
    </RootLayer>
  );
}

const RootLayer = styled.div``

const GlobalStyle = css`
  body {
    background-image: url(${background});
    background-size: cover;
  }
`

export default App;
