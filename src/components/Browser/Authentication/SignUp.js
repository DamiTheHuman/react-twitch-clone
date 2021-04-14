import React from "react";

class SignUp extends React.Component {
  state = { userName: "", password: "" };
  render() {
    return (
      <div className="sign-up form py-2">
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
          <div className="confirm-password">
            <div className="mb-1 font-semibold text-sm">
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>
            <input
              type="password"
              name="confirm-password"
              className="w-full px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
            />
          </div>
          {/* Date Picker*/}
          <div className="birthday">
            <div className="mb-1 font-semibold text-sm">
              <label htmlFor="birthday">Date of Birth</label>
            </div>
            <div className="flex space-x-2">
              <select
                name="months"
                placeholder="months"
                className="w-2/3 px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
              >
                <option value="" disabled="">
                  Month
                </option>
                <option value="january">January</option>
              </select>
              <input
                type="day"
                name="birthday-day"
                placeholder="Day"
                className="w-1/3 px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
              />
              <input
                type="year"
                name="birthday-year"
                placeholder="Year"
                className="w-1/3 px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
              />
            </div>
          </div>
          <div className="email">
            <div className="mb-1 font-semibold text-sm">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              name="email"
              className="w-full px-2 bg-gray-300 rounded hover:bg-white hover:border-primary border-2 py-0.5"
            />
          </div>

          {/* Submit Button */}
          <div className="submit">
            <button className="w-full rounded border text-white bg-primary font-semibold text-sm">
              <div className="p-1">Sign Up</div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
