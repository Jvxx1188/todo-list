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
    if (!tasks) return [] as Array<tasksInterface>
    return JSON.parse(tasks) as Array<tasksInterface>
  }












}
export const taskManager = new TaskManager();

export default TaskManager;
