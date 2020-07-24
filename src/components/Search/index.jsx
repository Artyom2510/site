import React, { Component } from 'react';

import './index.scss';

export default class Search extends Component {

	state = {
		text: ''
	}

	componentDidMount() {
		const {text} = this.props;
		if (text.length) {
			this.setState({ text });
		}
	}

	onSearchValueChange = (e) => {
		const text = e.target.value;
		this.setState({ text });
		const {onSearchChange} = this.props;
		onSearchChange(text);
	}

	render() {

		const {text} = this.state;
		return(
			<input
				id="id-search"
				name="name-search"
				type="search"
				value={text}
				className="block-cards__input find"
				placeholder='Search'
				onChange={this.onSearchValueChange}
			/>
		);
	};
}