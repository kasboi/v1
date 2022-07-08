import styled from "styled-components";
import { device } from "./Media";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
  width: 90vw;
  background-color: ${({theme }) => theme.modal.primaryColor};
  position: absolute;
  top: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity .35s ease-in-out;
  z-index: 98;

  @media ${device.tablet} {
    padding: 3rem 2rem;
  }

  &.open {
    visibility: visible;
    opacity: 1;
    padding: 3rem 4rem;
    margin: -1rem 0;
    height: auto;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({theme }) => theme.modal.secondaryColor};
  margin: 1.5rem auto;
  overflow: hidden;
  border-radius: .35rem .35rem 0 0;

    @media ${device.tablet} {
      max-width: 30rem;
    }

  .shazam {
    height: 15rem;
    animation: 600ms linear infinite alternate skeleton
  }

  .imgContainer {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes skeleton {
      0% {
        background-color: ${({theme}) => theme.font.primaryText};
      }
      100% {
        background-color: ${({theme}) => theme.font.secondaryText};
      }
    }
  }

  .card_details {
    color: ${({theme }) => theme.font.primaryText};
    padding: .5rem 1.5rem 1rem 1.5rem;

    * {
      margin-bottom: .6rem;
    }
  }
`
export const ModalStyle = { Container, Card }
