import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password reset successfully!");
    // TODO: connect to backend API
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[922px] h-[710px] flex shadow-lg rounded-lg overflow-hidden">
        
        {/* Left illustration panel */}
      <div className="hidden md:flex md:w-[419px] md:min-h-[710px] bg-[#648DDB] flex-col items-center justify-center text-center text-white p-6">
          <div className="w-[250px] h-[250px] lg:w-[250px] lg:h-[250px] mb-6">
            <img
              src="/src/assets/images/common/loginlogo.jpg"
              alt="Reset password illustration"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold">Welcome to Tour Trip</p>
            <p className="text-sm font-medium">
              Securely reset your account password.
            </p>
          </div>
        </div>

        {/* Right form panel */}
        <form
          onSubmit={handleSubmit}
          className="w-[503px] h-[710px] flex flex-col justify-center items-center px-8 gap-4 bg-white relative"
        >
          {/* Back link */}
          <a
            href="/login"
            className="absolute top-8 left-8 flex items-center gap-1 text-[#2D79F3] text-lg font-medium"
          >
            <span aria-hidden="true">&larr;</span> Back
          </a>

          {/* Title */}
          <div className="mb-6">
            <p className="text-3xl font-bold text-[#3C55A5]">Reset Password</p>
          </div>

          {/* New Password */}
          <div className="w-full flex flex-col ">
            <label htmlFor="newPassword" className="text-lg font-medium">
              New Password <span className="text-red-600">*</span>
            </label>
            <input
              id="newPassword"
              type={showNew ? "text" : "password"}
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="rounded-md border border-gray-400 px-3 py-2 outline-none pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showNew ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="w-full flex flex-col relative">
            <label htmlFor="confirmPassword" className="text-lg font-medium">
              Confirm Password <span className="text-red-600">*</span>
            </label>
            <input
              id="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-md border border-gray-400 px-3 py-2 outline-none pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-9 text-gray-500"
            >
              {showConfirm ? <EyeSlashIcon className="h-5 w-5"/> : <EyeIcon className="h-5 w-5"/>}
            </button>
            <p className="text-xs text-gray-500 mt-1">
              • Must be at least 8 characters<br/>
              • Include at least 1 letter and 1 number
            </p>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#0088FF] text-white text-lg font-semibold cursor-pointer mt-4 rounded-3xl"
          >
            Reset Password
          </button>

        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
