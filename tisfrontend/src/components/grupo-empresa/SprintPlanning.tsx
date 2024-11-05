import React, { useState } from 'react';
import './SprintPlanning.css';
import { TaskCard } from '../TaskCard';
import ButtonStory from "../../assets/empresa/button-story.svg"
import ModalTarea from '../ModalTarea';
import TaskFetcher from '../TaskFetcher';
import ListaTareas from '../ListaTareas';

const SprintPlanning = () => {

    const [showModal, setShowModal] = useState(false);
      
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [tasks, setTasks] = useState([
        {
            id: 1,
            userStory: 'HistoriaDeUsuario1',
            assignees: ['Jonatan Lopez'],
            task: 'Crear la interfaz de usuario',
            status: 'In Process',
            estimatedHours: 3
        },
        {
            id: 2,
            userStory: 'HistoriaDeUsuario2',
            assignees: ['Juan Daniel', 'Luis Andres'],
            task: 'Crear la interfaz de usuario',
            status: 'In Process',
            estimatedHours: 7
        },
        {
            id: 3,
            userStory: 'HistoriaDeUsuario2',
            assignees: ['Juan Daniel', 'Luis Andres'],
            task: 'Crear la interfaz de usuario',
            status: 'Done',
            estimatedHours: 5
        },
        {
            id: 4,
            userStory: 'HistoriaDeUsuario3',
            assignees: ['Maria Carmen'],
            task: 'Crear la interfaz de usuario',
            status: 'Tasks',
            estimatedHours: 5
        }
    ]);


    const [userStories, setUserStories] = useState([
        { id: 'US1', title: 'Crear el perfil' },
        { id: 'US2', title: 'Crear una hamburguesa' },
        { id: 'US3', title: 'Vista Home' },
    ]);

    const handleStatusChange = (taskId, newStatus) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    const renderTasksByStatus = (status) => {
        return tasks
            .filter(task => task.status === status)
            .map((task) => (
                <TaskCard
                    key={task.id}
                    task={{
                        title: task.task,
                        description: '',
                        status: status, 
                        priority: 'medium',
                        assignee: task.assignees.join(', ') || null, 
                        estimatedHours: task.estimatedHours, 
                    }}
                    index={task.id}
                    onDragStart={(e) => {
                        e.dataTransfer.setData('taskId', task.id);
                    }}
                />
            ));
    };

    const renderUserStories = () => {
        const [modalTask, setModalTask] = useState(false);
        const [selected, setSelected] = useState();

        const handleAddStory = (story) => {
            console.log(story.id)
            setSelected(story)
            setModalTask(true)
        }
        return userStories.map((story) => (
            <div
                key={story.id}
                className="user-story"
                draggable
                onDragStart={(e) => {
                    e.dataTransfer.setData('userStoryId', story.id);
                }}
            >
                <div>
                    {story.title}
                </div>
                <button className='button-story' onClick={() => handleAddStory(story)}><img src={ButtonStory} alt="" /></button>
                {modalTask && <div onClick={() => setModalTask(false)}>
                    holas
                    {selected.title}
                    </div>
                }
            </div>
        ));
    };

    const handleDrop = (e, newStatus) => {
        const taskId = parseInt(e.dataTransfer.getData('taskId'), 10);
        handleStatusChange(taskId, newStatus);
    };


    return (
        <div className="sprint-planning">
            <h2 className='titulos'>Planificación de Sprint</h2>
            <div className="task-table">
            <div className="column product-backlog">
                    <h3 className='titulo-task-user'>Product Backlog</h3>
                    {renderUserStories()}
                    
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, "Tasks")} onDragOver={(e) => e.preventDefault()}>
                    <h3 className='titulo-task-user'>Tareas</h3>
                    {renderTasksByStatus("Tasks")}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, "In Process")} onDragOver={(e) => e.preventDefault()}>
                    <h3 className='titulo-task-user'>En proceso</h3>
                    {renderTasksByStatus("In Process")}
                </div>
                <div className="column" onDrop={(e) => handleDrop(e, "Done")} onDragOver={(e) => e.preventDefault()}>
                    <h3 className='titulo-task-user'>Completadas</h3>
                    {renderTasksByStatus("Done")}
                </div>
            </div>

            tarea
            <div>
            <button onClick={handleShowModal}>Registrar Tarea</button>
            <ModalTarea show={showModal} onClose={handleCloseModal} />
            </div>
            {/* <TaskFetcher/>
            <ListaTareas/> */}
        </div>
    );
};

export default SprintPlanning;
