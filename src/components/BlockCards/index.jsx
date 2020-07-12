import React, {Component} from 'react';

import Search from '../Search';

import './index.scss';

export default class BlockCards extends Component {

	createCard(card) {
		const {id, title, desc, label, type, price} = card;
		const labelClass = "card__label";

		return (
			<a href="#" className="block-cards__card card" key={id}>
				<h1 className="card__title"> {title} </h1>
				<p className="card__desc"> {desc} </p>
				<label className={`${labelClass} ${labelClass}_${type}`}> {label}-{type} </label>
				<span className="card__price"> {price} </span>
			</a>
		)
	}

	render() {

		const {cards, onSearchChange} = this.props;
		const renderCards = cards.map(card => {
			return this.createCard(card);
		});

		return (
			<section className="block-cards">
				<Search onSearchChange={onSearchChange} />
				{renderCards}
			</section>
		);
	}

};

