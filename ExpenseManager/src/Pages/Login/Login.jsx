import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1e2b]">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-orange-500">Log in to your account</h2>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-orange-300">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md p-2 bg-white/10 text-white border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-orange-300">
                Password
              </label>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-400">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full rounded-md p-2 bg-white/10 text-white border border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-orange-600 px-4 py-2 text-white font-semibold hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
