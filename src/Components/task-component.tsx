import { DraggableProvided } from "react-beautiful-dnd";

interface TaskProps {
  provided: DraggableProvided;
  content: string;
}
export function TaskComponent(props: TaskProps) {
  return (
    <div className="rounded-xl shadow-[#00000050] my-2 shadow-md text-white text-xl py-4 px-5 bg-[#513650]" ref={props.provided.innerRef} {...props.provided.dragHandleProps} {...props.provided.draggableProps}>
      {props.content}
    </div>

  )
}
