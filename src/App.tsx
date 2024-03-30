import { useEffect, useRef, useState } from "react";
import { Draggable, Droppable, DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { TaskComponent } from "./Components/task-component";
import { taskManager, tasksInterface } from "./lib/task-manager";
import { AddContent } from "./Components/add-content";
import uuid from "react-uuid";
import { toast } from "./components/ui/use-toast";
import gsap from "gsap";

function App() {

  const [tasks, setTask] = useState(taskManager.loadTask())
  const Header = useRef(null)
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
  const AddTask = (value: string) => {
    const newTask: tasksInterface = {
      id: uuid()
      , content: value,
      isCompleted: false
    }
    console.log("task adicionada")
    const newtask = [...tasks]
    newtask.unshift(newTask)
    setTask(newtask)
    taskManager.saveTask(newtask)
  }
  const setActiveTask = (taskId: string) => {
    tasks.map((task) => {
      if (task.id == taskId) {
        task.isCompleted = !task.isCompleted;
        console.log(task.isCompleted)
        const newtask = [...tasks]
        setTask(newtask)
        taskManager.saveTask(newtask)
      }
    })

  }

  useEffect(() => {

    toast({ title: "Tasks concluídas são DELETADAS ao reiniciar a página" })
    console.log('aa')
    gsap.fromTo(Header.current, {
      opacity: 0,
      y: -50
    },
      {
        opacity: 1
        ,
        y: 0
      })
  }, [])

  return (
    <div ref={Header}
      id="app"
      className=" antialiased  relative flex flex-col items-center  h-screen overflow-x-hidden"
    >
      <header className="w-full select-none p-3 bg-[#F2A0A4] shadow-md">
        <h1 className="text-3xl text-gray-700 text-center font-bold">To Do 📝</h1>
      </header>
      <main className="flex-1 p-2 w-full max-w-[600px] h-full overflow-y-scroll">
        <DragDropContext onDragEnd={OnSomeTaskChangesPosition}>



          <Droppable droppableId="Droppable">
            {
              (provided) => (
                <div
                  className=" p-3 rounded-2 h-full flex flex-col"


                  ref={provided.innerRef} {...provided.droppableProps}   >

                  {
                    tasks.map((task, index) => (

                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {
                          (provided) =>



                            <TaskComponent setActiveTask={setActiveTask} task={task} provided={provided} content={task.content} />


                        }


                      </Draggable>
                    )
                    )
                  }

                </div>
              )
            }
          </Droppable>

        </DragDropContext>
      </main>

      <nav>
        <AddContent onButtonClick={AddTask} />

        {/*aqui vai ter o botao de add, que vai ser um dialog*/}</nav>
    </div >
  );
}

export default App;
