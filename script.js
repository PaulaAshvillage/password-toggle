// Add a input that holds a fictive password --done with html

// choose element with query selector:
const btn = document.querySelector("#btn");
const visibility = document.querySelector("#visibility");

let count = 1;
// Event on element
btn.addEventListener("click", function () {
  count++;

  if (count % 2 === 0) {
    visibility.type = "text";
    btn.innerText = "Hide Password";
  } else {
    visibility.type = "password";
    btn.innerText = "Show Password";
  }
});
