import { shape } from "prop-types";

const SummeryPreview = ({
  resumeInfo
}) => {
  return (
    <p className="text-xs">
      {resumeInfo?.summery}
    </p>
  );
};

export default SummeryPreview;

SummeryPreview.propTypes = {
  resumeInfo: shape({})
};

SummeryPreview.defaultProps = {
  resumeInfo: {}
};
