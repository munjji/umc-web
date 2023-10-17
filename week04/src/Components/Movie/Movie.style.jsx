import React, {useState} from "react";
import styled from 'styled-components';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/"; //베이직 path 경로를 선언해줌

const Container = styled.div `
backgorund-color: #22254b;

display: flex;            /*기본적으로 row이기 때문에 가로로 배치*/
flex-wrap: wrap;          /*다음 줄로 내려주기*/
justify-content: center;
`;

const EntireMovieBox = styled.div `
position: relative;
box-sizing: border-box;
height: 350px;
width: 170px;
background-color: #373b69;
color: white;
border-radius: 3px;
box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
margin: 15px;
border: none;
`;

const MoviePoster = styled.img `
max-width: 100%;
`;

const MovieInfo = styled.div `
display: flex;
padding: 15px;
justify-content: space-between;        /*양 끝으로 이동하도록*/
align-items: center;                   /*중간으로*/
font-size: 13px;
`;

const MovieOverviewBox = styled.div `
position: absolute;
box-sizing: border-box;
height: 350px;
width: 170px;
padding: 15px;
margin: 15px;
background-color: #05050590;
color: white;
box-shadow: 3px 3px 5px rgba(0,0,0,0.2);
border: none;
font-size: 12px;
`;

const MovieTitle = styled.h4`
`;

const MovieAverage = styled.span`
`;

const MovieOverviewText = styled.div `
`;

function MovieStyle({title, poster_path, vote_average, overview}) {
  const  [_style, setStyle] = useState({display : 'none'})

  return(
    <Container 
    onMouseEnter = { e=> { 
      setStyle({display: 'block'})
    }}
    onMouseLeave = { e=> {
      setStyle({display:'none'})
    }}
    >
      <EntireMovieBox>
        <MoviePoster src= {IMG_BASE_URL + poster_path} alt = "영화 포스터"/>
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MovieAverage>{vote_average}</MovieAverage>
        </MovieInfo>
      </EntireMovieBox>
      <MovieOverviewBox style = {_style}>
        <MovieTitle>{title}</MovieTitle>
        <MovieOverviewText>{overview}</MovieOverviewText>
      </MovieOverviewBox>
    </Container>
  )
}

export default MovieStyle