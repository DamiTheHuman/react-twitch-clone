import React from "react";
import RecentCategoryCard from "../../../Cards/RecentCategoryCard/RecentCategoryCard";
import RecentStreamCard from "../../../Cards/RecentStreamCard/RecentStreamCard";

const ChannelInfoHome = ({ userStreams }) => {
  const renderRecentBroadcasts = () => {
    console.log(userStreams);
    if (userStreams.streams.length > 0) {
      const renderRecentStreams = userStreams.streams.map((stream) => {
        return (
          <RecentStreamCard
            stream={stream}
            userStreams={userStreams}
            key={stream.id}
          />
        );
      });
      return (
        <div className="recent-broadcasts">
          <h3 className="text-lg font-semibold">Recent Broadcasts</h3>
          <div className="grid grid-cols-3 gap-2">{renderRecentStreams}</div>
        </div>
      );
    }
  };
  const renderRecentStreamCategories = () => {
    if (userStreams.streams.length > 0) {
      const recentStreamCategories = userStreams.streams.map((stream) => {
        return (
          <RecentCategoryCard
            stream={stream}
            userStreams={userStreams}
            key={stream.id}
          />
        );
      });
      return (
        <div className="recent-stream-categories">
          <h3 className="text-lg font-semibold">Recent Categories</h3>
          <div className="grid grid-cols-5 gap-2">{recentStreamCategories}</div>
        </div>
      );
    }
  };

  const renderSuggestedStreamers = () => {
    return (
      <div className="recent-stream-categories">
        <h3 className="text-lg font-semibold">
          {userStreams.userName} suggests these streamers
        </h3>
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      {renderRecentBroadcasts()}
      {renderRecentStreamCategories()}
      {renderSuggestedStreamers()}
    </div>
  );
};
export default ChannelInfoHome;
