import React from "react";
import { Link } from "react-router-dom";
/**
 * @ref @BrowserVersion
 * The specific link type that for directories
 */
const DirectoryLink = ({ active, to, children }) => {
  return (
    <Link
      to={to}
      className={`${
        active ? "border-b-2  border-primary text-primary" : ""
      } hover:text-primary pb-1`}
    >
      {children}
    </Link>
  );
};
export default DirectoryLink;
