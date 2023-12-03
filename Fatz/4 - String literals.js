const background = 'yellow';
const color = 'white';
const isAuthorized = true;

const button = document.createElement("button");
button.innerText = "click me";
button.style = `background ${isAuthorized ? background : 'red'}; color: ${color}`