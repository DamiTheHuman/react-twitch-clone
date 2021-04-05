import React from "react";
import "./DirectoryCard.css";
/**
 * @ref @BrowserVersion
 * The directory cards for different card types
 * @param directory the directory card to be shown
 */
const DirectoryCard = ({ directory }) => {
  return (
    <div
      className={`relative w-full h-full directory-type flex bg-primary rounded items-center ${directory.title}`}
    >
      <div className="px-2 flex-grow">
        <p className="uppercase">{directory.title}</p>
      </div>
      <div className="icon px-2">
        <img src={directory.icon} className="gaming-icon" alt="icon" />
      </div>
    </div>
  );
};
export default DirectoryCard;
