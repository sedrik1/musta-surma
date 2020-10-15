const mediterranean = [
	[41.013611, 28.955],
	[38.189, 15.55],
	[39.227778, 9.111111],
	[41.9267, 8.7369],
];

const mediterraneanInfos = [
	{
		location: 'Konstantinopoli (nyk. Istanbul)',
		deaths: 1501,
		info:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
	{
		location: 'Messina',
		deaths: 2355,
		info:
			'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
	},
	{
		location: 'Sardinia',
		deaths: 3001,
		info:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod',
	},
	{
		location: 'Korsika',
		deaths: 1501,
		info:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
];

const mainlandWest = [
	[44.411111, 8.932778],
	[50.983333, 11.033333],
	[55.755833, 37.617222],
];

const mainlandWestInfos = [
	{
		location: 'Geneve',
		deaths: 2355,
		info:
			'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
	{
		location: 'Erfurt',
		deaths: 2355,
		info:
			'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
	{
		location: 'Moskova',
		deaths: 2355,
		info:
			'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
];

const mainlandEast = [
	[48.65, 45.45],
	[45.048889, 35.379167],
	[47.1, 39.416667],
];

const mainlandEastInfos = [
	{
		location:
			'Sarai (nyk. Колобовка eli Kolobovka/ Селитренное eli Selitrennoye)',
		deaths: 2355,
		info: `Volgan alajuoksulla sijaitseva Kultaisen ordan pääkaupunki Sarai, joista Uusi Sarai sijaitsi Kolobovkan ja Vanha Sarai Selitrennoyen kohdalla, oli mustan surman portti Konstantinopoliin ja sitä kautta muuhun Eurooppaan Välimeren kautta.
        Kauppareitit ja kaupunkien kehitys olivat keskeisiä tekijöitä sairauden tehokkaan leviämisen kannalta.`,
	},
	{
		location: 'Kaffa (nyk. Феодо́сія / Феодосия eli Feodosija)',
		deaths: 2355,
		info:
			'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
	{
		location: 'Azov',
		deaths: 2355,
		info:
			'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
	},
];

const britain = [
	[51.45, -2.583333],
	[51.507222, -0.1275],
];

const britainInfos = [
	{
		location: 'Bristol',
		deaths: 1501,
		info:
			'Elokuussa tai sen paikkeilla v. 1348 tauti levisi satamakaupunki Bristoliin',
	},

	{
		location: 'Lontoo',
		deaths: 1501,
		info: 'Lontoon kaupunki altistui taudille saman vuoden marraskuussa',
	},
];

const LocationData = [
	{ coordinates: mediterranean, info: mediterraneanInfos },
	{ coordinates: mainlandWest, info: mainlandWestInfos },
	{ coordinates: mainlandEast, info: mainlandEastInfos },
	{ coordinates: britain, info: britainInfos },
];

const Mediterranean = LocationData[0];
const MainlandWest = LocationData[1];
const MainlandEast = LocationData[2];
const Britain = LocationData[3];

export {
	LocationData as default,
	Mediterranean,
	MainlandWest,
	MainlandEast,
	Britain,
};
