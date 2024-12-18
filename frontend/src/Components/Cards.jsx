import React from "react";

function Cards({items}) {
  return (
    <div className="card bg-base-100 w-11/12 mt-8 shadow-xl transition-transform  ease-in-out duration-300">
      <figure className="">
        <img
          className="transition-transform hover:scale-110 ease-in-out duration-300"
          src={items.image}
          alt="Book"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {items.name}
          <div className="badge badge-secondary">
          ${items.price}
          </div>
        </h2>
        <p>{items.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-secondary badge-outline">
            {items.price === 0 ? "Free" : "Paid"}
          </div>
          <div className="badge cursor-pointer badge-outline p-4 hover:text-white hover:bg-pink-500 textarea-sm">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
