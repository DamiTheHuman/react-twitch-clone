import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
import PillList from "../../Common/Pill/PillList";
/**
 * The singular responsive category card displaying category type
 **/
const CategoryCard = ({ category, stretch }) => {
  if (!category) {
    return null;
  }
  return (
    <div className={`category-card card ${stretch ? "w-max" : ""} `}>
      <div className="relative">
        <div className="card-main hover:bg-primary relative">
          <Link
            to={`/directory/game/${category.title}`}
            className="hover:bg-primary stream-category"
          >
            <div className="card-wrapper" />
            <div className="card-wrapper-2" />
            <div className="thumbnail">
              <img
                src={`${process.env.PUBLIC_URL} categories/${category.title}.jpg`}
                className="w-full h-auto category-image cursor-pointer"
                alt="A new Game"
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="card-content px-2 py-2">
        <h5 className="text-sm font-semibold">{category.title}</h5>
        <p className="text-sm">{category.viewers}</p>
        {/* Pills*/}
        <div className="pills flex flex-nowrap overflow-hidden space-x-2">
          <PillList list={category.tags} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
