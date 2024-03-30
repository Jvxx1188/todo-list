import { Button } from "@/components/ui/button";
import { Dialog, DialogHeader, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

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

    if (addTaskInput.value == "") return
    onButtonClick(addTaskInput.value)
  }
  return <>
    <Dialog>
      <DialogTrigger className="size-24 rounded-full flex items-center justify-center  m-5 bg-green-400 hover:bg-green-800 duration-100 active:bg-green-950 active:duration-0">
        <Plus className="size-3/4" />
      </DialogTrigger>

      <DialogContent className="px-2  flex flex-col gap-4 bg-[#ffb7b8] text-white border-0 outline-none">
        <DialogHeader className="font-bold pl-2 text-xl select-none">
          Qual é a sua tarefa?
        </DialogHeader>
        <div>



          <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col justify-center gap-4 px-2">

            <Input id="add-task-input" placeholder="Arrumar quarto..." type="text" className="border-0 focus-visible:text-lg duration-300 placeholder:text-gray-300 h-3 rounded-sm py-3 text-center bg-[#c67979]" />

            <DialogClose className="max-w-32 mx-auto flex select-none">
              <Button onClick={OnAddTask} className="bg-[#493d2d]">
                Adicionar
              </Button>
            </DialogClose>
          </form>

        </div>

      </DialogContent>
    </Dialog >
  </>
}
