import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1a1e2b]">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold text-white">Log in to your account</h2>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="mt-1 block w-full rounded-md p-2 bg-white/10 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-white">
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
              className="mt-1 block w-full rounded-md p-2 bg-white/10 text-white border border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-tr from-orange-400 to-orange-300 px-4 py-2 text-white font-bold hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
