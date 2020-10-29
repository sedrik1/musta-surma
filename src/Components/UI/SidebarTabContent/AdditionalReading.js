import React from 'react';

const AdditionalReading = () => {
	const AdditionalReadingContent = [
		{
			link:
				'https://trepo.tuni.fi/bitstream/handle/10024/81816/gradu04473.pdf',
			author: 'Reeta Nykänen',
			contentName:
				'Elämä tautisessa kaupungissa – Mustan surman vaikutus toscanalaiskaupunkien arkeen',
		},
		{
			link: 'https://www.youtube.com/watch?v=_5ImYgBeBS0',
			author: 'Professor Sir Richard J. Evans FBA',
			contentName: 'The Black Death',
		},
		{
			link:
				'https://www.gresham.ac.uk/lectures-and-events/the-black-death',
			author: 'Gresham College',
			contentName: 'The Black Death',
		},
		{
			link:
				'https://www.jstage.jst.go.jp/article/ase/advpub/0/advpub_161011/_pdf',
			author: 'D. Cesana, O.J. Benedictow, R. Bianucci',
			contentName:
				'The origin and early spread of the Black Death in Italy: first evidence of plague victims from 14th-century Liguria (northern Italy)',
		},
		{
			link:
				'https://www.thoughtco.com/spread-of-the-black-death-through-europe-4123214',
			author: 'Melissa Snell',
			contentName: 'The Arrival and Spread of the Black Plague in Europe',
		},
		{
			link: 'https://www.visualcapitalist.com/medieval-trade-route-map/',
			author: 'Nick Routley',
			contentName: 'A Fascinating Map of Medieval Trade Routes',
		},
		{
			link: 'https://journal.fi/tt/article/view/57247',
			author: 'Pekka Heikura',
			contentName: 'Musta surma',
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
				Luettelo on sekalaisessa järjestyksessä.
				<br />
				Linkit avautuvat uuteen välilehteen
			</p>
			<ul className="more-ul">
				{AdditionalReadingContent.map(
					({ link, author, contentName }) => {
						return (
							<li
								key={author}
								className={
									author === 'Gresham College'
										? 'circle'
										: null
								}
							>
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

export default AdditionalReading;
