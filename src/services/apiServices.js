let amount = 4;

export default class ApiService {

	_apiBase = 'https://run.mocky.io/v3/db3e3889-17d9-4fa3-9df7-6dea14a50419';

	getResource = async () => {
		const res = await fetch(`${this._apiBase}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${res.status}`);
		}
		return await res.json();
	};

	getAllCards = async () => {
		const res = await this.getResource();
		if (amount < 14) {
			amount += 2;
		}
		return res.cards
			.slice(0, amount)
			.map(this._transformCard);
	};

	getMoreInfo = async (id) => {
		const res = await this.getResource();
		const filtered = res.cards
			.filter(el => el.id === id)[0];
		return this._transformInfo(filtered);
	};

	getEnd = async () => {
		const res = await this.getResource();
		return res.end;
	}

	_transformCard = (card) => {
		return {
			id: card.id,
			title: card.title,
			desc: card.desc,
			label: card.label,
			type: card.type,
			price: card.price,
		}
	}

	_transformInfo = (card) => {
		return {
			id: card.id,
			title: card.title,
			period: card.period,
			imgUrl: card.img_url
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
// 			"price": "0$",
// 			"period": "Полтора года",
// 			"img_url": "https://cdn.discordapp.com/avatars/614011601548345346/89e8ef1eaecb546585b1db873b66116f.png"
// 		},
// 		{
// 			"id": 1,
// 			"title": "Максимка",
// 			"desc": "Всё хуйня, переделывай",
// 			"label": "Зелёный лабел",
// 			"type": "front",
// 			"price": "0,5₽",
// 			"period": "Три с половиной года",
// 			"img_url": "https://cdn.discordapp.com/avatars/607329614360084490/125f765e0a51faf2ccb9880a853e239e.png"
// 		},
// 		{
// 			"id": 2,
// 			"title": "Илюха",
// 			"desc": "Восемь дней в неделе",
// 			"label": "Синий лабел",
// 			"type": "desing",
// 			"price": "0,3333334₽",
// 			"period": "Два года",
// 			"img_url": "https://cdn.discordapp.com/avatars/295225708010274817/1a62eb50f8b63ce1fb3b2697e49986ab.png"
// 		},
// 		{
// 			"id": 3,
// 			"title": "Коля",
// 			"desc": "БИГ БОСС",
// 			"label": "Красный лабел",
// 			"type": "boss",
// 			"price": "priceless",
// 			"period": "V век до нашей эры",
// 			"img_url": "https://cdn.discordapp.com/avatars/554583511000940555/079f59115f53d608bd923348b625f37f.png"
// 		},
// 		{
// 			"id": 4,
// 			"title": "Миха",
// 			"desc": "Опять смотришь в Сафари",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "1€",
// 			"period": "Три с половиной года",
// 			"img_url": "https://cdn.discordapp.com/avatars/586096084666023946/8368760aec996779390ae8f87bcf7a3c.png"
// 		},
// 		{
// 			"id": 5,
// 			"title": "Димон",
// 			"desc": "Сечку трусишь",
// 			"label": "Зелёный лабел",
// 			"type": "front",
// 			"price": "0.001$",
// 			"period": "Полтора года",
// 			"img_url": "https://cdn.discordapp.com/avatars/410426165833236480/5c69dd53664564fd2dc814eb3ef5e9ed.png"
// 		},
// 		{
// 			"id": 6,
// 			"title": "Серёга",
// 			"desc": "Жук, но не автомобиль",
// 			"label": "Синий лабел",
// 			"type": "desing",
// 			"price": "100€",
// 			"period": "Два с половиной года",
// 			"img_url": "https://cdn.discordapp.com/avatars/614011579217870859/43e4c96ac09d223eef63d1a5d5f46a59.png"
// 		},
// 		{
// 			"id": 7,
// 			"title": "Наташа",
// 			"desc": "Сайт говно",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "50%",
// 			"period": "Два с половиной года",
// 			"img_url": "https://cdn.discordapp.com/avatars/614373671179386880/27e6832b29318ad46708de44d1214db0.png"
// 		},
// 		{
// 			"id": 8,
// 			"title": "Антоха",
// 			"desc": "Кто-то поступил плохо",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "50%",
// 			"period": "Два с половиной года",
// 			"img_url": "https://cdn.discordapp.com/avatars/614370352079831060/03fe77c19a83424b447798417030cb0c.png"
// 		},
// 		{
// 			"id": 9,
// 			"title": "Ваня",
// 			"desc": "Надо сделать оперативно",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "50$",
// 			"period": "VI век до нашей эры",
// 			"img_url": "https://cdn.discordapp.com/avatars/614417098235707403/d3fead332af907b0d2dcd7342585ac8f.png"
// 		},
// 		{
// 			"id": 10,
// 			"title": "Рита",
// 			"desc": "^-^",
// 			"label": "Фиолетовый лабел",
// 			"type": "pm",
// 			"price": "10000000000Br",
// 			"period": "Месяц",
// 			"img_url": "https://cdn.discordapp.com/avatars/730294996460109824/c6fcb8083a312ced6040b85179a68899.png"
// 		},
// 		{
// 			"id": 11,
// 			"title": "Макс",
// 			"desc": "------",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "1₽ + 1$",
// 			"period": "Пару месяцев",
// 			"img_url": "https://cdn.discordapp.com/avatars/688993930619912198/a6b8046d2d8422f365f17fca767eebc6.png"
// 		},
// 		{
// 			"id": 12,
// 			"title": "Кирилл",
// 			"desc": "------",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "???",
// 			"period": "Пару месяцев",
// 			"img_url": "https://cdn.discordapp.com/avatars/680752302289846333/b9a22d38c0c2d5ca5d4c3be5a273faac.png"
// 		},
// 		{
// 			"id": 13,
// 			"title": "Яна",
// 			"desc": "Ок",
// 			"label": "Жёлтый лабел",
// 			"type": "back",
// 			"price": "???",
// 			"period": "Год",
// 			"img_url": "https://cdn.discordapp.com/avatars/629620763921612821/4ed0941db78bd5ac79956c66fb03f73c.png"
// 		}
// 	],
// 	"end": 14
// }