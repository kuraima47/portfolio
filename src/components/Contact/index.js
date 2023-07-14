import React from 'react';
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormTextArea, FormWrap, Icon, Text } from './ContactElement';
import emailjs from 'emailjs-com';

const Contact = () => {
	const sendEmail = e => {
		e.preventDefault();
		emailjs.sendForm('portfolio', 'template_rrtwirk', e.target, 'wy3adLq35dYGnB7D0').then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	return (
		<>
			<Container>
				<FormWrap>
					<Icon to="/">Portfolio</Icon>
					<FormContent>
						<Form onSubmit={sendEmail}>
							<FormH1>Contact Me</FormH1>
							<FormLabel htmlFor="for">Email</FormLabel>
							<FormInput type="email" required name="reply_to" />
							<FormLabel htmlFor="for">Message</FormLabel>
							<FormTextArea required name="message" />
							<FormButton type="submit">Envoyer</FormButton>
							<Text>be creative*</Text>
						</Form>
					</FormContent>
				</FormWrap>
			</Container>
		</>
	);
};

export default Contact;
