import { shape } from "prop-types";
import isArray from "lodash/isArray";

const EducationalPreview = ({
  resumeInfo
}) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor
        }}
      >
        Education
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {isArray(resumeInfo?.education) && resumeInfo?.education.map((education, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor
            }}
          >
            {education?.universityName}
          </h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree} in {education?.major}
            <span>{education?.startDate} - {education?.endDate}</span>
          </h2>
          <p className="text-xs my-2">
            {education?.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default EducationalPreview;

EducationalPreview.propTypes = {
  resumeInfo: shape({})
};

EducationalPreview.defaultProps = {
  resumeInfo: {}
};
