import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogContent, DialogPortal, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface addContentInterface {
  onButtonClick: (value: string) => void
}
export function AddContent({ onButtonClick }: addContentInterface) {

  function OnAddTask() {

    const InputId = "add-task-input"

    const addTaskInput = document.getElementById(InputId) as HTMLInputElement
    if (!InputId) return console.log("o input nao foi encontrado no dom")
    {/*se foi encontrado queremos pegar o valor do input para criar uma nova task, ou seja, chamar 
  aquela classe com a função de adicionar*/}
    onButtonClick(addTaskInput.value)
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



          <div className="flex flex-col justify-center gap-4 px-2">

            <Input id="add-task-input" placeholder="Arrumar quarto..." type="text" className="h-3 rounded-sm py-3 text-center" />

            <DialogClose>
              <Button onClick={OnAddTask}>Adicionar</Button>
            </DialogClose>
          </div>

        </div>

      </DialogContent>
    </Dialog >
  </>
}
