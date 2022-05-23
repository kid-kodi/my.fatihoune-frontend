import React from "react";
import { HiStar } from "react-icons/hi";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../redux/slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  rating,
  image,
}) => {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      rating,
      image,
    };
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <img className="w-[200px] h-[200px] object-contain" src={image} />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <HiStar key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="EUR" />
      </div>
      {/* Right */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
