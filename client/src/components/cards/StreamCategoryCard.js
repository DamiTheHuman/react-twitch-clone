import React from "react";
import { Link } from "react-router-dom";
import Pill from "../common/Pill";

const StreamCategoryCard = ({ category, stretch }) => {
  const renderPills = category.tags.map((tag) => {
    return (
      <React.Fragment key={tag}>
        <Pill content={tag} />
      </React.Fragment>
    );
  });
  return (
    <div className={`stream-category-card border ${stretch ? "w-max" : ""} `}>
      <Link to={`/directory/game/${category.id}`}>
        <img
          src={`http://localhost:3000/categories/${category.boxArt}.jpg`}
          className="w-full h-auto cursor-pointer"
          alt="A new Game"
        />
      </Link>
      <div className="card-content px-2 py-2">
        <h5 className="text-sm font-semibold">{category.title}</h5>
        <p className="text-sm">{category.views}</p>
        {/* Pills*/}
        <div className="pills flex flex-nowrap overflow-hidden space-x-2">
          {renderPills}
        </div>
      </div>
    </div>
  );
};

export default StreamCategoryCard;
