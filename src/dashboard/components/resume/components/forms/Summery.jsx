import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Summery = () => {
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Summery</h2>
      <p>Add Summery for Your Job Title</p>
      <div className="mt-7">
        <div className="flex justify-between items-center">
          <label>Add Summery</label>
          <Button
            variant='outline'
          >
            Generate from AI
          </Button>
        </div>
        <Textarea className='mt-5' />
      </div>
    </div>
  );
};

export default Summery;
