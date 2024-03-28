import { atom } from "recoil";

//State for handling edit Pop-up
export const editState = atom({
    key:'editState',
    default: false,
});

//State for handling delete pop-up
export const deleteState = atom({
    key:'deleteState',
    default: false,
});


//State for handling create task popup
export const addState = atom({
    key:'addState',
    default: false,
});


//global state for tasks.
export const taskState = atom({
    key:'taskState',
    default:[{
        
        title:"Task 1",
        desc :"This is Description",
        team :"Avenger",
        assignee :"pravin",
        priority :"P1",
        status:'Assign',
        id: "Task 1"
    },]
})


//global state for task picked for editing.
export const editTaskState = atom({
    key:'editTaskState',
    default:{
        
        title:"Task 1",
        desc :"this is Description",
        team :"Avenger",
        assignee :"pravin",
        priority :"P1",
        status:'Assign',
        id: "Task 1"
    }
})


//global state of task  to be deleted.
export const deleteTaskState = atom({
    key:'deleteTaskState',
    default:{
        
        title:"Task 1",
        desc :"this is Description",
        team :"Avenger",
        assignee :"pravin",
        priority :"P1",
        status:'Assign',
        id: "Task 1"
    }
})


