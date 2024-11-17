import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { func } from "prop-types";
import { updateUserResume } from "../../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const PersonalDetailForm = ({
  changedEnabledNext
}) => {
  const { resumeId = '' } = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  console.log("resumeInfo: ", resumeInfo);
  
  const form = useForm({
    defaultValues: {
      firstName: resumeInfo?.firstName || '',
      lastName: resumeInfo?.lastName || '',
      phone: resumeInfo?.phone || '',
      email: resumeInfo?.email || '',
      jobTitle: resumeInfo?.jobTitle || '',
      address: resumeInfo?.address || '',
    }
  });
  const { register, handleSubmit, control } = form;
  const [isLoading, setLoading] = useState();
  
  function onSubmit(data) {
    setLoading(true);
    updateUserResume(data, resumeId).then(() => {
      setLoading(false);
      toast('Details has been updated');
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
    changedEnabledNext(true);
    console.log("data: ", data);
  }

  const handleInputChange = ({ target: { name, value }}) => {
    setResumeInfo(curr => (
      {
        ...curr,
        [name]: value
      }
    )); 
  };
  
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <FormField
            control={control}
            name="firstName"
            render={({ ...field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...register('firstName', { required: 'This field is required.' })}
                    {...field}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastName"
            render={({ ...field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    {...register('lastName', { required: 'This field is required.' })}
                    {...field}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-2">
            <FormField
              control={control}
              name="jobTitle"
              render={({ ...field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input
                      {...register('jobTitle', { required: 'This field is required.' })}
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-2">
            <FormField
              control={control}
              name="address"
              render={({ ...field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      {...register('address', { required: 'This field is required.' })}
                      {...field}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="phone"
            render={({ ...field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    {...register('phone',{
                      required: 'This field is required.',
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message:
                        "Invalid phone number.",
                      },
                    })}
                    {...field}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ ...field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...register("email", {
                      required: "This field is required.",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email address.",
                      },
                    })}
                    {...field}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='mt-3 flex justify-end'>
          <Button
            type="submit"
          >
            {isLoading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /><span>Saving</span></>
            ) : (
              <span>Save</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

PersonalDetailForm.propTypes = {
  changedEnabledNext: func
};

PersonalDetailForm.defaultProps = {
  changedEnabledNext: f => f
};

const PersonalDetail = ({
  changedEnabledNext
}) => {
  useEffect(() => {
    changedEnabledNext(false);
  }, []);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Detail</h2>
      <p>Get Started with the Basic Information</p>
      <PersonalDetailForm changedEnabledNext={changedEnabledNext} />
    </div>
  );
};

export default PersonalDetail;

PersonalDetail.propTypes = {
  changedEnabledNext: func
};

PersonalDetail.defaultProps = {
  changedEnabledNext: f => f
};
