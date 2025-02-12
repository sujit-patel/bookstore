import React from "react";
import { useForm } from "react-hook-form";
import Home from "../home/Home.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("/api/user/signup", userInfo);
      console.log(res.data);

      if (res.data) {
        toast.success("Signup Successfully...");
        setTimeout(() => {
          window.location.href = "/course";
        }, 2000);
        localStorage.setItem("User", JSON.stringify(res.data));
      }
    } catch (error) {
      if (error.response) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 overflow-hidden -z-0 left-0 w-full h-screen">
        <Home />
      </div>

      <div className="absolute top-0 left-0 w-full h-screen bg-opacity-40 backdrop-blur-sm"></div>

      <div className="flex items-center justify-center w-full h-screen z-50">
        <div className="modal-box relative p-8 rounded-lg shadow-lg">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => (window.location.href = "/")}
          >
            ✕
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <h3 className="font-bold text-center text-lg">Signup!</h3>

            {/* Username Field */}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="grow"
                placeholder="Username"
                name="username"
              />
            </label>
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}

            {/* Email Field */}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="grow"
                placeholder="Email"
                name="email"
              />
            </label>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            {/* Password Field */}
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="grow"
                placeholder="Password"
                name="password"
              />
            </label>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            {/* Submit and Link */}
            <div className="flex items-center flex-wrap md:space-y-0 space-y-5 justify-between">
              <button
                type="submit"
                className="btn rounded-md hover:text-pink-600 text-pink-500"
              >
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
