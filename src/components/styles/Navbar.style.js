import styled from 'styled-components';
import { device } from './Media';

const Logo = styled.img`
  content: ${({theme }) => theme.logo.img};
  display: inline-block;
  max-width: 3.5rem;
`

const Container = styled.div`
  display: block;
`

const Nav = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 2.5rem 4rem;
  font-family: ${({ theme }) => theme.font.fontFamily};
  z-index: 99;
  
  @media ${device.tablet} {
      padding: 2.5rem 0;
    }
  @media ${device.mobileL} {
    padding-top: 2rem 1rem 0 1rem;
  }
`

const NavStyle = {
  Container,
  Nav,
  Logo,
}
export default NavStyle