import React from "react";
import { Sidebar, Tab } from "react-leaflet-sidetabs";
import { FaLayerGroup } from "react-icons/fa";
import {
  HiOutlineChevronRight,
  HiLightBulb,
  HiOutlineChevronDown,
} from "react-icons/hi";
import { BsFillInfoCircleFill, BsQuestionCircleFill } from "react-icons/bs";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import withWidth from "@material-ui/core/withWidth";

import DiseaseYears from "../../Data/DiseaseSpread/DiseaseSpreadInfo";
import ColourLegends from "./SidebarTabContent/ColourLegends";
import SourcesAndAdditionalReading from "./SidebarTabContent/SourcesAndAdditionalReading";
import {
  terrainLabelValues,
  routeLabelValues,
} from "../../Data/Misc/SidebarValues";
import "./Sidebar.css";
import references from "../../Data/Misc/References";
const { CBC, NR } = references;

const createParagraphs = (text) => {
  const infoList = document.getElementsByClassName("info");
  Object.values(infoList).forEach((element) => element.remove());
  const splitText = text.split("\n");

  splitText.forEach((sentence) => {
    const p = document.createElement("p");
    p.classList.add("info");
    p.appendChild(document.createTextNode(sentence));
    document.getElementById("paragraph-parent").appendChild(p);
  });
};

const SidebarContainer = ({
  state,
  onClose,
  onOpen,
  handleLayerControl,
  handleSource,
  width,
}) => {
  return (
    <Sidebar
      id="sidebar"
      position="right"
      collapsed={state.collapsed}
      closeIcon={<HiOutlineChevronRight />}
      selected={state.selected}
      onOpen={onOpen.bind(this)}
      onClose={onClose.bind(this)}
    >
      <Tab id="layers" header="Karttataso-ohjain" icon={<FaLayerGroup />}>
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
                          date === "Kaikki vuodet"
                            ? false
                            : !state.displayElements.displayDiseaseSpread
                            ? false
                            : true
                        }
                        onClick={(event) => {
                          handleLayerControl(event.target.value);
                        }}
                        value={
                          date === "Kaikki vuodet" ? date : `Disease_${date}`
                        }
                      />
                    }
                    label={date}
                  />
                </li>
              );
            })}
          </ul>
        </>
        <hr />
        <p id="cities-paragraph">Kaupungit maa-alueittain</p>
        <ul id="cities-list">
          {terrainLabelValues.map(({ label, value }) => {
            return (
              <li key={label}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      disabled={
                        label === "Kaikki maa-alueet"
                          ? false
                          : state.displayElements.displayAllTerrain
                          ? true
                          : false
                      }
                      onClick={(event) =>
                        handleLayerControl(event.target.value)
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
        <p id="paragraph">Kauppareitit</p>
        <ul id="routes-list">
          {routeLabelValues.map(({ label, value }) => {
            return (
              <li key={label}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      disabled={
                        label === "Kaikki kauppareitit"
                          ? false
                          : state.displayElements.displayRoutes
                          ? true
                          : false
                      }
                      onClick={(event) =>
                        handleLayerControl(event.target.value)
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
                  onClick={(event) => handleLayerControl(event.target.value)}
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
          state.infoboxLocation.length === 0
            ? "Tietoa"
            : /*prettier-ignore*/
            (typeof state.infoboxLocation.split(' ')[1] !== 'undefined' && !state.infoboxLocation.split(' ')[1].startsWith('('))
						? state.infoboxLocation
						: state.infoboxLocation.split(' ')[0]
        }
        icon={<BsQuestionCircleFill />}
      >
        <div id="paragraph-parent">
          <h3>
            {state.infoboxLocation.length !== 0 ? state.infoboxLocation : false}
          </h3>
          {state.infoboxLocationInfo.length !== 0 ? (
            createParagraphs(state.infoboxLocationInfo)
          ) : (
            <p>
              Tämä osio päivittyy aluetiedoilla valitessasi jonkin kaupungin
              kartalta.
            </p>
          )}
        </div>
        {state.infoboxLocationInfo.length !== 0 ? (
          <div className="source">
            <strong>
              <section>
                Yllä oleva teksti perustuu merkittäviltä osiltaan alla oleviin
                historiallisiin lähteisiin. Luovia oikeuksia on hyödynnetty.
              </section>
              <section>
                Huomaa siis, että esimerkiksi Kaffan piirityksestä kertovassa
                sepustuksessa oleva osio ruumiiden murskautumisesta talojen
                seiniin ei perustu akateemiseen lähteeseen.
              </section>
              <section>
                Sovelluksen lähteet -osiossa on lueteltu kaikki sovelluksen
                käyttämät historialliset lähteet.
              </section>
            </strong>
            {state.reference.map(({ reference, link }) => {
              return (
                <a
                  rel="noopener noreferrer"
                  target="blank"
                  href={link}
                  key={reference}
                  title="Avaa linkin ja lähdeosion"
                  onClick={() => handleSource()}
                >
                  {reference}
                </a>
              );
            })}
          </div>
        ) : (
          false
        )}
      </Tab>
      <Tab id="info" header="Karttatietoa" icon={<BsFillInfoCircleFill />}>
        <ColourLegends />
        <div className="infoLinks">
          <strong>
            Taudin leviämisen, kauppareittien ja Kultaisen ordan rajan perusta:
          </strong>
          <a
            rel="noopener noreferrer"
            target="blank"
            href={CBC.link}
            title="Avaa linkin ja lähdeosion"
            onClick={() => handleSource()}
          >
            {CBC.reference}
          </a>
          <br />
          <strong>Kauppareittien perusta:</strong>
          <a
            rel="noopener noreferrer"
            target="blank"
            href={NR.link}
            title="Avaa linkin ja lähdeosion"
            onClick={() => handleSource()}
          >
            {`${NR.author} ${NR.contentName}`}
          </a>
        </div>
      </Tab>
      <Tab
        id="more"
        header="Sovelluksen lähteet"
        anchor="bottom"
        icon={<HiLightBulb />}
      >
        <SourcesAndAdditionalReading />
      </Tab>
    </Sidebar>
  );
};

export default withWidth()(SidebarContainer);
