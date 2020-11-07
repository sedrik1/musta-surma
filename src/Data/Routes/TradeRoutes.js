const MediterraneanRoutes = [
	{
		route: 'Kaffa-Konstantinopoli (nyk. Istanbul)',
		coordinates: [
			'M',
			[45.048889, 35.379167],
			'Q',
			[42, 32.555],
			[41.013611, 28.955],
		],
		by: 'sea',
	},
	{
		route: 'Konstantinopoli (nyk. Istanbul)-Ateena',
		coordinates: [
			'M',
			[41.013611, 28.955],
			'Q',
			[41, 27],
			[39.34, 25.38],
			'M',
			[39.34, 25.38],
			'Q',
			[38, 24.566],
			[37.6, 24.4],
			'T',
			[37.983972, 23.727806],
		],
		by: 'sea',
	},
	{
		route: 'Ateena-Messina-Sardinia-Korsika-Geneve',
		coordinates: [
			'M',
			[37.983972, 23.727806],
			'Q',
			[31.5, 22.6],
			[38.189, 15.55],
			'T',
			[44.411111, 8.932778],
			'M',
			[38.183333, 15.55],
			'Q',
			[38.69, 16.48],
			[38.2, 13.7],
			'Q',
			[38.54, 11.8],
			[38, 10.5],
			'T',
			[39.246389, 9.0575],
			'M',
			[41.4, 11.9874],
			'Q',
			[41.33, 9.17],
			[41.3, 8.736944],
			'T',
			[41.926667, 8.736944],
		],
		by: 'sea',
	},
	{
		route: 'Ateena-Dubrovnik-Split-Venetsia',
		coordinates: [
			'M',
			[35.3222, 22.5],
			'Q',
			[39.777, 19],
			[42, 17.3],
			'T',
			[45.4375, 12.335833],
			'M',
			[41.5, 17.6897],
			[42.633333, 18.1],
			'M',
			[43.1, 16.277],
			'Q',
			[43.3, 16.434],
			[43.5, 16.433333],
		],
		by: 'sea',
	},
	{
		route: 'Geneve-Marseille',
		coordinates: [
			'M',
			[44.411111, 8.932778],
			'Q',
			[41.7, 4.8],
			[43.2975, 5.381111],
		],
		by: 'sea',
	},
	{
		route: 'Marseille-Baleaarit',
		coordinates: [
			'M',
			[43.2975, 5.381111],
			'T',
			[43.1, 3.24],
			'M',
			[43.1, 3.24],
			'Q',
			[42.2, 3.4],
			[41.6, 3.4],
			'M',
			[41.6, 3.4],
			'Q',
			[40, 1.2],
			[39.62, 2.01],
			'T',
			[39.569444, 2.65],
		],
		by: 'sea',
	},
	{
		route: 'Baleaarit-Espanjan itärannikko',
		coordinates: [
			'M',
			[39.569444, 2.65],
			'Q',
			[38.7, 2],
			[39.983056, -0.033056],
		],
		by: 'sea',
	},
	{
		route: 'Baleaarit-Pyreneiden niemimaa',
		coordinates: [
			'M',
			[39.569444, 2.65],
			'Q',
			[38.12, 1.2],
			[37.4, 0.3],
			'T',
			[36.131667, -5.351667],
		],
		by: 'sea',
	},
];

const MediterraneanLandExclusiveRoutes = [
	/* 	{
		route:
			'Konstantinopoli (nyk. Istanbul)-Selymbria (nyk. Silivri)-Hadrianopolis (nyk. Edirne)-Plovdiv-Sofia-Niš',
		coordinates: [
			[41.009167, 28.975833],
			[41.080158, 28.26829],
			[41.666667, 26.566667],
			[42.15, 24.75],
			[42.7, 23.333333],
			[43.32102, 21.89567],
		],
	},
	{
		route:
			'Hadrianopolis (nyk. Edirne)-Kızılağaç (nyk. Elhovo)-Burgas-Shumen',
		coordinates: [
			[41.666667, 26.566667],
			[42.166667, 26.566667],
			[42.5, 27.466667],
			[42.166667, 26.566667],
			[43.283333, 26.933333],
		],
	}, */
];

const SpainRoutes = [
	{
		route: 'Espanjan itärannikko-Madrid-Toledo',
		coordinates: [
			'M',
			[39.983056, -0.033056],
			'Q',
			[41.4, -3.683333],
			[39.856667, -4.024444],
		],
		by: 'land',
	},
];

const WestEuropeRoutes = [
	{
		route: 'Bordeaux-Le Havre-Weymouth',
		coordinates: [
			'M',
			[45.44, -1.15],
			'Q',
			[47.3, -8.4],
			[50.613, -2.457],
			'M',
			[49.9, -3.6358],
			'Q',
			[50.32, -2.9],
			[49.49, 0.1],
		],
		by: 'sea',
	},
	{
		route: 'Weymouth-Bristol',
		coordinates: [
			'M',
			[50.613, -2.457],
			'Q',
			[49.2, -5.71],
			[49.9, -6],
			'M',
			[49.9, -6],
			'Q',
			[51.21, -6],
			[51.41, -2.85],
		],
		by: 'sea',
	},
	{
		route: 'Southampton-Brugge-Lontoo-Ipswich',
		coordinates: [
			'M',
			[50.9, -1.4],
			'Q',
			[50.4, 1.14],
			[50.9, 1.25],
			'T',
			[51.216667, 3.233333],
			'M',
			[51.24911725, 1.98],
			'Q',
			[51.474, 1.7982],
			[51.507222, -0.1275],
			'M',
			[51.24911725, 1.98],
			'Q',
			[51.247, 1.89],
			[52.059444, 1.155556],
		],
		by: 'sea',
	},
	{
		route: 'York-Hampuri',
		coordinates: [
			'M',
			[53.958333, -1.080278],
			'Q',
			[53.314, -0.98],
			[53.79, 2],
			'T',
			[53.553333, 9.992222],
		],
		by: 'sea',
	},
	{
		route: 'Hampuri-Oslo',
		coordinates: [
			'M',
			[59.913889, 10.738611],
			'L',
			[59.868434, 10.634266],
			'L',
			[59.750342, 10.543669],
			'L',
			[59.712876, 10.53977],
			'L',
			[59.683081, 10.558321],
			'L',
			[59.671078, 10.583515],
			'L',
			[59.66657, 10.607219],
			'L',
			[59.563028, 10.638566],
			'L',
			[59.459733, 10.545256],
			'L',
			[59.004506, 10.611217],
			'Q',
			[56.38046, 6.561097],
			[54.114163, 8.188136],
			'L',
			[53.553333, 9.992222],
		],
		by: 'sea',
	},
	{
		route: 'Marseille-Avignon-Strasbourg',
		coordinates: [
			'M',
			[43.2975, 5.381111],
			'Q',
			[43.99, 3.5],
			[48.58, 7.75],
		],
		by: 'land',
	},
	{
		route: 'Strasbourg-Frankfurt',
		coordinates: ['M', [48.58, 7.75], [50.111389, 8.680556]],
		by: 'land',
	},
	{
		route: 'Narbonne-Bordeaux',
		coordinates: [
			'M',
			[43.1836, 3.0042],
			'Q',
			[43.3, 1.444],
			[44.84, -0.58],
		],
		by: 'land',
	},

	{
		route: 'Hampuri-Lyypekki',
		coordinates: [
			'M',
			[53.553333, 9.992222],
			'Q',
			[53.478, 10.21],
			[53.869722, 10.686389],
		],
		by: 'land',
	},
	{
		route: 'Frankfurt-Erfurt-Leipzig',
		coordinates: [
			'M',
			[50.116667, 8.683333],
			'Q',
			[50.5, 9],
			[50.983333, 11.033333],
			'M',
			[50.983333, 11.033333],
			[51.333333, 12.383333],
		],
		by: 'land',
	},
	{
		route: 'Köln-Erfurt',
		coordinates: ['M', [50.936389, 6.952778], [50.983333, 11.033333]],
		by: 'land',
	},
	{
		route: 'Köln-Aachen-Liège-Brysseli',
		coordinates: [
			'M',
			[50.936389, 6.952778],
			'Q',
			[50.789, 6.083611],
			[50.633333, 5.566667],
			'M',
			[50.633333, 5.566667],
			[50.85, 4.35],
		],
		by: 'land',
	},
	{
		route: 'Brysseli-Brugge',
		coordinates: ['M', [50.85, 4.35], [51.216667, 3.233333]],
		by: 'land',
	},
	{
		route: 'Leipzig-Lutherstadt Wittenberg-Bernau bei Berlin-Szczecin',
		coordinates: [
			'M',
			[51.333333, 12.383333],
			[51.8671, 12.6484],
			'M',
			[51.8671, 12.6484],
			[52.666667, 13.583056],
			'M',
			[52.666667, 13.583056],
			[53.4325, 14.548056],
		],
		by: 'land',
	},
	{
		route: 'Leipzig-Halle-Magdeburg-Bardowick-Hampuri',
		coordinates: [
			'M',
			[51.333333, 12.383333],
			'Q',
			[51.466667, 11.625],
			[52.133333, 11.616667],
			'M',
			[52.133333, 11.616667],
			'Q',
			[53, 11.81],
			[53.299167, 10.395],
			'M',
			[53.299167, 10.395],
			[53.553333, 9.992222],
		],
		by: 'land',
	},
];

const NorthEuropeLandExclusiveRoutes = [
	{
		route: 'Oslo-Göötepori-Halmstad-Lund',
		coordinates: [
			[59.913889, 10.738611],
			[57.7, 11.966667],
			[56.666667, 12.85],
			[56.649904, 12.910786],
			[56.555935, 12.968244],
			[55.703889, 13.195],
		],
	},
	{
		route: 'Göötepori-Itä- ja Pohjois-Ruotsi',
		coordinates: [
			[57.7, 11.966667],
			[57.576252, 14.620971],
			[58.66837, 15.136344],
			[60.665106, 15.158331],
			[61.577649, 15.180318],
		],
	},
	{
		route: 'Oslo-Hamar-Trondhjem-Pohjois-Norja',
		coordinates: [
			[59.913889, 10.738611],
			[60.795448, 11.067939],
			[63.426944, 10.393056],
			[63.629185, 11.752842],
			[64.05418, 11.940953],
		],
	},
	{
		route: 'Bergen-?-Oslo',
		coordinates: [
			[60.3925, 5.323333],
			[60.997087, 8.696591],
			[59.913889, 10.738611],
		],
	},
];

const NorthEuropeRoutes = [
	{
		route: 'Aberdeen-Bergen-Stavanger-Oslo',
		coordinates: [
			'M',
			[57.15, -2.11],
			'L',
			[57.244137, -1.708981],
			'L',
			[59.580242, 4.337008],
			'L',
			[60.193169, 5.190214],
			'L',
			[60.26068, 5.14143],
			'L',
			[60.3925, 5.323333],
			'M',
			[59.580242, 4.337008],
			'Q',
			[59.097378, 5.138074],
			[58.960833, 5.715556],
			'M',
			[59.146617, 5.1693],
			'Q',
			[57.927976, 5.643484],
			[57.723219, 7.039659],
			[58.282064, 10.700495],
			[59.083269, 10.655904],
			'L',
			[59.459733, 10.545256],
			'L',
			[59.563028, 10.638566],
			'L',
			[59.66657, 10.607219],
			'L',
			[59.671078, 10.583515],
			'L',
			[59.683081, 10.558321],
			'L',
			[59.712876, 10.53977],
			'L',
			[59.750342, 10.543669],
			'L',
			[59.868434, 10.634266],
			'L',
			[59.913889, 10.738611],
		],
		by: 'sea',
	},
	{
		route: 'Oslo-Hampuri',
		coordinates: [
			'M',
			[59.913889, 10.738611],
			'L',
			[59.868434, 10.634266],
			'L',
			[59.750342, 10.543669],
			'L',
			[59.712876, 10.53977],
			'L',
			[59.683081, 10.558321],
			'L',
			[59.671078, 10.583515],
			'L',
			[59.66657, 10.607219],
			'L',
			[59.563028, 10.638566],
			'L',
			[59.459733, 10.545256],
			'L',
			[59.004506, 10.611217],
			'Q',
			[56.38046, 6.561097],
			[54.114163, 8.188136],
			'L',
			[53.553333, 9.992222],
		],
		by: 'sea',
	},
	{
		route: 'Bergen-Trondhjem',
		coordinates: [
			'M',
			[60.3925, 5.323333],
			'Q',
			[61.063601, 3.413638],
			[63.334878, 5.662385],
			'L',
			[63.671243, 8.744044],
			'L',
			[63.695748, 9.184169],
			'L',
			[63.600196, 9.30747],
			'L',
			[63.645345, 9.705985],
			'L',
			[63.653726, 9.77215],
			'L',
			[63.584315, 9.799517],
			'L',
			[63.456954, 9.967168],
			'L',
			[63.474132, 10.360186],
			'L',
			[63.426944, 10.393056],
		],
		by: 'sea',
	},
	{
		route: 'Kesoniemi (nyk. Tallinna)-Itämeren länsirannikko',
		coordinates: [
			'M',
			[59.438889, 24.754444],
			'Q',
			[59.5, 24.4],
			[59.5, 22.2],
			'T',
			[59.329444, 18.068611],
		],
		by: 'sea',
	},
	{
		route: 'Itämeren länsirannikko-Visby',
		coordinates: [
			'M',
			[59.329444, 18.068611],
			'Q',
			[58.8, 18.75],
			[57.634722, 18.299167],
		],
		by: 'sea',
	},
	{
		route: 'Visby-Gdańsk',
		coordinates: [
			'M',
			[57.634722, 18.299167],
			[57.55, 17.94],
			'M',
			[57.55, 17.94],
			'Q',
			[56.2, 18.24],
			[54.351944, 18.646667],
		],
		by: 'sea',
	},
	{
		route: 'Riika-Visby',
		coordinates: [
			'M',
			[56.946667, 24.104722],
			'Q',
			[57.83, 22.65],
			[57.83, 22.5],
			'M',
			[57.83, 22.5],
			'Q',
			[58.35, 18.2],
			[57.634722, 18.299167],
		],
		by: 'sea',
	},
	{
		route: 'Oslo-Roskilde',
		coordinates: [
			'M',
			[59.913889, 10.738611],
			'L',
			[59.868434, 10.634266],
			'L',
			[59.750342, 10.543669],
			'L',
			[59.712876, 10.53977],
			'L',
			[59.683081, 10.558321],
			'L',
			[59.671078, 10.583515],
			'L',
			[59.66657, 10.607219],
			'L',
			[59.563028, 10.638566],
			'L',
			[59.459733, 10.545256],
			'L',
			[59.004506, 10.611217],
			'L',
			[57.292402, 10.807288],
			'L',
			[55.985515, 11.830429],
			'L',
			[55.923239, 11.838674],
			'L',
			[55.951603, 11.983175],
			'L',
			[55.901977, 12.03402],
			'L',
			[55.850746, 12.037455],
			'L',
			[55.839952, 12.038142],
			'L',
			[55.798676, 12.064859],
			'L',
			[55.747695, 12.069669],
			'L',
			[55.724621, 12.064141],
			'L',
			[55.684795, 12.070095],
			'L',
			[55.676084, 12.064942],
			'L',
			[55.65077, 12.084],
		],
		by: 'sea',
	},
	{
		route:
			'Visby-Oderinhaffi-Roskilde-Odense-Lyypekki-Hedeby (nyk. Busdorf)',
		coordinates: [
			'M',
			[57.634722, 18.299167],
			[57.55, 17.94],
			'M',
			[57.55, 17.94],
			'Q',
			[55.6, 17.15],
			[53.92, 14.27788],
			'M',
			[53.92, 14.27788],
			[54.75, 13.89],
			'M',
			[54.75, 13.89],
			[54.78, 12.778],
			'M',
			[54.78, 12.778],
			'Q',
			[55.998, 12.94],
			[56.48, 12.2],
			'M',
			[56.48, 12.2],
			'Q',
			[56.21, 11],
			[55.4, 10.383333],
			'M',
			[55.81774, 10.775679],
			'Q',
			[54.9, 11.3487],
			[54.5, 9.55],
			'M',
			[56.48, 12.2],
			'Q',
			[55.88, 11.6111],
			[55.944, 11.94],
			'M',
			[55.944, 11.94],
			[55.9358, 12.02441],
			'M',
			[55.9358, 12.02441],
			[55.8774, 12.04551],
			'M',
			[55.8774, 12.04551],
			[55.8547, 12.0325],
			'M',
			[55.8547, 12.0325],
			[55.751111, 12.09214],
			'M',
			[55.751111, 12.09214],
			[55.73678, 12.0978],
			'M',
			[55.73678, 12.0978],
			[55.7124, 12.101],
			'M',
			[55.7124, 12.101],
			[55.6912, 12.04912],
			'M',
			[55.6912, 12.04912],
			[55.65077, 12.084],
			'M',
			[54.78, 12.778],
			[53.869722, 10.686389],
		],
		by: 'sea',
	},
];

const BritainRoutes = [
	WestEuropeRoutes[0],
	WestEuropeRoutes[1],
	WestEuropeRoutes[2],
	WestEuropeRoutes[3],
	{
		route: 'Bristol-Cork-Dublin-Ayr-Aberdeen',
		coordinates: [
			'M',
			[51.41, -2.85],
			'Q',
			[51.174177, -5.726813],
			[51.760403, -8.236172],
			'L',
			[51.839278, -8.278478],
			'L',
			[51.83591, -8.317089],
			'L',
			[51.848107, -8.3298],
			'L',
			[51.873126, -8.329457],
			'L',
			[51.885419, -8.379271],
			'L',
			[51.900674, -8.396632],
			'L',
			[51.897222, -8.47],
			'M',
			[51.760403, -8.236172],
			'Q',
			[51.857835, -5.044247],
			[53.247139, -5.824786],
			'L',
			[53.247139, -5.824786],
			'M',
			[53.247139, -5.824786],
			'L',
			[53.35, -6.266667],
			'M',
			[53.247139, -5.824786],
			'Q',
			[54.39735, -5.110448],
			[55.138855, -5.242126],
			[55.445374, -4.929055],
			[55.466667, -4.616667],
			'M',
			[55.138781, -5.242073],
			'Q',
			[55.26386, -5.971956],
			[55.703903, -6.640529],
			[56.165435, -7.815384],
			[57.576252, -6.84848],
			[59.104078, -5.398364],
			[58.712081, -3.054626],
			[57.784036, -1.373679],
			[57.244137, -1.708981],
			'L',
			[57.15, -2.11],
		],
		by: 'sea',
	},
	NorthEuropeRoutes[0],
];

const BritainLandExclusiveRoutes = [
	{
		route: 'Lontoo-Lincoln-York',
		coordinates: [
			[51.500278, -0.126111],
			[53.232719, -0.537661],
			[53.958333, -1.080278],
		],
	},
	{
		route: 'Ilchester-Southampton',
		coordinates: [
			[51.0011, -2.6825],
			[50.907, -1.405],
		],
	},
	{
		route: 'Winchester-Southampton',
		coordinates: [
			[51.063, -1.309],
			[50.907, -1.405],
		],
	},
	{
		route: 'Cirencester-Winchester-Lontoo',
		coordinates: [
			[51.719, -1.968],
			[51.063, -1.309],
			[51.500278, -0.126111],
		],
	},
	{
		route: 'Chester-Wroxeter-Gloucester-High Cross-St Albans-Lontoo-Dover',
		coordinates: [
			[53.19, -2.89],
			[52.67, -2.648],
			[51.864, -2.244],
			[52.67, -2.648],
			[52.49325, -1.30182],
			[51.755, -0.336],
			[51.500278, -0.126111],
			[51.128, 1.312],
		],
	},
	{
		route: 'Lincoln-High Cross-Cirencester-Bath-Ilchester-Exeter',
		coordinates: [
			[53.232719, -0.537661],
			[52.49325, -1.30182],
			[51.719, -1.968],
			[51.379425, -2.367061],
			[51.0011, -2.6825],
			[50.716667, -3.533333],
		],
	},
];

const EastEuropeRoutes = [
	{
		route: 'Kiova-Tšernihiv-Novhorod-Siverskyi-Bryansk (jokiliikenne)',
		coordinates: [
			'M',
			[50.45, 30.523333], //kiova
			'Q',
			[51.910814, 31.024377], //thser
			[51.983333, 33.266667], //nov-siv
			'L',
			[53.233333, 34.366667], //bryansk
		],
		by: 'sea',
	},
	{
		route: 'Sarai-Sarkel-Tana (nyk. Azov)',
		coordinates: [
			'M',
			[48.65, 45.45],
			'Q',
			[49, 42],
			[47.719671, 42.219232],
			'M',
			[47.719671, 42.219232],
			[47.1, 39.416667],
		],
		by: 'land',
	},
	{
		route: 'Sarai-Moskovan ja Uljanovskin väliset alueet',
		coordinates: [
			'M',
			[48.65, 45.45],
			'Q',
			[49.389524, 42.901233],
			[55.182004, 44.434703],
		],
		by: 'land',
	},
	{
		route: 'Kaffa-Konstantinopoli (nyk. Istanbul)',
		coordinates: [
			'M',
			[45.048889, 35.379167],
			'Q',
			[42, 32.555],
			[41.013611, 28.955],
		],
		by: 'sea',
	},
	{
		route: 'Tana (nyk. Azov)-Kertš',
		coordinates: [
			'M',
			[47.1, 39.416667],
			'Q',
			[46.87, 36.7],
			[45.36, 36.48],
		],
		by: 'sea',
	},
	{
		route: 'Sarai-Moskovan ja Uljanovskin väliset alueet',
		coordinates: [
			'M',
			[48.65, 45.45],
			'Q',
			[49.389524, 42.901233],
			[55.182004, 44.434703],
		],
		by: 'land',
	},
];

const EastEuropeLandExclusiveRoutes = [
	{
		route:
			'Konstantinopoli (nyk. Istanbul)-Selymbria (nyk. Silivri)-Hadrianopolis (nyk. Edirne)-Plovdiv-Sofia-Niš',
		coordinates: [
			[41.009167, 28.975833],
			[41.080158, 28.26829],
			[41.666667, 26.566667],
			[42.15, 24.75],
			[42.7, 23.333333],
			[43.32102, 21.89567],
		],
	},
	{
		route:
			'Hadrianopolis (nyk. Edirne)-Kızılağaç (nyk. Elhovo)-Burgas-Shumen',
		coordinates: [
			[41.666667, 26.566667],
			[42.166667, 26.566667],
			[42.5, 27.466667],
			[42.166667, 26.566667],
			[43.283333, 26.933333],
		],
	},
	{
		route: 'Shumen-Conopa-Pereyslavets',
		coordinates: [
			[43.283333, 26.933333],
			[44.524906, 28.547266],
			[45.020156, 28.723162],
			[45.152264, 29.648188],
		],
	},
	{
		route: 'Košice-Buda (nyk. Budapest)-Székesfehérvár-Bruck an der Mur',
		coordinates: [
			[49.957314, 21.944178],
			[48.716667, 21.25],
			[47.4925, 19.051389],
			[47.188889, 18.413889],
			[47.416667, 15.266667],
		],
	},
	{
		route: 'Kiova-Žytomyr-Halych-Lviv-Sandomierz-Krakova',
		coordinates: [
			[50.45, 30.523333],
			[50.25329, 28.66534],
			[49.124722, 24.728611],
			[49.8433, 24.0266],
			[50.683333, 21.75],
			[49.8433, 24.0266],
			[50.064722, 19.945],
		],
	},
	{
		route: 'Gnjozdovo-Liubech-Vyšhorod-Kiova',
		coordinates: [
			[54.766667, 31.783333],
			[51.705222, 30.661667],
			[50.58279, 30.48536],
			[50.45, 30.523333],
		],
	},
	{
		route: 'Kesoniemi (nyk. Tallinna)-Tartu-Riga-Pskov-Polotsk-Vitsebsk',
		coordinates: [
			[59.437222, 24.745278],
			[58.383333, 26.716667],
			[57.593919, 26.539775],
			[56.948889, 24.106389],
			[57.593919, 26.539775],
			[57.816667, 28.333333],
			[55.483333, 28.8],
			[56.948889, 24.106389],
			[55.483333, 28.8],
			[55.191667, 30.205556],
		],
	},
	{
		route: 'Pskov-Novgorod-Laatokanlinna',
		coordinates: [
			[57.816667, 28.333333],
			[58.533333, 31.266667],
			[59.875, 31.325],
		],
	},
	{
		route: 'Novgorod-Toržok-Uglitš-Yaroslavl-Belozersk',
		coordinates: [
			[58.533333, 31.266667],
			[58.334009, 33.088351],
			[57.033333, 34.966667],
			[57.533333, 38.333333],
			[57.616667, 39.85],
			[60.033333, 37.766667],
		],
	},
	{
		route: 'Yaroslav-Rostov-Suzdal-Vladimir-Murom',
		coordinates: [
			[57.616667, 39.85],
			[57.183, 39.417],
			[56.416667, 40.45],
			[56.133333, 40.416667],
			[55.573104, 42.042096],
		],
	},
	{
		route: 'Ostrava-Brno',
		coordinates: [
			[50.452941, 18.870854],
			[49.835556, 18.2925],
			[49.2, 16.616667],
		],
	},
	{
		route: 'Wrocław-Lublin',
		coordinates: [
			[51.107778, 17.038611],
			[51.246389, 22.568333],
		],
	},
	{
		route: 'Krakova-Wrocław-Görlitz-Dresden-Praha-Leipzig',
		coordinates: [
			[50.064722, 19.945],
			[51.107778, 17.038611],
			[51.152778, 14.987222],
			[51.033333, 13.733333],
			[51.333333, 12.383333],
			[51.033333, 13.733333],
			[50.083333, 14.416667],
		],
	},
	{
		route:
			'Vitsebsk-Smolensk-Gnjozdovo-Minsk-Brest-Lublin-Sandomierz-Krakova',
		coordinates: [
			[54.766667, 31.783333],
			[54.782778, 32.045278],
			[55.193325, 30.206317],
			[54.766667, 31.783333],
			[53.763325, 30.344437],
			[53.902233, 27.561858],
			[53.763325, 30.344437],
			[52.100278, 23.68],
			[51.246389, 22.568333],
			[50.686111, 21.7375],
			[50.064722, 19.945],
		],
	},
	{
		route: 'Sofia-Vidin',
		coordinates: [
			[42.7, 23.333333],
			[44.22798, 22.532733],
		],
	},
	{
		route: 'Tinnovo-Plovdiv',
		coordinates: [
			[43.15, 26.166667],
			[42.15, 24.75],
		],
	},
	{
		route: 'Shumen-Tinnovo-Vidin-Požarevac',
		coordinates: [
			[43.283333, 26.933333],
			[43.15, 26.166667],
			[44, 22.866667],
			[44.22798, 22.532733],
			[44.616667, 21.183333],
		],
	},
	{
		route: 'Niš-Požarevac-Belgrad',
		coordinates: [
			[43.32102, 21.89567],
			[43.866667, 21.416667],
			[44.616667, 21.183333],
			[44.816667, 20.466667],
		],
	},
	{
		route: 'Niš-Skopje-Dyrrachium (nyk. Durrës)',
		coordinates: [
			[43.32102, 21.89567],
			[42.683333, 22.166667],
			[42, 21.433333],
			[42.148611, 20.539444],
			[41.316667, 19.45],
		],
	},
	{
		route:
			'Konstantinopoli (nyk. Istanbul)-Selymbria (nyk. Silivri)-Mosynopolis (Komotinin lähialue)-Kavala-Thessaloniki-Skopje',
		coordinates: [
			[41.009167, 28.975833],
			[41.080158, 28.26829],
			[41.128611, 25.325278],
			[40.933333, 24.4],
			[40.65, 22.9],
			[42, 21.433333],
		],
	},
	{
		route: 'Dyrrachium (nyk. Durrës)-Dubrovnik',
		coordinates: [
			[41.316667, 19.45],
			[41.783333, 19.633333],
			[42.43, 18.77],
			[42.633333, 18.1],
		],
	},
	{
		route: 'Dubrovnik-Split',
		coordinates: [
			[42.633333, 18.1],
			[43.2375, 17.4839],
			[43.440207, 16.833801],
			[43.5, 16.433333],
		],
	},
	{
		route: 'Belgrad-Buda (nyk. Budapest)-Esztergom-Bratislava',
		coordinates: [
			[44.816667, 20.466667],
			[45.6, 19.533333],
			[47.4925, 19.051389],
			[47.785556, 18.740278],
			[48.144722, 17.112778],
		],
	},
	{
		route: 'Bratislava-Brno-Praha',
		coordinates: [
			[48.144722, 17.112778],
			[49.2, 16.616667],
			[50.083333, 14.416667],
		],
	},
	{
		route: 'Praha-Dresden-Leipzig',
		coordinates: [
			[50.083333, 14.416667],
			[51.033333, 13.733333],
			[50.833333, 12.916667],
			[51.333333, 12.383333],
		],
	},
];

const SpainLandExclusiveRoutes = [
	{
		route: 'Bayonne-Tolouse',
		coordinates: [
			[43.49, -1.48],
			[43.604444, 1.443056],
		],
	},
	{
		route: 'Narbonne-Barcelona-Tarragona',
		coordinates: [
			[41.115556, 1.249444],
			[41.388056, 2.17],
			[42.180706, 2.931397],
			[43.1836, 3.0042],
		],
	},
	{
		route:
			'Nola-Santiago de Compostela-Gijón-Santander-Castro-Urdiales-Pamplona',
		coordinates: [
			[42.784921, -8.887654],
			[42.877778, -8.544444],
			[43.533333, -5.666667],
			[43.298198, -4.719565],
			[43.462778, -3.805],
			[43.384444, -3.215],
			[42.818333, -1.644167],
		],
	},
	{
		route: 'Zaragoza-Tudela-Burgos',
		coordinates: [
			[39.470278, -0.376944],
			[42.065278, -1.606667],
			[42.816667, -1.65],
			[42.537904, -2.705087],
			[42.35, -3.706667],
		],
	},
	{
		route: 'Valencia-Zaragoza',
		coordinates: [
			[39.470278, -0.376944],
			[40.640009, 0.181664],
			[41.134452, 0.82771],
			[41.656389, -0.876667],
		],
	},
	{
		route: 'Granada-Cordoba',
		coordinates: [
			[37.147729, -4.137316],
			[37.287711, -4.892293],
			[37.697133, -5.220391],
		],
	},
	{
		route: 'Burgos-Soria-Alarilla',
		coordinates: [
			[42.35, -3.706667],
			[41.976848, -3.219666],
			[41.766667, -2.466667],
			[40.848889, -3.105556],
		],
	},
	{
		route: 'Santiago de Compostela-León-Burgos-Segovia',
		coordinates: [
			[42.877778, -8.544444],
			[42.605556, -5.57],
			[42.35, -3.706667],
			[40.95, -4.166667],
			[40.792222, -4.06],
			[40.419644, -3.68526],
		],
	},
	{
		route: 'Huesca-Zaragoza-Calatayud-Alarilla-Toledo',
		coordinates: [
			[42.133333, -0.416667],
			[41.656389, -0.876667],
			[41.35, -1.633333],
			[40.848889, -3.105556],
			[40.816408, -3.156327],
			[40.720721, -3.304739],
			[40.514321, -3.585074],
			[40.419644, -3.68526],
		],
	},
	{
		route: 'Toledo-Consuegra-Córdoba-Sevilla',
		coordinates: [
			[39.856667, -4.024444],
			[39.461944, -3.606389],
			[37.883333, -4.766667],
			[37.382778, -5.996389],
		],
	},
	{
		route: 'Jaén-Granada-Málaga-Ronda-Algericas',
		coordinates: [
			[38.103495, -4.607046],
			[37.769722, -3.788889],
			[37.573426, -3.584893],
			[37.296452, -3.568402],
			[37.178056, -3.600833],
			[37.147729, -4.137316],
			[36.719722, -4.42],
			[36.737222, -5.164722],
			[36.83402, -5.393324],
			[36.461606, -5.61592],
			[36.1275, -5.453889],
		],
	},
];

const WestEuropeLandExclusiveRoutes = [
	{
		route: 'Narbonne-Montpellier-Arles',
		coordinates: [
			[43.1836, 3.0042],
			[43.270206, 3.178748],
			[43.611944, 3.877222],
			[43.6767, 4.6278],
			[43.7983, 4.851168],
		],
	},
	{
		route: 'Nürnberg-Bamberg',
		coordinates: [
			[49.45, 11.083333],
			[49.9, 10.9],
			[50.488313, 9.333474],
		],
	},
	{
		route: 'Nürnberg-Hof-Zwickau-Leipzig',
		coordinates: [
			[49.45, 11.083333],
			[50.316667, 11.916667],
			[50.716667, 12.5],
			[51.333333, 12.383333],
		],
	},
	{
		route: 'Innsbruck-Regensburg-Nürnberg',
		coordinates: [
			[47.268333, 11.393333],
			[48.684614, 12.512207],
			[49.016667, 12.083333],
			[49.45, 11.083333],
		],
	},
	{
		route: 'Bologna-Verona-Trento-Bolzano-Innsbruck-Augsburg-Nürnberg',
		coordinates: [
			[44.493889, 11.342778],
			[45.438611, 10.992778],
			[46.066667, 11.116667],
			[46.5, 11.35],
			[47.268333, 11.393333],
			[48.366667, 10.9],
			[48.981118, 10.468076],
			[49.45, 11.083333],
		],
	},
	{
		route: 'Bremen-Hannover-Braunschweig-Magdeburg-Lutherstadt Wittenberg',
		coordinates: [
			[53.083333, 8.8],
			[52.366667, 9.733333],
			[52.266667, 10.516667],
			[52.133333, 11.616667],
			[51.85, 12.633333],
		],
	},
	{
		route: 'Pariisi-Reims-Frankfurt am Main',
		coordinates: [
			[48.856613, 2.352222],
			[49.258333, 4.033333],
			[50.111389, 8.680556],
		],
	},
	{
		route: 'Pariisi-Troyes-Bar-sur-Aube-Basel',
		coordinates: [
			[48.856613, 2.352222],
			[48.2997, 4.0792],
			[48.27, 4.72],
			[47.481945, 5.818419],
			[47.566667, 7.6],
		],
	},
	{
		route: 'Troyes-Reims-Arras-Saint-Omer',
		coordinates: [
			[48.2997, 4.0792],
			[49.258333, 4.033333],
			[50.746111, 2.261667],
		],
	},
	{
		route: 'Tarragona-Huesca-Pamplona-Bayonne-Bordeaux',
		coordinates: [
			[41.115556, 1.249444],
			[42.133333, -0.416667],
			[42.818333, -1.644167],
			[43.49, -1.48],
			[44.833333, -0.566667],
		],
	},
	{
		route: 'Bordeaux-Poitiers-Tours-Orléans-Pariisi-Arras-Ieper-Brugge',
		coordinates: [
			[44.833333, -0.566667],
			[46.58, 0.34],
			[47.3936, 0.6892],
			[47.9025, 1.908889],
			[48.856613, 2.352222],
			[50.289722, 2.780833],
			[50.85, 2.883333],
			[51.216667, 3.233333],
		],
	},
	{
		route: 'Milano-Basel',
		coordinates: [
			[45.466667, 9.183333],
			[47.154237, 9.159805],
			[47.521838, 8.677319],
			[47.528793, 7.917623],
		],
	},
	{
		route: 'Lausanne-Bern-Basel',
		coordinates: [
			[46.521944, 6.633611],
			[46.95, 7.45],
			[47.24428, 7.85441],
			[47.528793, 7.917623],
			[47.566667, 7.6],
		],
	},
	{
		route: 'Savona-Torino',
		coordinates: [
			[44.309167, 8.474722],
			[45.066667, 7.683333],
		],
	},
	{
		route: 'Pavia-Torino-Aosta-Lausanne-Besançon-Dijon-Lyon',
		coordinates: [
			[45.185, 9.154167],
			[45.066667, 7.683333],
			[45.733333, 7.316667],
			[45.868889, 7.170556],
			[46.521944, 6.633611],
			[47.24, 6.02],
			[47.290556, 5.042778],
			[45.767222, 4.834444],
		],
	},
	{
		route: 'Bologna-Parma-Pavia-Genova-Milano',
		coordinates: [
			[44.5075, 11.351389],
			[44.8, 10.333333],
			[45.185, 9.154167],
			[45.466667, 9.183333],
			[45.185, 9.154167],
			[44.406944, 8.933889],
		],
	},
	{
		route:
			'Bratislava-Bruck an den Mur-Friesach-Villach-Udine-Venetsia-Verona-Bologna',
		coordinates: [
			[48.144722, 17.112778],
			[47.416667, 15.266667],
			[46.95, 14.416667],
			[46.616667, 13.85],
			[46.066667, 13.233333],
			[45.4375, 12.335833],
			[45.433333, 10.983333],
			[44.5075, 11.351389],
		],
	},
	{
		route: 'Brindisi-Taranto-Bari-Trani-Ortona-Ancona-Fano-Bologna',
		coordinates: [
			[40.638333, 17.945833],
			[40.466667, 17.233333],
			[41.05, 16.7],
			[41.125278, 16.866667],
			[41.05, 16.7],
			[41.266667, 16.416667],
			[41.8, 14.916667],
			[42.35, 14.4],
			[42.665833, 13.718611],
			[43.616944, 13.516667],
			[43.579458, 13.437239],
			[43.833333, 13.016667],
			[44.5075, 11.351389],
		],
	},
	{
		route: 'Bologna-Firenze-Pisa',
		coordinates: [
			[44.5075, 11.351389],
			[43.768611, 11.256944],
			[43.716667, 10.4],
		],
	},
	{
		route: 'Firenze-Siena-Viterbo-Rooma-Gaeta-Amalfi',
		coordinates: [
			[43.768611, 11.256944],
			[43.318333, 11.331389],
			[42.416667, 12.1],
			[41.895556, 12.482222],
			[41.216667, 13.566667],
			[41.241287, 13.550954],
			[41.300121, 13.655392],
			[41.264517, 13.789147],
			[40.871209, 14.353663],
			[40.633333, 14.6],
		],
	},
];

export {
	MediterraneanRoutes,
	MediterraneanLandExclusiveRoutes,
	WestEuropeRoutes,
	WestEuropeLandExclusiveRoutes,
	EastEuropeRoutes,
	EastEuropeLandExclusiveRoutes,
	NorthEuropeLandExclusiveRoutes,
	NorthEuropeRoutes,
	BritainRoutes,
	BritainLandExclusiveRoutes,
	SpainRoutes,
	SpainLandExclusiveRoutes,
};
