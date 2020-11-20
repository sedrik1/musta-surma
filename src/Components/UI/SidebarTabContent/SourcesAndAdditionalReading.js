import React from "react";

const SourcesAndAdditionalReading = () => {
  const SourcesAndAdditionalReadingContent = [
    {
      link:
        "https://www.jstage.jst.go.jp/article/ase/advpub/0/advpub_161011/_pdf",
      author: "Benedictow, O. J.; Bianucci, R. & Cesana, D.",
      contentName:
        "The origin and early spread of the Black Death in Italy: first evidence of plague victims from 14th-century Liguria (northern Italy)",
    },
    {
      link: "https://www.britannica.com/event/Black-Death/Cause-and-outbreak",
      author: "Britannica",
      contentName: "Black Death: Cause and outbreak",
    },
    {
      link: "",
      author: "Cantor, N. F.",
      contentName:
        "In the wake of the plague : the Black Death and the world it made - The Free Press",
    },
    {
      link: "https://www.youtube.com/watch?v=_5ImYgBeBS0",
      author: "Professor Sir Evans, R. J. FBA - Gresham College",
      contentName: "The Black Death",
    },
    {
      link:
        "https://jmvh.org/article/the-history-of-plague-part-1-the-three-great-pandemics/",
      author: "Frith, J.",
      contentName:
        "The History of Plague – Part 1. The Three Great Pandemics - Journal of Military and Verans’ Health, 20(2)",
    },
    {
      link: "https://journal.fi/tt/article/view/57247",
      author: "Heikura, P. T.",
      contentName: "Musta surma - Tieteessä Tapahtuu, 21(8)",
    },
    {
      link: "https://www.bbc.co.uk/history/british/middle_ages/black_01.shtml",
      author: "Dr. Ibeji, M.",
      contentName: "Black Death - BBC",
    },
    {
      link: "",
      author: "Kelly, J.",
      contentName:
        "The Great Mortality: An Intimate History of the Black Death, the Most Devastating Plague of All Time - HarperCollins Publishers",
    },
    {
      link:
        "https://tieku.fi/laaketiede/sairaudet/tutkijat-paljastavat-taalta-musta-surma-alkoi",
      author: "Kjaer, C.",
      contentName:
        "Tutkijat paljastavat: Täältä musta surma alkoi - Tieteen Kuvalehti",
    },
    {
      link: "https://trepo.tuni.fi/bitstream/handle/10024/81816/gradu04473.pdf",
      author: "Nykänen, R.",
      contentName:
        "Elämä tautisessa kaupungissa – Mustan surman vaikutus toscanalaiskaupunkien arkeen",
    },
    {
      link: "https://www.visualcapitalist.com/medieval-trade-route-map/",
      author: "Routley, N.",
      contentName:
        "A Fascinating Map of Medieval Trade Routes - Visual Capitalist",
    },
    {
      link: "http://jewishencyclopedia.com/articles/4098-casimir-iii-the-great",
      author: "Rosenthal, H.",
      contentName:
        "CASIMIR III., THE GREAT (Polish, Kazimierz) - Jewish Encyclopedia",
    },
    {
      link: "https://www.history.com/news/black-death-timeline",
      author: "Seven, J.",
      contentName:
        "The Black Death: A Timeline of the Gruesome Pandemic - History",
    },
    {
      link:
        "https://www.thoughtco.com/spread-of-the-black-death-through-europe-4123214",
      author: "Snell, M.",
      contentName:
        "The Arrival and Spread of the Black Plague in Europe - ThoughtCo",
    },
    {
      link:
        "https://www.weareweymouth.co.uk/attractions-sights/historic-buildings-country-houses/weymouth-and-the-black-death/",
      author: "Williams, C.",
      contentName: "Weymouth and the Black Death - We are Weymouth",
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
                {link === "" ? (
                  <span>
                    <b>{author}</b>
                    <br />
                    {contentName}
                  </span>
                ) : (
                  <a rel="noopener noreferrer" target="blank" href={link}>
                    <b>{author}</b>
                    <br />
                    {contentName}
                  </a>
                )}
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default SourcesAndAdditionalReading;
