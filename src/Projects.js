import styled from "styled-components";
import { device } from "./components/styles/Media";
import { motion } from "framer-motion";

import style from "./components/styles/Projects.module.css"
import { TiFolder, TiLink, TiSocialGithub } from "react-icons/ti";

const Container = styled(motion.div)`
  max-width: 85%;
  margin: 0 auto;
  z-index: -100;
  color: ${({theme}) => theme.font.secondaryText};

  @media ${device.tablet} {
    padding: 1.5rem;
  }
  
  .project__heading {
    position: relative;
    font-weight: 500;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: ${({theme }) => theme.logo.color};
  }
`
const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem 0;
`
const Box = styled.div`
  padding: 1.35rem 1.5rem;
  flex: 0 1 33%;
  border-radius: 5px;
  border: 2px solid gray;

  @media ${device.tablet} {
    flex: 0 1 45%;
  }
  @media ${device.mobileL} {
    flex: 0 1 100%;
  }
  
`
const projectData = [
  {
    live_link: "https://guitarclub.netlify.app/",
    git_link: "#",
    project_name: "Guitar Club",
    project_desc: "A small responsive website i made early on while fiddling with the intricacies of SCSS.",
    language: ["Javascript","HTML","SCSS"]
  },
  {
    live_link: "https://codepen.io/kolawole-abdullah-solahudeen/pen/BaJzjoN",
    git_link: "#",
    project_name: "Tic-Tac game",
    project_desc: "A simple 3x3 tic-tac toe game.",
    language: ["Javascript","HTML","CSS"]
  },
  {
    live_link: "https://kas-notesapp.netlify.app/",
    git_link: "#",
    project_name: "Task Keeper",
    project_desc: "A todo list project made with Materialize and firebase services (authentication and database).",
    language: ["Javascript","HTML","Firebase", "Material UI"]
  },
  {
    live_link: "https://ecstatic-volhard-ea4bc9.netlify.app/",
    git_link: "#",
    project_name: "Ace Blog",
    project_desc: "A simple blog that consumes API and uses it to display various news articles.",
    language: ["Javascript","HTML","CSS"]
  },
  {
    live_link: "https://codepen.io/kolawole-abdullah-solahudeen/pen/dyJXGGa/",
    git_link: "#",
    project_name: "Calculator",
    project_desc: "A simple calculator.",
    language: ["Javascript","HTML","CSS"]
  },
]

const Projects = () => {
  return (
    <Container
      initial={{y: 40, opacity: 0}}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {delay: .2,ease: 'easeIn'}
      }}
      viewport={{once: true}}
    >
      <h3 className="project__heading">Projects</h3>
      <BoxContainer>
        {projectData.map(data => (
          <Box>
            <div className={style.box__icons}>
              <TiFolder style={{fontSize: '4rem', marginRight: 'auto'}}/>
              <a href={data.live_link} rel="noreferrer" target="_blank">
                <TiLink style={{fontSize: '2.5rem'}}/>
              </a>
              <a href={data.git_link} rel="noreferrer">
                <TiSocialGithub style={{fontSize: '2.5rem'}}/>
              </a>
            </div>
            <h2 className={style.box__heading}>{data.project_name}</h2>
            <p className={style.box__para}>{data.project_desc}</p>
            <ul className={style.box__footer}>
              {data.language.map(lang => (
                <li className={style.box__lang}>{lang}</li>
              ))}
            </ul>
          </Box>
        ))}
      </BoxContainer>
      
    </Container>
   );
}
 
export default Projects;