import React from "react";
import { useAuth } from "../../Firebase/AuthContext";
import logo from "../../logo.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate=useNavigate()

  const handleLogin = async () => {
    try {
      await login();

      navigate('/home')

    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <section className=" abcadmin flex h-screen ">
        <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
          <header>
            <img className=" imageinterarea mb-5 mx-auto " src={logo} />
          </header>
          <h2 className="text-3xl font-bold mb-8 text-center">Admin Login</h2>

          

          <div >
            <button
              onClick={handleLogin}
              className=" abcadmin1 w-full  font-bold py-2 px-4 mb-6 rounded"
            >       
              Login with Google 
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
