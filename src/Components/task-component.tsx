import { DraggableProvided } from "react-beautiful-dnd";

interface TaskProps {
  provided: DraggableProvided;
  content: string;
}
export function TaskComponent(props: TaskProps) {
  return (
    <div ref={props.provided.innerRef} {...props.provided.dragHandleProps} {...props.provided.draggableProps}>
      {props.content}
    </div>

  )
}
