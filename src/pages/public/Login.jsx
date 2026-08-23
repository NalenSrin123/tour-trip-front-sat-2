

const Login = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex items-center justify-center bg-mist-50">
        <div className="w-[922px] h-[710px] flex">
          <div className="w-[419px] h-[710px] bg-[#648DDB] flex flex-col items-center justify-center text-center text-white pb-7">
            <div className="w-[311px] h-[311px] mb-4">
              <img src="/src/assets/images/common/4957136_1_-removebg-preview 1 (1).png" alt="" />
            </div>
            <div className="flex  flex-col gap-4.5">
              <p className="text-[2rem] font-bold">Welcome to Tour Trip</p>
              <p className="text-[14px] font-medium">Your platform for dicovering and booking amazing trips.</p>
            </div>
          </div>
          <form action="" className="w-[503px] h-[710px] flex flex-col justify-center items-center px-15 gap-3 bg-[#ffffff]">
            <div className="login-title mb-4">
              <p className="text-3xl font-bold text-[#3C55A5]">Login</p>
            </div>
            <p className="text-[#585757] text-[14px] font-bold">welcome to Tour Trip! Log in to plan your next adventure.</p>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[1.2rem] w-full">Email <span className="text-red-600">*</span></label>
              <input type="email" className="rounded-[7px] border-1 border-[#757575] px-2 py-3 text-[1.1rem] outline-0" placeholder="Enter you email" required />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="" className="text-[1.2rem] w-full">Password <span className="text-red-600">*</span></label>
              <input type="password" className="rounded-[7px] border-1 border-[#757575] px-2 py-3 text-[1.1rem] outline-0" placeholder="Enter you password" required />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex gap-1">
                <input type="checkbox" name="" id="" />
                <span className="text-[1.1rem]">Remember me</span>
              </div>
              <a className="text-[1.1rem]  text-[#2D79F3]" href="">Forgot password</a>
            </div>
            <button type="submit" className="w-full py-3 rounded-2xl bg-[#0088FF] text-white text-[1.1rem] mt-4 mb-4 cursor-pointer">Login</button>
            <div>
              <span className="text-[1.1rem]">Don't have an account? <a className=" text-[#2D79F3]" href="">Sign Up</a></span>
            </div>
            <p>Or</p>
            <a href="" className="w-full">
              <button type="button" className="flex text-[1.1rem] border-1 rounded-2xl w-full justify-center items-center gap-1.5 border-[#e0e0e3] py-3 cursor-pointer">
                <img className="size-[20px]" src="/src/assets/images/common/google-official-logo.png" alt="" />
                Login with Google
              </button>
            </a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
