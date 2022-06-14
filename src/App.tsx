import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { css, Global } from '@emotion/react'
import background from './img/layered-waves-haikei.svg'
import RecipeCard from './components/recipecard'
import { Container } from '@mui/material'
import { useEffect, useState } from 'react';

function App() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get('https://heroku-learning-favorites.herokuapp.com/recipe').then(res => {
      console.log(res.data)
      setRecipes(res.data);
    });
  }, [])
  return (
    <RootLayer>
      <Global styles={GlobalStyle} />
      <Container sx={{ marginTop: "8rem", display: "flex" }}>
        {recipes.map((recipe: { id: number, title: string, imageUrl: string, originurl: string, recipeIngredients: Object }) => {
          return (<RecipeCard imageUrl={recipe.imageUrl} originUrl={recipe.originurl} title={recipe.title} recipeIngredients={recipe.recipeIngredients}> </RecipeCard>)
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
