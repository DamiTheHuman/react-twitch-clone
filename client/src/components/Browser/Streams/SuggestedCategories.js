import React from "react";
import StreamCategoryCard from "../../cards/StreamCategoryCard";
class SuggestedCategories extends React.Component {
  /*
   *Render the list of categories retrieved from the server when available
   */
  renderCategories = () => {
    if (!this.props.categories) {
      return <div>Loading</div>;
    }
    return this.props.categories.map((category, index) => {
      return (
        <React.Fragment key={index}>
          <StreamCategoryCard category={category} />
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <div className="mb-8">
        <h4 className="font-semibold mb-2 text-lg">
          <a href="/#" className="text-primary">
            Categories
          </a>{" "}
          channels we think you’ll like
        </h4>
        <div className="w-full flex space-x-2">{this.renderCategories()}</div>
      </div>
    );
  }
}

export default SuggestedCategories;
