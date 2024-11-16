import { Button } from "@/components/ui/button";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { useState } from "react";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
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
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Detail */}
      <PersonalDetail />
      {/* Sumery */}
      
      {/* Experience */}

      {/* Educational Detail */}

    </div>
  );
};

export default FormSection;
