import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './Rate.css';

const Rate = (props) => {
	const count = props.rate === undefined ? 'rate-0' : `rate-${props.rate}`;
	if (props.type === 'dots') {
		return (
			<div className={`dots empty ${count}`}>
				<FontAwesomeIcon icon={faCircle} className="icon" />
				<FontAwesomeIcon icon={faCircle} className="icon" />
				<FontAwesomeIcon icon={faCircle} className="icon" />
				<FontAwesomeIcon icon={faCircle} className="icon" />
				<FontAwesomeIcon icon={faCircle} className="icon" />
			</div>
		);
	} else if (props.type === 'star') {
		return (
			<div className={`star empty ${count}`}>
				<FontAwesomeIcon icon={faStar} className="icon" />
				<FontAwesomeIcon icon={faStar} className="icon" />
				<FontAwesomeIcon icon={faStar} className="icon" />
				<FontAwesomeIcon icon={faStar} className="icon" />
				<FontAwesomeIcon icon={faStar} className="icon" />
			</div>
		);
	} else {
		return (
			<div className={`bar empty ${count}`}>
				<span />
				<span />
				<span />
				<span />
				<span />
			</div>
		);
	}
};
export default Rate;
