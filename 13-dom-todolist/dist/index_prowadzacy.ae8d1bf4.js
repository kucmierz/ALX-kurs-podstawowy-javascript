const todoList = document.querySelector("#todoList");
const todoForm = document.querySelector("#todoForm");
const authorInput = document.querySelector("#authorInput");
const messageInput = document.querySelector("#messageInput");
const todos = [
    {
        id: 1,
        author: "Damian",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente similique, magni placeat totam non sed, molestias mollitia delectus repellendus quaerat natus provident, blanditiis pariatur et doloremque deleniti. Aliquid, vitae. Sapiente?"
    },
    {
        id: 2,
        author: "Paweł",
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente similique, magni placeat totam non sed, molestias mollitia delectus repellendus quaerat natus provident, blanditiis pariatur et doloremque deleniti. Aliquid, vitae. Sapiente?"
    }
];
const handleSubmit = (event)=>{
    event.preventDefault();
    const newTodo = {
        id: Date.now(),
        author: authorInput.value,
        message: messageInput.value
    };
    todos.push(newTodo);
    todoList.innerHTML += `
    <li>
      <strong>${newTodo.author}</strong> napisal
      <p>${newTodo.message}</p>
    </li>
  `;
    authorInput.value = "";
    messageInput.value = "";
};
todoForm.addEventListener("submit", handleSubmit);
todos.forEach((todo)=>{
    todoList.innerHTML += `
      <li>
        <strong>${todo.author}</strong> napisal
        <p>${todo.message}</p>
      </li>
    `;
});

//# sourceMappingURL=index_prowadzacy.ae8d1bf4.js.map
