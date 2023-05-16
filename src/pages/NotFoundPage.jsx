import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFoundPage = () => {
  const nav = useNavigate();
  return (
    <div className="app">
      <Navbar />

      <h1 className="lg:text-[96px] md:text-[69px] text-[48px] font-st text-center pt-32 pb-8">
        ERROR 404 <span className="text-[#FF7315]">.</span>
      </h1>
      <button
        className="text-[18px] md:text-[24px] lg:text-[30px] font-mr font-black rounded-full px-8 py-4 text-[#232020] bg-[#FF7315] mx-auto block"
        onClick={() => nav("/")}
      >
        GO HOME
      </button>
    </div>
  );
};

export default NotFoundPage;
