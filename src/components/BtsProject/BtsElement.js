import styled from 'styled-components';

export const ImageContainer = styled.div`
height:auto;
min-height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
@media screen and (max-width: 768px) {
	height:auto;
	min-height: 1100px;
@media screen and (max-width: 480px) {
	height:auto;
	min-height: 1300px;
`;

export const ImageWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;
	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ImageItem = styled.img`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 450px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
	@media screen and (max-width: 768px) {
		max-height: 340px;
	}
	@media screen and (max-width: 1000px) {
		max-height: 350px;
	}
`;
