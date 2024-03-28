import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PopoverClose } from "@radix-ui/react-popover";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../components/ui/popover";
import { useRecoilState } from "recoil";
import { editState , deleteState, addState, editTaskState, deleteTaskState } from "../../../src/Atoms";

// Component is the card .

function Card({title , desc , assignee , priority , status}) {
   const [openEdit , setOpenEdit] = useRecoilState(editState);
   const [openDelete , setOpenDelete] = useRecoilState(deleteState);
   const[taskEdit , setTaskEdit] = useRecoilState(editTaskState);
   const[deleteTask , setDeleteTask] = useRecoilState(deleteTaskState);
  
   // temp is the task which is being mounted in the current card.
   const temp = {
    title:title,
    desc :desc,
    team :"Avenger",
    assignee : assignee,
    priority :priority,
    status:status,
    id: title,
   }
  // editTaskState is updated for every card to get the values of the current task.
  const setEditTaskVal = () =>{
    setTaskEdit(temp);
  }

  // deleteTaskState is updated for every card to get the value of the current task
  const setDeleteTaskVal = () =>{
    setDeleteTask(temp);
  }
   
   
  return (
    <div className="card w-[230px] bg-neutral-200 pt-4 pb-6 rounded-sm font-sans max-sm:w-[130px] max-sm:py-2">
      <div className="header flex justify-between  py-2 border-slate-300 border-b-2 w-[210px] m-auto max-sm:w-full max-sm:px-1">
        <div className="title text-lg font-semibold mmax-sm:text-base ">{title}</div>
        <div className="priority w-[25px] h-[25px] bg-cyan-800 text-white text-xs flex justify-center items-center rounded-sm">
         {priority}
        </div>
      </div>
      <div className="sub-header px-3 pt-2 max-sm:px-1">
        <p className="text-start text-xs ">
         {desc}
        </p>
      </div>
      <div className="assignee-flex flex justify-between px-3 mt-2 max-sm:px-1">
        <div className="signed-by font-semibold max-sm:text-base ">@{assignee}</div>
       <Popover className="z-0" >
        <PopoverTrigger>
        <div className="edit  bg-cyan-800 text-white w-[25px] h-[25px] flex justify-center items-center rounded-sm hover:bg-cyan-900 " onClick={setEditTaskVal} >
          <BsThreeDotsVertical />
        </div>
        </PopoverTrigger>
        <PopoverClose asChild>
        <PopoverContent className="w-[150px] bg-gray-100 py-2 max-sm:w-[80px] max-sm:py-1">
            <div className="box flex flex-col gap-1 max-sm:gap-0">
                <p className="font-semibold cursor-pointer max-sm:text-sm" onClick={() => setOpenEdit(!openEdit)}>Edit</p>
                <p className="w-[120px] h-[1px] bg-slate-600"></p>
                <p className="font-semibold cursor-pointer max-sm:text-sm  " onClick={() => setOpenDelete(!openDelete)}>Delete</p>
            </div>
        </PopoverContent>
        </PopoverClose>
       </Popover>
      </div>
      <div className="status  pl-3 mt-6 flex max-sm:pl-1 max-sm:mt-2 ">
        <p className=" bg-cyan-800  text-base text-white px-8 py-[2px] rounded-sm max-sm:px-4 ">
          {status}
        </p>
      </div>
    </div>
  );
}

export default Card;
