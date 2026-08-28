const ForgotPassword = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-[922px] min-h-[710px] flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">

        {/* Left illustration panel */}
        <div className="hidden md:flex md:w-[419px] md:min-h-[710px] bg-[#648DDB] flex-col items-center justify-center text-center text-white p-6">
          <div className="w-[250px] h-[250px] lg:w-[311px] lg:h-[311px] mb-6">
            <img
              src="/src/assets/images/common/4957136_1_myimage(1).png"
              alt="Forgot password illustration"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xl lg:text-2xl font-bold">
              Welcome to Tour Trip
            </p>

            <p className="text-sm font-medium">
              Your platform for discovering and booking amazing trips.
            </p>
          </div>
        </div>

        {/* Right form panel */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Reset link sent!");
          }}
          className="w-full md:w-[503px] min-h-screen md:min-h-[710px] flex flex-col justify-center items-center px-6 sm:px-8 gap-4 bg-white relative"
        >

          {/* Back link */}
          <a
            href="/login"
            className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-1 text-[#2D79F3] text-base sm:text-lg font-medium"
          >
            <span aria-hidden="true">&larr;</span> Back
          </a>

          {/* Title */}
          <div className="mb-6">
            <p className="text-2xl sm:text-3xl font-bold text-[#3C55A5]">
              Forgot Password
            </p>
          </div>

          {/* Email input */}
          <div className="w-full flex flex-col">
            <label
              htmlFor="email"
              className="text-base sm:text-lg font-medium"
            >
              Email <span className="text-red-600">*</span>
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-400 px-3 py-2 outline-none"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#0088FF] text-white text-base sm:text-lg font-semibold cursor-pointer mt-4 rounded-3xl"
          >
            submit
          </button>

          {/* Signup link */}
          <p className="text-sm sm:text-base mt-4 text-center">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-[#2D79F3] font-medium"
            >
              Sign up now
            </a>
          </p>

        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;