import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";
import isArray from "lodash/isArray";

import AddResume from "./components/AddResume";
import ResumeCardItem from "./components/ResumeCardItem";
import { getUserResumes } from "../../service/GlobalApi";

const Dashboard = () => {
  const { user = {} } = useUser();
  const [resumeList, setResumeList] = useState([]);
  const { id: userID } = user;

  const getUserResumesList = () => {
    getUserResumes(userID).then(resp => {
      setResumeList(resp);
    }).catch(error => {
      const { response: { statusText = '' } = {}, message = '' } = error;
      console.error(statusText || message || 'An error occured.');
    });
  };

  useEffect(() => {
    if (isObject(user) && !isEmpty(user)) {
      getUserResumesList();
    }
  }, [user]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start & Explore AI Resume Builder, Create Resume with AI</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-3">
        <AddResume />
        { isArray(resumeList) && resumeList.map((resume, index) => <ResumeCardItem resume={resume} key={index} />)}
      </div>
    </div>
  );
};

export default Dashboard;
