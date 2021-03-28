import React from "react";
import GamingIcon from "../../../assets/icons/gaming-icon.svg";
import IRLIcon from "../../../assets/icons/irl-icon.svg";
import MusicIcon from "../../../assets/icons/music-icon.svg";
import EsportsIcon from "../../../assets/icons/esports-icon.svg";
import DirectoryCard from "./DirectoryCard";
/**
 * @ref @BrowserVersion
 * Renders the set directry list and their respective icons
 **/
const DirectoryCardList = () => {
  /**
   *Renders the set directory cards in a list format
   **/
  const renderDirectoryCards = () => {
    const directoryCards = [
      { title: "games", icon: GamingIcon },
      { title: "irl", icon: IRLIcon },
      { title: "music", icon: MusicIcon },
      { title: "esports", icon: EsportsIcon },
    ];
    return directoryCards.map((directory, index) => {
      return (
        <React.Fragment key={index}>
          <DirectoryCard directory={directory} />
        </React.Fragment>
      );
    });
  };
  return (
    <div className="grid grid-cols-4 gap-4 mb-8 text-3xl font-semibold text-white">
      {renderDirectoryCards()}
    </div>
  );
};

export default DirectoryCardList;
