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
import MainlandEast from '../../Components/Cities/MainlandEast/MainlandEast';
import MainlandWest from '../../Components/Cities/MainlandWest/MainlandWest';
import Britain from '../../Components/Cities/Britain/Britain';
import V1346 from '../../Components/DiseaseSpread/V1346';
import V1347 from '../../Components/DiseaseSpread/V1347';
import V1348 from '../../Components/DiseaseSpread/V1348';
import V1349 from '../../Components/DiseaseSpread/V1349';
import V1350 from '../../Components/DiseaseSpread/V1350';
import V1351 from '../../Components/DiseaseSpread/V1351';
import V1352 from '../../Components/DiseaseSpread/V1352';
import V1353 from '../../Components/DiseaseSpread/V1353';
import GoldenHordeBorder from '../../Data/Misc/GoldenHorde';
import {
	MediterraneanRoutes,
	MediterraneanLandExclusiveRoutes,
	EastEuropeLandExclusiveRoutes,
	WestEuropeRoutes,
	WestEuropeLandExclusiveRoutes,
	NorthEuropeRoutes,
	BritainRoutes,
	BritainLandExclusiveRoutes,
	SpainRoutes,
	SpainLandExclusiveRoutes,
} from '../../Data/Routes/TradeRoutes';
import SidebarContainer from '../../Components/UI/Sidebar';

class MapContainer extends Component {
	constructor() {
		super();
		this.mapRef = React.createRef();
	}

	state = {
		showMap: false,
		infoboxLocation: '',
		infoboxLocationInfo: '',
		textPathFontSize: 16,
		collapsed: false,
		selected: 'layers',
		displayElements: {
			displayRoutes: false,
			displayAllTerrain: false,
			displayDiseaseSpread: false,
			displayGoldenHorde: false,
			cities: {
				displayMainlandEast: false,
				displayMainlandWest: false,
				displayBritain: false,
				displayMediterranean: false,
			},
			routes: {
				MediterraneanRoutes: false,
				EastEuropeRoutes: false,
				WestEuropeRoutes: false,
				NorthEuropeRoutes: true,
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

	cities = [Mediterranean, MainlandEast, MainlandWest, Britain];

	seaRouteStyle = { color: '#003366', fill: false };
	landRouteStyle = { color: '#8a0303', fill: false };

	textPathFontSizes = {
		zoomLevel1: 5,
		zoomLevel3: 7,
		zoomLevel4: 16,
		zoomLevel5: 25,
		zoomLevelDef: 35,
	};

	onClose() {
		this.setState({ collapsed: true });
	}

	onOpen(id) {
		this.setState({ collapsed: false, selected: id });
	}

	handleInfoboxClick(index) {
		if (this.state.infoboxLocation !== index[0]) {
			this.setState({
				infoboxLocation: index[0],
				infoboxLocationInfo: index[1],
				collapsed: false,
				selected: 'locationInfo',
			});
		}
	}

	handleMapZoom(zoomLevel) {
		if (zoomLevel >= 0 && zoomLevel <= 2) {
			this.setState({
				textPathFontSize: this.textPathFontSizes.zoomLevel1,
			});
		} else if (zoomLevel === 3) {
			this.setState({
				textPathFontSize: this.textPathFontSizes.zoomLevel3,
			});
		} else if (zoomLevel === 4) {
			this.setState({
				textPathFontSize: this.textPathFontSizes.zoomLevel4,
			});
		} else if (zoomLevel === 5) {
			this.setState({
				textPathFontSize: this.textPathFontSizes.zoomLevel5,
			});
		} else {
			this.setState({
				textPathFontSize: this.textPathFontSizes.zoomLevelDef,
			});
		}
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
			case 'Disease':
				if (!this.state.displayElements.displayDiseaseSpread) {
					let disease = {
						displayDiseaseSpread_1346: true,
						displayDiseaseSpread_1347: true,
						displayDiseaseSpread_1348: true,
						displayDiseaseSpread_1349: true,
						displayDiseaseSpread_1350: true,
						displayDiseaseSpread_1351: true,
						displayDiseaseSpread_1352: true,
						displayDiseaseSpread_1353: true,
					};
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayDiseaseSpread: true,
							disease: disease,
						},
					});
				} else {
					let disease = {
						displayDiseaseSpread_1346: false,
						displayDiseaseSpread_1347: false,
						displayDiseaseSpread_1348: false,
						displayDiseaseSpread_1349: false,
						displayDiseaseSpread_1350: false,
						displayDiseaseSpread_1351: false,
						displayDiseaseSpread_1352: false,
						displayDiseaseSpread_1353: false,
					};
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayDiseaseSpread: false,
							disease: disease,
						},
					});
				}
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
			case 'Britain':
				console.log();
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
			default:
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
		}
	}

	render() {
		let routesLand = [];
		let routesVariable = [];

		const landExclusiveRoutes = [
			EastEuropeLandExclusiveRoutes,
			MediterraneanLandExclusiveRoutes,
			WestEuropeLandExclusiveRoutes,
			BritainLandExclusiveRoutes,
			SpainLandExclusiveRoutes,
		];

		const variableRoutes = [
			MediterraneanRoutes,
			WestEuropeRoutes,
			NorthEuropeRoutes,
			BritainRoutes,
			SpainRoutes,
		];

		landExclusiveRoutes.forEach(element => {
			let assignLandElement;
			assignLandElement = element.map(({ coordinates, route }, index) => {
				return (
					<Polyline
						key={index}
						positions={coordinates}
						color={this.landRouteStyle.color}
					>
						<Popup>{route}</Popup>
					</Polyline>
				);
			});
			routesLand.push(assignLandElement);
		});

		variableRoutes.forEach(element => {
			let assignVariableElement;
			assignVariableElement = element.map(
				({ coordinates, by, route }, index) => {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={
								by === 'sea'
									? this.seaRouteStyle
									: this.landRouteStyle
							}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				}
			);
			routesVariable.push(assignVariableElement);
		});

		const allRoutes = [routesLand, routesVariable];

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

		return (
			<>
				<SidebarContainer
					state={this.state}
					onClose={() => this.onClose()}
					onOpen={child => this.onOpen(child)}
					handleLayer={layerName =>
						this.handleLayerControl(layerName)
					}
				/>

				<Map
					className="map-style"
					ref={this.mapRef}
					center={[56.1, 23.106111]}
					zoom={4}
					onzoomend={() =>
						this.handleMapZoom(
							this.mapRef.current.leafletElement.getZoom()
						)
					}
				>
					<TileLayer
						attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
						url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
					/>

					{years.map(({ year, value }) => (!value ? false : year))}

					{!this.state.displayElements.cities.displayMainlandWest ? (
						false
					) : (
						<FeatureGroup color="black">
							<MainlandWest
								handleOverlayClick={location =>
									this.handleInfoboxClick(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.cities.displayMainlandEast ? (
						false
					) : (
						<FeatureGroup color="black">
							<MainlandEast
								handleOverlayClick={location =>
									this.handleInfoboxClick(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.cities.displayBritain ? (
						false
					) : (
						<FeatureGroup color="black">
							<Britain
								handleOverlayClick={location =>
									this.handleInfoboxClick(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.cities.displayMediterranean ? (
						false
					) : (
						<FeatureGroup color="black">
							<Mediterranean
								handleOverlayClick={location =>
									this.handleInfoboxClick(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.displayAllTerrain ? (
						false
					) : (
						<>
							{this.cities.map((Item, index) => {
								return (
									<FeatureGroup key={index} color="black">
										<Item
											handleOverlayClick={location =>
												this.handleInfoboxClick(
													location
												)
											}
										/>
									</FeatureGroup>
								);
							})}
						</>
					)}

					<LayersControl position="bottomleft">
						{!this.state.displayElements.displayRoutes
							? false
							: allRoutes.map(item => item)}

						{!this.state.displayElements.routes.MediterraneanRoutes
							? false
							: [routesVariable[0], routesLand[1]]}

						{!this.state.displayElements.routes.BritainRoutes
							? false
							: [routesVariable[3], routesLand[3]]}

						{!this.state.displayElements.routes.EastEuropeRoutes
							? false
							: routesLand[0]}

						{!this.state.displayElements.routes.WestEuropeRoutes
							? false
							: [routesVariable[1], routesLand[2]]}

						{!this.state.displayElements.routes.NorthEuropeRoutes
							? false
							: routesVariable[2]}

						{!this.state.displayElements.routes.SpainRoutes
							? false
							: [routesVariable[4], routesLand[4]]}

						{!this.state.displayElements.displayGoldenHorde ? (
							false
						) : (
							<Curve
								option={{ color: '#FFD700', fill: false }}
								positions={GoldenHordeBorder}
							>
								<Popup>Kultaisen ordan raja</Popup>
							</Curve>
						)}
					</LayersControl>
				</Map>
			</>
		);
	}
}

export default MapContainer;
