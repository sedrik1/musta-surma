import React from 'react';

const SourcesAndAdditionalReading = () => {
	const SourcesAndAdditionalReadingContent = [
		{
			link:
				'https://www.jstage.jst.go.jp/article/ase/advpub/0/advpub_161011/_pdf',
			author: 'Benedictow, O. J.; Bianucci, R. & Cesana, D.',
			contentName:
				'The origin and early spread of the Black Death in Italy: first evidence of plague victims from 14th-century Liguria (northern Italy)',
		},
		{
			link:
				'https://jmvh.org/article/the-history-of-plague-part-1-the-three-great-pandemics/',
			author: 'Frith, J.',
			contentName:
				'The History of Plague – Part 1. The Three Great Pandemics - Journal of Military and Verans’ Health, 20(2)',
		},
		{
			link: 'https://journal.fi/tt/article/view/57247',
			author: 'Heikura, P. T.',
			contentName: 'Musta surma - Tieteessä Tapahtuu, 21(8)',
		},
		{
			link:
				'https://tieku.fi/laaketiede/sairaudet/tutkijat-paljastavat-taalta-musta-surma-alkoi',
			author: 'Kjaer, C.',
			contentName:
				'Tutkijat paljastavat: Täältä musta surma alkoi - Tieteen Kuvalehti',
		},
		{
			link:
				'https://trepo.tuni.fi/bitstream/handle/10024/81816/gradu04473.pdf',
			author: 'Nykänen, R.',
			contentName:
				'Elämä tautisessa kaupungissa – Mustan surman vaikutus toscanalaiskaupunkien arkeen',
		},
		{
			link:
				'https://www.thoughtco.com/spread-of-the-black-death-through-europe-4123214',
			author: 'Snell, M.',
			contentName:
				'The Arrival and Spread of the Black Plague in Europe - ThoughtCo',
		},
		{
			link: 'https://www.visualcapitalist.com/medieval-trade-route-map/',
			author: 'Routley, N.',
			contentName: 'A Fascinating Map of Medieval Trade Routes',
		},
		{
			link: 'https://www.youtube.com/watch?v=_5ImYgBeBS0',
			author: 'Professor Sir Evans, R. J. FBA',
			contentName: 'The Black Death',
		},
		{
			link:
				'https://www.britannica.com/event/Black-Death/Cause-and-outbreak',
			author: 'Britannica',
			contentName: 'Black Death: Cause and outbreak',
		},
	];

	return (
		<>
			<p>
				Alla lähteet ja mieltä kiinnittävää aineistoa.
				<br />
				Linkit avautuvat uuteen välilehteen.
			</p>
			<ul className="more-ul">
				{SourcesAndAdditionalReadingContent.map(
					({ link, author, contentName }) => {
						return (
							<li key={author}>
								<a
									rel="noopener noreferrer"
									target="blank"
									href={link}
								>
									<b>{author}</b>
									<br />
									{contentName}
								</a>
							</li>
						);
					}
				)}
			</ul>
		</>
	);
};

export default SourcesAndAdditionalReading;
