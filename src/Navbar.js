import { useState, useContext } from 'react';
import Modal from './Modal';
import { Link } from "react-router-dom";
import NavStyle from './components/styles/Navbar.style';
import { propContext } from './App';

const {Container, Nav, SwitchContainer, Switch, Logo, Menu, Stick} = NavStyle


const Navbar = ({ theme, invertTheme, setHere}) => {
  const {open, setOpen, modal, setModal, switched, setSwitched} = useContext(propContext)
  
  const Flick = () => {
    if (switched == '') {
      setSwitched('switched')
      setHere(invertTheme)
    } else {
      setSwitched('')
      setHere(theme)
    }
  }


  return (
    <div> 
      <Nav>
        <Link to="/" style={{
          marginRight: "auto"
        }}><Logo alt='logo'/>
        </Link>
        <Container>
          <SwitchContainer onClick={() => Flick()}>
            <ion-icon name="sunny-outline" className="switch"></ion-icon>
            <Switch>
              <span className={switched} ></span>
            </Switch>
            <ion-icon name="moon-outline" className="switch"></ion-icon>
          </SwitchContainer>
          <Stick />
        </Container>
        <Menu className={open} 
        onClick={() => {
          if (open == '') {
            setOpen('open')
            setModal('open')}
          else {
            setOpen('')
            setModal('')}
          }}>
            <span></span>
            <span></span>
            <span></span>
        </Menu>
      </Nav>
      <Modal modal={modal} setModal={ setModal } setOpen={ setOpen } />
    </div>
  );
}
 
export default Navbar;