export default class ApiService {

	_apiBase = 'https://run.mocky.io/v3/7aae0d40-5a49-4752-ab30-09cf5f76f8f2';

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
			.map(this._transformPerson);
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
// "headers": { 
// 	"Content-"type"": "application/json",
// 	"Accept": "application/json"
//  }

// })
// .then(res => {
// 	return res.json();
// })
// .then(obj => {
// 	return obj;
// });

// {
// 	"cards": [
// 		{
// 			"id": 0,
// 			"title": "Артёмка",
// 			"desc": "Думать рано",
// 			"label": "Зелёный лабел",
// 			"type": "front",
// 			"price": "0$"
// 		},
// 		{
// 			"id": 1,
// 			"title": "Максимка",
// 			"desc": "Всё хуйня, переделывай",
// 			"label": "Зелёный лабел",
// 			"type": "front",
// 			"price": "0,5₽"
// 		},
// 		{
// 			"id": 2,
// 			"title": "Илюха",
// 			"desc": "Восемь дней в неделе",
// 			"label": "Синий лабел",
// 			"type": "desing",
// 			"price": "0,3333334₽"
// 		},
// 		{
// 			"id": 3,
// 			"title": "Коля",
// 			"desc": "БИГ БОСС",
// 			"label": "Красный лабел",
// 			"type": "boss",
// 			"price": "priceless"
// 		},
// 		{
// 			"id": 4,
// 			"title": "Миха",
// 			"desc": "Опять смотришь в Сафари",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "1€"
// 		},
// 		{
// 			"id": 5,
// 			"title": "Димон",
// 			"desc": "Сечку трусишь",
// 			"label": "Зелёный лабел",
// 			"type": "front",
// 			"price": "0.001$"
// 		},
// 		{
// 			"id": 6,
// 			"title": "Серёга",
// 			"desc": "Жук, но не автомобиль",
// 			"label": "Синий лабел",
// 			"type": "desing",
// 			"price": "100€"
// 		},
// 		{
// 			"id": 7,
// 			"title": "Наташа",
// 			"desc": "Сайт говно",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "50%"
// 		},
// 		{
// 			"id": 8,
// 			"title": "Антоха",
// 			"desc": "Кто-то поступил плохо",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "50%"
// 		},
// 		{
// 			"id": 9,
// 			"title": "Ваня",
// 			"desc": "Надо сделать оперативно",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "50$"
// 		},
// 		{
// 			"id": 10,
// 			"title": "Рита",
// 			"desc": "^-^",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "10000000000Br"
// 		},
// 		{
// 			"id": 11,
// 			"title": "Макс",
// 			"desc": "------",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "1₽ + 1$"
// 		},
// 		{
// 			"id": 12,
// 			"title": "Кирилл",
// 			"desc": "------",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "???"
// 		},
// 		{
// 			"id": 13,
// 			"title": "Яна",
// 			"desc": "Ок",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "???"
// 		}
// 	]
// }