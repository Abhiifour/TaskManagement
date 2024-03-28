import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { addState, taskState } from "../../../src/Atoms";
import toast from "react-hot-toast";

//This component is used as modal popup for creating a task.

function CreateTask() {
  // global states for creating task and Tasks .
  const [addTask, setAddTask] = useRecoilState(addState);
  const [taskData, setTaskData] = useRecoilState(taskState);
  // below states are used to for updated values of task.
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [team, setTeam] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  // createATask function is used to carry out the process of creating a task.
  const createAtask = () => {
    const newTask = {
      title: title,
      desc: desc,
      team: team,
      assignee: assignee,
      priority: priority,
      status: "Assign",
      id: title,
    };
    setTaskData([...taskData, newTask]);
    {
      /* Toast is displayed when successfully task is created */
    }
    toast("Task Created !", {
      icon: "👏",
    });
    setAddTask(false);
  };

  return (
    <div className="shadow-2xl font-sans task w-[400px] h-[382px] border-[1px]  bg-gradient-to-r from-fuchsia-200 via-purple-200 to-purple-200 rounded-lg overflow-hidden">
      <div className="head flex justify-between items-center h-10 px-6 bg-white">
        <div className="left text-lg font-semibold">CREATE A TASK</div>
        <div
          className="icon text-xl cursor-pointer"
          onClick={() => setAddTask(false)}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className="content w-[400px] px-6  h-[300px] flex flex-col gap-6 pt-6">
        <div className="title-flex flex justify-between">
          <div className=" title font-semibold">Title:</div>
          <input
            type="text"
            className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[250px]"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="disc flex justify-between">
          <div className="description font-semibold">Discription:</div>
          <input
            type="text"
            className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[250px] h-[40px]"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="team flex justify-between">
          <div className="title font-semibold">Team:</div>
          <input
            type="text"
            className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[250px]"
            onChange={(e) => setTeam(e.target.value)}
          />
        </div>
        <div className="assignees flex justify-between">
          <div className="title font-semibold">Assignees:</div>
          <input
            type="text"
            className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[250px]"
            onChange={(e) => setAssignee(e.target.value)}
          />
        </div>
        <div className="priority flex justify-start gap-[45px]">
          <div className="title font-semibold">Priority:</div>
          <select
            name="Priority"
            className="bg-stone-300 rounded-sm border-slate-400 border-2 w-[60px] cursor-pointer"
            onChange={(e) => setPriority(e.target.value)}
            value="P1"
          >
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
        </div>
      </div>
      <div className="buttons flex gap-2 bg-white h-[40px] items-center justify-end pr-8">
        <div
          className="left px-6  bg-cyan-600 text-white rounded-sm text-sm h-[25px] cursor-pointer"
          onClick={createAtask}
        >
          Create
        </div>
        <div
          className="right px-6  bg-cyan-600 text-white rounded-sm text-sm h-[25px] cursor-pointer "
          onClick={() => setAddTask(false)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
