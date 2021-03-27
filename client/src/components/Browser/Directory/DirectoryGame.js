import React from "react";
import _ from "lodash";
import streams from "../../../apis/streams";
import { fetchCategoryByTitle } from "../../../actions/";
import { connect } from "react-redux";
import Pill from "../../common/Pill";
import CircleMediumIcon from "mdi-react/CircleMediumIcon";
import HeartOutlineIcon from "mdi-react/HeartOutlineIcon";
import ChevronDownIcon from "mdi-react/ChevronDownIcon";
import LiveStreamCard from "../../cards/LiveStreamCard";
import VideoCard from "../../cards/VideoCard";
import DirectoryActions from "./DirectoryActions";
import DirectoryLink from "./DirectoryLink";
import ClipCard from "../../cards/ClipCard";

class DirectoryGame extends React.Component {
  state = { streams: null };
  componentDidMount() {
    this.props.fetchCategoryByTitle(this.props.match.params.id);
    this.fetchStreams();
  }
  fetchStreams = async () => {
    if (this.props.match.params.id) {
      const query = `?_expand=user&game=${this.props.match.params.id}&_sort=views&_order=asc`;
      const response = await streams.get(`/streams/${query}`);

      this.setState({ streams: response.data });
    }
  };

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
      <div className="game flex items-center space-x-4 pb-4">
        <img
          src={`http://localhost:3000/categories/${category.boxArt}.jpg`}
          className="h-auto w-36"
          alt="A Category"
        />

        <div className="w-8/12">
          <h3 className="text-4xl font-semibold">{category.title} </h3>
          <div className="flex items-center space-x-2">
            <div>
              <span className="font-semibold">{category.viewers}</span> Viewers
            </div>
            <CircleMediumIcon size={16} />
            <div>
              <span className="font-semibold">
                {category.followers} Followers
              </span>
            </div>
            <CircleMediumIcon size={16} />
            {/* Pills*/}
            <div className="pills flex flex-nowrap space-x-2 items-center">
              {renderPills}
            </div>
          </div>
          <div className="game-description flex space-x-8 mb-4 text-sm">
            <p className="line-clamp-2 ">{category.description}</p>
            <button className="px-4 flex text-primary text-sm items-end">
              <div>More</div>
              <ChevronDownIcon />
            </button>
          </div>
          <button className="text-sm bg-primary text-white rounded px-2 py-1.5 font-semibold">
            <div className="flex items-center space-x-1">
              <HeartOutlineIcon size={16} />
              <p>Follow</p>
            </div>
          </button>
        </div>
      </div>
    );
  };

  /**
   *Loads the necessary directory content
   *This is based on if the user is on the /all url or not
   **/
  renderDirectoryContent = () => {
    var streams = [0, 1, 2, 3, 4, 5];
    if (this.props.type === 0 && this.state.streams) {
      if (this.state.streams.length === 0) {
        return <div className="text-xl font-semibold">No results found</div>;
      }
      const liveStreams = this.state.streams.map((stream, index) => {
        return (
          <div key={index}>
            <LiveStreamCard stream={stream} />
          </div>
        );
      });
      return <div className="grid grid-cols-3 gap-4">{liveStreams}</div>;
    } else if (this.props.type === 1) {
      const videos = streams.map((stream, index) => {
        return (
          <div key={index}>
            <VideoCard />
          </div>
        );
      });
      return <div className="grid grid-cols-3 gap-4">{videos}</div>;
    } else if (this.props.type === 2) {
      const clips = streams.map((stream, index) => {
        return (
          <div key={index}>
            <ClipCard />
          </div>
        );
      });
      return <div className="grid grid-cols-3 gap-4">{clips}</div>;
    }
  };

  render() {
    if (!this.props.category) {
      return null;
    }

    return (
      <div className="streams-directory p-8 relative">
        {/* Title */}
        {this.renderCategory()}
        <div className="flex space-x-4 font-semibold text-lg mb-4">
          <DirectoryLink
            to={`/directory/game/${this.props.category.title}`}
            active={this.props.type === 0}
          >
            <p>Live Channels</p>
          </DirectoryLink>
          <DirectoryLink
            to={`/directory/game/${this.props.category.title}/videos`}
            active={this.props.type === 1}
          >
            <p>Videos</p>
          </DirectoryLink>
          <DirectoryLink
            to={`/directory/game/${this.props.category.title}/clips`}
            active={this.props.type === 2}
          >
            <p>Clips</p>
          </DirectoryLink>
        </div>
        {/* Search Bar*/}
        <DirectoryActions loadCategories={this.props.loadCategories} />
        {/* Categories*/}
        {this.renderDirectoryContent()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const path = ownProps.location.pathname.split("/");
  /**
   *Get the active link
   **/
  const getActiveLink = (type) => {
    switch (type) {
      case "videos":
        return 1;
      case "clips":
        return 2;
      default:
        return 0;
    }
  };
  const category = _.find(state.categories, function (category) {
    return category.title === ownProps.match.params.id;
  });
  return {
    category: category,
    type: getActiveLink(path[path.length - 1]),
  };
};
export default connect(mapStateToProps, { fetchCategoryByTitle })(
  DirectoryGame
);
