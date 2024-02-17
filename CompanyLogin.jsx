"use client";
import { useState } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

function CompanyLogin() {
  const [showSignup, setShowSignup] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle signup logic here
    console.log("Signing up...");
    console.log("First Name:", firstName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log("Signing in...");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-6 lg:px-8">
        <div className={`bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full max-w-4xl ${showSignup ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
          <div className="w-full sm:w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-red-500">GuruKrupa</span>
            </div>
            <div className="py-10">
              {showSignup ? (
                <>
                  <h2 className="text-3xl font-bold text-red-500 mb-2">Create Account</h2>
                  <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
                  {/* Sign-in links */}
                  <div className="flex justify-center mb-5">
                    <a href="#" className="text-gray-800 text-lg mr-3 rounded-full bg-white p-2">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-800 text-lg mr-3 rounded-full bg-white p-2">
                      <FaGoogle />
                    </a>
                    <a href="#" className="text-gray-800 text-lg rounded-full bg-white p-2">
                      <FaLinkedin />
                    </a>
                  </div>
                  {/* End of sign-in links */}
                  <p className="text-gray-400 my-3">Enter your details below:</p>

                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-full p-2 flex items-center mb-3 rounded-full">
                      <input type="text" name="User" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="User Name" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-full p-2 flex items-center mb-3 rounded-full">
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-full p-2 flex items-center mb-3 rounded-full">
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                  </div>
                  <button onClick={handleSignUp} className="bg-red-500 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">
                    SIGN UP
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-red-500 mb-2">Sign in to Account</h2>
                  <div className="border-2 w-10 border-red-500 inline-block mb-2"></div>
                  {/* Sign-in links */}
                  <div className="flex justify-center mb-5">
                    <a href="#" className="text-gray-800 text-lg mr-3 rounded-full bg-white p-2">
                      <FaFacebook />
                    </a>
                    <a href="#" className="text-gray-800 text-lg mr-3 rounded-full bg-white p-2">
                      <FaGoogle />
                    </a>
                    <a href="#" className="text-gray-800 text-lg rounded-full bg-white p-2">
                      <FaLinkedin />
                    </a>
                  </div>
                  {/* End of sign-in links */}
                  <p className="text-gray-400 my-3">or use your email account</p>

                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 w-full p-2 flex items-center mb-3 rounded-full">
                      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Here" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="bg-gray-100 w-full p-2 flex items-center mb-3 rounded-full">
                      <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="•••••••••••••" className="bg-gray-100 outline-none text-sm flex-1" />
                    </div>
                    <div className="flex justify-between w-full mb-5">
                      <label className="flex items-center text-xs">
                        <input type="checkbox" name="remember" className="mr-1" /> Remember me
                      </label>
                      <a href="#" className="text-xs">Forgot your password?</a>
                    </div>
                  </div>
                  <button onClick={handleSignIn} className="bg-red-500 text-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">
                    SIGN IN
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="w-full sm:w-2/5 bg-red-600 p-5 rounded-tr-2xl rounded-br-2xl flex justify-center items-center">
            <div className="text-center">
              {showSignup ? (
                <>
                  {/* Message for existing users */}
                  <h2 className="text-3xl font-bold mb-2 text-white">Already have an account?</h2>
                  <div className="border-2 w-10 border-red-300 inline-block mb-2"></div>
                  <p className="mb-10 text-white">Sign in to access your account</p>
                  <button onClick={() => setShowSignup(false)} className="bg-red-500 text-white mt-8 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">Sign In</button>
                </>
              ) : (
                <>
                  {/* Message for new users */}
                  <h2 className="text-3xl font-bold mb-2 text-white">Hello, New User</h2>
                  <div className="border-2 w-10 border-red-300 inline-block mb-2"></div>
                  <p className="mb-10 text-white">Enter your professional details and start the journey with us</p>
                  <p className=" text-white">Don't have an account? </p>
                  <button onClick={() => setShowSignup(true)} className="bg-red-500 text-white mt-8 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-500">Sign Up</button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyLogin;
