import React from "react";
import Pill from "../../common/Pill";
import LiveStreamCard from "../../cards/LiveStreamCard";
import { fetchCategory } from "../../../actions";
import { connect } from "react-redux";
class DirectoryCategory extends React.Component {
  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.id);
  }
  renderCategory = () => {
    if (!this.props.category) {
      return <div>Loading..</div>;
    }
    const category = this.props.category;
    const renderPills = category.tags.map((tag) => {
      return (
        <React.Fragment key={tag}>
          <Pill content={tag} />
        </React.Fragment>
      );
    });
    return (
      <React.Fragment>
        <img
          src={`http://localhost:3000/categories/${category.boxArt}.jpg`}
          className="h-auto w-20"
          alt="A Category"
        />

        <div>
          <h3 className="text-lg font-semibold">{category.title} </h3>
          <p className="text-sm">
            <span className="font-semibold">{category.viewers}</span> Viewers ·{" "}
            <span className="font-semibold">{category.followers}</span>{" "}
            Followers
          </p>
          {/* Pills*/}
          <div className="pills flex flex-nowrap overflow-hidden space-x-2">
            {renderPills}
          </div>
        </div>
      </React.Fragment>
    );
  };

  render() {
    var Streams = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const renderLiveStreams = Streams.map((stream, index) => {
      return (
        <React.Fragment key={index}>
          <LiveStreamCard />
        </React.Fragment>
      );
    });
    return (
      <div className="streams-browse-category px-2 py-4">
        <div className="title-card mb-4">
          <div className="flex flex-row items-center space-x-2">
            {this.renderCategory()}
          </div>
        </div>
        <div className="active-streams grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          {renderLiveStreams}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { category: state.categories[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchCategory })(DirectoryCategory);
