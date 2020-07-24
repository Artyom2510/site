import React, { Component } from 'react';
import ApiContacts from '../../../services/apiContacts';

import '../index.scss';

import pinIcon from '../pin.svg';

let myMap;
const yMaps = window.ymaps;

export default class Contacts extends Component {

	apiContacts = new ApiContacts();

	state = {
		data: {}
	}

	contactsInfo() {
		this.apiContacts
			.getAddr()
			.then(data => {
				this.setState({
					data
				});
			});
	}

	getCoords = coords => {
		const splitCoords = coords.split(', ');
		return [+splitCoords[0], +splitCoords[1]];
	}

	componentDidMount() {
		this.contactsInfo();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.data !== prevState.data) {
			const {addr, coords} = this.state.data;

			yMaps.ready(() => {
				myMap = new yMaps.Map('map', {
					center: [55.751574, 37.573856],
					zoom: 9
				}, {
					searchControlProvider: 'yandex#search'
				})
			
				const myPlacemark = new window.ymaps.Placemark(this.getCoords(coords), {
					hintContent: addr,
					balloonContent: addr
				}, {
					iconLayout: 'default#image',
					iconImageHref: pinIcon,
					iconImageSize: [54, 61],
					iconImageOffset: [-27, -30]
				})
			
				myMap.geoObjects.add(myPlacemark);
			});
		}
	}

	render() {

		const {addr, email, phone} = this.state.data;

		return (
			<>
				<div className="map" id="map"></div>
				
				<div className="contacts-info">
					<div className="contacts-info__row">
						<span>Адрес - </span>
						<span>{addr}</span>
					</div>
					<div className="contacts-info__row">
						<span>Маил - </span>
						<span>{email}</span>
					</div>
					<div className="contacts-info__row">
						<span>Тел - </span>
						<span>{phone}</span>
					</div>
				</div>
			</>
		)
	}
}