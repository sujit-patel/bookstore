import React, { useEffect, useState } from "react";
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 p-10 mt-10 md:pb-0 md:my-10 flex flex-col md:flex-row">
        <div className="text-center space-y-5">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolorum
            eveniet suscipit modi numquam, facilis tempore enim fugit magni
            quaerat voluptate similique est impedit, dolore laboriosam deserunt
            maiores sequi molestias?
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 px-3 mt-10 py-2 rounded-md text-white duration-300 ease-in-out hover:bg-pink-600">{`< Back`}</button>
          </Link>
          <div className="grid md:grid-cols-4 grid-cols-2 max-sm:grid-cols-1">
            {/* <div className="w-48 flex space-x-5"> */}
            {book.map((items) => (
              <Cards items={items} key={items.id}></Cards>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
