import { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import { createNewResume } from "../../../service/GlobalApi";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [resumeTitle, setResumeTitle] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigate();

  const { user } = useUser();
  const onCreate = () => {
    setLoading(true);
    const { primaryEmailAddress: { emailAddress = '' }, fullName = '', id } = user;
    const data = {
      title: resumeTitle,
      user_email: emailAddress,
      user_name: fullName,
      user_id: id
    };
    createNewResume(data).then(({ resume_id: resumeID = '' }) => {
      setLoading(false);
      resetDialogPayload();
      navigation(`/dashboard/resume/${resumeID}/edit`);
    }).catch(error => {
      setLoading(false);
      const { response: { statusText = '' } = {}, message = '' } = error;
      console.error(statusText || message || 'An error occured.');
    });
  };

  const resetDialogPayload = (status = false)  => {
    if (!status) {
      setResumeTitle('');
      setLoading(false);
    }
  };
  
  return (
    <div>
      <Dialog onOpenChange={resetDialogPayload}>
        <DialogTrigger asChild>
          <div
            className="p-14 py-24 border flex items-center justify-center 
        bg-secondary rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed
        "
          >
            <PlusSquare />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
            </DialogDescription>
            <div className="flex flex-col gap-8">
              <div className="grid w-full max-w-sm items-center gap-2.5">
                <Label className='font-light' htmlFor="title">Add a title for your new resume</Label>
                <Input id="title" placeholder="Ex.Full Stack Resume" onChange={({ target: { value = '' } }) => setResumeTitle(value)} />
              </div>
            </div>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild><Button variant='secondary'>Cancel</Button></DialogClose>
            <Button
              onClick={onCreate}
              disabled={!resumeTitle || isLoading}
            >
              {isLoading ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /><span>Creating</span></>
              ) : (
                <span>Create</span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default AddResume;
