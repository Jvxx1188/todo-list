import "bootstrap/dist/css/bootstrap.min.css";
import { CSSProperties, useEffect, useState } from "react";
import { Draggable, Droppable, OnDragEndResponder } from "react-beautiful-dnd";
import { TaskComponent } from "./Components/task-component";
import { taskManager, tasksInterface } from "./lib/task-manager";

function App() {

  const [tasks] = useState(taskManager.loadTask())

  const OnSomeTaskChangesPosition: OnDragEndResponder = (a) => {
    const { destination } = a;
    const { index } = a.source;
    if (!destination) return;
    {/*lets go catch and change the destination of task*/ }
    {/*i need to delete the task*/ }
    {/*deletar item e adiciona-lo em outro lugar*/ }
    console.log(a)
    const theTask = tasks[index]
    tasks.splice(index, 1)
    tasks.splice(destination.index, 0, theTask)
    taskManager.saveTask(tasks)
  }

}
return (
  <div
    id="app"
    className="relative flex flex-col p-2 bg-slate-700 h-screen overflow-x-hidden"
  >
    <header className="p-3">
      <h1 className="text-3xl text-white font-bold">Suas notas</h1>
    </header>
    <main className="flex-1 w-full h-full">
      <DragDropContext onDragEnd={OnSomeTaskChangesPosition}>



        <Droppable droppableId="Droppable">
          {
            (provided) => (
              <div
                className="bg-slate-100 p-3 rounded-2 h-full"


                ref={provided.innerRef} {...provided.droppableProps}   >

                {
                  tasks.map((task, index) => (

                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {
                        (provided) =>



                          <TaskComponent provided={provided} content={task.content} />


                      }


                    </Draggable>
                  )
                  )
                }
                {provided.placeholder}

              </div>
            )
          }
        </Droppable>

      </DragDropContext>
    </main>

    <nav>

      < 
        <input></input>
    <button type="submit">add</button>
    {/*aqui vai ter o botao de add, que vai ser um dialog*/}</nav>
    </div >
  );
}

export default App;
