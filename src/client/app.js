const socket = io();

const h1 = document.querySelector("h1");
const btnTest = document.getElementById("test");

const print = (text) => {
  h1.innerText = text;
};

btnTest.addEventListener("click", (event) => {
  socket.emit("test", "testtest", print);
  console.log(event.target);
});
