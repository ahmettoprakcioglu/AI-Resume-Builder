import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useContext } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ProfessionalExperiencePreview from "./preview/ProfessionalExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  console.log("resumeInfo: ", resumeInfo);
  
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor
      }}
    >
      <PersonalDetailPreview resumeInfo={resumeInfo} />

      <SummeryPreview resumeInfo={resumeInfo} />

      <ProfessionalExperiencePreview resumeInfo={resumeInfo} />

      <EducationalPreview resumeInfo={resumeInfo} />

      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePreview;
