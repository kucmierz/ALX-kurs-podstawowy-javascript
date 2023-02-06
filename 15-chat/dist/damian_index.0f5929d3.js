const messageForm = document.querySelector("#messageForm");
const messageAuthor = document.querySelector("#messageAuthor");
const messageText = document.querySelector("#messageText");
const messagesList = document.querySelector("#messagesList");
let messages = [];
const messagesFromLS = localStorage.getItem("messages");
if (messagesFromLS) messages = JSON.parse(messagesFromLS);
const renderList = ()=>{
    messagesList.innerHTML = "";
    messages.forEach((message)=>{
        messagesList.innerHTML += `
      <li>
        <strong>${message.author}</strong> wrote:
        <p> ${message.message} </p>
        <button data-id="${message.id}">Usuń</button>
      </li>
    `;
    });
    localStorage.setItem("messages", JSON.stringify(messages));
};
const handleSubmit = (event)=>{
    event.preventDefault();
    if (!messageAuthor.value || messageText.value.length < 3) return alert("Formularz wypelniony blędnie!");
    const newMessage = {
        id: Date.now(),
        author: messageAuthor.value,
        message: messageText.value
    };
    // messages.push(newMessage)
    // Spread operator ES6
    // Mozemy uzyc spread operator zeby np. dodac element do listy na poczatek
    messages = [
        newMessage,
        ...messages
    ];
    renderList();
    messageAuthor.value = "";
    messageText.value = "";
};
const handleListClick = (event)=>{
    if (event.target.dataset.id) {
        messages = messages.filter((message)=>{
            return message.id !== parseInt(event.target.dataset.id);
        });
        renderList();
    }
};
// // onValue(messageRef,(data)=>{})
// const handleData = (data) => {
//     // toJSON() jest to metoda firebase, ktora sluzy do zmiany przychodzacych danych na format javascriptowy
//     const messages = data.toJSON();
//     console.log(messages);
// }
// window.onValue(window.messageRef, handleData);
renderList();
messagesList.addEventListener("click", handleListClick);
messageForm.addEventListener("submit", handleSubmit);

//# sourceMappingURL=damian_index.0f5929d3.js.map
