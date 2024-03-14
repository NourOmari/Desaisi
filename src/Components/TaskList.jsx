import React from "react";
import { MdDelete, MdOutlineRemoveDone } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Button } from "@material-tailwind/react";

function TaskList({ tasks, handleToggleCompleted, handleDeleteTask }) {
  return (
    <div className="todo-list flex flex-col items-center gap-7 rounded-xl mt-0">
      <ul>
        {tasks.map((task, i) => (
          <li
            key={i}
            className="flex items-center justify-between p-2 border-b border-gray-200 gap-20 pt-20"
          >
            <span className={`text-lg ${task.completed ? "line-through" : ""}`}>
              {task.text}
            </span>
            <div className="flex space-x-2 gap-4">
              <Button
                className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                onClick={() => handleDeleteTask(task.id)}
              >
                <MdDelete />
              </Button>
              <Button
                className="px-2 py-1 bg-orange-500 text-white rounded-md"
                onClick={() => handleToggleCompleted(task.id)}
              >
                {task.completed ? <MdOutlineRemoveDone /> : <IoMdDoneAll />}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
