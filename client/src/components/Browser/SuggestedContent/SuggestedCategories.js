import React from "react";
import CategoryCard from "../../Cards/CategoryCard/CategoryCard";
import Loader from "../../Common/Loader/Loader";
/**
 * @ref @BrowserVersion
 * Suggested categories for the browser page
 */
class SuggestedCategories extends React.Component {
  /**
   *Render the list of categories retrieved from the server when available
   **/
  renderCategories = () => {
    if (!this.props.categories) {
      return <Loader style="py-8" />;
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
      <div className="mb-6 border-b">
        {this.props.title}
        <div className="w-full flex space-x-2">{this.renderCategories()}</div>
      </div>
    );
  }
}

export default SuggestedCategories;
