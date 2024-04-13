import styled from "styled-components";


export const MoviesWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
box-shadow: 1px 1px 15px 5px #007bff;
border-radius: 40px;


h1 {
margin-bottom: 2rem;
}


.movieCard {
display: flex;
justify-content: space-evenly;
align-items: flex-start;
flex-wrap: wrap;
}


.movie {
display: flex;
flex-direction: column;
align-items: center;
padding: 0;
margin: 10px;
}


.movieImg {
border-radius: 10px;
> img {
box-shadow: 1px 1px 15px 5px grey;
padding: 5px;
border-radius: 40px;
}
}


.movieInfo {
display: flex;
flex-direction: column;
align-items: center;


> h4 {
width: 230px;
text-align: center;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
margin-bottom: 0;
}


> p {
color: grey;
}
}


.buttons {
margin-top: 3rem;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
> button {
font-size: 15px;
background: #f76429;
border: none;
outline: none;
color: #fff;
font-size: 18px;
font-weight: 500;
padding: 4px 16px;
border-radius: 5px;
letter-spacing: 1px;
transition: all 0.3s ease-in-out;


&:hover {
background-color: #007bff;
cursor: pointer;
transform: scale(1.1);
}
}
}
`;