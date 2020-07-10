export default class ApiService {

	_apiBase = 'https://run.mocky.io/v3/d025976e-b785-4969-9a44-e3c7d63ef891';

	getResource = async () => {
		const res = await fetch(`${this._apiBase}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${res.status}`);
		}
		return await res.json();
	};

	getAllPeople = async () => {
		const res = await this.getResource();
		return res.cards
			.map(this._transformPerson)
			.slice(0, 6);
	};

	_transformPerson = (person) => {
		return {
			id: person.id,
			title: person.title,
			desc: person.desc,
			label: person.label,
			type: person.type,
			price: person.price,
		}
	}

}

// fetch(_apiBase, {
// headers : { 
// 	'Content-Type': 'application/json',
// 	'Accept': 'application/json'
//  }

// })
// .then(res => {
// 	return res.json();
// })
// .then(obj => {
// 	return obj;
// });

// {
// 	cards: [
// 		{
// 			id: 0,
// 			title: "Артёмка",
// 			desc: "Думать рано",
// 			label: "Зелёный лабел",
// 			type: "front",
// 			price: "0$"
// 		},
// 		{
// 			id: 1,
// 			title: "Максимка",
// 			desc: "Всё хуйня, переделывай",
// 			label: "Зелёный лабел",
// 			type: "front",
// 			price: "0,5₽"
// 		},
// 		{
// 			id: 2,
// 			title: "Илюха",
// 			desc: "Восемь дней в неделе",
// 			label: "Синий лабел",
// 			type: "desing",
// 			price: "0,3333334₽"
// 		},
// 		{
// 			id: 3,
// 			title: "Коля",
// 			desc: "БИГ БОСС",
// 			label: "Красный лабел",
// 			type: "boss",
// 			price: "priceless"
// 		},
// 		{
// 			id: 4,
// 			title: "Миха",
// 			desc: "Опять смотришь в Сафари",
// 			label: "Жёлтый лабел",
// 			type: "back",
// 			price: "1€"
// 		}
// 	]
// }