import React, { useState } from "react";
import Order from "../components/Order";

const OrdersPage = () => {
  const [orders, setOrders] = useState([{}]);

  return (
    <div className="max-w-screen-lg mx-auto p-10">
      <h1 className="text-3xl border-b mb-2 pb-1 border-b-yellow-500">
        My orders
      </h1>
      {orders.length > 0 ? (
        <div>
          <p>{orders.length} Order(s)</p>
          {orders.map(
            (
              { id, amount, amountShipping, items, timestamp, images },
              index
            ) => (
              <Order
                key={index}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default OrdersPage;
