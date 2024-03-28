import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogContent, DialogPortal, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function AddContent() {

  function OnAddTask() {

    const InputId = "add-task-input"

    const addTaskInput = document.getElementById(InputId)
    if (!InputId) return console.log("o input nao foi encontrado no dom")
    {/*se foi encontrado queremos pegar o valor do input para criar uma nova task, ou seja, chamar 
  aquela classe com a função de adicionar*/}
  }
  return <>
    <Dialog>
      <DialogTrigger>
        Open
      </DialogTrigger>

      <DialogContent className="px-2">
        <DialogHeader>
          Qual é a sua tarefa?
        </DialogHeader>
        <div>

          <Input id="add-task-input" type="text" className="h-3 rounded-sm text-center" />
          <Button onClick={OnAddTask}>Adicionar</Button>
        </div>

      </DialogContent>
    </Dialog >
  </>
}
