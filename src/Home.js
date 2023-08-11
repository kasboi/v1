
import styled from "styled-components";
import { device } from "./components/styles/Media";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  margin: auto 1.5rem;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;

  @media ${device.tablet}{
    margin: auto 1rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  @media ${device.mobileL}{
    margin: auto .4rem;
  }
`

const TxtContainer = styled(motion.div)`
  display: block;
  max-width: 55%;
  color: ${({theme}) => theme.font.primaryText};

  @media ${device.tablet}{
    max-width: 100%;
    margin-bottom: 2rem;
    text-align: left;
  }
  @media ${device.mobileL}{
    text-align: left;
  }

  h1 {
    color: ${({theme}) => theme.logo.color};
    font-size: 3rem;
    letter-spacing: .06em;
    margin-bottom: .5rem;
  }
  h4 {
    font-weight: 500;
    font-size: 1.45rem;
    margin-bottom: 1.3rem;

    @media ${device.mobileL} {
      font-size: 1rem;
    }
  }
  p {
    font-weight: ${({theme}) => theme.font.fontWeight};
    margin: .5rem 0;

    @media ${device.tablet}{
    line-height: normal;
    }
    @media ${device.mobile}{
      font-size: .9rem;
    }
  }
`
const ImgContainer = styled(motion.div)`
  position: relative;
  border: 2px solid ${({theme}) => theme.logo.color};
  height: 15rem;
  width: 14rem;
  border-radius: 5px;

  @media ${device.tablet}{
    margin: 0 auto;
  }

  .display__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`
const Home = () => {

  return (
    <Container> 
      <TxtContainer>
        <h1>Hello,{device.tablet ? <br /> : ''} I'm KAS</h1>
        <h4>Kolawole Abdullah Solahudeen</h4>
        <p>I specialize in creating front-end solutions using simple and reusable components, which results in fluid designs and intuitive user experiences. My passion for clean code brings joy to my work. I enjoy exploring technology, manga, anime, and music when not working.</p>
        <p>Let's work together to bring your vision to life! I am available for both contract and full-time remote positions.</p>
      </TxtContainer>
      <ImgContainer
      initial={{opacity: 0}}
      animate={{opacity: 1, 
        transition: {delay: 1, duration: 1, ease: 'easeIn'}}}
      >
        <motion.img src="img/kasSelfie.jpeg" alt="my selfied" className="display__img" 
          initial={{x: -18, y: -18}}
          whileHover={{x: 0, y: 0, transition: {ease: 'easeInOut'}}}
          whileTap={{x: 0, y: 0, transition: {ease: 'easeInOut'}}}
        />
      </ImgContainer>
    </Container>
   )
}
 
export default Home;