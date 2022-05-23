import React, { useState } from "react";
import { HiStar } from "react-icons/hi";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/slices/basketSlice";
import { Link } from "react-router-dom";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, rating };
    dispatch(addToBasket(product));
  };

  return (
    <Link
      to={`/${id}`}
      className="relative flex flex-col m-5 bg-white z-30 p-10"
    >
      <p className="absolute top-2 right-2 text-sm italic text-gray-300">
        {category}
      </p>

      <img src={image} className="w-[200px] h-[200px] object-contain mx-auto" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <HiStar key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>
      <div onClick={addItemToBasket} className="mt-auto button">
        Add to basket
      </div>
    </Link>
  );
};

export default Product;
