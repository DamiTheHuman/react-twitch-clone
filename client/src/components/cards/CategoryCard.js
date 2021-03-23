import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
import Pill from "../common/Pill";

const CategoryCard = ({ category, stretch }) => {
  const renderPills = category.tags.map((tag) => {
    return (
      <React.Fragment key={tag}>
        <Pill content={tag} />
      </React.Fragment>
    );
  });
  return (
    <div className={`stream-card category border ${stretch ? "w-max" : ""} `}>
      <div className="hover:bg-primary relative">
        <Link
          to={`/directory/game/${category.id}`}
          className="hover:bg-primary stream-category"
        >
          <div className="card-wrapper" />
          <div className="card-wrapper-2" />
          <img
            src={`http://localhost:3000/categories/${category.boxArt}.jpg`}
            className="w-full h-auto category-image cursor-pointer"
            alt="A new Game"
          />
        </Link>
      </div>
      <div className="card-content px-2 py-2">
        <h5 className="text-sm font-semibold">{category.title}</h5>
        <p className="text-sm">{category.viewers}</p>
        {/* Pills*/}
        <div className="pills flex flex-nowrap overflow-hidden space-x-2">
          {renderPills}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
