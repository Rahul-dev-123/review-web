import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex px-10 py-4 justify-between items-center">
      <div>Comapny Logo</div>

      <button
        className="bg-gray-500 hover:bg-gray-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
