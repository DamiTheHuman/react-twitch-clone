import React from "react";
import { contentAmountInSpace } from "../../../apis/general";
import CategoryCard from "../../Cards/CategoryCard/CategoryCard";
import Loader from "../../Common/Loader/Loader";
/**
 * @ref @BrowserVersion
 * Suggested categories for the browser page
 */
class SuggestedCategories extends React.Component {
  state = { contentLimit: 5 };
  componentDidMount() {
    window.addEventListener("resize", this.updateContentWidth);
    this.updateContentWidth();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateContentWidth);
  }
  /**
   * Update the content width based on the resolution
   */
  updateContentWidth = () => {
    this.width = document.getElementById("main-content").offsetWidth;
    this.setState({ contentLimit: contentAmountInSpace(this.width, 200) });
  };

  /**
   *Render the list of categories retrieved from the server when available
   **/
  renderCategories = () => {
    if (!this.props.categories) {
      return <Loader extraStyle={"py-8"} />;
    }
    return this.props.categories
      .slice(0, this.state.contentLimit)
      .map((category, index) => {
        return (
          <div key={index}>
            <CategoryCard category={category} />
          </div>
        );
      });
  };
  render() {
    return (
      <div className="mb-6 border-b">
        {this.props.title}
        <div className={`grid grid-cols-${this.state.contentLimit} space-x-2`}>
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}

export default SuggestedCategories;
