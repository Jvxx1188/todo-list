import "bootstrap/dist/css/bootstrap.min.css";
import { CSSProperties } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const tasks = [

  {
    id: "item-0",
    content: 'hello'
  },
  {
    id: "item-1",
    content: 'bye bye'
  }
]

const TaskContainerStyle: CSSProperties = {
  padding: "20px"
}
function App() {
  return (
    <div
      id="app"
      className="relative flex flex-col p-2 bg-slate-700 h-screen overflow-x-hidden"
    >
      <header className="p-3">
        <h1 className="text-3xl text-white font-bold">Suas notas</h1>
      </header>
      <main className="flex-1 w-full">
        <DragDropContext onDragEnd={() => { console.log("soltei algum item") }}>


          <Droppable droppableId="Droppable">
            {
              (provided) => (
                <div
                  ref={provided.innerRef} {...provided.droppableProps}   >
                  {provided.placeholder}
                  {
                    tasks.map((task, index) => (

                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>

                        {
                          (provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              {task.content}
                            </div>
                          )
                        }


                      </Draggable>
                    )
                    )
                  }
                  )

                </div>
              )
            }
          </Droppable>

        </DragDropContext>
      </main>

      <nav>{/*aqui vai ter o botao de add, que vai ser um dialog*/}</nav>
    </div>
  );
}

export default App;
