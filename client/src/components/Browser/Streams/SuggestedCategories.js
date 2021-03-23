import React from "react";
import CategoryCard from "../../cards/CategoryCard";
class SuggestedCategories extends React.Component {
  /**
   *Render the list of categories retrieved from the server when available
   **/
  renderCategories = () => {
    if (!this.props.categories) {
      return <div>Loading</div>;
    }
    return this.props.categories.map((category, index) => {
      return (
        <React.Fragment key={index}>
          <CategoryCard category={category} />
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <div className="mb-8">
        {this.props.title}
        <div className="w-full grid grid-cols-5 gap-2">
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}

export default SuggestedCategories;
