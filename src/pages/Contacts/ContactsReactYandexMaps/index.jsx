import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import ApiContacts from '../../../services/apiContacts';

import '../index.scss';

import pinIcon from '../pin.svg';

export default class ContactsReactYandexMaps extends Component {

	apiContacts = new ApiContacts();

	state = {
		coords: null,
		addr: null,
		phone: null,
		email: null,
	}

	contactsInfo() {
		this.apiContacts
			.getAddr()
			.then(({coords, addr, phone, email}) => {
					this.setState({
						coords,
						addr,
						phone,
						email
					});
			});
	}

	componentDidMount() {
		this.contactsInfo();
	};

	render() {
		return (
			<div className="map">
				<YMaps>
					<Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width='100%' height='100%' />
				</YMaps>
			</div>
		)
	}
}