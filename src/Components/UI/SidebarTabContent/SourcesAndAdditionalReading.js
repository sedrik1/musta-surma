import React from "react";
import { SourcesAndAdditionalReadingContent } from "../../../Data/Misc/Sources";
const SourcesAndAdditionalReading = () => {
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
