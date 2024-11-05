import React from 'react';
import './TaskCard.css';

const StatusIcon = {
  Backlog: <span className="icon-red">🔴</span>,
  Tasks: <span className="icon-green">🟢</span>,
  'In Process': <span className="icon-yellow">🟡</span>,
  Done: <span className="icon-blue">🔵</span>,
};

export const TaskCard = ({ task, index, onDragStart }) => {
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task)}
    >
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <div className="status-task">
          {StatusIcon[task.status]}
        </div>
      </div>
      <p className="task-description">{task.description}</p>
      {task.assignee && (
        <div className="task-assignee">
          <div className="assignee-avatar">
            <span className="avatar-initial">
              {task.assignee.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="assignee-name">{task.assignee}</span>
          <p className="assignee-time">{task.estimatedHours} Puntos</p>
        </div>
      )}
    </div>
  );
};
