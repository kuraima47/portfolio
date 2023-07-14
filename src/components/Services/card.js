import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElement';

const Card = ({ name, button, desc, isFlipped, handle, iconCard }) => {
	return (
		<>
			<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
				<ServicesCard onClick={handle}>
					<ServicesIcon src={iconCard} />
					<ServicesH2>{name}</ServicesH2>
					<ServicesP> {button} </ServicesP>
				</ServicesCard>

				<ServicesCard onClick={handle}>
					<ServicesH2>{name}</ServicesH2>
					<ServicesP> {desc} </ServicesP>
				</ServicesCard>
			</ReactCardFlip>
		</>
	);
};

export default Card;
