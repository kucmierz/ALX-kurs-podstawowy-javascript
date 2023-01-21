const todoForm = document.querySelector("#todoForm");
const authorInput = document.querySelector("#authorInput");
const messageInput = document.querySelector("#messageInput");
let currentTodos = JSON.parse(localStorage.getItem("todos"));
if (!currentTodos) currentTodos = [];
const handleSubmit = (event)=>{
    event.preventDefault();
    if (!authorInput.value || messageInput.value.length < 2) return alert("Blad walidacji!");
    const newTodo = {
        id: Date.now(),
        author: authorInput.value,
        message: messageInput.value
    };
    currentTodos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(currentTodos));
    // Ta linijka odpowiada za przekierowanie
    window.location.href = "index.html";
//     todos.push(newTodo);
//     todoList.innerHTML += `
//     <li>
//       <strong>${newTodo.author}</strong> napisal
//       <p>${newTodo.message}</p>
//     </li>
//   `
//     authorInput.value = '';
//     messageInput.value = '';
};
todoForm.addEventListener("submit", handleSubmit);

//# sourceMappingURL=add.66a57677.js.map
