import { useState, useRef } from "react";
import loginlogo from "../assets/loginlogo.jpg";
import otplogo from "../assets/otplogo.png";

export default function ConfirmOTP({ email = "you@example.com" }) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // digits only

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < otp.length) return;
    console.log("Verifying OTP:", code);
    // TODO: call your verify API here
  };

  const handleResend = () => {
    console.log("Resending OTP...");
    // TODO: call your resend API here
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
     <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-2xl shadow-xl overflow-hidden">
      {/* Left side — Welcome / illustration panel */}
       <div className="md:w-1/2 bg-blue-500 flex flex-col items-center justify-center text-white px-8 py-16">
        
         <img //logo
              src={loginlogo} alt="Tour Trip Logo" 
              className="w-55 h-55 object-contain mb-8"
          />
        

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome to Tour Trip
        </h1>
        <p className="text-blue-100 text-sm text-center max-w-xs">
          Your platform for discovering and booking amazing trips.
        </p>
      </div>

      {/* Right side — OTP form panel */}
      <div className="md:w-1/2 flex items-center justify-center px-8 py-16 bg-white">
        <div className="w-full max-w-sm text-center">
          {/* Illustration placeholder — swap with your own image */}
          <div className="w-40 h-32 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <img //logo
            src={otplogo}alt="OTP Illustration"
            className="w-32 h-24 object-contain"
           />
          </div>

          <h2 className="text-2xl font-bold text-blue-600 mb-2">Enter OTP</h2>
          <p className="text-gray-500 text-sm mb-8">
            We have sent you an OTP to your e-mail address{" "}
            <span className="font-medium text-gray-700">({email})</span> for
            verification
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-3 mb-8">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  ref={(el) => (inputsRef.current[i] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-lg text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full shadow-md active:scale-95 transition mb-6"
            >
              Next
            </button>
          </form>

          <p className="text-gray-900 font-bold text-sm mb-1">
            Didn't Receive the OTP?
          </p>
          <button
            onClick={handleResend}
            className="text-blue-600 font-bold text-sm hover:underline"
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
