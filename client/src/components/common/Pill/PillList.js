import React from "react";
import Pill from "./Pill";
/**
 * Displays a list of pills based on the array content passed
 **/
const PillList = ({ list }) => {
  const renderPills = list.map((value, index) => {
    return (
      <React.Fragment key={index}>
        <Pill content={value} />
      </React.Fragment>
    );
  });
  return <React.Fragment>{renderPills}</React.Fragment>;
};

export default PillList;
