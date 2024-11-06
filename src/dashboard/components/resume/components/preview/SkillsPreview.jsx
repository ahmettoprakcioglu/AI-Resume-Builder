import isArray from "lodash/isArray";
import { shape } from "prop-types";

const SkillsPreview = ({
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
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      <div className="grid grid-cols-2 my-5 gap-3">
        {isArray(resumeInfo?.skills) && resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2 className="text-xs">{skill?.name}</h2>
            <div className="h-2 bg-gray-200 w-[120px]">
              <div 
                className="h-2"
                style={{
                  backgroundColor: resumeInfo?.themeColor,
                  width: `${skill?.rating}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPreview;

SkillsPreview.propTypes = {
  resumeInfo: shape({})
};

SkillsPreview.defaultProps = {
  resumeInfo: {}
};
