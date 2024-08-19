import React from "react";
import PropTypes from 'prop-types';
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          key={index}
          text={task.text}
          category={task.category}
          onDeleteTask={onDeleteTask} // Make sure this is provided
        />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired
};

export default TaskList;
