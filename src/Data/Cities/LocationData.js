const RN = {
	reference: `Nykänen, R. 2010. Elämä tautisessa kaupungissa – Mustan surman vaikutus toscanalaiskaupunkien arkeen. Historian Pro Gradu -tutkielma. Humanistinen tiedekunta. Tampere: Tampereen yliopisto. Viitattu 28.10.2020.`,
	link: 'https://trepo.tuni.fi/bitstream/handle/10024/81816/gradu04473.pdf',
};
const CBC = {
	reference: `Benedictow, O. J.; Bianucci, R. & Cesana, D. 2016. The origin and early spread of the Black Death in Italy: first evidence of plague victims from 14th-century Liguria (northern Italy). Viitattu 28.10.2020.`,
	link:
		'https://www.jstage.jst.go.jp/article/ase/advpub/0/advpub_161011/_pdf',
};
const PTH = {
	reference: `Heikura, P. T. 2003. Musta surma. Tieteessä Tapahtuu, 21(8). Viitattu 27.10.2020.`,
	link: 'https://journal.fi/tt/article/view/57247',
};
const JF = {
	reference: `Frith, J. 2012. The History of Plague – Part 1. The Three Great Pandemics. Journal of Military and Verans’ Health, 20(2). Viitattu 28.10.2020.`,
	link:
		'https://jmvh.org/article/the-history-of-plague-part-1-the-three-great-pandemics/',
};
const KC = {
	reference: `Kjaer, C. 2019. Tutkijat paljastavat: Täältä musta surma alkoi. Tieteen Kuvalehti. Viitattu 28.10.2020.`,
	link:
		'https://tieku.fi/laaketiede/sairaudet/tutkijat-paljastavat-taalta-musta-surma-alkoi',
};
const MS = {
	reference: `Snell, M. 2019. The Arrival and Spread of the Black Plague in Europe. ThoughtCo. Viitattu 14.10.2020.`,
	link:
		'https://www.thoughtco.com/spread-of-the-black-death-through-europe-4123214',
};

const Mediterranean = [
	{
		reference: [CBC, PTH],
		location: 'Konstantinopoli (nyk. Istanbul)',
		coordinates: [41.013611, 28.955],
		info: `Kaffasta lähteneet genovalaiset kauppiaat toivat taudin mukanaan Konstantinopoliin`,
	},
	{
		reference: [PTH],
		location: 'Messina',
		coordinates: [38.189, 15.55],
		info: `Euroopan kaupungeista Messina, joka sijaitsee Italian saappaankärjessä eli Sisiliassa, joutui ensimmäisenä kokemaan mustan surman julmuuden. 
			Lokakuussa vuonna 1347 Konstantinopolista saapuneet kauppalaivat saastuttivat kaupungin, ja todellisuus valitettavan tilanteen aiheuttamasta säälimättömästä ankaruudesta saattoi asukkaat kauhun valtaan.
			Kauppalaivat karkotettiin satamasta hetimmiten asian tultua tietoon, mutta liian myöhään. Kulkutauti oli jo saanut otteen kaupungista ja paniikissaan asukkaat pakenivat maalle, epätoivoisesti pyrkien kauas muusta yhteiskunnasta.`,
	},
	{
		reference: [],
		location: 'Sardinia',
		coordinates: [39.227778, 9.111111],
		info:
			'Messinnasta ripeästi poisajetut kauppalaivat saapuivat Sisilian naapurisaarelle Sardiniaan vain kuukautta myöhemmin, siten tuomiten senkin asukkaat sanomattomaan kurjuuteen.',
	},
	{
		reference: [],
		location: 'Korsika',
		coordinates: [41.9267, 8.7369],
		info:
			'Korsika koki ruton samoihin aikoihin, kuin Sardiniakin, eli marraskuun paikkeilla.',
	},
];

const WestEurope = [
	{
		reference: [RN],
		location: 'Firenze',
		coordinates: [43.768611, 11.256944],
		info: `Firenzen asukkaat toimivat samalla tavalla kuin messinalaiset: jokainen kynnelle kykenevä hylkäsi kaupungin ja pakeni maallee ylhäiseen yksinäisyyteensä.
		Kaupunkielämä ei suinkaan kuollut ainoastaan rikkaiden osalta, vaan tuotantoon liittyvä toiminta kuihtui kokoon täysin. Sepänpajat ja kestikievarit sulkivat ovensa. Ainoastaan hengellisen elämän tyyssija, kirkko, sekä apteekit jatkoivat toimintaansa.`,
	},
	{
		reference: [],
		location: 'Siena',
		coordinates: [43.318333, 11.331389],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
	{
		reference: [],
		location: 'Pistoia',
		coordinates: [43.933333, 10.916667],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
	{
		reference: [CBC],
		location: 'San Gimignano',
		coordinates: [43.468, 11.042],
		info: `Musta surma aiheutti Euroopassa järisyttävän väkikadon, kuten hyvin tiedetään. Kaupunkitasolla kuolleisuus vaihteli, mutta asian havainnollistamiseksi otetaan esimerkiksi Asikkala, Lahden naapurikunta.
		Kunnan asukasluku on n. 8000 henkilöä, piirun verran yli. San Gimignano menetti tutkimuksien mukaan 66% väestöstään.
		Yksinkertaisella prosenttilaskulla, 8000 / 100 * 66, saadan tulokseksi 5280. Pelkkä kuolinluku sellaisenaankin on suuri, mutta jos otetaan tarkastelukohteeksi synnyinluvut Suomessa vuonna 2019, voidaan asiaa tarkastella pelkistetysti syntymät-kuolemat-asetelmalla.
		Vuonna 2019 Suomessa elävänä syntyneitä oli 45 613. Toimittamalla laskusuorituksen 5280 * 100 / 45613 saadaan vastaukseksi n. 11,6%. San Gimignanon koettelemus ei olisi siis nykypäivänkään kunnassa pieni asia, saatika koko valtiossa syntyvyyteen suhteutettuna.`,
	},
	{
		reference: [],
		location: 'Frankfurt am Main',
		coordinates: [50.116667, 8.683333],
		info: `Ruton iskettyä kaupunkiin tai vastaavaan urbaaniin sijaintiin, väestökeskuksen luhistuminen noudatti enemmän tai vähemmän samaa kaavaa: 
		- Ylhäiset pakenevat maalle, kaupunkiin jäävä alempi kansa joko lakkaa työllistämästä tai työskentelemästä tartuntapelon tai lähestyvän kuoleman takia.
		- Paikallishallinnosta vastaavaat ovat itsekin samassa pinteessä; kaupunkien väestö, riippumatta sosioekonomisesta tilanteestaan, koostuu kuolevaisista. Tapaamisten pitäminen keskeytetään ja kaikki hallintotoimenpiteet supistetaan vähimmäisvaatimuksiin.
		Ylhäiset eivät ole toimittamassa virkaansa kaupungeissa. Työntekijöitä, vaikka heitä olisikin, ei voi hyödyntää kokonaismäärän vähäisyyden takia. Työllistäjät eivät pidä kauppojensa ovia auki samoista syistä, joista hallinnon viranomaiset eivät suorita velvollisuuksiaan kaupungin kaitsemiseksi.
		Hengenviljelys, seurapiirielämä, teollisuus ja kaupungin ylläpito kuolee pystyyn. Ainoa jatkumo maanpäällisessä helvetissä on Herraan turvautuminen.`,
	},
	{
		reference: [CBC],
		location: 'Marseille',
		coordinates: [43.2975, 5.381111],
		info: `Rutto saapui Marseilleen marraskuussa v. 1347. Todennäköisesti tauti levisi marseillelaisten omien kauppalaivojen palatessa Genovasta, joiden kauppareitti kulki rantoja mukaillen ja niiden läheisyydessä.
		Muutenkin oli tavallista, että rantaviivaa matkatessa kauppalaivat laskivat pienempiin satamakaupunkeihin, joita historia ei mainitse lainkaan. Kuitenkin näidenkin satamien todennäköisin kohtalo oli altistua rutolle.
		Välimeren tehokas ja tiuhaan kuljettu kauppareittiverkosto oli omiaan levittämään kulkutaudin pitkällekin, paljon nopeammin maalla kulkevia kauppareittejä.`,
	},
	{
		reference: [],
		location: 'Pariisi',
		coordinates: [48.85, 2.35],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
	{
		reference: [],
		location: 'Avignon',
		coordinates: [43.95, 4.81],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
	{
		reference: [],
		location: 'Givry',
		coordinates: [46.7831, 4.7436],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
	{
		reference: [],
		location: 'Lyon',
		coordinates: [45.767222, 4.834444],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
];

const EastEurope = [
	{
		reference: [],
		location: 'Sarai (nyk. Kolobovka / Selitrennoye)',
		coordinates: [48.65, 45.45],
		info: `Volgan alajuoksulla sijaitseva Kultaisen ordan pääkaupunki Sarai, joista Uusi Sarai sijaitsi Kolobovkan ja Vanha Sarai Selitrennoyen kohdalla, oli mustan surman portti Konstantinopoliin ja sitä kautta muuhun Eurooppaan Välimeren kautta.
        Kauppareitit ja kaupunkien kehitys olivat keskeisiä tekijöitä sairauden tehokkaan leviämisen kannalta.`,
	},
	{
		reference: [PTH, CBC, MS],
		location: 'Kaffa (nyk. Feodosija)',
		coordinates: [45.048889, 35.379167],
		info: `Musta meri oli italialaisten kauppiaiden eräs kauppapaikkasijoituskohde. Genovalaisilla, venetsialaisten röyhkeimmillä kilpailijoilla, oli Kaffan kaupungissa kauppapaikka ja tuotantotehdas.
		Kaupunki kuitenkin joutui Kultaisen ordan valloitusaikomusten kohteeksi, ja piirittäessään Kaffaa Janibeg, ordan päämies, päättii hyödyntää ruttoon menehtyneiden ruumiita sotilaskäytössä.
		Käsky heitättää katapultein ajasta ikuisuuteen siirtyneiden ruumiit kaupungin muurien yli tuotti mitä hirveimpiä tuloksia. Kaupunkilaisten seuratessa vainajien läsähtelyä talojensa seiniin ja katukivityksille, heidän kohtalonsa oli sinetöity. Kaffa saastui ja asukkaat kokivat ruton aiheuttaman kalmankauhun.`,
	},
	{
		reference: [],
		location: 'Moskova',
		coordinates: [55.755833, 37.617222],
		info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
	},
	{
		reference: [PTH, CBC],
		location: 'Tana (nyk. Azov)',
		coordinates: [47.1, 39.416667],
		info: `Tana oli italialaisten kauppapaikka, kuten Kaffakin. Vallanhimoinen Kultainen orda, eräs mongoli-imperiumin seuraajavaltakunta, ajoi armeijoineen kauppiaat ulos kaupungista v. 1343.
		Kauppiaat kääntyivät genovalaisten puoleen pelastaakseen henkensä arokansojen ratsuväeltä. Muurien sisään päästyään pelastunut kauppiasrykelmä tuskin osasi aavistaa, kuinka nopeasti Tana joutuisi samaan ahdinkoon, josta olivat vastikään itse paenneet.`,
	},
];

const NorthEurope = [
	{
		reference: [PTH],
		location: 'Bjørgvin (nyk. Bergen)',
		coordinates: [60.3925, 5.323333],
		info: `Tavallisesti ruton esitetään tulleen Norjan Bergeniin villalaivan mukana 
		Lontoosta toukokuussa 1349. Tosiasiassa rutto saapui Oslon seudulle ilmeisesti jo vuoden 1348 lopulla `,
	},
	{
		reference: [PTH],
		location: 'Oslo',
		coordinates: [59.913889, 10.752222],
		info: `Tavallisesti ruton esitetään tulleen Norjan Bergeniin villalaivan mukana 
		Lontoosta toukokuussa 1349. Tosiasiassa rutto saapui Oslon seudulle ilmeisesti jo vuoden 1348 lopulla `,
	},
];

const Britain = [
	{
		reference: [],
		location: 'Bristol',
		coordinates: [51.45, -2.583333],
		info:
			'Elokuussa tai sen paikkeilla v. 1348 tauti levisi satamakaupunki Bristoliin',
	},
	{
		reference: [],
		location: 'Lontoo',
		coordinates: [51.507222, -0.1275],
		info: 'Lontoon kaupunki altistui taudille saman vuoden marraskuussa',
	},
	{
		reference: [],
		location: 'Weymouth',
		coordinates: [50.613, -2.457],
		info:
			'Ensimmäinen tunnettu tapaus todettiin Gasconysta, Ranskasta palanneella merimiehellä.',
	},
];

export { Mediterranean, WestEurope, EastEurope, Britain, NorthEurope };
