import references from "../../Data/Misc/References";
const {
  RN,
  PTH,
  B,
  CBC,
  JK,
  MS,
  KC,
  RJE,
  NFC,
  JF,
  A,
  TK,
  JS,
  JPG,
  HR,
  MI,
  CW,
} = references;

const Mediterranean = [
  {
    reference: [JK],
    location: "Konstantinopoli (nyk. Istanbul)",
    coordinates: [41.013611, 28.955],
    info: `Sijaintinsa takia Konstantinopoli oli pakollinen ohitettava kaupunki Mustan meren ja Välimeren välillä purjehtiville laivoille. Genovalaisten laivat, jotka lähtivät Tanasta saapuivat Itä-Rooman pääkaupunkiin väitetysti pahaenteistä hokemaan huudellen.
    "Olen kuolema", kuului genovalaisten suista. Varteenotettava ja pahaenteinen sanapari ei kuitenkaan vaikuttanut kaupungin taistelussa ruttoa vastaan. Kaupunki ei todennäköisesti menettänyt väitettyä 90 % asukasluvustaan, mutta kaupungissa vellova hysteria oli siitä huolimatta karmaisevaa.
    Sivistynyt mies ja hovin oppineena toimiva Demetrios Kydones kirjasi mustan surman aiheuttamia seuraamuksia ylös. Hän dramatisoi, vaikkakin tilanteeseen nähden aivan suotta, miten kaupungin väki hupenee ja hautojen määrä kasvaa päivä päivältä.`,
  },
  {
    reference: [PTH, KC, MS],
    location: "Messina",
    coordinates: [38.189, 15.55],
    info: `Euroopan kaupungeista Messina, joka sijaitsee Italian saappaankärjessä eli Sisiliassa, joutui ensimmäisenä kokemaan mustan surman julmuuden. 
			Lokakuussa vuonna 1347 Konstantinopolista tai Kaffasta saapunut 12 kauppalaivan saastuttivat kaupungin, ja todellisuus valitettavan tilanteen aiheuttamasta säälimättömästä ankaruudesta saattoi asukkaat kauhun valtaan.
			Kauppalaivat karkotettiin satamasta hetimmiten asian tultua tietoon, mutta liian myöhään. Kulkutauti oli jo saanut otteen kaupungista ja paniikissaan asukkaat pakenivat maalle, epätoivoisesti pyrkien kauas muusta yhteiskunnasta.`,
  },
  {
    reference: [JK],
    location: "Mallorca",
    coordinates: [39.616667, 2.983333],
    info: `Marseillesta lähtenyt laiva toi mukanaan kulkutaudin joulukuussa 1347. Rutto ei jäänyt pitkäksi aikaa vain mallorcalaisten riesaksi kaupungissa, jonka satama oli solkenaan täynnä kauppalaivoja.
    Ei kestänyt kuin nelisen kuukautta, kun Marseillesta saapunut tuhon siemen oli pienen Baleaarit-etapin jälkeen levinnyt maaliskuussa manner-Espanjaan. Barcelona ja Valencia olivat ensimmäiset Mallorcasta saapuneiden laivojen uhrit, mutta aikalaiskertomuksien mukaan kaupunkilaiset havaitsivat taudin joukossaan vasta kahden kuukauden jälkeen toukokuussa.
    Toukokuussa lähti lisää laivoja, joista yksi suuntasi Gibraltarille. Kaupunki oli Granadan alueella, joka oli Espanjassa eräs viimeinen muslimien hallitsema alue. Musta surma tulkittiin Allahin tahtona, eikä virallisia määräyksiä voitu siis antaa ehkäisemistä tai jatkotoimenpiteitä varten. Mikään ei kuitenkaan estänyt kaupunkilaisia toimimaan varovaisesti ja erinäiset toimenpiteet hillitsivät kulkutaudin leviämistä, mutta vain jonkin aikaa.`,
  },
  {
    reference: [MS],
    location: "Sardinia",
    coordinates: [39.227778, 9.111111],
    info: `Messinnasta ripeästi poisajetut kauppalaivat saapuivat Sisilian naapurisaarelle Sardiniaan vain kuukautta myöhemmin, siten tuomiten senkin asukkaat sanomattomaan kurjuuteen.`,
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
    reference: [JPG],
    location: "Barcelona",
    coordinates: [41.383333, 2.183333],
    info: `Barcelonan kaupunki oli keskiaikaiseksi ihmisasumukseksi siisti. Wanhoja roomalaisaikaisia rakennuksia käytettiin tehokkaasti viemäreinä.
    Tautitietämys ei kuitenkaan ollut muita eurooppalaisia kaupunkeja parempi, koska kansa sai taudin estämiseksi yhtä tehokkaita käskyjä, kuin mitä Ruotsin kuningas Magnus II oli julistanut. Totisesti, ainoa ero ruotsalaisilla ja espanjalaisilla oli rutolta suojautumiseen saatujen neuvojen määrä.
    Sairaat eristettiin tai heidän luotaan kaikottiin, mutta muitakin ehkäisemismenetelmiä pantiin koetukselle. Sitruunaa, laakeria tai katajan lehtiä poltettiin toivottua suojaa saamatta. Lääketieteelliset suosituksetkaan eivät osoittaneet parempaa ymmärrystä koettelemuksesta, koska suurin osa niistä tuntuu ennemminkin leikinlaskulta kuin vakavasti otettavilta suojakeinoilta.
    Lattioiden jynssääminen etikalla, appelsiinimehun juonti ja pellavaan pukeutuminen olivat muutamia kansalaisille annettuja neuvoja. Erään mukaan pohjoistuulessa oli jokin parantava vivahde ja sen puhaltaessa ikkunoita oli pidettävä auki.
    Kuolleita oli runsaasti ja vainajien lukumäärä vastasi muiden Euroopan suurempien kaupunkien kokemuksia, sillä noin 40 %:n verran kaupunkilaisista menehtyi. Juutalaiset saivat Barcelonassakin osansa ruttosyytöksistä. El Call -niminen juutalaiskommuuni pyyhkäistiin maan tasalle ja syytettyjä poltettiin elävältä.`,
  },
  {
    reference: [JK, MS],
    location: "Gibraltar",
    coordinates: [36.131667, -5.351667],
    info: `Alfonso XI oli ainoa ruttoon menehtynyt monarkki. Käydessään sotaa Granadassa, joka oli joutunut muslimien vallan alle hän saapui Gibraltarin luokse ja alkoi piirittää kaupunkia. Piirityksen aikana musta surma, joka riehui muslimisotilaiden keskuudessa, oli omiaan horjuttamaan heidän uskoaan Allahia kohtaan ja osa aprikoi kääntymistä kristinuskoon.
    Usko vahvistui kumminkin nopeasti ja kerettiläiset ajatukset kääntymisestä kaikkosivat joukkojen huomatessa kristittyjen kärsivän aina yhtä paljon kuin hekin. Allah ei siis vain rankaissut heitä, vaan oli jokaisen niskassa riippumatta hengellisen elämän saloista.
    Alfonso kuoli oikeamielisesti joukkojensa keskuudessa. Vaikka neuvonantajat kehottivatkin häntä hylkäämään etulinjaelämän, kuningas kieltäytyi ja maksoi jääräpäisyydestään hengellään.`,
  },
  {
    reference: [JK],
    location: "Wien",
    coordinates: [48.208333, 16.373056],
    info: `Vuoden 1349 kevääseen mennessä rutto oli ehtinyt levitä Wieniin saakka. Tauti ei säästellyt retosteluaan wieniläisiltä, vaan joka kolmas heistä kuoli. Mahdollisesti silkka hysteria oli omiaan saamaan ihmisten mielikuvituksen varsinaisen myllerryksen valtaan, koska kaupungissa syntyi urbaani legenda.
    Väitetiin nimittäin, että kuolleiden suusta olisi noussut jotain karmivaa ja luonnotonta: tummansininen, räiskyvä liekki. Legendan mukaan tämä oli ruton ruumiillistuma Pest Jungfrau, pahansuopa jumalatar, joka pelkällä kosketuksellaan saattoi tappaa elinkuntoisen ihmisen.
    Huhuista riippumatta tauti koetteli kaupunkia. Eräs rutosta selvinnyt kirjoitti muistiin nähneensä muuan väkevän tytön sammaltaneen kuolleen äitinsä perään tätä lastattaessa muiden vainajien päälle vankkureille.`,
  },
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
	Vaikka ruoka olikin kortilla, ihmiset saivat jollain tavalla pidettyä itsensä hengissä. Hallintoviranomaiset ilmeisesti jakoivat ruokaa, mutta määristä ei ole tarkempaa tietoa.`,
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
    info: `Kulkutauti ehti levitä juuri ja juuri Frankfurtin paikkeille vuoden 1348 kesäkuuhun mennessä.`,
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
    reference: [RJE],
    location: "Ragusa (nyk. Dubrovnik)",
    coordinates: [42.649696, 18.092394],
    info: `Spalaton lisäksi venetsialaiset hallitsivat nykyisen Kroatian alueella olevaa Ragusaa. Keväällä 1348 kaupungin viranomaiset antoivat moraalia musertavan kehotuksen kaupungin asukkaille. Kaupungin tilanne oli niin valitettava, että koko asutuksen olemassaoli oli vaakalaudalla. Viranomaisten käsky oli yksinkertainen: asukkaiden oli tehtävä testamentti, sillä lähitulevaisuuden näkymät olivat olemattomat.
    Elokuussa musta surma siirtyi pohjoisemmaksi kohti Keski-Eurooppaa.`,
  },
  {
    reference: [JK, HR],
    location: "Krakova",
    coordinates: [50.064722, 19.945],
    info: `Puola kuului harvoihin, melkein kokonaan rutolta välttyneisiin alueisiin. Välttyminen taudilta ei ollut sattumaa tai hyvää tuuria muuten kuin siten, että vallan kahvassa oli osaava mies.
    Kasimir III Suuri sääti monia edistyksellisiä rajoituksia ruton suitsemiseksi. Maahan pyrkivät asetettiin pakolliseen ja pitkään eristykseen ja kansalaisten liikkumista rajoitettiin.
    Eräs poikkeus Kasimirin rutonkitkentätoimissa oli juutalaisten rauhaan jättäminen. Saksassa ja Ranskassa tauti olitiin sysätty juutalaisten niskoille, mistä seurasi monia verisiä kahakoita. Ainakin eräs syy Kasimirin toimintaan oli hänen rakastajattarensa Esther, joka epäilemättä vaikutusvallallaan vaikutti kuninkaansa päätöksiin. Sen lisäksi, että Puolan kuningas ei ryhtynyt muiden Euroopan maiden tavoin juutalaisvainoon oli turvapaikan tarjoaminen vainotulle kansalle. Tarjoukseen tarttuneiden kommuuneja oli vielä toisen maailmansodan aikaan pystyssä.`,
  },
  {
    reference: [JK],
    location: "Spalato (nyk. Split)",
    coordinates: [43.51, 16.45],
    info: `Keski-Eurooppaan rutto kulki Balkanin niemimaan kautta, joka oli niihin aikoihin venetsialaisten vallassa Ragusan tavoin.
    Spalato joutui niemimaan ensimmäiseksi tartuntamaaksi. Kerrotaan, että kalman löyhkä oli villieläimille vastustamaton. Seuraten ruumiista nousevaa hajua, lähtivät vuorten sudet kohti rantakaupunkia herkutellakseen ruton hopeatarjottimella tarjoilemia ihmisvainajia.`,
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
    reference: [PTH, JK],
    location: "Bjørgvin (nyk. Bergen)",
    coordinates: [60.3925, 5.323333],
    info: `Norjan ja Englannin välillä toimiva merikauppareitti oli avaintekijä Norjan saastumiselle. Asiasta on kaksi väitettä. Ensimmäisen mukaan kauppias Englannista lähti kotimaastaan ja nähtiin seuraavan kerran Bjørgvinin rannikolla. Nähtiin, muttei kuultu; mies oli kuollut muiden laivalla kulkeneiden kanssa.
    Villakauppiaana esitelty englantilaismies ei kuitenkaan välttämättä maannut menehtyneenä Bjørgvinin lähirannalla, vaan seilasi satamaan miehistönsä kanssa purkamaan lastinsa. Kahden version välillä on kuitenkin samankaltaisuuksia: huomattavin on, että miehistö kuoli. Pian saapumisensa jälkeen tai matkan aikana ei varsinaisesti merkitse mitään, koska Norja oli joutunut mustan surman kohteeksi.`,
  },
  {
    reference: [PTH, JK],
    location: "Oslo",
    coordinates: [59.913889, 10.752222],
    info: `Bjørgvinin väitetään joutuneen kalman kouriin englantilaisen villakauppiaan takia, mutta toinen kertomus väittää Oslon olleen ensimmäinen norjalaiskaupunki, joka sai ruttotartunnan.
    Rutto oli kaupungista huolimatta rantautunut Norjaan ja alkoi edetä kohti Ruotsia.`,
  },
  {
    reference: [JK],
    location: "Ruotsi",
    coordinates: [60.697384, 15.264306],
    info: `Norjasta levittäytyvä rutto ahdisti Keski-Ruotsia. Magnus II, vaikkakin hurskas mies, ei ottanut silmää kateensä ja tarkastellut tilannetta maallisen hallintomiehen järjellä. Hänen ratkaisunsa oli nöyryyden osoitus Jumalaa kohtaan. Selvästikin kansan oli tuotava ilmi jumalanpelkonsa, ja kuningas määräsi muutamia hengellisen elämän ohjenuoria.
    Perjantai oli oleva veden ja leivän päivä; muun ruoan syöminen oli ankarasti kielletty. Kirkkoon kansan oli mentävä paljain jaloin, mutta vain sunnuntaisin. Valitettavasti toimet eivät olleet yhtä tehokkaita, kuin esimerkiksi Kasimir Suuren määräykset Puolassa.
    Ruotsalaiset eivät välttäneet ruttoa. Kuninkaan lähiperheessäkin koettiin murhenäytelmä Magnuksen kahden veljen siirtyessä ajasta ikuisuuteen.`,
  },
];

const Britain = [
  {
    reference: [NFC, MI],
    location: "Bristol",
    coordinates: [51.45, -2.583333],
    info: `Bristol toimi ruton rantautumissijaintina Britteinsaarille, kun se elokuussa tai sen paikkeilla vuonna 1348 saapui saarivaltion rannoille.`,
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
    reference: [MI, MS, CW],
    location: "Melcombe (nyk. Weymouth)",
    coordinates: [50.613, -2.457],
    info: `V. 1348 Melcombeen saapui kaksi laivaa, joista toisen kyydissä oli vähintään kaksi asiaa, kummatkin Gasconysta, Ranskasta: merimies ja häneen iskostunut rutto. Merimies päätti jäädä nukkumaan kaupunkiin ja jatkaa matkaansa sen jälkeen Dorchesteriin, josta tauti alkoi levittäytyä pitkin Britannian saarta.
    Tauti ehti levitä Melcombessa ennen Dorchesterista lähtenyttä tartunta-aaltoa.`,
  },
];

export { Mediterranean, WestEurope, EastEurope, Britain, NorthEurope };
