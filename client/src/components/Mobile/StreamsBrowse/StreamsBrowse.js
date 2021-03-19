import React from "react";
import StreamCategoryCard from "../../cards/StreamCategoryCard";
import categoryData from "../../../api/dummyCategoryData";

class StreamsBrowse extends React.Component {
  render() {
    const renderCategories = categoryData.map((category, index) => {
      return (
        <React.Fragment key={index}>
          <StreamCategoryCard category={category} />
        </React.Fragment>
      );
    });
    return (
      <div className="py-4">
        {/* Title */}
        <div className="px-5 mb-4">
          <h2 className="font-semibold sm:text-6xl text-4xl mb-2">Browse</h2>
        </div>
        {/* StreamsBrowse*/}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 px-2 ">
          {renderCategories}
        </div>
      </div>
    );
  }
}

export default StreamsBrowse;
