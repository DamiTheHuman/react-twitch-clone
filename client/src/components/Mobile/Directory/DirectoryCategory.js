import React from "react";
import _ from "lodash";
import streams from "../../../apis/streams";
import PillList from "../../Common/Pill/PillList";
import LiveStreamCard from "../../Cards/LiveStreamCard/LiveStreamCard";
import { fetchCategories } from "../../../actions";
import { connect } from "react-redux";

/**
 * @ref @MobileVersion
 * Displays a set directory game in directories /directory/game/:id
 */
class DirectoryCategory extends React.Component {
  state = { streams: null };
  componentDidMount() {
    this.props.fetchCategories();
    this.fetchStreams();
  }
  /**
   * Retrives the streams belonging to the specified category
   */
  fetchStreams = async () => {
    if (this.props.match.params.id) {
      const query = `?_expand=user&game=${this.props.match.params.id}&_sort=views&_order=asc`;
      const response = await streams.get(`/streams/${query}`);
      this.setState({ streams: response.data });
    }
  };
  /**
   * Renders the main category/game with its respective information
   */
  renderCategory = () => {
    if (!this.props.category) {
      return <div>Loading..</div>;
    }
    const category = this.props.category;
    return (
      <React.Fragment>
        <img
          src={`${process.env.PUBLIC_URL}/categories/${category.title}.jpg`}
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
            <PillList list={category.tags} />
          </div>
        </div>
      </React.Fragment>
    );
  };
  /**
   * Retrives the streams that belong to the queried cateogry/game
   */
  renderLiveStreams = () => {
    if (!this.state.streams) {
      return null;
    }
    if (this.state.streams.length === 0) {
      return <div className="text-xl font-semibold">No results found</div>;
    }
    return this.state.streams.map((stream, index) => {
      return (
        <div key={index} className="w-full">
          <LiveStreamCard stream={stream} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="streams-browse-category px-2 py-4">
        <div className="title-card mb-4">
          <div className="flex flex-row items-center space-x-2">
            {this.renderCategory()}
          </div>
        </div>
        <div className="active-streams grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
          {this.renderLiveStreams()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const category = _.find(state.categories, function (category) {
    return category.title === ownProps.match.params.id;
  });
  return { category: category };
};
export default connect(mapStateToProps, { fetchCategories })(DirectoryCategory);
