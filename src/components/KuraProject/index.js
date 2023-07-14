import React, {useState} from 'react'
import Footer from '../Footer';
import InfoSection from '../InfoSection';
import { homeObjFive, homeObjFour, homeObjQrCode, homeObjSeven, homeObjSix } from '../InfoSection/Data';
import NavbarProject from '../NavBarPorject';
import SideBarProject from '../SideBarKura';
import { ImageContainer, ImageItem, ImageWrapper } from './KuraElement';
import GameMenu from '../../images/homeT.jpg'
import p from '../../images/page.jpg'
import men from '../../images/game.jpg'
const Kura = () => {
    const[isOpen, setIsOpen] = useState(false);
  
  const toggle = () =>{
      setIsOpen(!isOpen);
  };
  return (
    <>
            <SideBarProject isOpen={isOpen} toggle={toggle}/>
            <NavbarProject toggle={toggle}/>
            <InfoSection {...homeObjFour}/>
            <InfoSection {...homeObjFive}/>
            <InfoSection {...homeObjSix}/>
            <InfoSection {...homeObjSeven}/>
            <InfoSection {...homeObjQrCode} />
            <ImageContainer id="img">
                <ImageWrapper>
                    <ImageItem src={GameMenu}/>
                    <ImageItem src={p}/>
                    <ImageItem src={men}/>
                </ImageWrapper>
            </ImageContainer>
            <Footer></Footer>
    </>
  )
}

export default Kura;