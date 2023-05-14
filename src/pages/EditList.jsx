import { useParams } from "react-router-dom";

const EditList = () => {
  const { listId } = useParams();

  return <div className="app">EditList {listId}</div>;
};

export default EditList;
