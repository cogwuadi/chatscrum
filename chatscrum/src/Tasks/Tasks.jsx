import React from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import './Tasks.css';


export default function Tasks({data, deleteTask}) {

    const [dailyTasks, setDailyTasks] = React.useState([]);

    function handleOnDragEnd (result) {
        const { source, destination } = result

        if (!destination) return;
        if (source.droppableId === destination.droppableId) {
            if(source.droppableId === "weeklyTasks") {
              
                const [reorderedItem] = data.splice(source.index, 1);
                data.splice(destination.index, 0, reorderedItem);
               
            } else {
                let tempDailyTasks = Array.from(dailyTasks)
                const [reorderedItem] = tempDailyTasks.splice(source.index, 1);
                tempDailyTasks.splice(destination.index, 0, reorderedItem);
                console.log("reached daily")
                setDailyTasks(tempDailyTasks)
                console.log("dailyTasks")
            }
        } else {
          
            let tempDailyTasks = Array.from(dailyTasks);

            if (source.droppableId === "weeklyTasks") {
                const [removed] = data.splice(source.index, 1);
                tempDailyTasks.splice(destination.index, 0, removed)
              
                setDailyTasks(tempDailyTasks)
            } else {
                const [removed] = tempDailyTasks.splice(source.index, 1);
                data.splice(destination.index, 0, removed);
            
                setDailyTasks(tempDailyTasks);
            }
        }
    }

    return (
        <div className='tasker'>
             <DragDropContext onDragEnd={handleOnDragEnd}>
                 <div className="container">
                     <Droppable droppableId='weeklyTasks'>
                         {(provided) => (
                        <div className='weeklybox'
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                                <h3 >Weekly Tasks</h3>
                              <div className='scroll'>
                              {data.map(({id, name, time_created, scrumgoalhistory_set},index)=>{
                                    return(
                                        <Draggable draggableId={id} key={id} index={index}>
                                            {(provided) => (
                                                <h5 className='task' 
                                                onClick={()=>{deleteTask(id)}}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                    {name}
                                                    <div className='time'>{time_created.slice(0, 10)} at {time_created.slice(12, 16)}</div>
                                                    <div className='blue'>
                                                        {scrumgoalhistory_set.map(({id, done_by}) => {
                                                            return(
                                                                <p key={id}>{done_by}</p>
                                                            )
                                                        })}
                                                    </div>
                                                    </h5>                                                
                                                )
                                                } 
                                        </Draggable>)      
                                })}
                              </div>
                            {provided.placeholder}
                        </div>)}
                    </Droppable>
                    
                    <Droppable droppableId="dailyTasks">
                        {(provided)=> (
                        <div className='dailybox'  ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>Daily Target</h3>
                            
                            { dailyTasks.map(({id,content},index)=>{
                                    return(
                                        <Draggable draggableId={id} key={id} index={index}>
                                            {(provided) => (
                                                <h5  className='task'
                                                onClick={()=>{deleteTask(id)}}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                    {content}
                                                    </h5>
                                                
                                                )
                                                } 
                                        </Draggable>)      
                                })}
                            {provided.placeholder}
                        </div>
                        
                            )}
                            
                    </Droppable>
                </div>
            </DragDropContext>    
        </div>
    )
}
