import React from "react";
import Card from "./Card";
import { useRecoilValue } from "recoil";
import { taskState } from "../../../src/Atoms";




// component used for wrapping task cards.
// it contains 5 types of task types box.
function Outerbox() {
  const tasks = useRecoilValue(taskState);
  return (
    <div className="outer  flex flex-row mt-6 gap-6 pl-6 font-sans max-sm:w-full max-sm:flex-col max-sm:w-full max-sm:py-5 max-sm:items-center max-sm:pl-0">
      <div className="outer-box h-[480px] flex flex-col w-[250px] justify-center overflow-hidden rounded-lg shadow-md max-sm:w-[140px] max-sm:flex-col  max-sm:h-[200px] max-sm:w-[350px]">
        <div className="bg-zinc-500">
          <p className="text-lg font-semibold h-[40px] flex flex-row justify-center items-center text-white max-sm:text-base max-sm:h-[27px]">
            Pending
          </p>
        </div>
        <div className="box-content max-sm:h-[200px] h-[440px] bg-white flex flex-col items-center pt-2 gap-4 max-sm:bg-white  max-sm:flex-row  max-sm:justify-start max-sm:pt-1 max-sm:gap-6 max-sm:pl-8">
          {tasks
            .filter((task) => task.status == "Assign")
            .map((filteredTask) => (
              <Card
                title={filteredTask.title}
                desc={filteredTask.desc}
                assignee={filteredTask.assignee}
                status={filteredTask.status}
                priority={filteredTask.priority}
              />
            ))}
        </div>
      </div>
      <div className="outer-box h-[480px] flex flex-col w-[250px] justify-center overflow-hidden rounded-lg shadow-md max-sm:w-[140px] max-sm:flex-col  max-sm:h-[200px] max-sm:w-[350px]">
        <div className="bg-amber-500">
          <p className="text-lg font-semibold h-[40px] flex flex-row justify-center items-center text-white max-sm:text-base max-sm:h-[27px]">
            In Progress
          </p>
        </div>
        <div className="box-content h-[440px] bg-white flex flex-col items-center pt-2 gap-4 max-sm:bg-white max-sm:gap-2  max-sm:h-[200px] max-sm:flex-row  max-sm:justify-start max-sm:pt-1 max-sm:gap-6 max-sm:pl-8">
        {tasks
            .filter((task) => task.status == "In Progress")
            .map((filteredTask) => (
              <Card
                title={filteredTask.title}
                desc={filteredTask.desc}
                assignee={filteredTask.assignee}
                status={filteredTask.status}
                priority={filteredTask.priority}
              />
            ))}
        </div>
      </div>
      <div className="outer-box h-[480px] flex flex-col w-[250px] justify-center overflow-hidden rounded-lg shadow-md max-sm:w-[140px] max-sm:flex-col max-sm:h-[200px] max-sm:w-[350px]">
        <div className="bg-lime-500">
          <p className="text-lg font-semibold h-[40px] flex flex-row justify-center items-center text-white max-sm:text-base max-sm:h-[27px]">
            Completed
          </p>
        </div>
        <div className="box-content h-[440px] bg-white flex flex-col items-center pt-2 gap-4  max-sm:bg-white max-sm:gap-2  max-sm:h-[200px] max-sm:flex-row  max-sm:justify-start max-sm:pt-1 max-sm:gap-6 max-sm:pl-8">
        {tasks
            .filter((task) => task.status == "Completed")
            .map((filteredTask) => (
              <Card
                title={filteredTask.title}
                desc={filteredTask.desc}
                assignee={filteredTask.assignee}
                status={filteredTask.status}
                priority={filteredTask.priority}
              />
            ))}
        </div>
      </div>
      <div className="outer-box h-[480px] flex flex-col w-[250px] justify-center overflow-hidden rounded-lg shadow-md max-sm:w-[140px] max-sm:flex-col max-sm:h-[200px] max-sm:w-[350px]">
        <div className="bg-blue-900">
          <p className="text-lg font-semibold h-[40px] flex flex-row justify-center items-center text-white max-sm:text-base max-sm:h-[27px]">
            Deployed
          </p>
        </div>
        <div className="box-content h-[440px] bg-white flex flex-col items-center pt-2 gap-4 max-sm:bg-white max-sm:gap-2  max-sm:h-[200px] max-sm:flex-row  max-sm:justify-start max-sm:pt-1 max-sm:gap-6 max-sm:pl-8">
        {tasks
            .filter((task) => task.status == "Deployed")
            .map((filteredTask) => (
              <Card
                title={filteredTask.title}
                desc={filteredTask.desc}
                assignee={filteredTask.assignee}
                status={filteredTask.status}
                priority={filteredTask.priority}
              />
            ))}
        </div>
      </div>
      <div className="outer-box h-[480px] flex flex-col w-[250px] justify-center overflow-hidden rounded-lg shadow-md max-sm:w-[140px] max-sm:flex-col  max-sm:h-[200px] max-sm:w-[350px]">
        <div className="bg-red-500">
          <p className="text-lg font-semibold h-[40px] flex flex-row justify-center items-center text-white max-sm:text-base max-sm:h-[27px]">
            Deffered
          </p>
        </div>
        <div className="box-content h-[440px] bg-white flex flex-col items-center pt-2 gap-4 max-sm:bg-white max-sm:gap-2  max-sm:h-[200px] max-sm:flex-row  max-sm:justify-start max-sm:pt-1 max-sm:gap-6 max-sm:pl-8">
        {tasks
            .filter((task) => task.status == "Deffered")
            .map((filteredTask) => (
              <Card
                title={filteredTask.title}
                desc={filteredTask.desc}
                assignee={filteredTask.assignee}
                status={filteredTask.status}
                priority={filteredTask.priority}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Outerbox;
