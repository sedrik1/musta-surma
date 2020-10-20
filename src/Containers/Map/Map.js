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
	WestEuropeLandExclusiveRoutes,
	WestEuropeRoutes,
	SpainLandExclusiveRoutes,
	NorthEuropeRoutes,
	SpainRoutes,
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
			displayRoutes: true,
			displayLandRoutes: false,
			displaySeaRoutes: false,
			displayMainlandEast: false,
			displayMainlandWest: false,
			displayBritain: false,
			displayAllTerrain: true,
			displayMediterranean: false,
			displayGoldenHorde: false,
			displayDiseaseSpread: false,
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

	terrainLabelsValues = [
		{ label: 'Länsi-Eurooppa', value: 'MainlandWest' },
		{ label: 'Itä-Eurooppa', value: 'MainlandEast' },
		{ label: 'Välimeri', value: 'Mediterranean' },
		{ label: 'Britannia', value: 'Britain' },
	];

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

	infoBoxClickHandler(index) {
		if (this.state.infoboxLocation !== index.location) {
			this.setState({
				infoboxLocation: index.location,
				infoboxLocationInfo: index.info,
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
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1346
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1346: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1346: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1347':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1347
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1347: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1347: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1348':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1348
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1348: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1348: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1349':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1349
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1349: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1349: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1350':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1350
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1350: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1350: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1351':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1351
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1351: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1351: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1352':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1352
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1352: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1352: false,
							},
						},
					});
				}
				break;
			case 'Disease_v. 1353':
				if (
					!this.state.displayElements.disease
						.displayDiseaseSpread_1353
				) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1353: true,
							},
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							disease: {
								...this.state.displayElements.disease,
								displayDiseaseSpread_1353: false,
							},
						},
					});
				}
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
				if (!this.state.displayElements.displayMediterranean) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayMediterranean: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayMediterranean: false,
						},
					});
				}
				break;
			case 'MainlandEast':
				if (!this.state.displayElements.displayMainlandEast) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayMainlandEast: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayMainlandEast: false,
						},
					});
				}
				break;
			case 'MainlandWest':
				if (!this.state.displayElements.displayMainlandWest) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayMainlandWest: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayMainlandWest: false,
						},
					});
				}
				break;
			case 'Britain':
				if (!this.state.displayElements.displayBritain) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayBritain: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayBritain: false,
						},
					});
				}
				break;
			case 'AllTerrains':
				if (!this.state.displayElements.displayAllTerrain) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayAllTerrain: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayAllTerrain: false,
						},
					});
				}
				break;
			case 'GoldenHorde':
				if (!this.state.displayElements.displayGoldenHorde) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayGoldenHorde: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayGoldenHorde: false,
						},
					});
				}
				break;
			case 'Routes':
				if (!this.state.displayElements.displayRoutes) {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayRoutes: true,
						},
					});
				} else {
					this.setState({
						displayElements: {
							...this.state.displayElements,
							displayRoutes: false,
						},
					});
				}

				break;
			default:
				break;
		}
	}

	render() {
		let mediterraneanRoutes = MediterraneanRoutes.map(
			({ coordinates, by, route }, index) => {
				if (by === 'sea') {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.seaRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				} else {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.landRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				}
			}
		);

		let mediterraneanLandExclusive = MediterraneanLandExclusiveRoutes.map(
			({ coordinates, route }, index) => {
				return (
					<Polyline
						key={index}
						positions={coordinates}
						color={this.landRouteStyle.color}
					>
						<Popup>{route}</Popup>
					</Polyline>
				);
			}
		);

		let spainLandExclusive = SpainLandExclusiveRoutes.map(
			({ coordinates, route }, index) => {
				return (
					<Polyline
						key={index}
						positions={coordinates}
						color={this.landRouteStyle.color}
					>
						<Popup>{route}</Popup>
					</Polyline>
				);
			}
		);

		let eastEuropeLandExclusive = EastEuropeLandExclusiveRoutes.map(
			({ coordinates, route }, index) => {
				return (
					<Polyline
						key={index}
						positions={coordinates}
						color={this.landRouteStyle.color}
					>
						<Popup>{route}</Popup>
					</Polyline>
				);
			}
		);

		let westEuropeLandExclusive = WestEuropeLandExclusiveRoutes.map(
			({ coordinates, route }, index) => {
				return (
					<Polyline
						key={index}
						positions={coordinates}
						color={this.landRouteStyle.color}
					>
						<Popup>{route}</Popup>
					</Polyline>
				);
			}
		);

		let spainRoutes = SpainRoutes.map(
			({ coordinates, by, route }, index) => {
				if (by === 'sea') {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.seaRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				} else {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.landRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				}
			}
		);

		let westEuropeRoutes = WestEuropeRoutes.map(
			({ coordinates, by, route }, index) => {
				if (by === 'sea') {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.seaRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				} else {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.landRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				}
			}
		);

		let northEuropeRoutes = NorthEuropeRoutes.map(
			({ coordinates, by, route }, index) => {
				if (by === 'sea') {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.seaRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				} else {
					return (
						<Curve
							key={index}
							positions={coordinates}
							option={this.landRouteStyle}
						>
							<Popup>{route}</Popup>
						</Curve>
					);
				}
			}
		);

		let allRoutes = [
			mediterraneanRoutes,
			mediterraneanLandExclusive,
			westEuropeLandExclusive,
			eastEuropeLandExclusive,
			spainRoutes,
			westEuropeRoutes,
			spainLandExclusive,
			northEuropeRoutes,
		];

		return (
			<div>
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
					<SidebarContainer
						displayElements={this.state.displayElements}
						infoboxLocation={this.state.infoboxLocation}
						infoboxLocationInfo={this.state.infoboxLocationInfo}
						collapsed={this.state.collapsed}
						selected={this.state.selected}
						terrainLabelsValues={this.terrainLabelsValues}
						onClose={() => this.onClose()}
						onOpen={child => this.onOpen(child)}
						handleLayer={layerName =>
							this.handleLayerControl(layerName)
						}
					/>
					{!this.state.displayElements.disease
						.displayDiseaseSpread_1346 ? (
						false
					) : (
						<V1346 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1347 ? (
						false
					) : (
						<V1347 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1348 ? (
						false
					) : (
						<V1348 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1349 ? (
						false
					) : (
						<V1349 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1350 ? (
						false
					) : (
						<V1350 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1351 ? (
						false
					) : (
						<V1351 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1352 ? (
						false
					) : (
						<V1352 />
					)}

					{!this.state.displayElements.disease
						.displayDiseaseSpread_1353 ? (
						false
					) : (
						<V1353 />
					)}

					{!this.state.displayElements.displayMainlandWest ? (
						false
					) : (
						<FeatureGroup color="black">
							<MainlandWest
								handleOverlayClick={location =>
									this.infoBoxClickHandler(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.displayMainlandEast ? (
						false
					) : (
						<FeatureGroup color="black">
							<MainlandEast
								handleOverlayClick={location =>
									this.infoBoxClickHandler(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.displayBritain ? (
						false
					) : (
						<FeatureGroup color="black">
							<Britain
								handleOverlayClick={location =>
									this.infoBoxClickHandler(location)
								}
							/>
						</FeatureGroup>
					)}

					{!this.state.displayElements.displayMediterranean ? (
						false
					) : (
						<FeatureGroup color="black">
							<Mediterranean
								handleOverlayClick={location =>
									this.infoBoxClickHandler(location)
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
												this.infoBoxClickHandler(
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
			</div>
		);
	}
}

export default MapContainer;
