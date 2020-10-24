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
import DiseaseYears from '../../Data/DiseaseSpread/DiseaseSpreadInfo';
import ColourLegends from './ColourLegends';
import './Sidebar.css';

const SidebarContainer = props => {
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
											value={'Disease'}
										/>
									}
									label={'Kaikki vuodet'}
								/>
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
				<hr />
				<p id="cities-paragraph">Kaupungit maa-alueittain</p>
				<ul id="cities-list">
					{props.terrainLabelsValues.map(({ label, value }) => {
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
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="Routes"
								/>
							}
							label="Kauppareitit"
						/>
					</li>
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="MediterraneanRoutes"
								/>
							}
							label="Välimeri ja sen lähialue"
						/>
					</li>
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="BritainRoutes"
								/>
							}
							label="Brittein saaret"
						/>
					</li>
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="EastEuropeRoutes"
								/>
							}
							label="Itä-Eurooppa"
						/>
					</li>
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="WestEuropeRoutes"
								/>
							}
							label="Länsi-Eurooppa"
						/>
					</li>
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="NorthEuropeRoutes"
								/>
							}
							label="Pohjois-Eurooppa"
						/>
					</li>
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={event =>
										props.handleLayer(event.target.value)
									}
									value="SpainRoutes"
								/>
							}
							label="Espanja"
						/>
					</li>
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
				</ul>
			</Tab>
		</Sidebar>
	);
};

export default SidebarContainer;
