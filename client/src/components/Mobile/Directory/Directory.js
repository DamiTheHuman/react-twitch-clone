import React from "react";
import CategoryCard from "../../cards/CategoryCard";
import { fetchCategories } from "../../../actions";
import { connect } from "react-redux";

class Directory extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
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
          <CategoryCard category={category} />
        </React.Fragment>
      );
    });
  };
  render() {
    return (
      <div className="py-4">
        {/* Title */}
        <div className="px-5 mb-4">
          <h2 className="font-semibold sm:text-6xl text-4xl mb-2">Browse</h2>
        </div>
        {/* Directory*/}
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 px-2 ">
          {this.renderCategories()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { categories: Object.values(state.categories) };
};
export default connect(mapStateToProps, { fetchCategories })(Directory);
