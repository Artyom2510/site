import React, {Component} from 'react';
import { withRouter } from 'react-router';

import ApiService from '../../services/apiServices';

import Card from '../../components/Card';
import Search from '../../components/Search';

import './index.scss';

class Home extends Component {

	apiService = new ApiService();

	state = {
		cards: [],
		text: "",
		end: null
	}

	
	cardInfo() {
		this.apiService
			.getAllCards()
			.then(cards => {
				this.setState({ cards });
			});
	}

	cardIsEnd() {
		this.apiService
			.getEnd()
			.then(end => {
				this.setState({ end });
			});
	}

	onScroll = () => {
		const {cards, end} = this.state;
		if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
				cards.length < end) {
			this.cardInfo();
		} else if (cards.length === end) {
			window.removeEventListener('scroll', this.onScroll);
		}
	}

	componentDidMount() {
		this.cardInfo();
		this.cardIsEnd();

		const {search} = this.props.history.location;
		if (search.length) {
			const text = decodeURIComponent(search.replace('?search=', ''));

			this.setState({ text });
		}

		window.addEventListener('scroll', this.onScroll);
	};

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	};

	onSearchChange = (text) => {
		this.setState({ text });

		const {history} = this.props;
		history.push({search: `search=${text}`});
	}

	renderCard = (card) => {
		return <Card card={card} key={card.id} />;
	}

	ifInclude = (card, text) => {
		const {title, desc} = card;
		if (
			title
				.toLowerCase()
				.indexOf(text.toLowerCase()) > -1 ||
			desc
				.toLowerCase()
				.indexOf(text.toLowerCase()) > -1
		) {
			return this.renderCard(card);
		}
	}

	render() {
		const {cards, text} = this.state;

		if (!cards.length) {
			return <p>loading...</p>
		}
		const renderCards = cards.map(card => {
			if (!text.trim().length) {
				return this.renderCard(card);
			} else {
				return this.ifInclude(card, text);
			}
		});

		return (
			<section className="block-cards">
				<Search onSearchChange={this.onSearchChange} text={text} />
				{renderCards}
			</section>
		);
	}

};

export default withRouter(Home);
