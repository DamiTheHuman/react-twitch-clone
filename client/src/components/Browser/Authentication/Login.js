import React from "react";
import FacebookIcon from "mdi-react/FacebookIcon";
class Login extends React.Component {
  state = { username: "", password: "" };
  render() {
    return (
      <div className="login form py-2">
        <form className="flex flex-col space-y-3">
          <div className="username">
            <div className="mb-1 font-semibold text-sm">
              <label htmlFor="username">Username</label>
            </div>
            <input
              type="text"
              name="username"
              className="w-full px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
            />
          </div>
          <div className="password">
            <div className="mb-1 font-semibold text-sm">
              <label htmlFor="password">Password</label>
            </div>
            <input
              type="password"
              name="password"
              className="w-full px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
            />
          </div>
          <a href="/#" className="hover:underline text-primary text-xs">
            Trouble logging in?
          </a>
          {/* Submit Button */}
          <div className="submit">
            <button className="w-full rounded border text-white bg-primary font-semibold text-sm">
              <div className="p-1">Log In</div>
            </button>
          </div>
          {/* OR*/}
          <div className="flex items-center">
            <div className="flex-grow bg-gray-200 h-0.5"></div>
            <div className="px-1 text-base font-semibold items-center">or</div>
            <div className="flex-grow bg-gray-200 h-0.5"></div>
          </div>
          {/* O Auth option*/}
          <button className="flex items-center justify-center text-white">
            <div className="bg-blue-600 flex items-center space-x-2 p-1 px-2">
              <div>
                <FacebookIcon size={24} />
              </div>
              <p>Connect with Facebook</p>
            </div>
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
