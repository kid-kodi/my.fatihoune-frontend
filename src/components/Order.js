import React from "react";

const Order = ({ id, amount, amountShipping, items, timestamp, images }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-200 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p className="font-bold text-xs">22 May 2022</p>
        </div>

        <div>
          <p className="font-bold text-xs">TOTAL</p>
          <p>200 $</p>
        </div>
        <p className="absolute top-2 right-5 text-right w-40 lg:w-72 truncate whitespace-nowrap">
          ORDER #id
        </p>
        <div className="text-xs whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          30 items
        </div>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {/* {items.map((item, index) => (
            <img
              key={index}
              className="h-20 object-contain sm:h32"
              src={item.image}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Order;
