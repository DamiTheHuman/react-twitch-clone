import React from "react";
import { numberFormatter } from "../../../../apis/general";

const ChannelInfoAbout = ({ userStreams }) => {
  return (
    <div>
      {/* Streamer About*/}
      <div className="streamer-about flex flex-col px-4 mb-4">
        <div className="p-4 bg-white rounded">
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-2">
              <img
                src={`${process.env.PUBLIC_URL} avatars/${userStreams.avatar}`}
                className="avatar-sm rounded-full"
                alt="A User"
              />
              <p className="text-sm text-center flex-grow">
                {" "}
                {numberFormatter(userStreams.followers)} Followers
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-bold text-lg">
                About {userStreams.userName}
              </h3>
              <p className="text-sm">
                We don't know much about them, but we're sure
                {" " + userStreams.userName} is great
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChannelInfoAbout;
