//select Dom Elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Try to load saved todos from localstorage (if any)
const saved = localStorage.getItem('todos');
const todos = saved? JSON.parse(saved):[];

    // Save current todos array to localstorage
    
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

//create a DOM node for a todo object and append it to the list
function createTodoNode(todo, index){
}
   const li = document.createElement('li');

   // checkbox to toggle completion
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addeventlistener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
        render();
        //TODO:visual feedback: strike-through when completed
        textspan.style.textDecoration = todos.completed? 'line-through':
        saveTodos();
      })

      //Text of the todo
      const textspan = document.createElement("span");
      textspan.textContent = todo.text;
      textspan.style.margin = '0 8px';
      if(todo.completed){
        textspan.style.textDecoration = 'line-through';
      }
        //Add double-click event listener to edit todo
        textspan.addEventListener("dbclick", () => {...});
            const newText = prompt("Edit todo",todo.text);
            if(newText !== null) {
                todo.text = newText.trim();
                textspan.textContent = todo.text;
                saveTodos();
                render();
            }
        });

        //Delete Todo Button
        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.addEventListener('click', ()=> {
            todos.splice(index, 1);
            render();
            saveTodos();
        })

        li.appendChild(checkbox);
        li.appendChild(textspan);
        li.appendChild(delBtn);
        return li;
      



//Render the whole todo list from todos array
function render() {
    list.innerHTML = '';

    //Recreate each item
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo,index);
        list.appendChild(node)
    });
}

function addTodo(){
    const text = input.value.trim();
    if(!text){
        return
    }

    //Push a new todo object
    todos.push({text: text, completed: false});
    input.value = '';
    render()
    saveTodos()

}

addBtn.addEventListener("Click", addTodo);
input.addEventListener('keydown',(e) => {
    if (e.key == 'Enter') {
        addTodo();
    }
});
render();