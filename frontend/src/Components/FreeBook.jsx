import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import API_URL from "../api.js";

const FreeBook = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/book`);
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl pl-10 pr-10 container mx-auto md:px-20 md:my-10">
      <hr />
      <div>
        <h1 className="text-2xl font-semibold text-pink-500 py-5">
          Free Offered Courses
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          eaque in est a vel labore consequatur inventore officiis, totam quasi.
          Atque iusto cum veritatis eum quam accusamus, cumque minima incidunt!
        </p>
      </div>

      {/* Books Cart */}
      <div className="md:mt-10">
        <div className="slider-container items-center">
          <Slider {...settings}>
            {book.map((items) => (
              <Cards items={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

FreeBook.propTypes = {
  list: PropTypes.array,
};

export default FreeBook;
