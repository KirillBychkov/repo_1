let wrapper = document.querySelector("#wrapper");

let form = document.querySelector("form.firstBlock");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let firstInput = document.querySelector(".text");
  let newDiv = document.createElement("div");
  newDiv.innerHTML = firstInput.value;
  if (firstInput.value !== "") {
    firstInput.value = "";
    wrapper.appendChild(newDiv);
  }
});
