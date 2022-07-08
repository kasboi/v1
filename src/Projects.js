import styled from "styled-components";
import { device } from "./components/styles/Media";

const Container = styled.div`
  padding: 0 4rem;
  z-index: -100;
  color: ${({theme}) => theme.font.secondaryText};

  @media ${device.tablet} {
    padding: 2rem;
  }

  .project__heading {
    position: relative;
    font-weight: 500;
    margin-bottom: 2rem;

    @media ${device.tablet} {
      margin-bottom: 6rem;
    }

    &::after {
      content: "";
      position: absolute;
      top: 45%;
      margin-left: 1rem;
      display: inline-block;
      height: 1px;
      width: 20rem;
      background-color: #dee2e6;
      opacity: .6;

      @media ${device.tablet} {
        width: 8rem;
      }
    }
  }
`
const Box = styled.div`
  margin: 2rem auto;
  max-width: 40rem;

  .box__title {
    display: inline-block;
    font-size: 1rem;
    position: relative;

    h3 {
      display: inline;
      font-weight: 500;
      margin-right: .35rem;
      transition: all .3s;
    }

    ion-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: ${({theme}) => theme.logo.color};
    }

    &:hover h3 {
      margin-right: 1rem;
    }
  }

  p {
      font-size: .85rem;
      margin: .5rem 0;
    }
`

const Decor = styled.span`
  display: inline-block;
  font-size: .7rem;
  font-weight: 500;
  margin-right: .6rem;
  padding: 2px .6rem;
  color: ${({theme}) => theme.logo.color};
  border: 1px solid ${({theme}) => theme.logo.color};
  border-radius: 3px;
`

const Projects = () => {
  return (
    <Container>
        <h2 className="project__heading">Some Things I've Built</h2>
        <Box>
          <div className="box__title">
            <h3><a href="https://guitarclub.netlify.app/" target="_blank">Guitar Club</a></h3>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <p>A small responsive website i made early on while fiddling with the intricacies of SCSS.</p>
          <div className="language">
            <Decor>Javascript</Decor>
            <Decor>HTML</Decor>
            <Decor>SCSS</Decor>
          </div>
        </Box>
        <Box>
          <div className="box__title">
            <h3><a href="https://codepen.io/kolawole-abdullah-solahudeen/pen/BaJzjoN" target="_blank">Tic-Tac game</a></h3>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <p>A simple 3x3 tic-tac toe game.</p>
          <div className="language">
            <Decor>Javascript</Decor>
            <Decor>HTML</Decor>
            <Decor>CSS</Decor>
          </div>
        </Box>
        <Box>
          <div className="box__title">
            <h3><a href="https://codepen.io/kolawole-abdullah-solahudeen/pen/dyJXGGa" target="_blank">Calculator</a></h3>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <p>A simple calculator.</p>
          <div className="language">
            <Decor>Javascript</Decor>
            <Decor>HTML</Decor>
            <Decor>CSS</Decor>
          </div>
        </Box>
        <Box>
          <div className="box__title">
            <h3><a href="https://kas-todo.netlify.app/" target="_blank">Task Master</a></h3>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <p>A todo list project made with Materialize and firebase services (authentication and database).</p>
          <div className="language">
            <Decor>Javascript</Decor>
            <Decor>HTML</Decor>
            <Decor>CSS</Decor>
            <Decor>Firebase</Decor>
            <Decor>Materialize</Decor>
          </div>
        </Box>
        <Box>
          <div className="box__title">
            <h3><a href="https://ecstatic-volhard-ea4bc9.netlify.app/" target="_blog">Ace Blog</a></h3>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <p>A simple blog that consumes API and uses it to display various news articles.</p>
          <div className="language">
            <Decor>Javascript</Decor>
            <Decor>HTML</Decor>
            <Decor>CSS</Decor>
          </div>
        </Box>
    </Container>
   );
}
 
export default Projects;