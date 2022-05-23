import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectItems, selectTotal } from "../redux/slices/basketSlice";
import Currency from "react-currency-formatter";

const CheckoutPage = () => {
  const total = useSelector(selectTotal);
  const items = useSelector(selectItems);
  return (
    <div className="lg:flex max-w-screen-2xl mx-auto">
      {/* Left side */}
      <div className="flex-grow m-5 shadow-sm">
        <img
          className="w-[1020px] h-[250px] object-contain"
          src="https://links.papareact.com/ikj"
        />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">
            {items.length === 0
              ? "Your basket is empty"
              : "Your shopping basket"}
          </h1>

          {items.map((item, index) => (
            <CheckoutProduct
              key={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-white shadow-md p-10">
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items) :
              <span className="font-bold">
                <Currency quantity={total} currency="EUR" />
              </span>
            </h2>
            <button className="button mt-2 from-gray-300 to-gray-400 cursor-not-allowed">
              Proceed to checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
