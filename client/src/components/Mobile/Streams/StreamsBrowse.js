import React from "react";
import StreamCategoryCard from "../../cards/StreamCategoryCard";

class StreamsBrowse extends React.Component {
  render() {
    var StreamsBrowse = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const renderList = StreamsBrowse.map((stream, index) => {
      return (
        <React.Fragment key={index}>
          <StreamCategoryCard />
        </React.Fragment>
      );
    });
    return (
      <div>
        {/* Title */}
        <div className="px-5 mb-4">
          <h2 className="font-semibold sm:text-6xl text-4xl mb-2">Browse</h2>
        </div>
        {/* StreamsBrowse*/}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 px-2 ">
          {renderList}
        </div>
      </div>
    );
  }
}

export default StreamsBrowse;
