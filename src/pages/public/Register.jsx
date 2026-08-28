import pic_banner from '../../assets/icons/4957136_1_-removebg-preview 1.png';
import pf from '../../assets/icons/profile-svgrepo-com.svg';
import email from '../../assets/icons/email-1-svgrepo-com.svg';
import pass from '../../assets/icons/password-lock-solid-svgrepo-com.svg';
import fb from '../../assets/icons/facebook-1-svgrepo-com.svg';
import google from '../../assets/icons/google-color-svgrepo-com.svg'

const Register = ()=>{
    return (<>
        <div className="w-full h-screen px-68 py-10">
            <div className="h-140 w-full rounded-2xl border-2 flex justify-between items-center overflow-hidden">
                <div className="w-full h-full bg-blue-500 flex justify-center items-center">
                    <div className='flex-col justify-center items-center'>
                        <div className='flex justify-center items-center pb-10'>
                            <img src={pic_banner} alt="Logo" className='w-60'/>
                        </div>
                        <h1 className='text-white text-3xl text-center mb-3'>Welcome to Tour Trip</h1>
                        <h1 className='text-white text-sm'>Your platform for discovering and booking amazing trip</h1>
                    </div>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                    <div>
                        <h1 className='text-center text-2xl text-black font-bold'>Register</h1>
                        <div className='border-b-2 border-gray-500 flex w-80 my-8'>
                            <img src={pf} alt="logo" className='w-5'/>
                            <input type="text" placeholder='Full Name' className='text-sm p-1 focus:outline-none focus:ring-0' required/>
                        </div>
                        <div className='border-b-2 border-gray-500 flex w-80 my-8'>
                            <img src={email} alt="logo" className='w-6'/>
                            <input type="text" placeholder='Email or Phone Number' className='text-sm p-1 focus:outline-none focus:ring-0' required/>
                        </div>
                        <div className='border-b-2 border-gray-500 flex w-80 my-8'>
                            <img src={pass} alt="logo" className='w-5'/>
                            <input type="text" placeholder='Password' className='text-sm p-1 focus:outline-none focus:ring-0' required/>
                        </div>
                        <div className='border-b-2 border-gray-500 flex w-80 my-8'>
                            <img src={pass} alt="logo" className='w-5'/>
                            <input type="text" placeholder='Comfirm Password' className='text-sm p-1 focus:outline-none focus:ring-0' required/>
                        </div>
                        {/* Button */}
                        <button className='bg-sky-500 w-80 p-2 rounded-2xl text-white'>Register</button> 
                        <h1 className='text-sm text-gray-600 text-center my-5'>Register with</h1> 
                        <div className='flex gap-4 items-center justify-center'>
                            <div className='w-25 h-10 bg-gray-400 backdrop-blur-xl flex justify-center items-center rounded-2xl'>
                                <img src={fb} alt="logo" className='w-7 m-1'/>
                            </div>
                            <div className='w-25 h-10 bg-gray-400 backdrop-blur-xl flex justify-center items-center rounded-2xl'>
                                <img src={google} alt="logo" className='w-6 m-1'/>
                            </div>
                        </div>
                        <div className='flex my-5 justify-center items-center'>
                            <h1 className='text-sm text-gray-500'>Are you an account ?</h1>
                            <a href="#" className='text-sm text-blue-600'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Register;