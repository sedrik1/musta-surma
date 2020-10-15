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

const SidebarContainer = (props) => {
	return (
		<Sidebar
			id="sidebar"
			position="right"
			collapsed={props.collapsed}
			closeIcon={<HiOutlineChevronRight />}
			selected={props.selected}
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
							{DiseaseYears.map((years, index) => {
								return (
									<li key={index}>
										<FormControlLabel
											control={
												<Checkbox
													color="primary"
													onClick={(event) =>
														props.handleLayer(
															event.target.value
														)
													}
													value={`Disease_${years.date}`}
												/>
											}
											label={`${years.date}`}
										/>
									</li>
								);
							})}
							<li>
								<FormControlLabel
									control={
										<Checkbox
											color="primary"
											onClick={(event) =>
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
					{props.terrainLabelsValues.map((item, index) => {
						return (
							<li key={index}>
								<FormControlLabel
									control={
										<Checkbox
											color="primary"
											disabled={
												props.displayElements
													.displayAllTerrain
													? true
													: false
											}
											onClick={(event) =>
												props.handleLayer(
													event.target.value
												)
											}
											value={item.value}
										/>
									}
									label={item.label}
								/>
							</li>
						);
					})}
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={(event) =>
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
				<ul id="curves-list">
					<li>
						<FormControlLabel
							control={
								<Checkbox
									color="primary"
									onClick={(event) =>
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
									onClick={(event) =>
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
					props.infoboxLocation.length === 0
						? 'Tietoa'
						: props.infoboxLocation.split(' ')[0].toUpperCase()
				}
				icon={<BsQuestionCircleFill />}
			>
				<div>
					<h3>
						{props.infoboxLocation.length !== 0
							? props.infoboxLocation
							: false}
					</h3>
					<p>
						{props.infoboxLocationInfo.length !== 0
							? props.infoboxLocationInfo
							: 'Tämä osio päivittyy aluetiedoilla valitessasi jonkin kaupungin kartalta'}
					</p>
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
							The Black Death - Professor Sir Richard J. Evans FBA
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
							href="https://www.thoughtco.com/spread-of-the-black-death-through-europe-4123214"
						>
							The Arrival and Spread of the Black Plague in Europe
						</a>
					</li>
					<li>
						<a
							rel="noopener noreferrer"
							target="blank"
							href="https://www.visualcapitalist.com/medieval-trade-route-map/"
						>
							A Fascinating Map of Medieval Trade Routes
						</a>
					</li>
				</ul>
			</Tab>
		</Sidebar>
	);
};

export default SidebarContainer;
