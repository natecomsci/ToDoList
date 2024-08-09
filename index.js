let todoList = [];



function render()
{
  let todoListHtml = '';
  for (let i =0; i<todoList.length;i++)
  {
    const todoObject = todoList[i]; // get the object (pair of date and todo list)

    const {name, date} = todoObject;

    const html = `<div>${name}</div>
    <div> ${date} </div>
    <button onclick = "
    todoList.splice(${i},1);
    render();" class = "delete-button">Delete</button>
    `;

    todoListHtml += html;
  }
  document.querySelector(".js-todo-list")
    .innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value; // get the task
  let date = document.querySelector('.js-date').value
  console.log(date);
  
  todoList.push({name, date});
 

  inputElement.value = ''; // clear out the search
  date = '';

  render();
}