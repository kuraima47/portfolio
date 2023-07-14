import React, { useState } from 'react';
import Icon1 from '../../images/cpp.svg';
import Icon2 from '../../images/c.svg';
import Icon3 from '../../images/java.svg';
import Icon4 from '../../images/excel.png';
import Icon5 from '../../images/python.png';
import Icon6 from '../../images/html.png';
import Icon7 from '../../images/js.png';
import Icon8 from '../../images/css.png';
import Icon9 from '../../images/React.png';
import Icon10 from '../../images/php.png';
import { ServicesContainer, ServicesH1, ServicesWrapper } from './ServicesElement';
import Card from './card';

const Services = () => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	const [isFlipped1, setIsFlipped1] = useState(false);

	const handleClick1 = () => {
		setIsFlipped1(!isFlipped1);
	};
	const [isFlipped2, setIsFlipped2] = useState(false);

	const handleClick2 = () => {
		setIsFlipped2(!isFlipped2);
	};
	const [isFlipped3, setIsFlipped3] = useState(false);

	const handleClick3 = () => {
		setIsFlipped3(!isFlipped3);
	};
	const [isFlipped4, setIsFlipped4] = useState(false);

	const handleClick4 = () => {
		setIsFlipped4(!isFlipped4);
	};
	const [isFlipped5, setIsFlipped5] = useState(false);

	const handleClick5 = () => {
		setIsFlipped5(!isFlipped5);
	};
	const [isFlipped6, setIsFlipped6] = useState(false);

	const handleClick6 = () => {
		setIsFlipped6(!isFlipped6);
	};

	const [isFlipped7, setIsFlipped7] = useState(false);

	const handleClick7 = () => {
		setIsFlipped7(!isFlipped7);
	};
	const [isFlipped8, setIsFlipped8] = useState(false);

	const handleClick8 = () => {
		setIsFlipped8(!isFlipped8);
	};
	const [isFlipped9, setIsFlipped9] = useState(false);

	const handleClick9 = () => {
		setIsFlipped9(!isFlipped9);
	};

	return (
		<ServicesContainer id="skills">
			<ServicesH1>My Skills</ServicesH1>
			<ServicesWrapper>
				<Card name="C++" button="Click for details" desc="J'ai appris ce langage au cours de mes &eacute;tudes. je l'utilise généralement lors de mes projets en cours puisque c'est le langage utilisé dans la formation" isFlipped={isFlipped} handle={handleClick} iconCard={Icon1} />
				<Card name="C#" button="Click for details" desc="J'ai appris ce langage en autodidact, j'ai commenc&eacute; &agrave; programmer avec ce langage lorsque j'ai d&eacute;but&eacute; sur Unity avec l'objectif de cr&eacute;er mes propres jeux vidéos. Apr&egrave;s de nombreux projets &agrave; titre d'&eacute;ssais, j'en ai finalement publi&eacute; un sur Google Play" isFlipped={isFlipped1} handle={handleClick1} iconCard={Icon2} />
				<Card name="Java" button="Click for details" desc="J'ai commenc&eacute; &agrave; me familliariser avec le Java qui est assez similaire au C# afin de d&eacute;velopper des applications sous android, de plus j'ai d&eacute;velopp&eacute; une applications en Java avec Android Studio dans le cadre de mon projet pour le BTS" isFlipped={isFlipped2} handle={handleClick2} iconCard={Icon3} />
				<Card name="VBA" button="Click for details" desc="Dans le cadre de mon alternance j'ai appris le VBA afin d'automatiser certaines tâches redondantes ou même de debugger certains scripts Excel" isFlipped={isFlipped7} handle={handleClick7} iconCard={Icon4} />
				<Card name="Python" button="Click for details" desc="Afin d'apprendre le Python je développe un projet complexe ce qui me permet d'apprendre en profondeur ce language haut niveau." isFlipped={isFlipped6} handle={handleClick6} iconCard={Icon5} />
				<Card name="HTML" button="Click for details" desc="Afin de pouvoir partager mon travail je me suis mis à apprendre le HTML." isFlipped={isFlipped3} handle={handleClick3} iconCard={Icon6} />
				<Card name="JS" button="Click for details" desc="Pour rendre encore plus dynamique mes pages HTML je me suis mis à apprendre le JS ce qui me permet de créer des événements en temps réel" isFlipped={isFlipped4} handle={handleClick4} iconCard={Icon7} />
				<Card name="CSS" button="Click for details" desc="En complément du HTML j'ai appris le CSS pour stylisé mes pages HTML pour les rendres plus attrayantes" isFlipped={isFlipped5} handle={handleClick5} iconCard={Icon8} />
				<Card name="PHP" button="Click for details" desc="Lors de plusieurs stages ou même pour certains backend de site web je me suis mis a apprendre le PHP" isFlipped={isFlipped9} handle={handleClick9} iconCard={Icon10} />
				<Card name="React" button="Click for details" desc="Je me suis mis à apprendre le React pour faire mon portfolio ainsi que de futurs projet sur le Web" isFlipped={isFlipped8} handle={handleClick8} iconCard={Icon9} />
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
