import React, { Component } from 'react';

import '../index.scss';

export default class Contacts extends Component {
	render() {

		window.ymaps.ready(function () {
			const myMap = new window.ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9
			}, {
				searchControlProvider: 'yandex#search'
			})
		 
			const myPlacemark = new window.ymaps.Placemark([55.751574, 37.573856], {
				hintContent: 'Собственный значок метки',
				balloonContent: 'Это красивая метка'
			}, {
				iconLayout: 'default#image',
				iconImageHref: '../pin.svg',
				iconImageSize: [54, 61],
				iconImageOffset: [-27, -30]
			})
		 
			myMap.geoObjects.add(myPlacemark);
		})

		return (
			<div className="map" id="map"></div>
		)
	}
}