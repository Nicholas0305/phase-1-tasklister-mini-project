//form and list elements 
const form = document.getElementById('create-task-form')
const list=document.getElementById('tasks')
//submission function for list
form.addEventListener('submit',e=>{
  e.preventDefault();
  const task=document.getElementById('new-task-description').value
  //Creates Elements
  const li=document.createElement('li')
  const button=document.createElement('button')
  //Sets Elements to their description
  li.textContent=task
  button.textContent='x'
  //Adds Elements to the list
  tasksLog=list.appendChild(li)
  li.appendChild(button)
  //listener for delete
  button.addEventListener('click',e=>{li.remove()})
  //resets input field after submission
  form.reset();
  console.log(tasksLog)
})



