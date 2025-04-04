import React, { useState } from "react";

function Banner() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xOffset = (clientX - window.innerWidth / 2) / 30; // Adjust factor for sensitivity
    const yOffset = (clientY - window.innerHeight / 2) / 30;
    setPosition({ x: xOffset, y: yOffset });
  };

  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 p-10 md:pb-0 md:my-10 flex flex-col md:flex-row"
        onMouseMove={handleMouseMove}
      >
        {/* Left side */}
        <div className="md:w-1/2 order-2 md:order-1 w-full">
          <div className="space-y-12 mt-6">
            <h1 className="md:text-5xl text-4xl font-bold">
              Hello, Welcomes here to Learn Something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, molestias eius accusantium vero suscipit praesentium
              molestiae iste alias, unde sint corrupti laudantium dolorum
              similique veritatis harum a magni quod fugit?
            </p>
            <div>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>
            </div>{" "}
            <button className="btn btn-outline btn-secondary">
              Get Started
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 items-center flex order-1">
          <img
            src="/assets/Banner img.png"
            className="scale-125 hover:cursor-pointer"
            alt="Banner Img"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
