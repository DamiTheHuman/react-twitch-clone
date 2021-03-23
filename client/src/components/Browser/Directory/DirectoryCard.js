import React from "react";
import "./DirectoryCard.css";
const DirectoryCard = ({ directory }) => {
  return (
    <div
      className={` directory-type flex bg-primary rounded items-center ${directory.title}`}
    >
      <div className="px-2 flex-grow">
        <p className="uppercase">{directory.title}</p>
      </div>
      <div className="icon relative px-2">
        <img src={directory.icon} className="gaming-icon" />
      </div>
    </div>
  );
};
export default DirectoryCard;
