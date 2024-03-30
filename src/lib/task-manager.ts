export interface tasksInterface {
  id: string,
  content: string,
  isCompleted: boolean
}
class TaskManager {

  constructor() {
    {/*criação estatica das tasks*/ }

  }



  saveTask(tasks: Array<tasksInterface>) {
    {/*aqui pega a array e converte em string*/ }
    const tasksArrayConvertededInString = JSON.stringify(tasks)
    localStorage.setItem("tasks", tasksArrayConvertededInString)

  }



  loadTask() {
    {/*vai pegar o array em string e retorna-lo convertido em ARRAY*/ }
    const tasks = localStorage.getItem("tasks")
    if (!tasks) return [{ content: "Criado Por Jvxx", id: "0", isCompleted: false }] as Array<tasksInterface>
    const tasksInArrayConversion = JSON.parse(tasks) as Array<tasksInterface>

    const removingActiveTasks = tasksInArrayConversion.reduce((acumulador, valorAtual) => {
      if (valorAtual.isCompleted) return acumulador
      acumulador.push(valorAtual)
      const novoArray = acumulador;
      return novoArray
    }, [] as Array<tasksInterface>)

    return removingActiveTasks
  }












}
export const taskManager = new TaskManager();

export default TaskManager;
