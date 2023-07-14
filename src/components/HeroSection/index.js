import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const Hero = () => {
	const [hover, setHover] = useState(false);
	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Thibault Pottier</HeroH1>
				<HeroP>
					&Eacute;tudiant en Licence G&eacute;n&eacute;rale Informatique ainsi qu'en Alternance,
					<br />
					Je suis actuellement en Poste chez Atout-D&eacute;lice dans la région Lyonnaise.
					<br />
					Mon établissement s'y trouve également.
					<br />
					Désormais j'&eacute;l&egrave;ve mes r&ecirc;ves plus haut pour toujours vis&eacute; plus loin et atteindre mes objectifs.
				</HeroP>
				<HeroBtnWrapper>
					<Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" primarybtn="true" smooth={true} duration={500} spy={true} exact="true">
						Get Started {hover ? <ArrowForward /> : <ArrowRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
