import React, { useState } from 'react'

const Login = () => {
    const [isSignIn , setIsSignIn] = useState(true);
    const toggleSignIn = () => {
        setIsSignIn(!isSignIn)
    }
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 p-12 bg-white bg-opacity-70 m-auto right-0 left-0 top-0 my-40 rounded-3xl outline outline-purple-400">
      <h1 className="font-bold text-purple-600 text-4xl ml-2 mb-8">{isSignIn ? 'Sign In': 'Sign Up'}</h1>

        {!isSignIn && <input  className="p-4 m-2 w-full bg-white outline-double outline-purple-600 bg-opacity-20 text-white rounded-md" type="text" placeholder="Enter full name" />}
        <input  className="p-4 m-2 w-full bg-white outline-double outline-purple-600 bg-opacity-20 text-white rounded-md" type="text" placeholder="Email or mobile number" />
        <input  className="p-4 m-2 w-full bg-white outline-double outline-purple-600 bg-opacity-20 text-white rounded-md" type="password" placeholder="Password" />
        { <p className="p-2 m-2 text-red-600"></p>}
        <button className="p-2 m-2 mt-6 text-white bg-purple-600 w-full rounded-md" >{isSignIn ? 'Sign In': 'Sign Up'}</button>
        {isSignIn ? (<div className="mt-6 ml-2">
        <span className="text-gray-400">New to Netflix ?  </span>
        <span className="text-purple-400 font-bold cursor-pointer hover:underline " onClick={toggleSignIn}>Sign up Now.</span>
        </div> ):( <div className="mt-6 ml-2">
        <span className="text-gray-400">Already a User ?  </span>
        <span className="text-purple-400 font-bold cursor-pointer hover:underline " onClick={toggleSignIn}>Sign in Now.</span>
        </div>) }
      </form>
    </div>
  )
}

export default Login