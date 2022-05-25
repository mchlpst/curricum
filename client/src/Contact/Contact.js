import {
	faAt,
	faLocationDot,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Heading from '../Components/Heading/Heading';

import './Contact.css';

const Contact = () => {
	return (
		<section className="contact">
			<Heading title="Contact" />
			<div>
				<div className="inline">
					<FontAwesomeIcon icon={faPhone} className="icon" />
					<p>+ 31 6 39 77 75 55</p>
				</div>
				<div className="inline">
					<FontAwesomeIcon icon={faAt} className="icon" />
					<p>
						<a href="mailto:michaelpost@hello.nl">michaelpost@chello.nl</a>
					</p>
				</div>
				<div className="inline">
					<FontAwesomeIcon icon={faLocationDot} className="icon" />
					<p>
						Laplacestraat 57
						<br /> 1098 HS Amsterdam
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
