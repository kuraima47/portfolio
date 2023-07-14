import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const NavbarProject = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 10) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};
	//à essayé d'intégrer un jour ou l'autre : https://codepen.io/cobra_winfrey/pen/mdGBGEO
	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to="/" onClick={toggleHome}>
							Portfolio
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks href="/kuraproject" iskura={true}>
									Kura 2048
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks href="/btsproject">Ma Classe Entrem&ecirc;l&eacute;e</NavLinks>
							</NavItem>
						</NavMenu>
						<NavBtn>
							<NavBtnLink to="/contact">Contact</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};
export default NavbarProject;
