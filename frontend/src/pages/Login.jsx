import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, name, password);

  const onSumbitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col min-w-[360px] items-start gap-3 border border-gray-100 rounded-xl m-auto p-8 sm:min-w-96   text-sm text-zinc-600 shadow-lg">
        <p className="text-2xl font-semibold ">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>
        {
          state == 'Sign Up'
          ? <div className="w-full">
          <p>Full Name</p>
          <input
            className="w-full p-2 mt-1 border border-zinc-300 rounded"
            type="text"
            onChange={(e) => setName(e.target.name)}
            target={name}
             placeholder="Eg : Rogan"
            required
          />
        </div>
        : ''
        }
        
        <div className="w-full">
          <p>Email</p>
          <input
            className="w-full p-2 mt-1 border border-zinc-300 rounded"
            type="text"
            onChange={(e) => setEmail(e.target.email)}
            target={email}
            placeholder="Eg : rogan@gmail.com"
            required
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="w-full p-2 mt-1 border border-zinc-300 rounded"
            type="password"
            onChange={(e) => setPassword(e.target.password)}
            target={password}
            placeholder="Eg : rogan123"
            required
          />
        </div>
        <button onClick={() => navigate('/')} className="w-full text-center bg-primary text-white mt-1 p-2 rounded">{state === 'Sign Up' ? 'Create account' : 'Login'}</button>
        {
          state == 'Sign Up'?
          <p>Already have an account? <span onClick={() => setState('Login')} className="text-primary underline cursor-pointer">Login here</span></p>:
            <p>create an new account ? <span onClick={()=> setState('Sign Up')} className="text-primary   underline cursor-pointer">click here</span></p>
        }
        
      </div>
    </form>
  );
};

export default Login;
