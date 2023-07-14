import React, { useState } from 'react';
import Footer from '../Footer';
import InfoSection from '../InfoSection';
import { homeObjCdc, homeObjDescC, homeObjDesign, homeObjProg } from '../InfoSection/Data';
import NavbarBTS from '../NavBarBTS';
import SideBarProject from '../SideBarKura';
import { ImageContainer, ImageItem, ImageWrapper } from './BtsElement';
import GameMenu from '../../images/CEC.PNG';
import p from '../../images/CES.PNG';
import men from '../../images/CECE.PNG';
import mess from '../../images/Messagerie.PNG';

const BTS = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<SideBarProject isOpen={isOpen} toggle={toggle} />
			<NavbarBTS toggle={toggle} />
			<InfoSection {...homeObjDescC} />
			<InfoSection {...homeObjCdc} />
			<InfoSection {...homeObjProg} />
			<InfoSection {...homeObjDesign} />
			<ImageContainer id="img">
				<ImageWrapper>
					<ImageItem src={GameMenu} />
					<ImageItem src={p} />
					<ImageItem src={men} />
					<ImageItem src={mess} />
				</ImageWrapper>
			</ImageContainer>
			<Footer></Footer>
		</>
	);
};

export default BTS;
