const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  const input = document.querySelector("#input-pw");

  if (input.getAttribute("type") === "password") {
    input.type = "text";
    button.innerText = "Hide Password";
  } else {
    input.type = "password";
    button.innerText = "Show Password";
  }
});
