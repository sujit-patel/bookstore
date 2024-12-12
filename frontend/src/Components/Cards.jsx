import PropTypes from "prop-types";
import React, { Component } from "react";

export class Cards extends Component {
  static propTypes = {
    items: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { items } = this.props;

    return (
      <div className="card bg-base-100 w-80 shadow-xl">
        <figure>
          <img src={items.image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {items.name}
            <div className="badge badge-secondary">
              {items.price === 0 ? "Free" : `$${items.price}`}
            </div>
          </h2>
          <p>{items.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
