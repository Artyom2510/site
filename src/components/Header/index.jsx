import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => {

	return (
		<header className="header">
			<nav className="header__nav">
				<ul className="header__menu header-menu">
					<li className="header-menu__item">
						<Link to="/" className="header-menu__link">Home</Link>
					</li>
					<li className="header-menu__item">
						<Link to="/contacts/" className="header-menu__link">Контакты обычное</Link>
					</li>
					<li className="header-menu__item">
						<Link to="/contacts-react-npm/" className="header-menu__link">Контакты + react-yandex-maps</Link>
					</li>
				</ul>
			</nav>
		</header>
	);

};

export default Header;
