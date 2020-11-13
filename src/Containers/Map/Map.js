import React, { Component } from 'react';
import './Map.css';
import {
	FeatureGroup,
	LayersControl,
	Map,
	Popup,
	TileLayer,
	Polyline,
} from 'react-leaflet';
import { Curve } from 'react-leaflet-curve';

import Mediterranean from '../../Components/Cities/Mediterranean/Mediterranean';
import MainlandWest from '../../Components/Cities/MainlandWest/MainlandWest';
import MainlandEast from '../../Components/Cities/MainlandEast/MainlandEast';
import NorthEurope from '../../Components/Cities/NorthEurope/NorthEurope';
import Britain from '../../Components/Cities/Britain/Britain';
import GoldenHordeBorder from '../../Data/Misc/GoldenHorde';
import SidebarContainer from '../../Components/UI/Sidebar';

import V1346 from '../../Components/DiseaseSpread/V1346';
import V1347 from '../../Components/DiseaseSpread/V1347';
import V1348 from '../../Components/DiseaseSpread/V1348';
import V1349 from '../../Components/DiseaseSpread/V1349';
import V1350 from '../../Components/DiseaseSpread/V1350';
import V1351 from '../../Components/DiseaseSpread/V1351';
import V1352 from '../../Components/DiseaseSpread/V1352';
import V1353 from '../../Components/DiseaseSpread/V1353';

import {
	MediterraneanRoutes,
	MediterraneanLandExclusiveRoutes,
	EastEuropeRoutes,
	EastEuropeLandExclusiveRoutes,
	WestEuropeRoutes,
	WestEuropeLandExclusiveRoutes,
	NorthEuropeRoutes,
	NorthEuropeLandExclusiveRoutes,
	BritainRoutes,
	BritainLandExclusiveRoutes,
	SpainRoutes,
	SpainLandExclusiveRoutes,
} from '../../Data/Routes/TradeRoutes';
import {
	seaRouteStyle,
	landRouteStyle,
} from '../../Data/Misc/TradeRouteStyles';

class MapContainer extends Component {
	state = {
		infoboxLocation: '',
		infoboxLocationInfo: '',
		reference: [],
		collapsed: false,
		selected: 'layers',
		displayElements: {
			displayRoutes: false,
			displayAllTerrain: false,
			displayDiseaseSpread: false,
			displayGoldenHorde: false,
			cities: {
				displayMediterranean: false,
				displayMainlandWest: false,
				displayMainlandEast: false,
				displayNorthEurope: false,
				displayBritain: false,
			},
			routes: {
				MediterraneanRoutes: false,
				WestEuropeRoutes: false,
				EastEuropeRoutes: false,
				NorthEuropeRoutes: false,
				BritainRoutes: false,
				SpainRoutes: false,
			},
			disease: {
				displayDiseaseSpread_1346: false,
				displayDiseaseSpread_1347: false,
				displayDiseaseSpread_1348: false,
				displayDiseaseSpread_1349: false,
				displayDiseaseSpread_1350: false,
				displayDiseaseSpread_1351: false,
				displayDiseaseSpread_1352: false,
				displayDiseaseSpread_1353: false,
			},
		},
	};

	landExclusiveRoutes = [
		MediterraneanLandExclusiveRoutes,
		WestEuropeLandExclusiveRoutes,
		EastEuropeLandExclusiveRoutes,
		NorthEuropeLandExclusiveRoutes,
		BritainLandExclusiveRoutes,
		SpainLandExclusiveRoutes,
	];

	variableRoutes = [
		MediterraneanRoutes,
		WestEuropeRoutes,
		EastEuropeRoutes,
		NorthEuropeRoutes,
		BritainRoutes,
		SpainRoutes,
	];

	onClose() {
		this.setState({ collapsed: true });
	}

	onOpen(id) {
		this.setState({ collapsed: false, selected: id });
	}

	handleInfoboxClick({ location, info, reference }) {
		this.setState({ selected: 'locationInfo' });
		if (this.state.infoboxLocation !== location) {
			this.setState({
				infoboxLocation: location,
				infoboxLocationInfo: info,
				reference: reference,
				collapsed: false,
			});
		}
	}

	handleSource() {
		this.setState({ selected: 'more' });
	}

	handleLayerControl(layerName) {
		switch (layerName) {
			case 'Disease_v. 1346':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1346: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1346,
						},
					},
				});
				break;
			case 'Disease_v. 1347':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1347: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1347,
						},
					},
				});
				break;
			case 'Disease_v. 1348':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1348: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1348,
						},
					},
				});
				break;
			case 'Disease_v. 1349':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1349: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1349,
						},
					},
				});
				break;
			case 'Disease_v. 1350':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1350: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1350,
						},
					},
				});
				break;
			case 'Disease_v. 1351':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1351: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1351,
						},
					},
				});
				break;
			case 'Disease_v. 1352':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1352: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1352,
						},
					},
				});
				break;
			case 'Disease_v. 1353':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						disease: {
							...this.state.displayElements.disease,
							displayDiseaseSpread_1353: !this.state
								.displayElements.disease
								.displayDiseaseSpread_1353,
						},
					},
				});
				break;
			case 'Kaikki vuodet':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						displayDiseaseSpread: !this.state.displayElements
							.displayDiseaseSpread,
					},
				});
				break;
			case 'Mediterranean':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						cities: {
							...this.state.displayElements.cities,
							displayMediterranean: !this.state.displayElements
								.cities.displayMediterranean,
						},
					},
				});
				break;
			case 'MainlandEast':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						cities: {
							...this.state.displayElements.cities,
							displayMainlandEast: !this.state.displayElements
								.cities.displayMainlandEast,
						},
					},
				});
				break;
			case 'MainlandWest':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						cities: {
							...this.state.displayElements.cities,
							displayMainlandWest: !this.state.displayElements
								.cities.displayMainlandWest,
						},
					},
				});
				break;
			case 'NorthEurope':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						cities: {
							...this.state.displayElements.cities,
							displayNorthEurope: !this.state.displayElements
								.cities.displayNorthEurope,
						},
					},
				});
				break;
			case 'Britain':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						cities: {
							...this.state.displayElements.cities,
							displayBritain: !this.state.displayElements.cities
								.displayBritain,
						},
					},
				});
				break;
			case 'AllTerrains':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						displayAllTerrain: !this.state.displayElements
							.displayAllTerrain,
					},
				});
				break;
			case 'Routes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						displayRoutes: !this.state.displayElements
							.displayRoutes,
					},
				});
				break;
			case 'MediterraneanRoutes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						routes: {
							...this.state.displayElements.routes,
							MediterraneanRoutes: !this.state.displayElements
								.routes.MediterraneanRoutes,
						},
					},
				});
				break;
			case 'BritainRoutes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						routes: {
							...this.state.displayElements.routes,
							BritainRoutes: !this.state.displayElements.routes
								.BritainRoutes,
						},
					},
				});
				break;
			case 'EastEuropeRoutes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						routes: {
							...this.state.displayElements.routes,
							EastEuropeRoutes: !this.state.displayElements.routes
								.EastEuropeRoutes,
						},
					},
				});
				break;
			case 'WestEuropeRoutes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						routes: {
							...this.state.displayElements.routes,
							WestEuropeRoutes: !this.state.displayElements.routes
								.WestEuropeRoutes,
						},
					},
				});
				break;
			case 'NorthEuropeRoutes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						routes: {
							...this.state.displayElements.routes,
							NorthEuropeRoutes: !this.state.displayElements
								.routes.NorthEuropeRoutes,
						},
					},
				});
				break;
			case 'SpainRoutes':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						routes: {
							...this.state.displayElements.routes,
							SpainRoutes: !this.state.displayElements.routes
								.SpainRoutes,
						},
					},
				});
				break;
			case 'GoldenHorde':
				this.setState({
					displayElements: {
						...this.state.displayElements,
						displayGoldenHorde: !this.state.displayElements
							.displayGoldenHorde,
					},
				});
				break;
			default:
				break;
		}
	}

	render() {
		let routesLand = [];
		let routesVariable = [];
		let years = [
			{
				year: <V1346 key="V1346" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1346,
			},
			{
				year: <V1347 key="V1347" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1347,
			},
			{
				year: <V1348 key="V1348" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1348,
			},
			{
				year: <V1349 key="V1349" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1349,
			},
			{
				year: <V1350 key="V1350" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1350,
			},
			{
				year: <V1351 key="V1351" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1351,
			},
			{
				year: <V1352 key="V1352" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1352,
			},
			{
				year: <V1353 key="V1353" />,
				value: this.state.displayElements.disease
					.displayDiseaseSpread_1353,
			},
		];

		let cities = [
			{
				City: (
					<MainlandEast
						handleOverlayClick={locationData =>
							this.handleInfoboxClick(locationData)
						}
						key="MainlandEast"
					/>
				),
				value: this.state.displayElements.cities.displayMainlandEast,
			},
			{
				City: (
					<MainlandWest
						handleOverlayClick={locationData =>
							this.handleInfoboxClick(locationData)
						}
						key="MainlandWest"
					/>
				),
				value: this.state.displayElements.cities.displayMainlandWest,
			},
			{
				City: (
					<NorthEurope
						handleOverlayClick={locationData =>
							this.handleInfoboxClick(locationData)
						}
						key="NorthEurope"
					/>
				),
				value: this.state.displayElements.cities.displayNorthEurope,
			},
			{
				City: (
					<Britain
						handleOverlayClick={locationData =>
							this.handleInfoboxClick(locationData)
						}
						key="Britain"
					/>
				),
				value: this.state.displayElements.cities.displayBritain,
			},
			{
				City: (
					<Mediterranean
						handleOverlayClick={locationData =>
							this.handleInfoboxClick(locationData)
						}
						key="Mediterranean"
					/>
				),
				value: this.state.displayElements.cities.displayMediterranean,
			},
		];

		this.landExclusiveRoutes.forEach(element => {
			let assignLandElement;
			assignLandElement = element.map(({ coordinates, route }, index) => {
				return (
					<Polyline
						key={index}
						positions={coordinates}
						color={landRouteStyle.color}
					>
						<Popup>{route}</Popup>
					</Polyline>
				);
			});
			routesLand.push(assignLandElement);
		});

		this.variableRoutes.forEach(element => {
			let assignVariableElement;
			assignVariableElement = element.map(
				({ coordinates, by, route }, index) => {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={
								by === 'sea' ? seaRouteStyle : landRouteStyle
							}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				}
			);
			routesVariable.push(assignVariableElement);
		});

		const allRoutes = [
			{
				value: this.state.displayElements.routes.MediterraneanRoutes,
				routes: [routesVariable[0], routesLand[0]],
			},
			{
				value: this.state.displayElements.routes.WestEuropeRoutes,
				routes: [routesVariable[1], routesLand[1]],
			},
			{
				value: this.state.displayElements.routes.EastEuropeRoutes,
				routes: [routesVariable[2], routesLand[2]],
			},
			{
				value: this.state.displayElements.routes.NorthEuropeRoutes,
				routes: [routesVariable[3], routesLand[3]],
			},
			{
				value: this.state.displayElements.routes.BritainRoutes,
				routes: [routesVariable[4], routesLand[4]],
			},
			{
				value: this.state.displayElements.routes.SpainRoutes,
				routes: [routesVariable[5], routesLand[5]],
			},
		];

		return (
			<>
				<SidebarContainer
					state={this.state}
					onClose={() => this.onClose()}
					onOpen={child => this.onOpen(child)}
					handleLayerControl={layerName =>
						this.handleLayerControl(layerName)
					}
					handleSource={() => this.handleSource()}
				/>

				<Map className="map-style" center={[56.1, 23.106111]} zoom={4}>
					<TileLayer
						attribution='
						&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, 
						&copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>
						&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
						url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
					/>

					<LayersControl position="bottomleft">
						{!this.state.displayElements.displayGoldenHorde ? (
							false
						) : (
							<Curve
								option={{ color: '#FFD700', fill: false }}
								positions={GoldenHordeBorder}
							>
								<Popup>
									Kultaisen ordan raja (suunnilleen)
								</Popup>
							</Curve>
						)}

						{!this.state.displayElements.displayDiseaseSpread
							? years.map(({ year, value }) =>
									!value ? false : year
							  )
							: this.state.displayElements.displayDiseaseSpread
							? years.map(({ year }) => year)
							: false}

						{!this.state.displayElements.displayRoutes
							? allRoutes.map(({ value, routes }) =>
									!value ? false : routes
							  )
							: this.state.displayElements.displayRoutes
							? allRoutes.map(({ routes }) => routes)
							: false}

						{!this.state.displayElements.displayAllTerrain
							? cities.map(({ City, value, index }) =>
									!value ? (
										false
									) : (
										<FeatureGroup key={index} color="#000">
											{City}
										</FeatureGroup>
									)
							  )
							: this.state.displayElements.displayAllTerrain
							? cities.map(({ City, index }) => (
									<FeatureGroup key={index} color="#000">
										{City}
									</FeatureGroup>
							  ))
							: false}
					</LayersControl>
				</Map>
			</>
		);
	}
}
export default MapContainer;
