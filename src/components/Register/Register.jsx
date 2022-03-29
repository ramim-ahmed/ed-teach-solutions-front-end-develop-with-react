import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const { createUser } = useAuth();
  const history = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.name, data.email, data.password, history, location);
    reset();
  };
  return (
    <div className="login__container">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5">
        <p>
          <strong>Register Now</strong>
        </p>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            username
          </label>
          <input
            {...register("username", { required: true })}
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit" class="btn btn-primary w-100">
          Register
        </button>
        <p className="mt-3">
          All ready have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
