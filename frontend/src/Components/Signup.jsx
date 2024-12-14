import PropTypes from "prop-types";
import React, { Component } from "react";
import Home from "../home/Home.jsx";

export class Signup extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="relative">
        {/* Add Home component as background with blur effect */}
        <div className="absolute top-0 overflow-hidden -z-0 left-0 w-full h-screen">
          <Home />
        </div>

        {/* Add a blurred background overlay */}
        <div className="absolute top-0 left-0 w-full h-screen bg-opacity-40 backdrop-blur-sm"></div>

        {/* Modal content */}
        <div className="flex items-center justify-center w-full h-screen z-50">
          <div className="modal-box relative p-8 rounded-lg shadow-lg">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => (window.location.href = "/")}
            >
              ✕
            </button>
            <div className="space-y-5">
              <h3 className="font-bold text-center text-lg">Signup!</h3>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input type="text" className="grow" placeholder="Username" />
                </label>
              </div>
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
              </div>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="password" className="grow" value="password" />
                </label>
              </div>
              <div className="flex items-center flex-wrap md:space-y-0 space-y-5 justify-between">
                <button className="btn rounded-md hover:text-pink-600 text-pink-500">
                  Register
                </button>
                <p>
                  Already Registered?{" "}
                  <a
                    href="/"
                    className="underline hover:text-pink-600 cursor-pointer text-pink-500"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
