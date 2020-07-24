import React, { Component } from 'react';

import ApiService from '../../services/apiServices';

import './index.scss';

import imgGrch from './grch.png';

export default class Info extends Component {

	apiService = new ApiService();

	state = {
		data: {},
		loading: true
	}

	onAvaLoaded = (data) => {
		this.setState({
			data,
			loading: false
		});
	};

	getInfo() {
		const {location} = this.props;
		const id = +location.pathname.match(/(\d+)/g);
		this.apiService
			.getMoreInfo(id)
			.then(this.onAvaLoaded);
	}

	componentDidMount() {
		this.getInfo();
	}

	render() {
		const {data: {title, period, imgUrl}, loading} = this.state;
		const grch = loading ? <img src={imgGrch} alt={title} className="ava__grch" /> : null;
		const ava = !loading ? <img src={imgUrl} alt={title} className="ava__img" /> : null;

		return (
	
			<section className="info">
				<h1 className="info__title">Подробная информация <span>{title}</span></h1>
				<div className="info__ava ava">
					{grch}
					{ava}
				</div>
				<p className="info__period">Работает в Гречке <span>{period}</span> +-</p>
			</section>
		)
	}
}