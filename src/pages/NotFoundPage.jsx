import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const nav = useNavigate();
  return (
    <div className="app">
      NOT FOUND <button onClick={() => nav("/")}>GO HOME</button>
    </div>
  );
};

export default NotFoundPage;
