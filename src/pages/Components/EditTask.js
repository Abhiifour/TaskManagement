import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { editState, editTaskState, taskState } from "../../../src/Atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import toast from "react-hot-toast";

// this component is Pop up for edit task.

function EditTask() {

  const [editTask, setEditTask] = useRecoilState(editState);
  const [updatedPriority, setUpdatedPriority] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");

  // editTaskVal is the ref for the task to be updated.
  const editTaskVal = useRecoilValue(editTaskState);
  const [task, setTask] = useRecoilState(taskState);
 
  const curr = task.filter((item) =>{
    return item.id != editTaskVal.id;
  })

  // playLog is the function to edit a task.
  const playLog = () => {
    const temp = {
      title: editTaskVal.title,
      desc :  editTaskVal.desc,
      team : editTaskVal.team,
      assignee : editTaskVal.assignee,
      priority :updatedPriority || editTaskVal.priority,
      status: updatedStatus || editTaskVal.status,
      id:  editTaskVal.id
    }
   
    setTask([...curr , temp]);
     {/* message is showed after success */}
    toast.success("Task Edited !")
    setEditTask(false);
  };

  return (
    <div
      className="shadow-2xl font-sans task w-[350px] h-[550px] rounded-lg bg-gradient-to-r from-fuchsia-200 via-purple-200 to-purple-200 relative overflow-hidden"
    
    >
      <div className="head flex justify-between items-center h-10 px-6 bg-white">
        <div className="left text-lg font-semibold">EDIT TASK</div>
        <div
          className="icon text-xl cursor-pointer"
          onClick={() => setEditTask(false)}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className="content w-[320px]   h-[300px] flex flex-col gap-6 pt-6  m-auto">
        <div className="title-flex flex flex-col justify-between items-start gap-2">
          <div className=" title font-semibold">Title:</div>
          <input
            type="text"
            placeholder={`${editTaskVal.title}`}
            readOnly
            className=" pl-3 bg-stone-300 rounded-sm border-slate-400 border-2 w-[320px] h-[30px]"
          />
        </div>
        <div className="disc flex flex-col gap-2 justify-between items-start">
          <div className="description font-semibold ">Discription:</div>
          <textarea
            name="Text1"
            cols="40"
            rows="5"
            readOnly
            placeholder={`${editTaskVal.desc}`}
            className=" text-sm bg-stone-300 rounded-sm border-slate-400 border-2 w-[320px] pl-3 h-[70px] "
          ></textarea>
        </div>
        <div className="team flex justify-between flex-col gap-2 items-start ">
          <div className="title font-semibold">Team:</div>
          <input
            type="text"
            readOnly
            placeholder={`${editTaskVal.team}`}
            className=" pl-3 bg-stone-300 rounded-sm border-slate-400 border-2 w-[320px] h-[30px]"
          />
        </div>
        <div className="assignees flex justify-between flex-col items-start gap-2">
          <div className="title font-semibold">Assignee:</div>
          <input
            type="text"
            readOnly
            placeholder={`${editTaskVal.assignee}`}
            className="pl-3 bg-stone-300 rounded-sm border-slate-400 border-2 w-[320px] h-[30px]"
          />
        </div>
        <div className="lower-section flex justify-between">
          <div className="priority flex justify-start gap-1">
            <div className="title font-semibold">Priority:</div>
            <select
              name="Priority"
              className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[60px] cursor-pointer"
              onChange={(e) => setUpdatedPriority(e.target.value)}
              value={updatedPriority || editTaskVal.priority}
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
          </div>
          <div className="priority flex justify-start gap-1">
            <div className="title font-semibold">Status:</div>
            <select
              name="status"
              className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[110px] cursor-pointer"
              onChange={(e) => setUpdatedStatus(e.target.value)}
              value={updatedStatus || editTaskVal.status }
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Deployed">Deployed</option>
              <option value="Deffered">Deffered</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" flex justify-end h-[45px] bg-white absolute bottom-0 w-[350px]">
        <div className=" flex gap-2 items-center pr-4">
          <div
            className="left px-6  bg-cyan-600 text-white rounded-sm text-sm h-[27px] flex items-center cursor-pointer"
            onClick={playLog}
          >
            Submit
          </div>
          <div
            className="right px-6  bg-cyan-600 text-white rounded-sm text-sm h-[27px] flex items-center cursor-pointer"
            onClick={() => setEditTask(false)}
          >
            Reset
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTask;
