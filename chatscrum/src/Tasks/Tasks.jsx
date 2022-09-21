import React from 'react'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import taskList from '../static/task';
import './Tasks.css';


const Tasks = () => {

    const [weeklyTasks, setWeeklyTasks] = React.useState(taskList);
    const [dailyTasks, setDailyTasks] = React.useState([]);

    function handleOnDragEnd (result) {
        const { source, destination } = result

        if (!destination) return;
        if (source.droppableId = destination.droppableId) {
            if(source.droppableId = "weeklyTasks") {
                let tempWeeklyTasks= Array.from (weeklyTasks)
                const [reorderedItem] = tempWeeklyTasks.splice(source.index, 1);
                tempWeeklyTasks.splice(destination.index, 0, reorderedItem);
                setWeeklyTasks(tempWeeklyTasks)
            } else {
                let tempDailyTasks = Array.from(dailyTasks)
                const [reorderedItem] = tempDailyTasks.splice(source.index, 1);
                tempDailyTasks.splice(destination.index, 0, reorderedItem);
                console.log("reached daily")
                setDailyTasks(tempDailyTasks)
                console.log("dailyTasks")
            }
        } else {
            let tempWeeklyTasks = Array.from(weeklyTasks);
            let tempDailyTasks = Array.from(dailyTasks);

            if (source.droppableId = "weeklyTasks") {
                const [removed] = tempWeeklyTasks.splice(source.index, 1);
                tempDailyTasks.splice(destination.index, 0, removed)
                setWeeklyTasks(tempWeeklyTasks)
                setDailyTasks(tempDailyTasks)
            } else {
                const [removed] = tempDailyTasks.splice(source.index, 1);
                tempWeeklyTasks.splice(destination.index, 0, removed);
                setWeeklyTasks(tempWeeklyTasks);
                setDailyTasks(tempDailyTasks);
            }
        }
    }

    return (
        <div className='tasker'>
             <DragDropContext onDragEnd={handleOnDragEnd}>
                 <div className="container">
                     <Droppable droppableId='weeklytasks'>
                         {(provided) => (
                        <div className='weeklybox'
                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                                <h3>Weekly Tasks</h3>
                                {weeklyTasks.map(({id,item},index)=>{
                                    return(
                                        <Draggable draggableId={id} key={id} index={index}>
                                            {(provided) => (
                                                <h5 className='task' 
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                    {item}
                                                    </h5>                                                
                                                )
                                                } 
                                        </Draggable>)      
                                })}
                            {provided.placeholder}
                        </div>)}
                    </Droppable>
                    
                    <Droppable droppableId="dailytasks">
                        {(provided)=> (
                        <div className='dailybox'  ref={provided.innerRef} {...provided.droppableProps}>
                            <h3>Daily Target</h3>
                            
                            {dailyTasks.map(({id,item},index)=>{
                                    return(
                                        <Draggable draggableId={id} key={id} index={index}>
                                            {(provided) => (
                                                <p  
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>
                                                    {item}
                                                    </p>
                                                
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

export default Tasks;



























// export default function Tasks() {

//     const [WeeklytaskOrder,setWeeklyTaskOrder] = React.useState(taskList);
       
//     const handleDragEnd= result => {
//     const {destination,source} = result;
//     console.log(result);
//     if (!destination) return;
       
//     const newWeeklyTasks= Array.from(WeeklytaskOrder);
//     const [reOrdered] = newWeeklyTasks.splice(source.index, 1);
//     newWeeklyTasks.splice(destination.index, 0, reOrdered);
//     setWeeklyTaskOrder(newWeeklyTasks)}
    

//     const [DailytaskOrder,setDailyTaskOrder] = React.useState([]);
//     const handleDragEnd1= result => {
//     const {destination,source} = result;
//     console.log(result);
//     if (!destination) return;
       
//     const newWeeklyTasks= Array.from(DailytaskOrder);
//     const [reOrdered] = newWeeklyTasks.splice(source.index, 1);
//     newWeeklyTasks.splice(destination.index, 0, reOrdered);
//     setDailyTaskOrder(newWeeklyTasks)}

//   return (
//         <div className='tasker'>
//             <DragDropContext onDragEnd={handleDragEnd}>
//                 <div className="container">
//                     <Droppable droppableId='weeklytasks'>
//                         {(provided) => (
//                         <div className='weeklybox'
//                         ref={provided.innerRef}
//                         {...provided.droppableProps}>
//                                 <h3>Weekly Tasks</h3>
//                                 {WeeklytaskOrder.map(({id,item},index)=>{
//                                     return(
//                                         <Draggable draggableId={id} key={id} index={index}>
//                                             {(provided) => (
//                                                 <h5 className='task' 
//                                                 ref={provided.innerRef}
//                                                 {...provided.draggableProps}
//                                                 {...provided.dragHandleProps}>
//                                                     {item}
//                                                     </h5>
                                                
//                                                 )
//                                                 } 
//                                         </Draggable>)      
//                                 })}
//                             {provided.placeholder}
//                         </div>)}
//                     </Droppable>
                    
//                     <Droppable droppableId="dailytasks">
//                         {(provided)=> (
//                         <div className='dailybox'  ref={provided.innerRef} {...provided.droppableProps}>
//                             <h3>Daily Target</h3>

//                             {DailytaskOrder.map(({id,item},index)=>{
//                                     return(
//                                         <Draggable draggableId={id} key={id} index={index}>
//                                             {(provided) => (
//                                                 <h5 className='task' 
//                                                 ref={provided.innerRef}
//                                                 {...provided.draggableProps}
//                                                 {...provided.dragHandleProps}>
//                                                     {item}
//                                                     </h5>
                                                
//                                                 )
//                                                 } 
//                                         </Draggable>)      
//                                 })}
//                             {provided.placeholder}
//                         </div>
                        
//                          )}
                         
//                     </Droppable>

//                     <Droppable droppableId="dailytasks">
//                         {(provided)=> (
//                         <div className='dailybox'  ref={provided.innerRef} {...provided.droppableProps}>
//                             <h3>Daily Target</h3>
//                             {provided.placeholder}
//                         </div>
                        
//                          )}
                         
//                     </Droppable>
//                 </div>
//             </DragDropContext>    
//         </div>
//   )
// }