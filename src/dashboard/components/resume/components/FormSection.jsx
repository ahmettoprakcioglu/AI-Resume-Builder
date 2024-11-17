import { Button } from "@/components/ui/button";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useState } from "react";
import Summery from "./forms/Summery";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enabledNext, setEnabledNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant='outline' size='sm'>
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2 items-center">
          {(activeFormIndex > 1) && (
            <Button
              size='sm'
              onClick={() => setActiveFormIndex((curr => curr - 1))}
            >
              <ArrowLeft />
            </Button>  
          )}
          <Button
            size='sm'
            onClick={() => setActiveFormIndex((curr => curr + 1))}
            disabled={!enabledNext}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail */}
      {activeFormIndex === 123 && <PersonalDetail changedEnabledNext={value => setEnabledNext(value)} />}

      {activeFormIndex === 1 && <Summery changedEnabledNext={value => setEnabledNext(value)} />}
      {/* Sumery */}
      
      {/* Experience */}

      {/* Educational Detail */}

      {/* Skills */}

    </div>
  );
};

export default FormSection;
