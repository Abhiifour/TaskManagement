import React from "react";
import { useRecoilValue } from "recoil";
import { editState, deleteState, addState } from "../Atoms";
import DeleteTask from "./Components/DeleteTask";
import EditTask from "./Components/EditTask";
import CreateTask from "./Components/CreateTask";

function Helper() {
  // states for handling popups. 
  // imported from the atom .
  const deleteVal = useRecoilValue(deleteState);
  const editVal = useRecoilValue(editState);
  const addVal = useRecoilValue(addState);
  
  return (
    // main is wrapper.
    <div className="main z-50 overflow-hidden duration-600">
      {editVal ? (
        <div className="main w-full h-screen bg-black  flex justify-center items-center absolute top-0 bg-opacity-80 ">
          <EditTask />
        </div>
      ) : (
        <div></div>
      )}
      {deleteVal ? (
        <div className="main w-full h-screen bg-black flex justify-center items-center absolute top-0 bg-opacity-80">
          <DeleteTask />
        </div>
      ) : (
        <div></div>
      )}
      {addVal ? (
        <div className="main w-full h-screen bg-black flex justify-center items-center absolute top-0 bg-opacity-80">
          <CreateTask/>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Helper;
