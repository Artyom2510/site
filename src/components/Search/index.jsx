import React, { Component } from 'react';

import './index.scss';

export default class Search extends Component {

	state = {
		text: ''
	}

	onSearchValueChange = (e) => {
		const text = e.target.value;
		this.setState({ text });
		const {onSearch} = this.props;
		onSearch(text);
	}

	render() {

		const {text} = this.state;
		return(
			<input
				id="id-search"
				name="name-search"
				type="search"
				value={text}
				className="find"
				placeholder='Search'
				onChange={this.onSearchValueChange}
			/>
		);
	};
}