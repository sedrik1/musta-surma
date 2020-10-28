import React from 'react';
import { Sidebar, Tab } from 'react-leaflet-sidetabs';
import { FaLayerGroup } from 'react-icons/fa';
import {
	HiOutlineChevronRight,
	HiLightBulb,
	HiOutlineChevronDown,
} from 'react-icons/hi';
import { BsFillInfoCircleFill, BsQuestionCircleFill } from 'react-icons/bs';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import withWidth from '@material-ui/core/withWidth';
import DiseaseYears from '../../Data/DiseaseSpread/DiseaseSpreadInfo';
import ColourLegends from './ColourLegends';
import './Sidebar.css';

const SidebarContainer = props => {
	const terrainLabelsValues = [
		{ label: 'Länsi-Eurooppa', value: 'MainlandWest' },
		{ label: 'Itä-Eurooppa', value: 'MainlandEast' },
		{ label: 'Välimeri', value: 'Mediterranean' },
		{ label: 'Brittein saaret', value: 'Britain' },
	];

	const routeLabelsValues = [
		{
			label: 'Välimeri ja Konstantinopolin lähialue',
			value: 'MediterraneanRoutes',
		},
		{ label: 'Brittein saaret', value: 'BritainRoutes' },
		{ label: 'Itä-Eurooppa', value: 'EastEuropeRoutes' },
		{ label: 'Länsi-Eurooppa', value: 'WestEuropeRoutes' },
		{ label: 'Pohjois-Eurooppa', value: 'NorthEuropeRoutes' },
		{ label: 'Espanja', value: 'SpainRoutes' },
		{ label: 'Kaikki kauppareitit', value: 'Routes' },
	];

	const createParagraphs = text => {
		const infoList = document.getElementsByClassName('info');
		Object.values(infoList).forEach(element => element.remove());

		const splitText = text.split('\n');
		splitText.forEach(sentence => {
			const p = document.createElement('p');
			p.classList.add('info');
			p.appendChild(document.createTextNode(sentence));
			document.getElementById('paragraph-parent').appendChild(p);
		});
	};

	return (
		<Sidebar
			id="sidebar"
			position="right"
			collapsed={props.state.collapsed}
			closeIcon={<HiOutlineChevronRight />}
			selected={props.state.selected}
			onOpen={props.onOpen.bind(this)}
			onClose={props.onClose.bind(this)}
		>
			<Tab id="layers" header="Karttataso-ohjain" icon={<FaLayerGroup />}>
				{
					/* prettier-ignore */
					(props.width === 'xl' || props.width === 'lg') ? (
					<>
						<p id="paragraph">Taudin leviäminen</p>
						<ul id="years-list">
							{DiseaseYears.map(({ date }) => {
								return (
									<li key={date}>
										<FormControlLabel
											control={
												<Checkbox
													color="primary"
													disabled={
														!props.state
															.displayElements
															.displayDiseaseSpread
															? false
															: true
													}
													onClick={event =>
														props.handleLayer(
															event.target.value
														)
													}
													value={`Disease_${date}`}
												/>
											}
											label={date}
										/>
									</li>
								);
							})}
							<li>
								<FormControlLabel
									control={
										<Checkbox
											color="primary"
											onClick={event =>
												props.handleLayer(
													event.target.value
												)
											}
											value="Disease"
										/>
									}
									label="Kaikki vuodet"
								/>
							</li>
						</ul>
					</>
				) : (
					<Accordion>
						<AccordionSummary
							expandIcon={<HiOutlineChevronDown />}
							aria-controls="panel-content"
							id="panel-header"
						>
							Taudin leviäminen
						</AccordionSummary>
						<AccordionDetails>
							<ul id="years-list">
								{DiseaseYears.map(({ date }) => {
									return (
										<li key={date}>
											<FormControlLabel
												control={
													<Checkbox
														color="primary"
														disabled={
															!props.state
																.displayElements
																.displayDiseaseSpread
																? false
																: true
														}
														onClick={event =>
															props.handleLayer(
																event.target
																	.value
															)
														}
														value={`Disease_${date}`}
													/>
												}
												label={date}
											/>
										</li>
									);
								})}
								<li>
									<FormControlLabel
										control={
											<Checkbox
												color="primary"
												onClick={event =>
													props.handleLayer(
														event.target.value
													)
												}
												value="Disease"
											/>
										}
										label="Kaikki vuodet"
									/>
								</li>
							</ul>
						</AccordionDetails>
					</Accordion>
				)
				}
				<hr />
				<p id="cities-paragraph">Kaupungit maa-alueittain</p>
				<ul id="cities-list">
					{terrainLabelsValues.map(({ label, value }) => {
						return (
							<li key={label}>
								<FormControlLabel
									control={
										<Checkbox
											color="primary"
											disabled={
												props.state.displayElements
													.displayAllTerrain
													? true
													: false
											}
											onClick={event =>
												props.handleLayer(
													event.target.value
												)
											}
											value={value}
										/>
									}
									label={label}
								/>
							</li>
						);
					})}
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="AllTerrains"
								/>
							}
							label="Kaikki maa-alueet"
						/>
					</li>
				</ul>
				<hr />
				<p id="paragraph">Kauppareitit</p>
				<ul id="routes-list">
					{routeLabelsValues.map(({ label, value }) => {
						return (
							<li key={label}>
								<FormControlLabel
									control={
										<Checkbox
											color="primary"
											onClick={event =>
												props.handleLayer(
													event.target.value
												)
											}
											value={value}
										/>
									}
									label={label}
								/>
							</li>
						);
					})}
				</ul>
				<hr />
				<ul id="misc-list">
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="GoldenHorde"
								/>
							}
							label="Kultaisen ordan raja"
						/>
					</li>
				</ul>
			</Tab>
			<Tab
				id="locationInfo"
				header={
					props.state.infoboxLocation.length === 0
						? 'Tietoa'
						: props.state.infoboxLocation
								.split(' ')[0]
								.toUpperCase()
				}
				icon={<BsQuestionCircleFill />}
			>
				<div id="paragraph-parent">
					<h3>
						{props.state.infoboxLocation.length !== 0
							? props.state.infoboxLocation
							: false}
					</h3>
					{props.state.infoboxLocationInfo.length !== 0 ? (
						createParagraphs(props.state.infoboxLocationInfo)
					) : (
						<p>
							Tämä osio päivittyy aluetiedoilla valitessasi jonkin
							kaupungin kartalta
						</p>
					)}
				</div>
			</Tab>
			<Tab
				id="info"
				header="Karttatietoa"
				icon={<BsFillInfoCircleFill />}
			>
				<ColourLegends />
			</Tab>
			<Tab
				id="more"
				header="Mieltä kiinnittävää aineistoa"
				anchor="bottom"
				icon={<HiLightBulb />}
			>
				<p>Linkit avautuvat uuteen välilehteen</p>
				<ul className="more-ul">
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.britannica.com/event/Black-Death/Cause-and-outbreak"
						>
							Britannica - Black Death: Cause and outbreak
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.jstage.jst.go.jp/article/ase/advpub/0/advpub_161011/_pdf"
						>
							D. Cesana, O.J. Benedictow, R. Bianucci - The origin
							and early spread of the Black Death in Italy: first
							evidence of plague victims from 14th-century Liguria
							(northern Italy)
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.thoughtco.com/spread-of-the-black-death-through-europe-4123214"
						>
							Melissa Snell - The Arrival and Spread of the Black
							Plague in Europe
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.visualcapitalist.com/medieval-trade-route-map/"
						>
							Nick Routley - A Fascinating Map of Medieval Trade
							Routes
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.youtube.com/watch?v=_5ImYgBeBS0"
						>
							Professor Sir Richard J. Evans FBA - The Black Death
						</a>
					</li>
					<li className="circle">
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.gresham.ac.uk/lectures-and-events/the-black-death"
						>
							Gresham College - The Black Death
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://journal.fi/tt/article/view/57247"
						>
							Pekka Heikura - Musta surma. Tieteessä tapahtuu
						</a>
					</li>
				</ul>
			</Tab>
		</Sidebar>
	);
};

export default withWidth()(SidebarContainer);
