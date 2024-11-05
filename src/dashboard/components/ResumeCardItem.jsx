import { Notebook } from "lucide-react";
import { object } from "prop-types";
import { Link } from "react-router-dom";

const ResumeCardItem = ({
  resume
}) => {
  const { title = '', resumeId = '' } = resume;
  return (
    <Link
      className="flex flex-col items-center w-full gap-2"
      to={`/dashboard/resume/${resumeId}/edit`}
    >
      <div
        className="p-14 py-24 border border-primary flex items-center justify-center 
        bg-secondary rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md hover:shadow-primary cursor-pointer w-full"
      >
        <Notebook />
      </div>
      <span>{title}</span>
    </Link>
  );
};

export default ResumeCardItem;

ResumeCardItem.propTypes = {
  resume: object
};

ResumeCardItem.defaultProps = {
  resume: {}
};
