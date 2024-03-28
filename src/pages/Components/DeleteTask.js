import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";
import { deleteState, deleteTaskState, taskState } from "../../../src/Atoms";
import toast from "react-hot-toast";

function DeleteTask() {
  const [delVal, setDelVal] = useRecoilState(deleteState);

  const [tasks, setTasks] = useRecoilState(taskState);
  // ref to the task to be deleted
  const deleteVal = useRecoilValue(deleteTaskState);

  var curr = tasks.filter((task) => {
    return task.id !== deleteVal.id;
  });

  // function to handle delete a task.

  const handleDelete = () => {
    setTasks([...curr]);
    toast.success("Task Deleted !")
    setDelVal(false);
  };

  return (
    <div className="shadow-2xl font-sans task w-[300px] h-[150px] rounded-lg overflow-hidden bg-gradient-to-r from-fuchsia-200 via-purple-200 to-purple-200">
      <div className="head flex justify-between items-center h-10 px-6 bg-white">
        <div className="left text-lg font-semibold">DELETE TASK</div>
        <div
          className="icon text-xl cursor-pointer"
          onClick={() => setDelVal(false)}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
      <div className=" px-6 pt-4 content flex justify-center items-start flex-col gap-6">
        <div className="title font-semibold">Do You Wish To Delete Task</div>
        <div className="main flex gap-10 ">
          <div className="task font-bold">Task 1</div>
          <div className="buttons flex gap-2">
            <div
              className="left px-6  bg-cyan-600 text-white rounded-sm text-sm cursor-pointer"
              onClick={handleDelete}
            >
              Yes
            </div>
            <div
              className="right px-6  bg-cyan-600 text-white rounded-sm text-sm cursor-pointer"
              onClick={() => setDelVal(false)}
            >
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTask;
