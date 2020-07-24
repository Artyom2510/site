export default class ApiContacts {

	_apiContacts = 'https://run.mocky.io/v3/e8108228-9a2f-43b4-910c-42a2c2a5cfec';

	getResource = async () => {
		const res = await fetch(`${this._apiContacts}`);

		if (!res.ok) {
			throw new Error(`Could not fetch ${res.status}`);
		}
		return await res.json();
	};

	getAddr = async () => {
		const res = await this.getResource();
		const {coords, addr, phone, email} = res.data;
		return {
			coords: coords,
			addr: addr,
			phone: phone,
			email: email,
		}
	};

}

// {
// 	"data":
// 	{
// 		"coords": "55.898090, 37.605128",
// 		"addr": "Какой-то адрес",
// 		"phone": "8(897) 645 32 01",
// 		"email": "tyavka@gmail.com"
// 	}
// }