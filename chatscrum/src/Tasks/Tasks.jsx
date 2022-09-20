
import React, {useState} from 'react';
import './Tasks.css';
import taskList from '../static/task';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
// import { DragDropContext } from '@hello-pangea/dnd';


const Tasks = () => {
    const[taskRoll, updateTaskRoll] = useState(taskList)
    // if(!result.destination) return;
    const handleOnDragEnd = result => {
        const items = Array.from(taskRoll);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateTaskRoll(items)
    }
    return (
        <div className='tasker'>            
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <div className="container">
                    <Droppable droppableId= "tasket">

                        {( provided ) => (
                            <div className="weekly" { ...provided.droppableProps} ref={provided.innerRef}>
                                <h5>Weekly Task</h5>
                                { taskRoll.map(({id, item}, index) => { 
                                    return (
                                        <Draggable key={id} index={index} draggableId={id}>
                                           {(provided) => (
                                                <p className='task' { ...provided.droppableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    {item}
                                                </p>
                                           )}
                                                {/* { provided.placeholder} */}
                                        </Draggable>
                                    )
                                   
                                })}     
                                 { provided.placeholder}              
                            </div>
                        )}
                       
                    </Droppable>

                    <Droppable id= "tasketer">

                       {( provided ) => (
                            <div className="weekly" { ...provided.droppableProps} ref={provided.innerRef}>
                                <h5>Daily Task</h5>

                                { provided.placeholder}
                            </div>                              
                       )}
                        
                    </Droppable>                 
                </div>  
            </DragDropContext>      
        </div>
    )
}


export default Tasks;