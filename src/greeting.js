const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");

loginForm.addEventListener("submit", submitLogin);
greeting.addEventListener("click", toggleLoginFront);

if(localStorage.getItem("name") !== null) {
    toggleLoginFront()
    greeting.innerText = `Hello ${localStorage.getItem("name")}!`
}


function toggleLoginFront() {
    loginInput.classList.toggle("hidden");
    greeting.classList.toggle("hidden");
}


function submitLogin(event) {
    event.preventDefault();
    
    const name = loginInput.value;
    loginInput.value = "";
    greeting.innerText = `Hello ${name}!`

    localStorage.setItem("name", name);

    toggleLoginFront()
}
