import React, { useState, useEffect } from "react";
import { FaCheckDouble } from "react-icons/fa";
import { Button, Input } from "@material-tailwind/react";
import DropdownButton from "../Components/DropDownButton";
import TaskList from "../Components/TaskList";

function ToDO() {
  const options = [
    { value: "option1", label: "All" },
    { value: "option2", label: "Done" },
    { value: "option3", label: "To Do" },
  ];

  const [selectedOption, setSelectedOption] = useState({});
  const [newTaskText, setNewTaskText] = useState("");
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleOptionSelect = (option) => {
    console.log(option, "option");
    setSelectedOption(option);
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const filteredTasks = selectedOption
    ? tasks.filter(
        (task) =>
          (selectedOption?.value === "option1" && true) ||
          (selectedOption?.value === "option2" && task.completed) ||
          (selectedOption?.value === "option3" && !task.completed)
      )
    : tasks;

  const handleAddTask = () => {
    if (newTaskText) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTaskText, completed: false },
      ]);
      setNewTaskText("");
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <header className="flex flex-row justify-center gap-4 items-center bg-cyan-600 py-4">
        <FaCheckDouble className="text-orange-500" />
        <h1 className="text-xl font-bold text-white">MY TO DO LIST</h1>
      </header>
      <main>
        <div className="flex flex-row justify-center gap-20 mt-20">
          <DropdownButton
            options={options}
            onSelect={handleOptionSelect}
            selectedOption={selectedOption}
          />
        </div>
        <div className="flex justify-center mt-4 gap-2">
          <div variant="h6" className="mb-6 text-Cyan font-bold">
            What Needs To Be Done?
            <Input
              tasks={tasks}
              type="text"
              id="input"
              name="inputxt"
              className="px-3 py-2 mb-4 rounded-md border border-gray-300 w-full focus:outline-none focus:border-blue-500"
              placeholder="Enter a new task"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />
            <Button
              variant="gradient"
              className="justify-center px-3 py-2 rounded-md bg-Cyan text-left focus:outline-none hover:bg-gray-200 hover:text-Cyan text-gray-50"
              onClick={handleAddTask}
            >
              Add Task
            </Button>
          </div>
        </div>
        <div>
          <TaskList
            tasks={filteredTasks}
            onAddTask={handleAddTask}
            handleDeleteTask={handleDeleteTask}
            handleToggleCompleted={handleToggleCompleted}
            selectedOption={selectedOption}
          />
        </div>
      </main>
    </div>
  );
}
export default ToDO;
