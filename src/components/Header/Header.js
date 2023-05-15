import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

import img from './chinpokologo.webp';

const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<img src={img} alt='logo-chinpokomon' width='150' />
			</Link>
		</div>
	);
};

export default Header;
