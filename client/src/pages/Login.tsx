import { FormEvent, useState } from "react";
import { mutation } from "../utils/useFetch";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await mutation<{ token: string }>({
      method: "post",
      key: "login",
      data: loginForm,
    }).then((data) => {
      localStorage.setItem("A_T", data?.token || "");
      alert("Login Successfully");
      navigate("/dashboard");
    });
  };

  return (
    <section className="antialiased bg-gray-200 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Email
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({
                    email: e.target.value,
                    password: loginForm.password,
                  })
                } // remove the
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({
                    email: loginForm.email,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <button
              className="bg-green-500 w-full hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
              type="submit"
            >
              Login
            </button>
          </form>
          {/* <a className="text-blue-700 text-center text-sm" href="/login">
            Forgot password?
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default Login;
