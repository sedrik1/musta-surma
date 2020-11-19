import references from "../../Data/Misc/References";
const { RN, PTH, B, CBC, NR, MS, KC, JRE, JF, A, TK, JS, MI, CW } = references;

/** Sarai
 * Konstantinopoli
 * Sardinia
 * Lyon
 * Givry
 * Pariisi
 * Bristol
 * Bjørgvin
 * Oslo
 * Moskova
 */

const Mediterranean = [
  {
    reference: [CBC, PTH],
    location: "Konstantinopoli (nyk. Istanbul)",
    coordinates: [41.013611, 28.955],
    info: `Kaffasta lähteneet genovalaiset kauppiaat toivat taudin mukanaan Konstantinopoliin`,
  },
  {
    reference: [PTH, MS],
    location: "Messina",
    coordinates: [38.189, 15.55],
    info: `Euroopan kaupungeista Messina, joka sijaitsee Italian saappaankärjessä eli Sisiliassa, joutui ensimmäisenä kokemaan mustan surman julmuuden. 
			Lokakuussa vuonna 1347 Konstantinopolista tai Kaffasta saapuneet kauppalaivat saastuttivat kaupungin, ja todellisuus valitettavan tilanteen aiheuttamasta säälimättömästä ankaruudesta saattoi asukkaat kauhun valtaan.
			Kauppalaivat karkotettiin satamasta hetimmiten asian tultua tietoon, mutta liian myöhään. Kulkutauti oli jo saanut otteen kaupungista ja paniikissaan asukkaat pakenivat maalle, epätoivoisesti pyrkien kauas muusta yhteiskunnasta.`,
  },
  {
    reference: [MS],
    location: "Sardinia",
    coordinates: [39.227778, 9.111111],
    info:
      "Messinnasta ripeästi poisajetut kauppalaivat saapuivat Sisilian naapurisaarelle Sardiniaan vain kuukautta myöhemmin, siten tuomiten senkin asukkaat sanomattomaan kurjuuteen.",
  },
  {
    reference: [JF, MS],
    location: "Korsika",
    coordinates: [41.9267, 8.7369],
    info: `Korsika koki ruton samoihin aikoihin, kuin Sardiniakin, eli marraskuun paikkeilla.
      Seuraava on peräisin Boccaccion, italialaisen kirjailija-runoilijan, kirjasta, Decameronesta. Vaikkei se kerrokaan Korsikasta, on oletettavaa, että siinä esitetyt reaktiot tautiin ovat yleistettävissä.
      Kuolleiden määrä kasvoi niin nopeasti ja niin suurissa määrin, että tavalliset keskiaikaiset hautajaismenot sivuutettiin. Ruumiiden poistaminen katukuvasta suoritettiin joukkohautaamalla vainajia.
      Joukkohautaaminen varmasti lievitti milloin missäkin lojuvien menehtyneiden määrää, mutta tilanteen sekasortoisuuteen sillä oli vähän vaikutusta. Ruumiiden määrä taloissa ja kaduilla säilyi toimista huolimatta.
      Ihmisillä oli maallisen elämän päättymisen lisäksi kivenä sydämellä hengellinen kuolema. Papisto ja muut Jumalan palvelijat pelkäsivät tautia yhtä paljon, eivätkä siksi siunanneet kuolleita. Kansalle tämä oli umpikuja.`,
  },
];

const WestEurope = [
  {
    reference: [RN],
    location: "Firenze",
    coordinates: [43.768611, 11.256944],
    info: `Firenzen asukkaat toimivat samalla tavalla kuin messinalaiset: jokainen kynnelle kykenevä hylkäsi kaupungin ja pakeni maalle ylhäiseen yksinäisyyteensä.
		Kaupunkielämä ei suinkaan kuollut ainoastaan rikkaiden osalta, vaan tuotantoon liittyvä toiminta kuihtui kokoon täysin. Sepänpajat ja kestikievarit sulkivat ovensa. Ainoastaan hengellisen elämän tyyssija, kirkko, sekä apteekit jatkoivat toimintaansa.
		Työnteon huvetessa ilmeni kaksi ongelmaa, toinen akuutti ja toinen krooninen: ilman työvoimaa lisää hyödykkeitä ei tuoteta ja ilman tietotaidolla varustettua työvoimaa hyödykkeitä ei voida tuottaa.
		Kumminkin maaseudulta kaupunkeihin vaeltanut väestö ratkaisi kummankin markkinoihin liittyvän pahan pulman Maaseudulta saapuva, mutta johti maaseudulla asuvien roimaan vähenemiseen. 
		`,
  },
  {
    reference: [RN],
    location: "Siena",
    coordinates: [43.318333, 11.331389],
    info: `Ruton iskettyä kaupunkiin tai vastaavaan urbaaniin sijaintiin, väestökeskuksen luhistuminen noudatti enemmän tai vähemmän samaa kaavaa: 
		- Ylhäiset pakenevat maalle, kaupunkiin jäävä alempi kansa joko lakkaa työllistämästä tai työskentelemästä tartuntapelon tai lähestyvän kuoleman takia.
		- Paikallishallinnosta vastaavat ovat itsekin samassa pinteessä; kaupunkien väestö, riippumatta sosioekonomisesta tilanteestaan, koostuu kuolevaisista. Tapaamisten pitäminen keskeytetään ja kaikki hallintotoimenpiteet supistetaan vähimmäisvaatimuksiin.
		Ylhäiset eivät ole toimittamassa virkaansa kaupungeissa. Työntekijöitä, vaikka heitä olisikin, ei voi hyödyntää kokonaismäärän vähäisyyden takia. Työllistäjät eivät pidä kauppojensa ovia auki samoista syistä, joista hallinnon viranomaiset eivät suorita velvollisuuksiaan kaupungin kaitsemiseksi.
		Hengenviljelys, seurapiirielämä, teollisuus ja kaupungin ylläpito kuolee pystyyn. Ainoa jatkumo maanpäällisessä helvetissä on Herraan turvautuminen.`,
  },
  {
    reference: [RN],
    location: "Pistoia",
    coordinates: [43.933333, 10.916667],
    info: `Markkinat kokivat mullistuksen, kun työvoima kaikkosi. Elintarvike-, palvelu- ja hyödykehinnat ampaisivat suuriin, jopa kieroutuneen kokoisiin summiin. Tuotannon laskiessa ja hintojen noustessa kysynnän ja tarjonnan suhde muuttui perverssiksi, varsinkin, kun vielä taudin loppuvaiheilla hinnat pysyivät sanomattoman kalliina.
	Vaikka ruoka olikin kortilla, ihmiset saivat jollain tavalla pidettyä itsensä hengissä. Hallintoviranomaiset ilmeisesti jakoivat ruokaa, mutta määristä ei ole tarkempaa tietoa.
	`,
  },
  {
    reference: [A, CBC, TK],
    location: "San Gimignano",
    coordinates: [43.468, 11.042],
    info: `Musta surma aiheutti Euroopassa järisyttävän väkikadon, kuten hyvin tiedetään. Kaupunkitasolla kuolleisuus vaihteli, mutta asian havainnollistamiseksi otetaan esimerkiksi Asikkala, Lahden naapurikunta.
		Kunnan asukasluku oli vuoden 2018 lopulla 8149 henkilöä. San Gimignano menetti tutkimuksien mukaan 66 % väestöstään.
		Yksinkertaisella prosenttilaskulla, 8149 / 100 * 66, saadaan tulokseksi n. 5378. Pelkkä kuolinluku sellaisenaankin on suuri, mutta jos otetaan tarkastelukohteeksi synnyinluvut Suomessa vuonna 2019, voidaan asiaa tarkastella pelkistetysti syntymät-kuolemat-asetelmalla.
		Vuonna 2019 Suomessa elävänä syntyneitä oli 45 613. Toimittamalla laskusuorituksen 5378 * 100 / 45613 saadaan vastaukseksi n. 11,8 %. San Gimignanon koettelemus ei olisi siis nykypäivänkään kunnassa, saatikka valtiollisesti, pieni asia.`,
  },
  {
    reference: [B, RN, MS],
    location: "Milano",
    coordinates: [45.466667, 9.183333],
    info: `Muiden kaupunkien kärsiessä ruton pirullisuudesta, oli Milanon kaupungissa verrattain ruusuista. Kaupungin viranomaisten tiukat, jopa armottoman kireät, määräykset taudin leviämisen suitsemiseksi olivat omiaan estämään suuren kuolleisuuden ja muiden kaupunkien kokeman urbaanin elämän lauhtumisen.
	Kaupunkiin pyrkivistä suurin osa jäi porttien valitettavammalle puolelle ja tautia sairastavat pakotettiin koteihinsa lukkojen taakse. Vain kourallinen ihmisiä kuoli; historiankirjoissa väitetään vain kolmen perheen heittäneen lusikan nurkkaan.`,
  },
  {
    reference: [MS],
    location: "Frankfurt am Main",
    coordinates: [50.116667, 8.683333],
    info: `Kulkutauti ehti levitä juuri ja juuri Frankfurtin paikkeille vuoden 1348 kesäkuuhun mennessä.
	`,
  },
  {
    reference: [CBC],
    location: "Marseille",
    coordinates: [43.2975, 5.381111],
    info: `Rutto saapui Marseilleen marraskuussa v. 1347. Todennäköisesti tauti levisi marseillelaisten omien kauppalaivojen palatessa Genovasta, joiden kauppareitti kulki rantoja mukaillen ja niiden läheisyydessä.
		Muutenkin oli tavallista, että rantaviivaa matkatessa kauppalaivat laskivat pienempiin satamakaupunkeihin, joita historia ei mainitse lainkaan. Kuitenkin näidenkin satamien todennäköisin kohtalo oli altistua rutolle.
		Välimeren tehokas ja tiuhaan kuljettu kauppareittiverkosto oli omiaan levittämään kulkutaudin pitkällekin, paljon nopeammin maalla kulkevia kauppareittejä.`,
  },
  {
    reference: [CBC, PTH, MS],
    location: "Genova",
    coordinates: [44.406944, 8.933889],
    info: `Kaffasta lähteneet, Konstantinopolissa etapin tehneet kauppalaivat saapuivat vuoden 1348 tammikuussa Genovan rantakaupunkiin. Laivojen saapuminen oli asukkaille varmasti mitä oudoin ilmestys, koska ne rantautuivat erittäin oudoksuttavassa tilassa.
    Oudoksuttava on vähintäänkin vähättelevä tapa kuvata tilannetta, sillä matkustajille matka oli varmasti suuri koettelemus. Matkustajista oli jäljellä kourallinen; suurin osa oli siirynyt ajasta ikuisuuteen matkan aikana.
    Genovan osuutta ruton leviämisessä on mahdoton sivuuttaa. Sijaintinsta ja yhteyksiensä takia se oli eräs vilkkaimmista kaupungeista Euroopassa. Kauppareittejä kulki lukuisiin suuntiin, kuten Toscanaan.
    Kuolleisuus oli mittavaa. Todennäköisesti noin 60 % - arvioiden mukaan 36 000 - asukkaista kuoli ruton seurauksena.`,
  },
  {
    reference: [MS],
    location: "Pariisi",
    coordinates: [48.85, 2.35],
    info: `Vuonna 1349 manner-Euroopassa, jossa tauti oli ehtinyt pauhata jo kelpo ajan, taudin kuristava ote alkoi heiketä. Tämä oli aikalaisille vain hetkellinen helpotus; vasta ensimmäinen ruttoaalto oli hiipumassa.
	Sen aikaisella mittapuulla Pariisin kaltaiset suurkaupungit eivät saaneet hetken rauhaa edes aaltojen välisinä ajanjaksoina, vaan kokivat samoja, mutta aavistuksen verran vähemmän karuja oloja.`,
  },
  {
    reference: [MS],
    location: "Avignon",
    coordinates: [43.95, 4.81],
    info: `Genovasta saapuneiden kauppalaivojen mukana tullut rutto ei jäänyt vain marseillelaisten riesaksi. Almanakkasivuakaan ei ehtisi kääntää, koska tauti kiri satamakaupungista Avignoniin ennen kuukauden kulumista.
	Suuressa viisaudessaan katolinen kirkko oli siirtänyt paavin hallintapaikan Roomasta Avignoniin vuosisadan alussa. Tämän maallisen hallitustoimen luulisi koituneen paavin kohtaloksi, mutta toisin kävi.
	Klemens VI koki tarpeelliseksi jäädä henkiin, rutosta viis. Hänen onnekseen neuvokkaat henkilääkärit ohjeistivat hänet pysymään erillään muista. Tämä ei ollut ainoa oiva neuvo: lääkärit määräsivät poltettavaksi kaksi takkatulta hänen huoneissaan.
	Tulien kuumuus lienee ollut tuskallinen keskikesän helteessä, mutta sillä oli mielenkiintoinen sivuvaikutus, jota lääkärit tuskin pyrkivät saavuttamaan: kuumuus tappoi tautia kuljettaneet rotat ja niissä kihisevät itikat.
	Klemens selvisi. Tosin hänen henkilökuntansa koki tuntuvan vähennyksen, noin neljänneksen verran, ennen taudin hellittämistä.`,
  },
  {
    reference: [JS],
    location: "Mainz",
    coordinates: [50, 8.266667],
    info: `Strasbourgissa tapahtunut juutalaisten joukkomurha ei ollut ainoa laatuaan. Mainzissa kristityt päättivät ryhtyvänsä samanlaisiin toimiin, kuin strasbourgilaiset. Juutalaiset ryhtyivät vastarintaan, mutta turhaan. Kahakoinnin ja sitä seuraavan pyövelintyön jälkeen kaupungin juutalaisväestö väheni 3000 hengellä.
    Antisemitistiset toimet todennäköisesti juontavat juurensa hevosmiesten uutistoimistoon. Rein-joen varrella levinnyt väittämä kuului, että juutalaiset olisivat myrkyttäneet kaivoja.`,
  },
  {
    reference: [JF, JS],
    location: "Strasbourg",
    coordinates: [48.58, 7.75],
    info: `Aikalaiset eivät tienneet taudin alkuperää saatika sen tapaa saastuttaa ihminen. Tietämättömyys kasvatti ennakkoluuloja, ja nämä väkivaltana purkautuvat paineet saivat aikaan raakalaismaista jälkeä.
    Ystävänpäivänä 2000 juutalaista teloitettiin erittäin raa'alla menetelmällä, eli polttamalla heidät elävänä. Strasbourgissa tapahtunut antisemitistinen joukkomurha oli yksi monista juutalaisia kohdanneista surunäytelmistä. 
    Saksassa ja Ranskassa hävitettiin, käytännössä pyyhittiin olemattomiin lukuisia juutalaisasuinalueita. Poikkeuksiakin oli. Puolan kuningas Kasimir III Suuri ojensi auttavan kätensä ja tarjosi vainotuille juutalaisille suojapaikan maastaan. Marseillekin luetaan juutalaisten suojasatamaksi.`,
  },
  {
    reference: [],
    location: "Givry",
    coordinates: [46.7831, 4.7436],
    info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    reference: [],
    location: "Lyon",
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
    reference: [PTH, RN, MS],
    location: "Sarai (nyk. Kolobovka / Selitrennoye)",
    coordinates: [48.65, 45.45],
    info: `Tauti, joka lopulta runteli Eurooppaa noin seitsemän vuoden ajan, oli peräisin Kaukoidästä ja kulkeutui Silkkitietä pitkin Kultaisen ordan, muuan mongoli-imperiumin seuraajavaltakunnan, hallitsemille alueille Etelä-Venäjälle.
		Volgan alajuoksulla sijaitseva Sarai – joista Uusi Sarai sijaitsi Kolobovkan ja Vanha Sarai Selitrennoyen kohdalla – oli ordan pääkaupunki.
        Kauppareitit ja kaupunkien kehitys olivat keskeisiä tekijöitä sairauden tehokkaan leviämisen kannalta.`,
  },
  {
    reference: [CBC, PTH, MS],
    location: "Kaffa (nyk. Feodosija)",
    coordinates: [45.048889, 35.379167],
    info: `Musta meri oli italialaisten kauppiaiden eräs kauppapaikkasijoituskohde. Genovalaisilla, venetsialaisten röyhkeimmillä kilpailijoilla, oli Kaffan kaupungissa kauppapaikka ja tuotantotehdas.
		Kaupunki kuitenkin joutui Kultaisen ordan valloitusaikomusten kohteeksi, ja piirittäessään Kaffaa Janibeg, ordan päämies, päätti hyödyntää ruttoon menehtyneiden ruumiita sotilaskäytössä.
		Käsky heitättää katapultein ajasta ikuisuuteen siirtyneiden ruumiit kaupungin muurien yli tuotti mitä hirveimpiä tuloksia. Kaupunkilaisten seuratessa vainajien läsähtelyä talojensa seiniin ja katukivityksille, heidän kohtalonsa oli sinetöity. Kaffa saastui ja asukkaat kokivat ruton aiheuttaman kalmankauhun.
		Jossain vaiheessa jo ruton puhjettua 12 kauppalaivaa lähti kaupungista, todennäköisesti päämääränään Italia ja välietappina Konstantinopoli.
		Vanhan mantereen kohtalo oli peruuttamattomasti päätetty kenenkään, edes laivamatkustajien, tietämättä.`,
  },
  {
    reference: [JRE],
    location: "Ragusa (nyk. Dubrovnik)",
    coordinates: [42.633333, 18.1],
    info: `Vuonna 1377 venetsialaisten hallinnassa oleva satamakaupunki Ragusa määräsi karanteenitoimet jokaiselle saapuvalle laivalle.`,
  },
  {
    reference: [],
    location: "Moskova",
    coordinates: [55.755833, 37.617222],
    info: `Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna
			aliqua Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua`,
  },
  {
    reference: [CBC, PTH],
    location: "Tana (nyk. Azov)",
    coordinates: [47.1, 39.416667],
    info: `Tanan kaupunki oli eräs italialaisten kauppapaikka Mustalla merellä. Kaupunki kuitenkin joutui vallanhimoisen ordan laajenemissuunnitelmien kohteeksi, ja se ajoi armeijoineen kauppiaat ulos kaupungista v. 1343.
		Kauppiaat kääntyivät Kaffaa hallinnoivien genovalaisten puoleen pelastaakseen henkensä arokansojen ratsuväeltä. Muurien sisään päästyään pelastunut kauppiasrykelmä tuskin osasi aavistaa, kuinka nopeasti genovalaisten tyyssija Mustalla merellä joutuisi samaan ahdinkoon, josta liikkeenharjoittajat olivat itse vastikään paenneet.`,
  },
];

const NorthEurope = [
  {
    reference: [PTH],
    location: "Bjørgvin (nyk. Bergen)",
    coordinates: [60.3925, 5.323333],
    info: `Tavallisesti ruton esitetään tulleen Norjan Bergeniin villalaivan mukana 
		Lontoosta toukokuussa 1349. Tosiasiassa rutto saapui Oslon seudulle ilmeisesti jo vuoden 1348 lopulla `,
  },
  {
    reference: [PTH],
    location: "Oslo",
    coordinates: [59.913889, 10.752222],
    info: `Tavallisesti ruton esitetään tulleen Norjan Bergeniin villalaivan mukana 
		Lontoosta toukokuussa 1349. Tosiasiassa rutto saapui Oslon seudulle ilmeisesti jo vuoden 1348 lopulla `,
  },
];

const Britain = [
  {
    reference: [MI],
    location: "Bristol",
    coordinates: [51.45, -2.583333],
    info: `Elokuussa tai sen paikkeilla v. 1348 tauti levisi satamakaupunki Bristoliin`,
  },
  {
    reference: [JS],
    location: "Wales",
    coordinates: [52.3, -3.6],
    info: `Wales joutui etelästä pakoon lähteneiden englantilaisten takia maksamaan kovan hinnan. Englantilaiset toivat mukanaan taudin ja sen seurauksena 100 000 menehtyi Walesissa.`,
  },
  {
    reference: [MI],
    location: "Lontoo",
    coordinates: [51.507222, -0.1275],
    info: `Lontoon kaupunki altistui taudille marraskuussa v. 1348. Kuten muuallakin, haudattujen määrä ja menehtymisnopeus ovat huimaavia.
    Lontoossa haudattiin eräässä vaiheessa vähintään 200 ruumista päivässä, jokainen vasta valmistuneelle hautausmaalle. On merkittävää, että kyseessä on vain yhden hautuumaan luku; muillekin kaupungin vainajien makuusijoille laskettiin ruumiita.
    Tähän aikaan Lontoo oli varsinainen mätäpaise: kaupungin jätehuolto oli kuvottavan huono ja jätealtaat olivat erinomaisia saastumistyyssioja rutolle sekä Thames-joki oli solkenaan täynnä saasteita ja roskaa. Kaupungin ljettävän yleiskuntonsa lisäksi asukasluku oli niin suuri, että tartunnan saaminen ja sen levittäminen oli mitä vaivattomin tapahtumaketju.`,
  },
  {
    reference: [MS, CW],
    location: "Melcombe (nyk. Weymouth)",
    coordinates: [50.613, -2.457],
    info: `V. 1348 Melcombeen palasi Gasconysta, Ranskasta ainakin kaksi asiaa: merimies ja häneen iskostunut rutto. Merimies päätti jäädä nukkumaan kaupunkiin ja jatkaa matkaansa sen jälkeen Dorchesteriin, josta tauti alkoi levittäytyä pitkin Britannian saarta.`,
  },
];

export { Mediterranean, WestEurope, EastEurope, Britain, NorthEurope };
