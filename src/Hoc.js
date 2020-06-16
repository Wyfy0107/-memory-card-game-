import React from 'react';
import './Hoc.css';

const Aux = (props) => {
	return <div className='cards-container'>{props.children}</div>;
};

export default Aux;
