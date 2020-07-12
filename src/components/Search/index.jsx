import React, { Component } from 'react';

import './index.scss';

export default class Search extends Component {

	state = {
		text: ''
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
				className="find"
				placeholder='Search'
				onChange={this.onSearchValueChange}
			/>
		);
	};
}