import { Button } from "@/components/ui/button";
import { tasksInterface } from "@/lib/task-manager";
import { DraggableProvided } from "react-beautiful-dnd";

interface TaskProps {
  provided: DraggableProvided;
  content: string;
  setActiveTask: (index: string) => void;
  task: tasksInterface;
}
export function TaskComponent(props: TaskProps) {
  return (
    <div className="rounded-xl shadow-[#00000050] select-none my-2 shadow-md text-white text-xl py-4 px-5 items-center flex justify-between flex-row bg-[#513650]" ref={props.provided.innerRef} {...props.provided.dragHandleProps} {...props.provided.draggableProps}>
      {props.content}


      <div onClick={() => props.setActiveTask(props.task.id)} className="bg-transparent rounded-full hover:cursor-pointer overflow-hidden">


        {
          props.task.isCompleted ? (

            <div className="size-10 bg-green-400 hover:bg-white active:bg-gray-500 duration-200 active:duration-0">

            </div>
          ) : (

            <div className="size-10 bg-gray-500 hover:bg-white duration-200 active:bg-green-400 active:duration-0">

            </div>
          )
        }
      </div>
    </div>

  )
}
