import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const CartItems = ({ cartItem, handleRemoveProduct }) => {
  const { id, img, name, price, quantity } = cartItem;

  return (
    <>
      <li className="mt-2 rounded-none">
        <div className="card rounded-none card-side bg-base-100 drop-shadow-md p-1">
          <figure>
            <img src={img} className="w-16" alt="" />
          </figure>
          <div className="card-body p-1">
            <div className="relative p-0">
              <p className="text-xs">{name}</p>
              <p>
                <small>${price}</small>
              </p>
              <p>
                <small>quantity: {quantity}</small>
              </p>
            </div>
            <div className="absolute top-1 right-1">
              <button
                onClick={() => handleRemoveProduct(id)}
                className="btn btn-ghost btn-sm"
              >
                <TrashIcon className="h-5 w-5 text-violet-600" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItems;
