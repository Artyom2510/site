import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export default class Card extends Component {

	state = {
		visible: false
	}

	render() {
		const {card: {id, title, desc, label, type, price}} = this.props;
		const {visible} = this.state;
		const labelClass = "card__label";
		let classCard = "block-cards__card card";

		setTimeout(function() {
			this.setState({visible: true})
		}
		.bind(this)
		, 1);

		if (visible) {
			classCard += " card_visible";
		}

		return (
			<Link to={`/info/${id}`} className={`${classCard}`}>
				<h1 className="card__title"> {title} </h1>
				<p className="card__desc"> {desc} </p>
				<label className={`${labelClass} ${labelClass}_${type}`}> {label}-{type} </label>
				<span className="card__price"> {price} </span>
			</Link>
		);
	}
}