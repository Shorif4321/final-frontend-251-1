import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const SignIn = () => {
   //
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  const { googleAuthentication, githubAuthentication} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loggedUser = (data) => {
    console.log(data);
  };

  const handleGoogleLogin = () => {
    googleAuthentication()
      .then((result) => {
        const user = result.user;
         navigate(from,{replace:true})
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
         navigate(from,{replace:true})
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
          <form onSubmit={handleSubmit(loggedUser)} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              {...register("name", { required: true })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.name && (
              <span className="text-red-500">Email is Required</span>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500">Password is Required</span>
            )}

            <div className="flex justify-between">
              <a className="link link-hover">Forgot password?</a>
              <Link to="/sign-up" className="link link-hover">
                New To Website? Create Account
              </Link>
            </div>
            <input
              value="Sign In"
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

export default SignIn;
