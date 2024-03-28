import React from "react";
import avatar from "../assests/avatar-15-512.png";
import { Input } from "../components/ui/input";
import Outerbox from "./Components/Outerbox";


import Helper from "./Helper";
import { useRecoilState, useRecoilValue } from "recoil";
import { addState, taskState } from "../../src/Atoms";

function Home() {
  //state for handling create task pop up
  const [openCreate, setOpenCreate] = useRecoilState(addState);

  return (
    <div className="home">
      <div className="main-box xl:w-[1400px] m-auto max-sm:w-full max-sm:h-[1350px]  ">
        <div className="header flex justify-between px-[40px] items-center pt-[10px] max-sm:gap-[130px] max-sm:px-8">
          <div className="title xl:text-2xl  font-sans font-bold max-sm:text-lg ">
            <p>Task Board</p>
          </div>
          <div className="badge">
            <Popover>
              <PopoverTrigger>
                <div className="badge-circle w-[50px] max-sm:w-[40px] border-2 border-white rounded-full bg-white">
                  <img src={avatar} alt="avatar" className="w-[50px] p-1 max-sm:w-[40px] "  />
                </div>
              </PopoverTrigger>
              <PopoverContent className=" max-sm:w-[90px] xl:w-[150px]">
                <div className="content flex flex-col gap-2">
                <p className="text-center max-sm:text-sm">Admin</p>
                <p className="text-center max-sm:text-sm">Profile</p>
                <p className="text-center max-sm:text-sm">Logout</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="main-content w-full  mt-3 max-sm:mt-1 ">
          <div className="box w-full h-[640px] max-sm:h-full border-white border-[3px] rounded-xl shadow-md">
            <div className="top-content flex justify-between  mt-5 max-sm:mt-2 max-sm:flex-col max-sm:gap-2 max-sm:items-start ">
              <div className="left flex flex-col gap-6 ml-8 max-sm:gap-0 max-sm:ml-7 max-sm:justify-center " >
                <div className="filter flex  items-center  ">
                  <p className="text-lg w-[100px] text-left font-semibold font-sans max-sm:text-sm max-sm:w-[60px]">
                    Filter By:
                  </p>
                  <Input
                    type="text"
                    placeholder="Assignee Name"
                    className=" rounded-md h-[32px] w-[140px] font-semibold text-base font-sans max-sm:text-sm max-sm:h-[20px] max-sm:w-[80px] max-sm:ml-0"
                  />

                  <select
                    name="choice"
                    className=" rounded-md h-[32px] px-4 font-semibold text-zinc-400 ml-6 font-sans max-sm:text-sm max-sm:h-[20px] max-sm:w-[70px] max-sm:ml-1"
                  >
                    <option value="" disabled selected>
                      Priority
                    </option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                  </select>
                  <Input
                    type="date"
                    placeholder="DD/MM/YYY"
                    className=" px-4  h-[32px] font-semibold text-zinc-400 w-[170px] ml-6 font-sans max-sm:text-sm max-sm:h-[20px] max-sm:w-[90px] max-sm:ml-1"
                  />
                </div>
                <div className="sort flex gap-9 items-center max-sm:gap-2 max-sm:mt-1">
                  <p className="text-lg font-semibold font-sans max-sm:text-sm">Sort By:</p>
                  <select
                    name="choice"
                    className=" rounded-md h-[32px] px-4 font-semibold text-zinc-400 font-sans max-sm:text-sm max-sm:h-[20px] max-sm:px-3 "
                    
                  >
                    <option value="" disabled selected>
                      Priority
                    </option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                  </select>
                </div>
              </div>
              <div className="right ">
                <div className="new-task text-white bg-cyan-800  mr-[50px] rounded-sm hover:bg-cyan-900 max-sm:ml-7 " >
                  <p
                    className="text-base px-[50px] py-[4px] cursor-pointer font-sans shadow-md   "
                    onClick={() => setOpenCreate(true)}
                  >
                    Add New Task
                  </p>
                </div>
              </div>
            </div>
            <div className="bottom-content h-[480px] max-sm:h-[1200px] ">
              {/* outerbox is used for displaying task. */}
              <Outerbox />
            </div>
          </div>
        </div>
      </div>
      <Helper />
    </div>
  );
}

export default Home;
