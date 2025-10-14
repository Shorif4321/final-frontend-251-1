import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignUp = () => {
  const { googleAuthentication, githubAuthentication } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createUser = (data) => {
    console.log(data);
  };

  const handleGoogleLogin = () => {
    googleAuthentication()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  const handleGithubLogin = () => {
    githubAuthentication()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(createUser)} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input w-full"
              placeholder="Name"
            />
            {errors.name && (
              <span className="text-red-500">Name is Required</span>
            )}

            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">Email is Required</span>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password Should be Six Characters",
                },
                pattern: {
                  value: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])(?=.*?[0-9])/,
                  message:
                    "Password will be one Uppercase, Special Characters and one Number",
                },
              })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}

            <div className="flex justify-between">
              <Link to="/sign-in" className="link link-hover">
                Already Have an Account? Please Login
              </Link>
            </div>
            <input
              value="Sign Up"
              type="submit"
              className="btn btn-primary mt-4"
            />
          </form>
          <div className="flex gap-5 justify-between">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary mt-4"
            >
              Continue By Google
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-primary mt-4"
            >
              Continue By Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
