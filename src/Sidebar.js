import styled from "styled-components";
import { device } from "./components/styles/Media";

const Leftdiv = styled.div`
  display: block;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 25px;
  right: auto;
  z-index: 10;

  @media ${device.tablet} {
    width: 20px;
    left: 8px;
  }
  @media ${device.mobileL} {
    width: 15px;
    left: 10px;
  }
`
const Rightdiv = styled.div`
  display: block;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 25px;
  z-index: 10;
  color: ${({theme}) => theme.font.secondaryText};

  @media ${device.tablet} {
    width: 20px;
    right: 10px;
  }
  @media ${device.mobileL} {
    width: 15px;
    right: 5px;
  }
`

const Sidebar = () => {
  return (
    <> 
    <Leftdiv>
      <ul className="logo-box">
        <li className="logo-box__container"><a href="https://github.com/kasboi" rel="noreferrer" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
        <li className="logo-box__container"><a href="https://www.instagram.com/kasthegeneral/" rel="noreferrer" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a></li>
        <li className="logo-box__container"><a href="#home"><ion-icon name="logo-twitter"></ion-icon></a></li>
        <li className="logo-box__container"><a href="https://www.linkedin.com/in/solahudeen-abdullah-987824126/" rel="noreferrer" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li className="logo-box__container"><a href="https://codepen.io/kolawole-abdullah-solahudeen" rel="noreferrer" target="_blank"><ion-icon name="logo-codepen"></ion-icon></a></li>
      </ul>
    </Leftdiv>

    <Rightdiv>
      <div className="text-box">
      <a href="mailto:solahudeen15@gmail.com">solahudeen15@gmail.com</a>
      </div>
    </Rightdiv>
    </>
  );
}
 
export default Sidebar;