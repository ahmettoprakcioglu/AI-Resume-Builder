import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditResume = () => {
  const params = useParams();

  useEffect(() => {
    console.log("params: ", params); 
  }, []);
  return (
    <div>
      Edit Resume
    </div>
  );
};

export default EditResume;
