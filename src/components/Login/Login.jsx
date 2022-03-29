import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(data);
  };
  return (
    <div className="login__container">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-5">
          <p><strong>Login Now</strong></p>
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
          Login
        </button>
        <p>don't have an account? <Link to='/register'>Create One</Link></p>
      </form>
    </div>
  );
};

export default Login;
